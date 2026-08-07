import type { Gallery } from '../gallery-types';
import { image } from '../gallery-utils';

const gallery: Gallery = {
  title: 'Sony',
  slug: 'sony',
  description: 'Photographs shot on a Sony DSC-W630, by Alae EL MAHDAOUI.',
  location: '',
  year: new Date().getFullYear(),
  category: 'Sony DSC-W630',
  featured: true,
  visible: true,
  photos: [
    {
      src: image('images/example/DSC00619-900x675.jpg'),
      thumb: image('images/example/DSC00619-900x675.jpg'),
      alt: 'A narrow street between white and cream apartment buildings with cars parked below',
      title: 'Street Corner',
      location: '',
      year: 2026,
      orientation: 'landscape',
      width: 900,
      height: 675,
      credit: 'Alae EL MAHDAOUI',
    },
    {
      src: image('images/example/DSC00653-900x675.jpg'),
      thumb: image('images/example/DSC00653-900x675.jpg'),
      alt: 'People sitting and standing outside a corner shop in a medina, with a snack stand and shop signage',
      title: 'Medina Corner',
      location: '',
      year: 2026,
      orientation: 'landscape',
      width: 900,
      height: 675,
      credit: 'Alae EL MAHDAOUI',
    },
  ],
};

export default gallery;
