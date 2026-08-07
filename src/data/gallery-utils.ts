const BASE = import.meta.env.BASE_URL || '/';
const basePath = BASE.endsWith('/') ? BASE : `${BASE}/`;

export const image = (path: string) => `${basePath}${path.replace(/^\//, '')}`;
