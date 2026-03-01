# Changesets

This repository uses Changesets for release management.

Default mode:
- Independent versioning. Each publishable package can release at its own version.

Typical development flow:
- Run `npx changeset` after making a release-worthy change.
- Commit the generated markdown file under `.changeset/`.
- Open your pull request against `development`.

Release flow:
- Changes merged into `main` create or update a `Version Packages` release PR.
- Merging that PR applies version bumps, changelogs, and triggers npm publish.

Fixed mode note:
- If the repo should move to one shared version for all packages, replace the empty `fixed` array in `.changeset/config.json` with a group containing the publishable package names.
