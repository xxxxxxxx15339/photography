# Photography portfolio

A static portfolio site built from the [Dasupply Template 01](https://www.figma.com/community/file/1631797830423507153) Figma design system.

No build step, no dependencies, no framework. Four HTML files, one stylesheet, one small script.

## Pages

| File | What it is |
|---|---|
| `index.html` | Hero wordmark + project index table |
| `project.html` | Template for a single series — duplicate per project |
| `playground.html` | Loose grid for uncurated frames |
| `about.html` | Bio and contact |

## Run it locally

Open `index.html` in a browser. That's it. For a proper local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Make it yours

1. **Name** — find and replace `yourname` and `Yourname` across all four HTML files.
2. **Email** — replace `hello@example.com`.
3. **Photos** — drop images into `assets/img/` and update the `src` attributes. The layout crops to fixed ratios (16:9 and 1:1), so upload generously sized files and let CSS handle the crop.
4. **Projects** — each row in the index is one `<a class="index__row">` block. Copy, edit, renumber.
5. **Alt text** — every `<img>` needs a real `alt` description. Decorative images can use `alt=""`, but photographs of things should say what they show.

### Design tokens

Everything visual is a CSS custom property at the top of `assets/css/style.css` — colours, type sizes, container width, spacing. Change them there rather than hunting through rules.

The index rows were drawn white-on-dark in Figma. Add `class="invert"` to any section to flip it.

## Deploy

### Vercel
Import the repo at [vercel.com/new](https://vercel.com/new). Framework preset: **Other**. No build command, no output directory. Deploys on every push.

### Netlify
Drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo. Leave build settings empty.

### GitHub Pages
Repo → Settings → Pages → Source: **Deploy from a branch** → `main` / `root`. Live at `https://<username>.github.io/<repo>/` in a minute or two.

## Fonts

Instrument Serif (display) and Geist (body), both loaded from Google Fonts. Both are open source and free for commercial use. To self-host and drop the external request, download them and swap the `<link>` for an `@font-face` block.

## Icons

The menu, close, and arrow icons are re-authored as inline SVG to keep the repo self-contained. To use the originals, select the icon in Figma → Export → SVG, and replace the inline markup.

## Credit and licence

Design system by [Dasupply](https://dasupply.xyz). Released free for personal and commercial use, with modification permitted and attribution optional. A fully developed version is sold at [dasupply.lemonsqueezy.com](https://dasupply.lemonsqueezy.com/).

This implementation is yours to do whatever you like with.
