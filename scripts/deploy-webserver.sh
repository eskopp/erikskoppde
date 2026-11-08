#!/usr/bin/env bash
# Build the site and upload it to the web server (temporary replacement for GitHub Pages).
# Usage: scripts/deploy-webserver.sh
set -euo pipefail

cd "$(dirname "$0")/.."

HOST="${DEPLOY_HOST:-webserver}"
TARGET="${DEPLOY_TARGET:-/var/www/erikskopp.de}"

bun run build

tar -C dist -cf - . | ssh "$HOST" "set -e; tmp=\$(mktemp -d); tar -C \"\$tmp\" -xf -; rm -rf \"$TARGET\"/*; cp -a \"\$tmp\"/. \"$TARGET\"/; rm -rf \"\$tmp\""

curl -fsS -o /dev/null -w "https://erikskopp.de/ -> %{http_code}\n" https://erikskopp.de/
