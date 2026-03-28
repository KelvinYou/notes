# VS Code Extensions I Actually Use

Curated. Not everything — just what's in my setup and why.

## Quick reference

| Extension | Category | What it does |
|-----------|----------|--------------|
| GitLens | Git | Inline blame, history, file revisions |
| Prettier | Formatting | Format on save |
| ESLint | Linting | Inline lint errors |
| Pretty TypeScript Errors | TypeScript | Readable TS error messages |
| Git Graph | Git | Visual branch/commit graph |
| Tailwind CSS IntelliSense | Tailwind | Class autocomplete + hover preview |
| Prisma | Database | Schema formatting + autocomplete |
| Go | Go | Autocomplete, format, test runner |
| Docker | DevOps | Container management + Compose support |
| Dependi | Dependencies | Shows outdated versions in `package.json` |
| Code Spell Checker | Productivity | Catch typos in code + comments |
| Import Cost | Productivity | Bundle size inline per import |
| Material Icon Theme | UI | Better file type icons |
| Draw.io Integration | Diagramming | Edit architecture diagrams in VS Code |

---

## Essential (always installed)

### [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
Inline git blame on every line. I use this constantly to understand *why* code exists, not just what it does. The commit history exploration and file revision comparison are the main things I reach for.

### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
Format on save. Non-negotiable for any JS/TS project. Takes one decision (formatting) permanently off my plate.

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
Lint errors inline. Catches real bugs, not just style issues when configured correctly.

### [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
TypeScript error messages are notoriously unreadable. This extension reformats them into something human. Huge quality-of-life improvement.

### [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
Visual git history. Useful when I need to see how branches diverged or find a merge point.

---

## Language / framework specific

### [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
Autocomplete, hover previews, and lint for Tailwind classes. Essential if you use Tailwind daily.

### [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
Schema formatting, syntax highlighting, and autocomplete for `.prisma` files.

### [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)
The official Go extension. Autocomplete, formatting, test running. Required for Go development.

### [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
Container management without leaving the editor. I mostly use it for the Compose file integration and container log viewing.

### [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi)
Shows outdated package versions inline in `package.json`. Useful during dependency audits.

---

## Productivity

### [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
Catches spelling errors in comments, variable names, and strings. Embarrassing to ship typos in user-facing strings.

### [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
Shows the bundle size of imports inline. Makes you think twice before adding a 200KB dependency.

### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
Better file icons. Makes navigating large projects faster because your eye recognizes file types instantly.

### [Polacode](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.polacode-2019)
Beautiful code screenshots. Useful when sharing code in presentations or design docs.

---

## Viewers

### [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
Edit architecture diagrams directly in VS Code, stored as `.drawio` files in the repo. Better than exporting PNGs.

### [Excel Viewer](https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer)
View `.xlsx` files without opening Excel. Useful for data files in repos.

### [PDF Viewer](https://marketplace.visualstudio.com/items?itemName=mathematic.vscode-pdf)
Quick PDF viewing. For specs and design docs shared as PDFs.

---

## Snippets (useful but not critical)

- [ES7+ React/Redux snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) — `rafce` for React arrow function component
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) — overlaps with above, pick one
- [JavaScript (ES6) snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) — less useful now that Copilot exists

---

## What I don't install anymore

- Themes (one is enough, I use default dark)
- Multiple snippet packs that overlap
- Extensions I "might use someday" — they slow VS Code startup
