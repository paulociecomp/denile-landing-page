# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — local dev server (Astro, default `localhost:4321`)
- `npm run build` — production build to `./dist/`
- `npm run preview` — serve the built site locally
- `npm run deploy` — builds and publishes `dist/` to gh-pages via `gh-pages -d dist`

No lint or test tooling is configured.

## Architecture

Single-page marketing site for "Seiva Sana" (Dra. Denile Oliveira, cannabis medicinal). Astro 5 + Tailwind 3, deployed via the Vercel adapter (`astro.config.mjs`).

- `src/pages/index.astro` is the only page. It composes section components from `src/components/` (`Hero`, `RelationshipChallenges`, `Method`, `Benefits`, `Testimonials`, `FAQ`, `About`, `Footer`, plus `Header` rendered by the layout). Reordering sections happens here.
- `src/layouts/Layout.astro` owns the entire `<head>`: SEO/OpenGraph/Twitter meta, canonical URL, Google Fonts (`Playfair Display`, `Inter`, `Great Vibes`), the Alpine.js CDN script, and global CSS variables. Edit this file for any global head, font, or SEO change.
- `src/styles/global.css` is imported by the layout; section-specific styles live inline in each `.astro` component using Tailwind utilities.

## Conventions & gotchas

- **Content language**: all copy and SEO meta is Brazilian Portuguese, even though `<html lang="en">` is hardcoded in `Layout.astro`. Keep new copy in pt-BR.
- **Interactivity**: Alpine.js is loaded globally via CDN (`Layout.astro`). Use `x-data` / `x-show` / `x-on` directives inline in `.astro` components (see `Header.astro`, `FAQ.astro`) rather than adding a JS framework or hydrated Astro islands.
- **Fonts**: use the utility classes `font-serif` (Playfair Display) and `font-cursive` (Great Vibes); the default body font is Inter. These are defined as CSS variables in the global `<style is:global>` block of `Layout.astro`.
- **Deploy targets are dual**: `astro.config.mjs` configures the Vercel adapter (primary), and `npm run deploy` pushes the static build to a `gh-pages` branch. Changing hosting means touching both.
- **Canonical URL** in `Layout.astro` is `https://seivasana.com.br/` — update if the production domain changes.
