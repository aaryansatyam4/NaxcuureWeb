// Responsive photos: each /images/<name>.webp also exists as <name>-800.webp and <name>-1280.webp
// (smaller copies). Spreading photo(...) onto an <img> lets the browser download the smallest copy
// that still looks sharp for the space it fills, instead of the full-size file on every phone.
//
// When you add or replace a photo, regenerate the smaller copies and list its full width here.

const FULL_WIDTH: Record<string, number> = {
  'career-team': 2000,
  directors: 1280,
  'factory-aerial': 1600,
  'factory-front': 1600,
  'factory-sign': 1600,
  'factory-wing': 1920,
  'lab-digital': 2000,
  'lab-qc': 2000,
  'lab-research': 2000,
  'team-cphi': 2000,
};

const VARIANTS = [800, 1280];

/** `sizes` describes how wide the image is shown, e.g. '100vw' or '(min-width: 1024px) 50vw, 100vw'. */
export const photo = (src: string, sizes = '100vw') => {
  const match = src.match(/^\/images\/(.+)\.webp$/);
  const full = match ? FULL_WIDTH[match[1]] : undefined;
  if (!match || !full) return { src };
  const srcSet = [
    ...VARIANTS.filter((w) => w < full).map((w) => `/images/${match[1]}-${w}.webp ${w}w`),
    `${src} ${full}w`,
  ].join(', ');
  return { src, srcSet, sizes };
};
