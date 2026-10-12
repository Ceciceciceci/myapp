import onewheelQuizMain from '../../images/onewheel-quiz/quiz-main.png';
import fxnctionHero from '../../images/fxnction/hero-product.png';
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
    img: onewheelQuizMain,
    to: '/projects/onewheel-riding-preference-quiz',
    layout: 'half',
  },
  {
    id: 'board-trade-in-system',
    title: 'Board Trade-in System',
    meta: 'Web + Mobile | Figma, React, CSS',
    url: 'https://my.onewheel.com/',
    img: null,
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
