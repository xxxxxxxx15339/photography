# Image Guidelines

## Goal

The website should display photography beautifully while remaining fast.

Do not upload full-size originals directly for normal page display.

## Recommended Image Sizes

For each selected photo, create at least two versions:

```text
thumb:  600-900px wide
large:  1600-2400px wide
````

Optional:

```text
medium: 1000-1400px wide
```

## Recommended Format

Use WebP for most images.

Recommended structure:

```text
public/images/
├── covers/
│   ├── street.webp
│   ├── portraits.webp
│   └── landscape.webp
├── street/
│   ├── street-001-thumb.webp
│   ├── street-001-large.webp
│   ├── street-002-thumb.webp
│   └── street-002-large.webp
├── portraits/
│   ├── portraits-001-thumb.webp
│   └── portraits-001-large.webp
└── landscape/
    ├── landscape-001-thumb.webp
    └── landscape-001-large.webp
```

## Naming Convention

Use lowercase filenames.

Use hyphens instead of spaces.

Good:

```text
street-001-thumb.webp
street-001-large.webp
portrait-window-light-thumb.webp
```

Bad:

```text
IMG_3928.JPG
My Photo Final Edit Version 2.jpg
```

## Performance Rules

* Use thumbnails in gallery grids.
* Load large images only for detail views or lightbox.
* Use lazy loading for images below the fold.
* Avoid loading dozens of large images at once.
* Always include width and height when possible.
* Avoid layout shift.

## Image Selection

A strong portfolio is selective.

Start with:

* 10 to 20 photos on the homepage or selected work page
* 8 to 20 photos per gallery
* only your strongest images

Quality is more important than quantity.

## Original Files

Keep original high-resolution images outside the deployed website unless there is a specific reason to publish them.

Suggested local-only folder:

```text
_originals/
```

Add this folder to `.gitignore`:

```text
_originals/
```

## Privacy

Before publishing, check that photos do not expose private or sensitive information.

Be careful with:

* faces
* children
* addresses
* license plates
* private events
* geolocation metadata