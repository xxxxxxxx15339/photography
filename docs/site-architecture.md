# Content Model

## Gallery

Each gallery represents a collection of related photographs.

Example gallery fields:

```yaml
title: "Street"
slug: "street"
description: "Urban moments, light, movement, and geometry."
cover: "/images/covers/street.webp"
category: "Street Photography"
featured: true
order: 1
photos:
  - src: "/images/street/street-001-large.webp"
    thumb: "/images/street/street-001-thumb.webp"
    alt: "A person walking across a rainy street at night"
    title: "Rain Crossing"
    location: "Brussels"
    year: 2025
    orientation: "landscape"
````

## Required Gallery Fields

Each gallery should have:

* `title`
* `slug`
* `description`
* `cover`
* `photos`

## Required Photo Fields

Each photo should have:

* `src`
* `thumb`
* `alt`

## Optional Photo Fields

A photo may also have:

* `title`
* `location`
* `year`
* `camera`
* `lens`
* `orientation`

## Example Galleries

Initial gallery ideas:

* Street
* Portraits
* Landscape
* Travel
* Black and White
* Details
* Events

Start with only 3 or 4 strong galleries.

Do not overload the portfolio with too many categories at the beginning.

## Writing Style

Gallery descriptions should be short and elegant.

Good example:

> Urban fragments, quiet gestures, and moments of light.

Avoid long technical explanations.

## Alt Text Guidelines

Alt text should describe the visual content of the image.

Good:

```text
A cyclist passing through a beam of light between two buildings
```

Bad:

```text
photo 1
```

Bad:

```text
beautiful amazing street photography shot
```

## Featured Content

The homepage should not show every photo.

It should show:

* 1 strong hero image
* 3 featured galleries
* 6 to 12 selected photographs

The full galleries can contain more images.