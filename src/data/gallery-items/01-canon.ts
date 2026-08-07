import type { Gallery } from '../gallery-types';
import { image } from '../gallery-utils';

const gallery: Gallery = {
  title: 'Canon',
  slug: 'canon',
  description: 'Photographs shot on a Canon EOS 1100D with an EF-S 18-55mm lens.',
  location: '',
  year: new Date().getFullYear(),
  category: 'Canon EOS 1100D',
  featured: true,
  visible: true,
  photos: [
    {
      src: image('images/example/IMG_2307.JPG'),
      thumb: image('images/example/IMG_2307.JPG'),
      alt: 'A wall of black-and-white double-exposure portrait photographs displayed in a gallery',
      title: 'Exhibition Wall',
      location: '',
      year: 2026,
      orientation: 'landscape',
      width: 3088,
      height: 2056,
    },
    {
      src: image('images/example/IMG_04207.JPG'),
      thumb: image('images/example/IMG_04207.JPG'),
      alt: 'A blue sky with white clouds, a jet contrail, and a dark storm cloud moving in from the right',
      title: 'Storm Light',
      location: '',
      year: 2026,
      orientation: 'landscape',
      width: 3088,
      height: 2056,
    },
    {
      src: image('images/example/IMG_2351.JPG'),
      thumb: image('images/example/IMG_2351.JPG'),
      alt: 'Looking up at a red steel frame structure against a clear blue sky, with tree branches at the edge',
      title: 'Steel Frame',
      location: '',
      year: 2026,
      orientation: 'landscape',
      width: 3088,
      height: 2056,
    },
    {
      src: image('images/example/IMG_2358.JPG'),
      thumb: image('images/example/IMG_2358.JPG'),
      alt: 'Backlit ornamental grass in the foreground with a modern building and pergola at sunset',
      title: 'Golden Hour',
      location: '',
      year: 2026,
      orientation: 'landscape',
      width: 3033,
      height: 2019,
    },
  ],
};

export default gallery;
