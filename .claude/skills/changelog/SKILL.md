---
name: changelog
description: Maintain CHANGELOG.md at the project root from git history — regenerates entries grouped by commit date, one bullet per commit. Use when the user asks to update, generate, or sync the changelog, or after committing notable changes.
---

# Changelog

Keeps `CHANGELOG.md` (project root) in sync with git history. Each commit becomes one bullet, grouped under a `## YYYY-MM-DD` heading (commit author date), newest date first, newest commit first within a date.

## Steps

1. Check whether `CHANGELOG.md` exists at the project root.

2. Find the last commit already recorded. The file starts with a hidden marker:
   `<!-- changelog:last-commit=<sha> -->`
   - If the file or marker doesn't exist, treat it as empty — process the full history.
   - Otherwise only process commits **after** that sha: `git log --reverse <sha>..HEAD --no-merges --date=format:'%Y-%m-%d' --pretty=format:'%ad|%h|%s'`.
   - For a full/first run: `git log --no-merges --date=format:'%Y-%m-%d' --pretty=format:'%ad|%h|%s'`.

3. Skip merge commits (already excluded via `--no-merges`). Skip if there are no new commits — report that the changelog is already up to date and stop.

4. Group the new commits by date. For each commit produce a bullet:
   `- <subject> (<short-sha>)`

5. Write the file:
   - First line: `# Changelog`, blank line, then the marker line `<!-- changelog:last-commit=<HEAD-sha> -->` (use the full `git rev-parse HEAD`), blank line.
   - Then `## <date>` sections, newest date first. If the file already existed, prepend the newly generated date sections above the existing ones — if the newest existing section has the same date as the oldest new section, merge the bullets into one section instead of creating a duplicate heading.
   - Never rewrite or reorder bullets under dates that were already present before this run.

6. Show a short summary of what was added (date range, commit count) — don't dump the whole diff unless asked.

## Notes

- This skill only reads git history and writes `CHANGELOG.md`; it never commits the result — leave that to the user unless they ask you to commit.
- If a commit subject looks like it needs context lost in a one-liner, use the subject as-is; don't invent details from the diff.
