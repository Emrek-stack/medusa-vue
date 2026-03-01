# Contributing

## Branching

- Day-to-day development happens on `development`.
- Releases are cut from `main`.

## Changesets

For any release-worthy change to a publishable package:

```bash
npx changeset
```

Then:
- choose the affected package or packages
- select `patch`, `minor`, or `major`
- write a short summary for the changelog
- commit the generated file under `.changeset/`

Pull requests targeting `development` are expected to include a changeset unless the PR is docs-only or repository-meta-only.

## Release Flow

The repository uses a Release PR flow on `main`:

1. Changes with committed changesets are merged from `development` into `main`.
2. GitHub Actions opens or updates a `Version Packages` PR.
3. Merging that PR applies version bumps and changelog updates.
4. A publish workflow runs on `main`, builds the repo, publishes non-private packages to npm, and pushes git tags.

## Versioning Mode

- Default mode is independent versioning for the publishable packages.
- If the repo ever needs a fixed single-version release model, update `.changeset/config.json` and populate the `fixed` group with the publishable package names.
