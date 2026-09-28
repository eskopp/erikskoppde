/**
 * Reads recent commits straight from the local Git history. Runs at build
 * time only — no GitHub API, no network access. On GitHub Actions this
 * requires `actions/checkout` to run with `fetch-depth: 0`, otherwise the
 * checkout is shallow and only the latest commit exists locally.
 */
import { execFileSync } from 'node:child_process';

const rootDir = process.cwd();
const FIELD_SEP = '\x1f';
const RECORD_SEP = '\x1e';

export interface GitCommit {
  hash: string;
  shortHash: string;
  date: Date;
  message: string;
}

export function getRecentCommits(count = 20): GitCommit[] {
  try {
    const format = `%H${FIELD_SEP}%h${FIELD_SEP}%aI${FIELD_SEP}%s`;
    const raw = execFileSync(
      'git',
      // `--no-show-signature` matters for anyone with `log.showSignature`
      // enabled locally — without it, GPG verification output gets
      // interleaved with `git log`'s own output and corrupts parsing.
      ['log', `-n${count}`, '--no-show-signature', `--pretty=format:${format}${RECORD_SEP}`],
      { cwd: rootDir, encoding: 'utf8' },
    );
    return raw
      .split(RECORD_SEP)
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const [hash, shortHash, date, message] = entry.split(FIELD_SEP);
        return { hash, shortHash, date: new Date(date), message };
      });
  } catch {
    // Not a Git checkout (e.g. shallow clone without history, or Git
    // missing) — degrade gracefully instead of failing the build.
    return [];
  }
}
