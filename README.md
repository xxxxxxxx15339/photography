# Photography Portfolio

Personal photography portfolio website for Yasser Baouzil.

Live site:

https://xxxxxxxx15339.github.io/photography/

## Tech Stack

- Astro
- TypeScript
- Static site generation
- GitHub Pages
- GitHub Actions

## Purpose

This website showcases selected photography work through a minimal, fast, image-focused portfolio.

## Local Development

Install dependencies:

```bash
npm install
````

Start the local dev server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The site is deployed to GitHub Pages using GitHub Actions.

Production URL:

```text
https://xxxxxxxx15339.github.io/portfolio/
```

## Important Deployment Note

This is a GitHub Pages project site.

The Astro configuration must include:

```js
site: "https://xxxxxxxx15339.github.io",
base: "/portfolio"
```

This ensures that links and assets work correctly under the `/photography/` path.

## Project Structure

```text
src/
├── components/
├── content/
├── layouts/
├── pages/
└── styles/

public/
└── images/
```

## Image Guidelines

Use optimized image files.

Recommended versions:

* thumbnail images for gallery grids
* large images for detail or lightbox views

Avoid committing full-resolution originals to the repository.

## License

All photographs are copyright Yasser Baouzil unless otherwise stated.
