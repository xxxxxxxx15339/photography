import type { Gallery } from './gallery-types';

export type { Gallery, Photo } from './gallery-types';

type GalleryModule = {
  default: Gallery;
};

const galleryModules = import.meta.glob<GalleryModule>('./gallery-items/*.ts', {
  eager: true,
});

export const allGalleries: Gallery[] = Object.entries(galleryModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, module]) => module.default);

export const galleries: Gallery[] = allGalleries.filter(
  (gallery) => gallery.visible !== false
);