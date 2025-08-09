## Gurpal Singh – Portfolio (EN/DE)

This is my personal portfolio built with Next.js. I translated the site to German to practice German, so you may find mistakes here and there. Sorry but corrections are not welcome as I will fix them as I keep learning German.

### Highlights
- **Content**: Projects and writings, with MDX articles under `content/writings/en` and `content/writings/de`.
- **Internationalization**: English and German via `next-intl` (`translations/en.json`, `translations/de.json`).
- **MDX**: Rendered with `@content-collections/*` and `fumadocs-ui` components.
- **Styling**: Tailwind CSS.
- **Dynamic OG images**: Per-writing Open Graph images generated via `next/og` at `app/[locale]/(root)/writings/[slug]/opengraph-image.tsx`.

### Tech Stack
- Next.js 15, React 19, TypeScript
- Tailwind CSS, `@tailwindcss/typography`
- `next-intl` for i18n
- `@content-collections/core`, `@content-collections/mdx`, `@content-collections/next`
- `fumadocs-ui` for MDX components

### Run locally
```bash
pnpm install
pnpm dev
```

Build and start:
```bash
pnpm build && pnpm start
```

### Structure
- App routes: `app/[locale]/(root)/**`, writings: `app/[locale]/(root)/writings/[slug]/**`
- Content: `content/writings/en`, `content/writings/de`
- Translations: `translations/en.json`, `translations/de.json`

### Notes on German translation
I’m actively learning German. The DE copy exists primarily for practice; expect occasional errors or phrasing that I’ll improve over time.


