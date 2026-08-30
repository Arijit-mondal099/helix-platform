---
description: Split staged/unstaged changes into atomic commits, push the branch, and print a PR compare link (no gh CLI)
agent: build
---

Current state:

!`git status --short`

!`git branch --show-current`

!`git diff HEAD`

!`git remote get-url origin`

Base branch: $1 (if empty, use `main`)

Do the following, in order:

1. **Check the current branch first.**
   - If `git branch --show-current` equals the base branch (`main` or whatever was passed as `$1`): create and switch to a new branch before making any commits, named after the change (e.g. `feat/short-description`, `fix/short-description`). Nothing gets committed directly on the base branch.
   - If the current branch is anything else: stay on it. Do **not** create a new branch — assume it's already the feature/fix branch for this work.

2. **Group the changes into atomic commits.** Look at the diff above and split it by logical concern — don't bundle unrelated changes (e.g. formatting vs logic, two different bug fixes) into one commit. Each commit should be independently revertable and pass on its own. Write clear, conventional-style commit messages (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`, etc.) with a short body if the change isn't self-explanatory. Use `git add -p` or path-scoped `git add` for staging, not `git add -A`, unless everything genuinely belongs in one commit.

3. **Push the branch** with `git push -u origin <branch-name>` (the branch from step 1, whether new or existing).

4. **No `gh` CLI is installed**, so don't attempt `gh pr create`. Instead:
   - Derive the repo's web URL from the `origin` remote (convert SSH `git@github.com:owner/repo.git` to `https://github.com/owner/repo`).
   - Print the PR compare link: `https://github.com/<owner>/<repo>/compare/<base>...<branch-name>?expand=1`
   - Draft a suggested PR title and description (summarizing the commits) for me to paste into GitHub's UI when I open that link.

Show me the commit plan before running any `git commit` command, so I can confirm it.
