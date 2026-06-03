# Agent Instructions

## Before Any Task — Read These Files First

Do NOT immediately resort to `grep`, `glob`, or `read` tools when asked about the codebase. Read these files in order first:

### 1. `PROJECT.md` — Project Structure
Contains the full file tree, component dependencies, page section flow, and design token reference. Answer structural questions here before searching.

### 2. `LOGS.md` — Session Change Log
Contains every change made in recent sessions with file paths and detailed descriptions. If the user asks about a recent change or feature, it's documented here.

### 3. `DESIGN.md` — Design System Reference
Full design system in Stitch format: YAML frontmatter with tokens, 6 sections (Overview → Colors → Typography → Elevation → Components → Do's/Don'ts), Named Rules.

### 4. `SKILL.md` — Agent Skill File
The arc-design skill loaded by the agent system. Contains color palette, typography scale, component patterns, animation guidelines, anti-patterns, and Quick Reference.

## Lookup Before Search

Before running any search tool:
1. Check `PROJECT.md` to find the relevant file path
2. Check `LOGS.md` to see if a change was already made
3. Use `read` on the specific file path from PROJECT.md

Only use `grep` or `glob` if the answer isn't in these reference files.

## Key Files Quick Reference

| Need | Read First |
|---|---|
| File paths / structure | `PROJECT.md` |
| Recent changes | `LOGS.md` |
| Design tokens / colors | `DESIGN.md` or `SKILL.md` |
| Component patterns | `SKILL.md` |
| Anti-patterns | `SKILL.md` or `DESIGN.md` |
| CSS variables / theme | `src/app/globals.css` |
| Page assembly | `src/app/page.tsx` |

## Build & Verify

After making code changes, run:
```bash
npm run build
```

If the build fails due to stale cache:
```bash
rm -rf .next && npm run build
```
