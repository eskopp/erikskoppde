/**
 * Reads the project's direct dependencies (package.json + bun.lock) and
 * enriches them with the description already shipped inside each
 * installed package's own package.json (node_modules). Runs at build
 * time, so the result is always current for the commit being built —
 * no separate generation step or network access required.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// `astro build` always runs with the project root as its working
// directory. We can't derive this from `import.meta.url` because Astro
// bundles this module into a chunk under `dist/.prerender/`, which would
// resolve relative paths against `dist/` instead of the project root.
const rootDir = process.cwd();

export interface PackageInfo {
  name: string;
  requestedRange: string;
  version: string;
  integrity: string | null;
  description: string;
  npmUrl: string;
}

function readJson(path: string): unknown {
  return JSON.parse(readFileSync(path, 'utf8'));
}

/** bun.lock is JSONC (allows trailing commas); strip them before parsing. */
function readBunLock(): {
  packages: Record<string, [string, string, unknown, string?]>;
} {
  const raw = readFileSync(join(rootDir, 'bun.lock'), 'utf8').replace(/,(\s*[}\]])/g, '$1');
  return JSON.parse(raw);
}

function buildInfo(name: string, requestedRange: string, lockPackages: Record<string, unknown>) {
  const entry = lockPackages[name] as [string, string, unknown, string?] | undefined;
  const resolvedVersion = entry ? entry[0].slice(name.length + 1) : requestedRange;
  const integrity = entry?.[3] ?? null;

  let description = '';
  const pkgJsonPath = join(rootDir, 'node_modules', name, 'package.json');
  if (existsSync(pkgJsonPath)) {
    const installed = readJson(pkgJsonPath) as { description?: string };
    description = installed.description ?? '';
  }

  const info: PackageInfo = {
    name,
    requestedRange,
    version: resolvedVersion,
    integrity,
    description,
    npmUrl: `https://www.npmjs.com/package/${name}`,
  };
  return info;
}

export interface DependencyGroups {
  dependencies: PackageInfo[];
  devDependencies: PackageInfo[];
}

export function getDirectDependencies(): DependencyGroups {
  const pkg = readJson(join(rootDir, 'package.json')) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  };
  const lock = readBunLock();

  const toList = (deps: Record<string, string> | undefined): PackageInfo[] =>
    Object.entries(deps ?? {})
      .map(([name, range]) => buildInfo(name, range, lock.packages))
      .sort((a, b) => a.name.localeCompare(b.name));

  return {
    dependencies: toList(pkg.dependencies),
    devDependencies: toList(pkg.devDependencies),
  };
}
