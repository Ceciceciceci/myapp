/**
 * Fanart-only top pins. In a 3-column masonry layout these become
 * the first image in each column.
 */
const FANART_PINNED_GROUPS = [
  [
    'Illustration258 2.png',
    /^illustration\s*258[\s_-]*2\.png$/i,
  ],
  [
    'Illustration284 2.png',
    'Illustration283 3.png',
    '284 2.png',
    '283 3.png',
    /^illustration\s*284[\s_-]*2\.png$/i,
    /^illustration\s*283[\s_-]*3\.png$/i,
    /^284[\s_-]*2\.png$/i,
    /^283[\s_-]*3\.png$/i,
  ],
  [
    'Illustration260 2.png',
    '260 2.png',
    /^illustration\s*260[\s_-]*2\.png$/i,
    /^260[\s_-]*2\.png$/i,
  ],
];

/** Food art top pins. */
const FOODART_PINNED_GROUPS = [
  [
    'sea-bakery.png',
    'sea bakery.png',
    /^sea[\s_-]*bakery\.png$/i,
  ],
];

function baseName(path) {
  return String(path || '')
    .replace(/^\.\//, '')
    .split('/')
    .pop();
}

function matchesPin(fileName, pin) {
  const name = baseName(fileName);
  if (pin instanceof RegExp) return pin.test(name);
  return name.toLowerCase() === String(pin).toLowerCase();
}

function pinIndex(fileName, pinnedGroups) {
  if (!pinnedGroups?.length) return -1;
  return pinnedGroups.findIndex((group) =>
    group.some((pin) => matchesPin(fileName, pin)),
  );
}

function loadFolderPhotos(context, pinnedGroups = null) {
  return context
    .keys()
    .filter((key) => /\.(png|jpe?g|webp|gif)$/i.test(key))
    .sort((a, b) => {
      const aName = baseName(a);
      const bName = baseName(b);
      const aPin = pinIndex(aName, pinnedGroups);
      const bPin = pinIndex(bName, pinnedGroups);

      if (aPin >= 0 && bPin >= 0) return aPin - bPin;
      if (aPin >= 0) return -1;
      if (bPin >= 0) return 1;

      return aName.localeCompare(bName, undefined, {
        numeric: true,
        sensitivity: 'base',
      });
    })
    .map((key) => {
      const src = context(key);
      const fileName = baseName(key).replace(/\.[^.]+$/, '');
      const title = fileName
        .replace(/\s+\d+$/i, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        src,
        width: 1000,
        height: 1250,
        alt: title,
        key: fileName,
      };
    });
}

/* Populate each gallery from its image folder at build time. */
export const originalPhotos = loadFolderPhotos(
  require.context('../images/original', false, /\.(png|jpe?g|webp|gif)$/i),
);

export const fanartPhotos = loadFolderPhotos(
  require.context('../images/fanart', false, /\.(png|jpe?g|webp|gif)$/i),
  FANART_PINNED_GROUPS,
);

export const foodartPhotos = loadFolderPhotos(
  require.context('../images/foodart', false, /\.(png|jpe?g|webp|gif)$/i),
  FOODART_PINNED_GROUPS,
);

export const galleryPhotos = {
  original: originalPhotos,
  fanart: fanartPhotos,
  foodart: foodartPhotos,
};

export const galleryMeta = {
  original: {
    title: 'original',
    blurb: 'please give some time for drawings to load, thanks!',
  },
  fanart: {
    title: 'fan art',
    blurb: 'please give some time for drawings to load, thanks!',
  },
  foodart: {
    title: 'food art',
    blurb: 'please give some time for drawings to load, thanks!',
  },
};
