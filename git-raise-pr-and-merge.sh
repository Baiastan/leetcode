#!/bin/bash

current_branch=$(git rev-parse --abbrev-ref HEAD)

echo "Raising a pr to master"
gh pr create --base master --head "$current_branch" --title "GH updates to master" --body "growth hungry updates"

pr_number=$(gh pr list --limit 1 --json number --jq '.[0].number')

if [ -n "$pr_number" ]; then
    echo "Merging PR #$pr_number..."

    gh pr merge "$pr_number" --merge
else
  echo "No open PR found"
fi

