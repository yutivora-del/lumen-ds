# Lumen — a quiet design system

An open, editorial design system. Tokens, components, and copy-paste code — built to bridge the gap between Figma and code.

Live: _deploy to Vercel to set your URL_

---

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with HSL token layer
- **Radix Primitives** for Tabs, Switch, Slot
- **Fraunces** (display) + **Geist** (sans) via `next/font`
- Light + dark themes

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
├── page.tsx                # Homepage
├── layout.tsx              # Root layout (fonts, theme provider)
├── globals.css             # Design tokens live here
├── tokens/                 # Tokens overview
├── components/             # Component library
│   ├── page.tsx            #   Index
│   ├── button/             #   Per-component pages
│   ├── badge/
│   └── ...
├── docs/
│   ├── installation/
│   ├── colors/
│   ├── typography/
│   ├── spacing/
│   └── radius/
└── about/                  # Colophon

components/
├── ui/                     # The library (Button, Badge, Card, …)
├── site/                   # Header, footer, theme
└── docs/                   # CodeBlock, ComponentPreview, Sidebar

lib/utils.ts                # cn() helper
registry/sources.ts         # Raw source strings shown on docs pages
tailwind.config.ts          # Token → utility mapping
```

## Deploy to Vercel

### One-click

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Lumen v0.1"
   git branch -M main
   git remote add origin https://github.com/<your-username>/lumen-ds.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the repo. Vercel auto-detects Next.js — no config needed.

3. Click **Deploy**. You'll have a live URL in ~60 seconds.

### CLI

```bash
npm i -g vercel
vercel
```

## Customizing the system

Every visual decision is a CSS variable in `app/globals.css`. To rebrand:

1. Change `--accent` to your brand color (HSL space-separated, no `hsl()`).
2. Adjust `--paper` and `--ink` to shift the warm/cool axis.
3. Update fonts in `app/layout.tsx` if you want different families.
4. Optional: change `--radius-*` to match a sharper or softer brand.

Every component will follow. That's the point.

## License

MIT — take what's useful, leave the rest.

## Credits

Built by Yuti. Inspired by shadcn/ui's "copy, don't install" model.
