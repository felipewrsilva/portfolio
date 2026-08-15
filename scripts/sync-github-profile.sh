#!/usr/bin/env bash
# Sync GitHub public profile and portfolio repo metadata to match the website.
# Requires: logged in as felipewrsilva (`gh auth login`) or GH_TOKEN for that account.

set -euo pipefail

BIO='Senior Software Engineer. .NET, SQL Server, healthcare and enterprise data platforms. Based in Madrid.'
LOCATION='Madrid, Spain'
BLOG='https://felipewrsilva.dev'
REPO_DESC='Personal site and resume for Felipe Silva, Senior Software Engineer.'
REPO_HOME='https://felipewrsilva.dev'

echo "Updating GitHub user profile..."
gh api -X PATCH /user \
  -f bio="$BIO" \
  -f location="$LOCATION" \
  -f blog="$BLOG" \
  -F hireable=true

echo "Updating portfolio repository metadata..."
gh api -X PATCH /repos/felipewrsilva/portfolio \
  -f description="$REPO_DESC" \
  -f homepage="$REPO_HOME"

echo "Archiving junior/tutorial repos if they exist..."
for repo in finwiz finance datasus datasusdbc; do
  if gh api "/repos/felipewrsilva/$repo" --silent 2>/dev/null; then
    gh api -X PATCH "/repos/felipewrsilva/$repo" -F archived=true
    echo "Archived felipewrsilva/$repo"
  else
    echo "Skip missing repo: $repo"
  fi
done

echo "Done. Confirm at https://github.com/felipewrsilva"
