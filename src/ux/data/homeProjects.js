import fxnctionHero from '../../images/fxnction/hero-product.png';
import sdzoodesktopmain from '../../images/sdzoodesktopmain.jpg';
import dpelPreview from '../../images/dpel/preview.png';

/**
 * Homepage / work listings.
 * `layout`: 'full' | 'half'
 */
export const homeProjects = [
  {
    id: 'future-motion-design-system',
    title: 'Future Motion Design System',
    role: 'Lead UX Designer + Software Engineer',
    blurb:
      'Built a shared design component library for Future Motion based on the legacy codebase that designers, developers, and AI agents can build with',
    meta: 'Web + Mobile | Figma, Storybook, React, CSS, Cursor, Claude | 2026 - ongoing',
    video: '/videos/design-system.mp4',
    to: '/projects/future-motion-design-system',
    layout: 'full',
  },
  {
    id: 'onewheel-riding-preference-quiz',
    title: 'Onewheel Rider Quiz',
    role: 'Lead UX Designer + Software Engineer',
    blurb:
      'designed and built a custom shaping quiz that maps riding preference to model-specific settings',
    meta: 'Web + Mobile | Figma, React, CSS',
    url: 'https://my.onewheel.com/',
    video: '/videos/onewheel-riding-preference-quiz.mp4',
    to: '/projects/onewheel-riding-preference-quiz',
    layout: 'half',
  },
  {
    id: 'board-trade-in-system',
    title: 'Board Trade-in System',
    role: 'Lead UX Designer',
    blurb:
      'owned end-to-end UX for trading in an Onewheel board online across desktop and mobile',
    meta: 'Web + Mobile | Figma, React, CSS',
    url: 'https://tradein.onewheel.com/',
    video: '/videos/board-trade-in-system.mp4',
    to: '/projects/board-trade-in-system',
    layout: 'half',
  },
  {
    id: 'fxnction',
    title: 'f(x)nction',
    role: 'Frontend Developer + UX Designer',
    blurb:
      'built a Shopify storefront that made wrist guard purchases easier and lifted sales by 50%',
    meta: 'Web + Mobile | Figma, Shopify',
    url: 'https://fxnctiongear.com/',
    img: fxnctionHero,
    to: '/projects/fxnction',
    layout: 'half',
  },
  {
    id: 'dpel',
    title: 'Digital Production Example Library',
    role: 'Open Source Contributor',
    blurb:
      'helped shape an open-source digital production example library for the film and VFX community',
    meta: 'Web + Mobile | Vite, Sketch, Open-source',
    url: 'https://dpel.aswf.io/',
    img: dpelPreview,
    to: null,
    layout: 'half',
  },
  {
    id: 'san-diego-zoo',
    title: 'San Diego Zoo Donation Redesign',
    role: 'UX Design',
    blurb:
      'redesigned donation flows so animal cam content leads the ask and giving feels clearer on mobile',
    meta: 'Web + Mobile | Figma',
    img: sdzoodesktopmain,
    to: '/projects/san-diego-zoo',
    layout: 'half',
  },
];
