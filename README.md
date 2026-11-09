# Kelvin You's Notes

Public notes built with Docusaurus, plus the structured nutrition dataset consumed by Personal-OS.

## Development

Use the Node.js version declared in `package.json`.

```bash
npm ci
npm run start
npm run build
```

`npm run build` validates nutrition records, regenerates their catalog, and builds the site. For dataset changes, run `npm run validate:nutrition` and `npm run generate:nutrition` directly. Generated catalog MDX is not edited by hand.

Repository instructions start in [AGENTS.md](AGENTS.md). Use [docs/INDEX.md](docs/INDEX.md) for document and data ownership, [dataset notes](datasets/nutrition/README.md) for provenance, and [PLAN.md](PLAN.md) for the existing enhancement plan.

## References

- [Docusaurus documentation](https://docusaurus.io/docs)
- [Original content reference](https://wei-docusaurus-vercel.vercel.app/)
- [Anthony Fu's site](https://antfu.me/)
