import fxnctionHero from '../../images/fxnction/hero-product.png';
import stretchieLanding from '../../images/stretchie/landing.png';
import sdzoodesktopmain from '../../images/sdzoodesktopmain.png';
import dpelPreview from '../../images/dpel/preview.png';

/**
 * Homepage project grid layout.
 * `layout`: 'full' | 'half'
 */
export const homeProjects = [
  {
    id: 'future-motion-design-system',
    title: 'Future Motion Design System',
    meta: 'Web + Mobile | Figma, Storybook, React, CSS, Cursor, Claude | 2026 - ongoing',
    video: '/videos/future-motion-design-system.mp4',
    to: '/projects/future-motion-design-system',
    layout: 'full',
  },
  {
    id: 'onewheel-riding-preference-quiz',
    title: 'Onewheel Rider Quiz',
    meta: 'Web + Mobile | Figma, React, CSS',
    url: 'https://my.onewheel.com/',
    video: '/videos/onewheel-riding-preference-quiz.mp4',
    to: '/projects/onewheel-riding-preference-quiz',
    layout: 'half',
  },
  {
    id: 'board-trade-in-system',
    title: 'Board Trade-in System',
    meta: 'Web + Mobile | Figma, React, CSS',
    url: 'https://tradein.onewheel.com/',
    video: '/videos/board-trade-in-system.mp4',
    to: null,
    layout: 'half',
  },
  {
    id: 'fxnction',
    title: 'F(x)nction',
    meta: 'Web + Mobile | Figma, Shopify',
    url: 'https://fxnctiongear.com/',
    img: fxnctionHero,
    to: '/projects/fxnction',
    layout: 'half',
  },
  {
    id: 'stretchie',
    title: 'Stretchie',
    meta: 'Desktop | Figma Make | 2026',
    img: stretchieLanding,
    to: '/projects/stretchie',
    layout: 'half',
  },
  {
    id: 'dpel',
    title: 'Open Source Digital Production Example Library',
    meta: 'Web + Mobile | Vite, Sketch, Open-source',
    url: 'https://dpel.aswf.io/',
    img: dpelPreview,
    to: null,
    layout: 'half',
  },
  {
    id: 'san-diego-zoo',
    title: 'San Diego Zoo Donation Redesign',
    meta: 'Web + Mobile | Figma',
    img: sdzoodesktopmain,
    to: '/projects/san-diego-zoo',
    layout: 'half',
  },
];
