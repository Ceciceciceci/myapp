import projimg1 from '../../images/proj1-img.jpg';
import classicVacationsBooking from '../../images/classic-vacations/product-design-booking.png';
import classicVacationsAgencyId from '../../images/classic-vacations/agency-id-registration.png';
import sdzoodesktopmain from '../../images/sdzoodesktopmain.png';
import sdzMobileMenu from '../../images/san-diego-zoo/mobile-menu.png';
import sdzMobileDonationsLanding from '../../images/san-diego-zoo/mobile-donations-landing.png';
import sdzMobileDonateMonkey from '../../images/san-diego-zoo/mobile-donate-monkey.png';
import sdzMobileDonateElephant from '../../images/san-diego-zoo/mobile-donate-elephant.png';
import sdzMobileDonateRhino from '../../images/san-diego-zoo/mobile-donate-rhino.png';
import flowchart from '../../images/flowchart.jpg';
import storyboard from '../../images/storyboard.jpg';
import fxnctionHero from '../../images/fxnction/hero-product.png';
import fxnctionWristGuards from '../../images/fxnction/wrist-guards-photo.png';
import fxnctionRetail from '../../images/fxnction/retail-shopify.png';
import fxnctionHome from '../../images/fxnction/home-page.png';
import fxnctionProduct from '../../images/fxnction/product-info.png';
import fxnctionAbout from '../../images/fxnction/about-page.png';
import fxnctionCart from '../../images/fxnction/cart-page.png';
import stretchieLanding from '../../images/stretchie/landing.png';
import stretchieProblemInspiration from '../../images/stretchie/problem-inspiration.png';
import stretchieSessionBuilder from '../../images/stretchie/session-builder.png';
import stretchieAlarmSetup from '../../images/stretchie/alarm-setup.png';
import stretchieActiveStretch from '../../images/stretchie/active-stretch.png';
import stretchieNotification from '../../images/stretchie/notification.png';
import stretchieArtwork from '../../images/stretchie/artwork.png';
import fmDsIntro from '../../images/future-motion-design-system/intro.png';
import fmDsDesktop17 from '../../images/future-motion-design-system/desktop-17.png';
import fmDsButtons from '../../images/future-motion-design-system/buttons.png';
import fmDsIcons from '../../images/future-motion-design-system/icons.png';
import fmDsMessageBanner from '../../images/future-motion-design-system/message-banner.png';
import fmDsLoadingStates from '../../images/future-motion-design-system/loading-states.png';
import onewheelQuizMain from '../../images/onewheel-quiz/quiz-main.png';
import onewheelQuizPrimitives from '../../images/onewheel-quiz/primitives.png';
import onewheelQuizModules from '../../images/onewheel-quiz/quiz-modules.png';
import onewheelQuizIcons from '../../images/onewheel-quiz/icons.png';

export const projects = [
  {
    id: 'future-motion-design-system',
    year: '2025 - cont',
    title: 'Future Motion Design System',
    subtitle: 'Creating a shared design language for web and mobile product teams',
    tags: ['Design System', 'UX Design', 'Figma', 'Component Library', 'AI', 'COO Presentation'],
    brief:
      'Initiated a design language system at Future Motion with reusable Figma components, documented patterns, and shared UI foundations for customer-facing and internal tools. Presented the POC and ongoing work to the COO, and am exploring AI to build an agent that tests transferring components from Figma into Storybook.',
    outcome: 'Component library in Figma · COO POC presentation · Cross-team adoption',
    img: fmDsDesktop17,
    role: 'Lead UX Designer + Software Engineer',
    duration: '2025 – ongoing (continuing initiative)',
    team: 'Design, engineering, graphic design stakeholders, and COO',
    tools: 'Figma, Storybook, React, AI',
    heroImg: fmDsDesktop17,
    problem:
      'Future Motion was shipping multiple web and mobile experiences like warranty tools, trade-in flows, factory dashboards, sales platforms, and partner storefronts, all without a shared visual or component language. Teams reused one-off UI patterns, design reviews took longer than needed, and engineering spent time rebuilding the same buttons, forms, and layouts across products.',
    approach: [
      'Audited existing interfaces across customer, factory, and internal tools to inventory repeated UI patterns and inconsistencies.',
      'Partnered with the graphic design team to align brand direction with practical product UI needs.',
      'Defined foundations for color, typography, spacing, and interaction states in Figma.',
      'Built a base component library for buttons, inputs, navigation, tables, and status patterns used across web and mobile.',
      'Presented the design system POC and ongoing library work to the COO to secure executive buy-in and align on adoption priorities.',
      'Applied the library to new product work including warranty, trade-in, and sales experiences.',
      'Building an AI agent to test transferring Figma components into Storybook and reduce manual design-to-code handoff.',
    ],
    process: [
      {
        label: 'Documentation Intro',
        body:
          'Created a shared Figma file as the source of truth for internal tools, documenting primitives, components, usage guidelines, and how teams should copy, comment on, and publish updates to the library.',
        img: fmDsIntro,
      },
      {
        label: 'Product Sync Table',
        body:
          'Applied the system to a live internal tool for reviewing and syncing product updates from Shopify and the order system, including navigation, data tables, status chips, toggles, and primary actions.',
        img: fmDsDesktop17,
      },
      {
        label: 'Button Components',
        body:
          'Documented button variants across sizes, states, and intent (primary, submit, and danger) with solid and outlined styles, icon support, and usage guidance for in-card layouts.',
        img: fmDsButtons,
      },
      {
        label: 'Icons Library',
        body:
          'Organized Material Design icons into categorized tables for arrows, errors, actions, and objects, with naming conventions and implementation notes for developers.',
        img: fmDsIcons,
      },
      {
        label: 'Message Banner',
        body:
          'Defined message banner patterns for high-priority errors and warnings, including full-width layouts, persistent states, and closable versus non-closable variants.',
        img: fmDsMessageBanner,
      },
      {
        label: 'Loading States',
        body:
          'Standardized loading patterns for data-heavy internal screens, including centered fetch states and spinner treatment across light and dark themes.',
        img: fmDsLoadingStates,
      },
    ],
    solution:
      'A living design language system that gave Future Motion a shared foundation for web and mobile UI, from tokens and components in Figma to documented patterns teams could reuse across warranty, trade-in, factory, and sales products. I presented the POC and progress to the COO to align leadership on the system direction, with the next phase using AI to test an agent workflow for moving components from Figma into Storybook.',
    metrics: [
      { value: '1', label: 'Shared Figma library' },
      { value: 'Web + Mobile', label: 'Platforms covered' },
      { value: 'Multi-team', label: 'Adoption across products' },
      { value: 'Reusable', label: 'Base components' },
    ],
    processImgs: [
      fmDsIntro,
      fmDsDesktop17,
      fmDsButtons,
      fmDsIcons,
      fmDsMessageBanner,
      fmDsLoadingStates,
    ],
    links: [],
    extended: {
      context:
        'As Lead UX Designer and Software Engineer at Future Motion, I saw the same UI problems appear across very different products: a warranty recall tool, a factory touchscreen, a trade-in flow, and partner storefronts. Each team solved layout and component questions independently. The design system initiative was my effort to give design, engineering, and graphic design a single source of truth. I presented the POC and ongoing work to the COO to walk through the library structure, adoption plan, and how the system would reduce repeated UI work across teams. Right now I am also using AI to create an agent that tests transferring components from Figma into Storybook, so the library can move faster from design documentation to coded implementation.',
      goals: [
        'Reduce one-off UI patterns across customer and internal tools',
        'Create reusable Figma components with clear states and variants',
        'Align graphic design brand direction with product UI implementation',
        'Speed up design reviews and engineering handoff',
        'Support both web and mobile product surfaces',
        'Use AI to test an agent workflow for Figma-to-Storybook component transfer',
      ],
      researchSteps: [
        {
          title: 'Interface audit',
          items: [
            'Reviewed live and in-progress products to catalog repeated patterns in forms, navigation, tables, and actions.',
            'Identified the highest-friction inconsistencies slowing design and engineering collaboration.',
          ],
        },
        {
          title: 'Stakeholder alignment',
          items: [
            'Worked with graphic design on brand direction and visual tone for product UI.',
            'Presented the design system POC and library progress to the COO to secure executive buy-in and align on adoption priorities.',
          ],
        },
        {
          title: 'Implementation planning',
          items: [
            'Prioritized base components used most often across warranty, trade-in, sales, and factory tools.',
            'Mapped Figma components to React implementation patterns for smoother handoff.',
          ],
        },
      ],
      styleGuide:
        'The system covered typography scales, color roles for brand and status states, spacing units, button and input variants, form layouts, navigation shells, table patterns, icons, and message banners. Components were built as Figma variants with documented usage notes so teams knew which pattern to reach for in common scenarios.',
      siteMapPages: [
        {
          title: 'Documentation Intro',
          description:
            'Welcome page explaining primitives, components, and how teams should use and maintain the shared Figma library.',
          img: fmDsIntro,
        },
        {
          title: 'Product Sync Table',
          description:
            'Internal tool screen applying the system to complex data tables, status chips, toggles, and sync actions.',
          img: fmDsDesktop17,
        },
        {
          title: 'Button Components',
          description:
            'Button variants across sizes, states, and intent with solid, outlined, and icon-only options.',
          img: fmDsButtons,
        },
        {
          title: 'Icons Library',
          description:
            'Categorized Material Design icon tables with vector previews and implementation naming.',
          img: fmDsIcons,
        },
        {
          title: 'Message Banner',
          description:
            'Error and warning banner patterns with closable and persistent full-width variants.',
          img: fmDsMessageBanner,
        },
        {
          title: 'Loading States',
          description:
            'Standardized fetch and spinner patterns for data-heavy internal screens in light and dark themes.',
          img: fmDsLoadingStates,
        },
      ],
      prototyping: {
        summary:
          'The library was validated by applying it directly to active product work rather than living only as a standalone artifact.',
        items: [
          'Warranty recall and trade-in customer flows',
          'Factory touchscreen and warehouse workflows',
          'Sales platform and budget tracking dashboards',
          'Partner storefront experiences such as f(x)nction',
        ],
      },
      reflection:
        'The hardest part was not drawing components; it was getting teams to adopt them. The system became most useful once it was tied to real products people were already building. Presenting the POC to the COO helped frame the library as a company-wide investment, not just a design-side artifact, and staying close to the graphic design team helped it feel like a shared team asset.',
      futureSteps: [
        'Expand mobile-specific components for factory and field workflows',
        'Continue testing an AI agent that transfers Figma components into Storybook for engineering parity',
        'Add accessibility documentation for focus, contrast, and touch targets',
        'Track adoption and deprecate legacy one-off patterns over time',
      ],
    },
  },
  {
    id: 'stretchie',
    year: '2026',
    title: 'Stretchie',
    subtitle: 'A desktop stretch app for desk workers who need a reminder stretch session throughout the day',
    tags: ['UX Design', 'Product Design', 'Desktop App', 'Figma Make'],
    brief:
      'Designed a Tamagotchi-inspired desktop stretch companion with animated sessions, repeating work timers, and saved routines for people who live at their computers.',
    outcome: 'In daily use · Animated sessions · Repeating alarms',
    img: stretchieLanding,
    role: 'UX Designer & Product Designer',
    duration: 'Personal project (ongoing)',
    team: 'Solo project',
    tools: 'Figma Make',
    heroImg: stretchieLanding,
    problem:
      'As a desktop-first user, I rarely reached for my phone during the workday. Even when I set stretch reminders on my phone, I often ignored them. Over time that led to stiff joints, nerve pain, and tension headaches. I cycled through multiple rounds of physical therapy, but the same pain points returned once I went back to long hours at the desk. Friends who work the same way described the same problem: they know they should stretch, but nothing in their workflow makes it easy or appealing.',
    approach: [
      'Talked with friends who are primarily desktop users to confirm shared pain points around stiffness, tension, and ignored phone reminders.',
      'Audited existing stretching apps and found most felt clinical or boring, with few built for desktop workflows or repeating alarms.',
      'Explored a fun, cutesy visual direction with yellow as an energizing theme, inspired by Tamagotchi nostalgia.',
      'Curated stretches recommended by my PTs and doctor, plus additional examples found online, into a guided session format.',
      'Prototyped the full flow in Figma Make: landing, session builder, alarm setup, animated stretch player, and browser notifications.',
    ],
    process: [
      {
        label: 'Problem & Inspiration',
        body:
          'Stretchie started from my own experience and conversations with desk-bound friends. The goal was not just another stretch timer, but a desktop-native habit helper that could break the cycle of stiffness, carpal tunnel risk, tension headaches, and post-PT relapse.',
        img: stretchieProblemInspiration,
      },
      {
        label: 'Character Art & Illustration',
        body:
          'I created the Stretchie character, icons, and stretch poses in a playful yellow-and-orange palette inspired by Tamagotchi nostalgia. The artwork carries through the alarm clock mascot, session animations, and UI accents so the product feels friendly and energizing at the desk.',
        img: stretchieArtwork,
        portrait: true,
      },
      {
        label: 'Landing & Session Start',
        body:
          'The landing screen introduces Stretchie as a desk-break buddy. Users can build a custom stretch session, connect email to save routines, or jump straight into a saved flow without leaving the desktop.',
        img: stretchieLanding,
      },
      {
        label: 'Build Your Session',
        body:
          'Users pick stretches from six body areas, drag them into a session queue, adjust reps, and see total duration before continuing. The layout keeps browsing and session editing side by side so building a routine feels quick, not like homework.',
        img: stretchieSessionBuilder,
      },
      {
        label: 'Work Timer & Alarm',
        body:
          'The alarm setup supports one-time countdowns or repeating schedules during work hours, with preset intervals and custom reminders. Browser notifications nudge users when it is time to move, with a friendly prompt to start stretching instead of snoozing through stiffness.',
        img: stretchieAlarmSetup,
      },
      {
        label: 'Guided Stretch Session',
        body:
          'During a session, each stretch shows an animated character demo, rep count, and countdown timer. Previous and next controls, plus a pause state, make it easy to follow along without breaking focus from the desktop.',
        img: stretchieActiveStretch,
      },
      {
        label: 'Notifications',
        body:
          'When a work block ends, a playful notification invites the user to stretch now or snooze. The tone stays encouraging and light so the reminder feels like a nudge from a buddy, not a chore.',
        img: stretchieNotification,
      },
    ],
    solution:
      'Stretchie is a desktop-first stretch companion with a playful yellow UI, animated exercise guidance, repeating work alarms, and saved sessions tied to email. It turns stretching from something easy to ignore on your phone into a routine that lives where you actually work.',
    metrics: [
      { value: '6', label: 'Body area categories' },
      { value: 'Daily', label: 'Personal use' },
      { value: 'Repeat', label: 'Work alarms' },
      { value: 'Email', label: 'Saved sessions' },
    ],
    processImgs: [
      stretchieLanding,
      stretchieSessionBuilder,
      stretchieAlarmSetup,
      stretchieActiveStretch,
    ],
    links: [],
    extended: {
      context:
        'Stretchie is a personal product born from years of desk work, recurring physical therapy, and the frustration of phone-based reminders that never stuck. I wanted something that could help me stay as flexible as the people who stretch every day without thinking about it, but designed for a desktop-first life.',
      goals: [
        'Reduce stiffness, tension headaches, and repetitive strain from long desktop sessions',
        'Keep stretch reminders on the desktop instead of a phone users already ignore',
        'Make stretching feel fun, energizing, and nostalgic rather than clinical',
        'Support repeating work timers and saved routines users can return to daily',
        'Include stretches validated through PT, doctor guidance, and trusted online references',
      ],
      siteMapPages: [
        {
          title: 'Landing',
          description:
            'Introduces Stretchie as a desk-break buddy with paths to build a session, save with email, or resume a routine.',
          img: stretchieLanding,
        },
        {
          title: 'Session Builder',
          description:
            'Browse stretches by body area, drag them into a queue, adjust reps, and preview total session time.',
          img: stretchieSessionBuilder,
        },
        {
          title: 'Alarm Setup',
          description:
            'Configure one-time or repeating work timers, custom intervals, and browser notification reminders.',
          img: stretchieAlarmSetup,
        },
        {
          title: 'Active Stretch',
          description:
            'Animated stretch guidance with reps, countdown timer, and simple session navigation.',
          img: stretchieActiveStretch,
        },
      ],
      researchSteps: [
        {
          title: 'Personal & peer research',
          items: [
            'Mapped my own cycle of desk pain, PT treatment, and relapse after returning to long computer sessions.',
            'Talked with friends who are primarily desktop users and heard the same stiffness and reminder fatigue.',
          ],
        },
        {
          title: 'Existing app audit',
          items: [
            'Reviewed mobile and desktop stretching apps and found many felt uninspiring or hard to stick with.',
            'Identified a gap for desktop-native repeating alarms and a more playful visual tone.',
          ],
        },
        {
          title: 'Stretch curation',
          items: [
            'Included exercises shown by my PTs and doctor for neck, shoulder, wrist, and desk-related tension.',
            'Added supplemental stretches from online references as examples for future expansion.',
          ],
        },
      ],
      prototyping: {
        summary:
          'The full experience was designed and prototyped in Figma Make, focusing on animated session flow, alarm setup, and notification moments that feel encouraging at the desk.',
        items: [
          'Tamagotchi-inspired character animations during stretch sessions',
          'Repeating work timer and browser notification flows',
          'Email-connected session save and resume patterns',
        ],
      },
      artwork: {
        summary:
          'Beyond UX and product design, I illustrated Stretchie’s character, icons, and stretch poses to give the app a cohesive, playful identity.',
        img: stretchieArtwork,
      },
      reflection:
        'I now use Stretchie for my own daily stretches and it has genuinely helped me stay more consistent at the desk. The biggest lesson was designing for the environment where the problem actually happens. A phone alarm was never going to fix a desktop problem. I hope to keep building Stretchie out with more stretches and richer routines over time.',
      futureSteps: [
        'Expand the stretch library across all six body categories',
        'Add more animated demos and session templates for common desk pain patterns',
        'Improve browser notification onboarding and snooze behavior',
        'Explore lightweight progress tracking so users can see consistency over time',
      ],
    },
  },
  {
    id: 'fm-data-table-redesign',
    hidden: true,
    year: '2026',
    title: 'Redesigning the data table for internal tools',
    subtitle: 'Making dense operational data easier to scan, filter, and act on across internal workflows',
    tags: ['UX Design', 'Internal Tools', 'Data Tables', 'React'],
    brief:
      'Redesigned the data table patterns used across Future Motion internal tools so teams could review orders, statuses, and records faster with clearer hierarchy, filtering, and row actions.',
    outcome: 'Improved scanability · Shared table patterns · Faster internal reviews',
    img: classicVacationsBooking,
    role: 'Lead UX Designer + Software Engineer',
    duration: '2026 (ongoing)',
    team: 'Engineering and operations stakeholders',
    tools: 'Figma, React',
    heroImg: classicVacationsBooking,
    problem:
      'Internal teams relied on data-heavy tables to manage orders, fulfillment, and operational records. Existing table layouts buried key status information, made filtering inconsistent across tools, and slowed down the reviews that happened dozens of times a day.',
    approach: [
      'Audited table usage across internal applications to find repeated pain points in scanning, sorting, filtering, and row actions.',
      'Mapped the most common data types and actions operators needed at a glance versus on drill-down.',
      'Defined a shared table pattern with clearer column hierarchy, status treatment, and bulk actions.',
      'Prototyped and validated the redesign with customer service and operations workflows before rolling it into active tools.',
    ],
    process: [
      {
        label: 'Audit',
        body:
          'Reviewed how different internal tools presented tabular data and where teams were spending extra time hunting for status, owner, or next-step information.',
        img: classicVacationsAgencyId,
      },
      {
        label: 'Pattern Definition',
        body:
          'Established reusable table layouts for dense operational data, including filter placement, row density, and action affordances that could scale across products.',
        img: classicVacationsBooking,
      },
    ],
    solution:
      'A redesigned data table system that made internal records easier to scan and act on, with shared interaction patterns teams could reuse instead of rebuilding table UX from scratch in every tool.',
    metrics: [
      { value: 'Shared', label: 'Table patterns' },
      { value: 'Faster', label: 'Operational reviews' },
      { value: 'React', label: 'Implementation' },
      { value: 'Multi-team', label: 'Tool adoption' },
    ],
    processImgs: [classicVacationsBooking, classicVacationsAgencyId],
    links: [],
    extended: {
      context:
        'This work focused on one of the most common UI surfaces in Future Motion internal tools: large tables full of order, fulfillment, and status data that teams interact with all day.',
      goals: [
        'Improve scanability for high-volume operational reviews',
        'Standardize filtering, sorting, and row actions across internal tools',
        'Reduce visual noise while keeping critical status information visible',
        'Create reusable table patterns aligned with the broader design system',
      ],
    },
  },
  {
    id: 'onewheel-riding-preference-quiz',
    year: '2025',
    title: 'Onewheel Riding Preference Quiz',
    subtitle: 'A custom shaping quiz for multiple Onewheel models, tailored to each rider’s purchase and riding history',
    tags: ['UX Design', 'Product Design', 'Front-End', 'Customer Experience', 'Figma', 'Graphic Design', 'COO Presentation'],
    brief:
      'Designed and built a custom shaping quiz for multiple Onewheel models that adapts to each rider’s purchase and riding history, helping them dial in traction, terrain, performance, and weight across model-specific color themes like neon yellow for GT and deep blue for XR. Drove a 50% increase in user account registration and more logins back into the app.',
    outcome: '50% registration increase · More app logins · Multi-model themes',
    img: onewheelQuizMain,
    role: 'Lead UX Designer + Software Engineer',
    duration: '2025',
    team: 'Graphic design, COO, marketing, and engineering',
    tools: 'Figma, React',
    heroImg: onewheelQuizMain,
    problem:
      'Onewheel riders could customize board shaping settings across multiple models, but the right traction, terrain, performance, and weight setup was not always obvious, especially when the experience needed to reflect what board they owned and how they actually rode.',
    approach: [
      'Pulled color and typography primitives from the Onewheel mobile app to keep the quiz visually aligned with existing rider-facing products.',
      'Mapped quiz inputs to the four shaping dimensions riders care about most: traction, terrain, performance, and weight.',
      'Applied model-specific color themes that follow Onewheel branding, such as neon yellow for GT, deep blue for XR, and GTS blue for GT-S.',
      'Partnered with the graphic design team and COO to iron out quiz flow details, visual direction, and finalized illustration graphics.',
      'Designed slider and radio patterns with dynamic illustrations that respond to rider selections.',
      'Prototyped model theme variants in Figma, including annotated interaction states and mobile quiz modules.',
      'Built the quiz frontend in React, translating the Figma flow into interactive sliders, radio inputs, and dynamic illustration states.',
      'Presented the quiz POC and design progress to the COO for feedback and alignment before moving toward launch.',
    ],
    process: [
      {
        label: 'Primitives & Tokens',
        body:
          'Documented color and font primitives from the mobile app, including board theme colors such as neon yellow for GT, deep blue for XR, and GTS blue for GT-S, plus MONO45 / ABCFavorit typography, so each model’s quiz felt native to Onewheel branding.',
        img: onewheelQuizPrimitives,
      },
      {
        label: 'Single-Page Quiz Flow',
        body:
          'Designed and implemented a single-page slider form that adapts to each rider’s Onewheel model with traction, terrain, performance, and weight sections, model-specific color themes, hover states, dynamic graphics, and a clear submit action in React.',
        img: onewheelQuizMain,
      },
      {
        label: 'Quiz Modules',
        body:
          'Built reusable quiz item modules for vertical lists, horizontal scales, and icon-based questions, with selected, default, and hover states across model-specific themes such as GT neon yellow and XR deep blue.',
        img: onewheelQuizModules,
      },
      {
        label: 'Illustrations & Icons',
        body:
          'Created line-art icons and dynamic illustrations for traction, terrain, performance, and weight, then worked with the graphic design team and COO to refine the finalized graphics, including variants that update based on rider input such as mellow-to-aggressive performance visuals.',
        img: onewheelQuizIcons,
      },
    ],
    solution:
      'A customer-facing custom shaping quiz that translated rider preferences into actionable settings across multiple Onewheel models, using purchase-aware flows, four shaping dimensions, model-specific color themes, responsive illustrations, and a React frontend. The experience drove a 50% increase in user account registration and brought more riders back into the app through personalized GT, GT-S, XR, and other model variants.',
    metrics: [
      { value: '50%', label: 'Registration increase' },
      { value: 'More', label: 'App logins' },
      { value: '4', label: 'Shaping dimensions' },
      { value: 'Multi-model', label: 'Color themes' },
    ],
    processImgs: [
      onewheelQuizPrimitives,
      onewheelQuizMain,
      onewheelQuizModules,
      onewheelQuizIcons,
    ],
    links: [],
    extended: {
      context:
        'The quiz was created to help riders move from “I know how I ride” to “here are the shaping settings that fit me.” By anchoring the experience in Onewheel’s existing mobile color and type system, and tailoring each flow to the rider’s purchase and riding history, the quiz made traction, terrain, performance, and weight choices easier to understand. Each model received its own visual theme, such as neon yellow for GT and deep blue for XR, so the experience felt native to the board they owned. After launch, the quiz helped drive a 50% increase in user account registration and more logins back into the app.',
      goals: [
        'Help riders choose shaping settings with more confidence',
        'Align quiz visuals with Onewheel mobile app primitives',
        'Support multiple Onewheel models with purchase-aware theme variants',
        'Apply model-specific color themes such as GT neon yellow and XR deep blue',
        'Use dynamic illustrations to make abstract settings feel concrete',
        'Increase account registration and bring riders back into the app',
        'Build a responsive React frontend that matches the approved Figma flow',
        'Finalize quiz graphics and interaction details with graphic design and the COO',
      ],
      researchSteps: [
        {
          title: 'Graphic design collaboration',
          items: [
            'Partnered with the graphic design team to refine quiz visuals, illustration direction, and finalized graphics.',
            'Iterated on traction, terrain, performance, and weight graphics so they felt on-brand and easy to understand.',
          ],
        },
        {
          title: 'COO review & POC presentation',
          items: [
            'Worked with the COO to iron out quiz flow details, content priorities, and visual polish.',
            'Presented the quiz POC to the COO to walk through the shaping experience and gather executive feedback.',
          ],
        },
      ],
      reflection:
        'The quiz became much stronger once graphic design and the COO were involved in shaping the details. Model-specific themes like neon yellow for GT and deep blue for XR made each version feel true to Onewheel branding, and tying the flow to purchase and riding history made the shaping dimensions feel personal instead of generic. The 50% lift in account registration and increase in app logins showed that riders were willing to come back when the experience felt tailored to their board.',
      siteMapPages: [
        {
          title: 'Primitives & Tokens',
          description:
            'Board-specific color themes pulled from Onewheel branding, including neon yellow for GT and deep blue for XR.',
          img: onewheelQuizPrimitives,
        },
        {
          title: 'Model Quiz Flow',
          description:
            'Purchase-aware single-page slider form with traction, terrain, performance, weight, and model-specific themes.',
          img: onewheelQuizMain,
        },
        {
          title: 'Quiz Modules',
          description:
            'Reusable quiz item patterns with vertical lists, horizontal scales, and icon-based questions.',
          img: onewheelQuizModules,
        },
        {
          title: 'Illustrations & Icons',
          description:
            'Line-art icons and dynamic illustrations that respond to rider selections.',
          img: onewheelQuizIcons,
        },
      ],
    },
  },
  {
    id: 'fxnction',
    year: '2024',
    title: 'f(x)nction',
    subtitle: 'Increasing wrist guard sales with an easy to use Shopify storefront',
    tags: ['Shopify', 'UX Design', 'Front-End', 'E-commerce', 'B2B'],
    brief:
      'Built a B2B Shopify website with a coworker to help the owner of f(x)nction sell more wrist guards with accurate product information and hands-off order management.',
    outcome: '50% sales increase · Shopify storefront live',
    img: fxnctionHero,
    role: 'Frontend Developer and UX Designer',
    duration: '2 weeks',
    team: 'Team of 2',
    tools: 'Figma, Shopify Developer Tools',
    heroImg: fxnctionHero,
    problem:
      'With a new influx of orders, the owner could not keep up with fulfillment and record data on a spreadsheet. He needed a better bookkeeping solution and a faster way for customers to buy wrist guards. With a one week build window, a quick but good solution was needed.',
    approach: [
      'Clarified B2B partnership requirements between f(x)nction and Future Motion, including product details, target riders, and storefront display needs.',
      'Reviewed a design sketch from the graphic design team and matched Shopify templates to their vision.',
      'Researched retailer options and chose Shopify for its global adoption, order data storage, and developer tooling.',
      'Learned Shopify Developer Tools through online courses to customize templates and ship under a tight deadline.',
    ],
    process: [
      {
        label: 'Overview',
        body:
          'As a team of two, my coworker and I created a B2B Shopify website to help the owner of f(x)nction sell more wrist guards with more accurate information for records and a hands-off ordering process. f(x)nction is in a brand partnership with Future Motion to sell wrist guards to Onewheel riders.',
        img: fxnctionWristGuards,
      },
      {
        label: 'Solution',
        body:
          'Shopify increased purchasing accessibility by 50%, and users reported that buying through the site was much easier than ordering over a spreadsheet or email. Extra diagnostic tools were also built for the owner using Shopify APIs to improve visibility into warehouse handling and shipment.',
        img: fxnctionRetail,
      },
      {
        label: 'Site Map',
        body:
          'The storefront centered on four main paths from Home: product details, about the owner, contact, and cart. Each page was designed to be scannable and easy to navigate on desktop and mobile.',
        img: fxnctionHome,
      },
      {
        label: 'Research',
        body:
          'I went through product and audience questions with the project owner, reviewed the graphic design team\'s sketch, and read f(x)nction feedback on Reddit to understand what makes the brand trusted with riders.',
      },
      {
        label: 'Prototyping',
        body:
          'Most prototyping happened in code. Figma mock-ups were used to comment on design choices and keep a back-and-forth conversation with the graphic design team, including screenshots from Shopify Developer Tools.',
      },
      {
        label: 'Final Decisions',
        body:
          'The owner was happy with how the site came together and liked that Shopify made analytics and shipment tracking easier without being hands-on. Wrist guard sales improved by 50%. Working with the graphic design team for the first time also helped me learn what to consider in future design reviews.',
      },
    ],
    solution:
      'A Shopify storefront that replaced spreadsheet ordering, made wrist guard purchases easier for riders, and gave the owner better sales and fulfillment visibility through built-in analytics and custom API tooling.',
    metrics: [
      { value: '50%', label: 'Sales increase' },
      { value: 'Shopify', label: 'Platform chosen' },
      { value: '2 wks', label: 'Timeline' },
      { value: '2', label: 'Person team' },
    ],
    processImgs: [fxnctionHome, fxnctionProduct, fxnctionAbout, fxnctionCart],
    links: [{ label: 'Access the Site', url: 'https://fxnctiongear.com/' }],
    extended: {
      context:
        'f(x)nction is in a B2B brand partnership with Future Motion to sell wrist guards to Onewheel riders. Before this project, orders were tracked manually and customers placed purchases through spreadsheets or email.',
      siteMapPages: [
        {
          title: 'Home Page',
          description:
            'Big and bold picture of the wrist guards and easy to access navigation for the main purposes.',
          img: fxnctionHome,
        },
        {
          title: 'Product Info',
          description:
            'Information about the product, interesting images, and the size charts.',
          img: fxnctionProduct,
        },
        {
          title: 'About the Owner',
          description: 'About the owner of f(x)nction for familiarity.',
          img: fxnctionAbout,
        },
        {
          title: 'Cart',
          description: 'Easy to scan through for the user.',
          img: fxnctionCart,
        },
      ],
      researchSteps: [
        {
          title: 'Asking questions',
          items: [
            'Walked through B2B product, audience, and display requirements with the project owner and Future Motion stakeholders.',
            'Read about f(x)nction on Reddit to understand what riders value about the brand.',
          ],
        },
        {
          title: 'Design sketch review',
          items: [
            'Reviewed a design sketch from the graphic design team.',
            'Looked up Shopify templates that matched the team\'s original sketch.',
          ],
        },
        {
          title: 'Shopify developer tooling',
          items: [
            'Learned how to edit Shopify templates with Shopify Developer Tools.',
            'Took online courses to ship the build on a one week timeline.',
          ],
        },
      ],
      prototyping: {
        summary:
          'Most prototyping was done in code. Figma mock-ups supported design review and async feedback with the graphic design team.',
        items: [
          'Graphic design team\'s design direction',
          'Screenshots of the Shopify developer tool while building',
        ],
      },
      reflection:
        'Getting to work with the graphic design team for the first time helped me learn how they think and what to take into consideration during future design reviews. The owner appreciated having analytics and shipment visibility without staying hands-on for every order.',
    },
  },
  {
    id: 'classic-vacations',
    year: '2019-2020',
    title: 'Classic Vacations',
    subtitle: 'Travel website redesign & style guide',
    tags: ['UX Design', 'Web Dev', 'Design System', 'React'],
    brief:
      'Wireframed and built a new site redesign with the UX designer and offshore dev team. Created a style guide to organize the brand and introduced React to the stack.',
    outcome: 'Live redesign · Style guide delivered',
    img: projimg1,
    role: 'Web Developer',
    duration: 'Jan 2019 - Sept 2020',
    team: '1 designer · offshore dev team · solo engineer (first 4 months)',
    heroImg: projimg1,
    problem:
      'Classic Vacations needed a full website overhaul. The existing site lacked consistent branding, had fragmented documentation, and relied on heavy CDN libraries. As the only engineer for the first four months, I had to learn Drupal and PHP while coordinating with a remote team.',
    approach: [
      'Wireframed new flows with the UX designer and aligned on a component-based visual language.',
      'Built a style guide documenting typography, color, and UI patterns for the redesign.',
      'Introduced React to the team as a path toward a more maintainable front-end stack.',
      'Consolidated CDN dependencies into leaner JavaScript bundles.',
    ],
    process: [
      {
        label: 'Discovery & Wireframes',
        body: 'Partnered with the UX designer to map key user journeys for vacation browsing and booking. Wireframes became the shared language between design, engineering in India, and stakeholders.',
        img: classicVacationsAgencyId,
      },
      {
        label: 'Style Guide',
        body: 'Documented the new brand system, type scale, color palette, button styles, and form patterns, so both the design site and production build stayed aligned.',
        img: projimg1,
      },
      {
        label: 'Build & Handoff',
        body: 'Developed front-end features on Drupal/PHP while maintaining a separate design prototype site. Created JIRA documentation for features that previously had none.',
      },
    ],
    solution:
      'A cohesive redesign with a published style guide, improved front-end patterns, and documentation that made ongoing development tractable for the whole team.',
    metrics: [
      { value: '2', label: 'Live sites shipped' },
      { value: '1', label: 'Style guide created' },
      { value: 'React', label: 'Framework introduced' },
      { value: '100%', label: 'New docs coverage' },
    ],
    processImgs: [projimg1, classicVacationsBooking],
    links: [
      { label: 'Design site', url: 'http://classicvacationsdesign.com/' },
      { label: 'Production site', url: 'http://classicvacations.com/' },
    ],
  },
  {
    id: 'san-diego-zoo',
    year: '2021',
    title: 'San Diego Zoo',
    subtitle: 'Conservation-focused site redesign',
    tags: ['UX Research', 'UI Design', 'Wireframing', 'Motion Design'],
    brief:
      'A conceptual redesign of the San Diego Zoo website during COVID-19, surfacing live cams, conservation impact, and transparent donation paths for visitors who could no longer attend in person.',
    outcome: '41 survey responses · 5 interviews · Hi-fi prototype',
    img: sdzoodesktopmain,
    role: 'UI Designer & UX Researcher',
    duration: 'Feb 2021',
    team: 'Solo case study (UC Irvine UX/UI program)',
    heroImg: sdzoodesktopmain,
    problem:
      'When COVID-19 shut down in-person visits, the San Diego Zoo lost its primary way of connecting with the public. Traffic shifted online, but the existing site treated live cams, conservation programs, and donations as secondary pages buried deep in the navigation. Users who wanted to support wildlife from home had no clear path to understand where their money went or why membership still mattered.',
    approach: [
      'Surveyed 41 participants on donation habits, membership motivations, and what builds trust in nonprofit wildlife organizations.',
      'Conducted 5 moderated interviews to dig into emotional drivers, education for children, tangible impact, and supporting endangered species from afar.',
      'Synthesized findings into two primary personas and a set of "How Might We" prompts to guide ideation.',
      'Mapped user flows for live cam discovery, donation, and membership, then prototyped a conservation-first homepage and impact pages.',
    ],
    process: [
      {
        label: 'Research',
        body:
          'Kicked off with a mixed-methods study: a broad survey to quantify donation behavior and short interviews to capture the "why" behind those numbers. The goal was to understand what remote visitors needed from the zoo when they could not walk through the gates.',
        img: sdzoodesktopmain,
      },
      {
        label: 'Define',
        body:
          'Clustered survey and interview data into themes, transparency, education, proximity, and cause-driven giving. Defined two personas (the Remote Supporter and the Local Family) and reframed the design challenge around remote engagement.',
        img: storyboard,
      },
      {
        label: 'Ideate',
        body:
          'Sketched user flows for three critical paths: finding and watching live cams, understanding conservation impact before donating, and evaluating membership value. Restructured the information architecture so conservation content sits at the top level, not three clicks deep.',
        img: flowchart,
      },
      {
        label: 'Prototype & Style',
        body:
          'Built hi-fi desktop prototypes for a redesigned homepage, conservation impact hub, and streamlined donation flow. Created a style guide covering typography, color, and photography treatment to keep the experience warm and trustworthy without feeling like a generic nonprofit template.',
        img: sdzoodesktopmain,
        mobileViews: [
          { src: sdzMobileMenu, alt: 'Mobile navigation menu' },
          { src: sdzMobileDonationsLanding, alt: 'Mobile donations landing page' },
          { src: sdzMobileDonateMonkey, alt: 'Mobile donation amount: monkey' },
          { src: sdzMobileDonateElephant, alt: 'Mobile donation amount: elephant' },
          { src: sdzMobileDonateRhino, alt: 'Mobile donation amount: rhino' },
        ],
      },
    ],
    solution:
      'A conservation-first site structure that leads with live cams and impact stories, shows exactly where donations and memberships go, and gives remote supporters, especially parents and cause-driven donors, a reason to engage even when they cannot visit in person.',
    metrics: [
      { value: '41', label: 'Survey responses' },
      { value: '5', label: 'User interviews' },
      { value: '80%', label: 'Want spending transparency' },
      { value: '82%', label: 'Open to future giving' },
    ],
    processImgs: [sdzoodesktopmain, storyboard, flowchart],
    links: [],
    extended: {
      context:
        'This was an independent case study completed in February 2021 as part of my UX/UI design coursework at UC Irvine. COVID-19 had dramatically reduced foot traffic to zoos nationwide. The San Diego Zoo already offered live animal cams and conservation programs online, but those features were hard to find. The redesign challenge: how do you keep people connected to wildlife, educated, and willing to give when the front gate is closed?',
      goals: [
        'Surface live cams and virtual experiences on the homepage',
        'Make conservation programs and donation impact visible and understandable',
        'Rebuild trust around where donations and membership fees go',
        'Support both local visitors planning a return trip and remote supporters giving from afar',
      ],
      survey: {
        count: 41,
        findings: [
          {
            stat: '80%',
            text: 'of respondents said they donate when they know where the money goes, transparency is the primary trust signal.',
          },
          {
            stat: '10%',
            text: 'mentioned tax breaks as a donation motivator; cause alignment mattered far more than financial incentive.',
          },
          {
            stat: '82%',
            text: 'had not yet donated to animal or wildlife causes but expressed interest in doing so in the future.',
          },
          {
            stat: 'Majority',
            text: 'would consider membership if fees clearly supported conservation quality, family-friendly activities, or children\'s education programs.',
          },
        ],
      },
      interviews: {
        count: 5,
        quotes: [
          {
            text: 'Donated to places because her kids enjoyed them and they were educational programs.',
            theme: 'Family & education',
          },
          {
            text: 'Wants to see a tangible way of how money is spent or testimonials.',
            theme: 'Transparency',
          },
          {
            text: 'Donates to support a cause, not really looking for personal benefits.',
            theme: 'Cause-driven giving',
          },
          {
            text: 'Will join membership if interested and lived close to the zoo.',
            theme: 'Local proximity',
          },
          {
            text: 'Would like to help animals from far away, especially endangered species.',
            theme: 'Remote impact',
          },
        ],
      },
      insights: [
        'Remote users need an emotional hook before a financial ask, live cams and animal stories are the entry point, not the donate button.',
        'Parents are a key audience: educational value for children drives both visits and giving decisions.',
        'Transparency beats perks, users want impact reports and testimonials, not discount coupons.',
        'Membership and donation are different mental models: locals think visits; remote users think conservation impact.',
        'Endangered species content creates urgency for users who cannot physically visit the zoo.',
      ],
      personas: [
        {
          name: 'Maya, Remote Supporter',
          description:
            'Lives out of state, discovered the zoo through social media live cams during lockdown. Wants to help endangered species but needs to see proof of impact before donating.',
          needs: [
            'Easy access to live cams from the homepage',
            'Clear breakdown of how donations are used',
            'Stories about specific animals and conservation wins',
          ],
        },
        {
          name: 'James, Local Parent',
          description:
            'Has young children who love the zoo. Membership makes sense if it funds educational programs and family activities, not just parking discounts.',
          needs: [
            'Visible kids\' programs and camp information',
            'Membership benefits tied to conservation, not just admission',
            'Confidence the zoo is safe to return to post-COVID',
          ],
        },
      ],
      howMightWe: [
        'How might we help remote visitors feel connected to animals without an in-person visit?',
        'How might we show donation impact in a way that builds trust before asking for money?',
        'How might we make live cams a front-door experience instead of a buried feature?',
        'How might we frame membership as supporting conservation, not just buying admission?',
        'How might we highlight endangered species programs to motivate giving from afar?',
      ],
      userFlows: [
        {
          title: 'Live cam discovery',
          description:
            'Homepage → featured cam carousel → full cam viewer with animal facts → related conservation story → optional donate CTA. Cam content always appears before any financial ask.',
        },
        {
          title: 'Donation path',
          description:
            'Conservation story → impact breakdown (where funds go) → testimonials → donation amount selection → confirmation with specific animal/program attribution.',
        },
        {
          title: 'Membership evaluation',
          description:
            'Membership page → conservation + education benefits first → pricing tiers → FAQ on how fees support wildlife programs → sign-up flow.',
        },
      ],
      iaNotes:
        'Restructured top-level navigation around user intent: Watch (live cams), Learn (conservation & education), Support (donate & membership), and Visit (planning for when gates reopen). Previously, conservation and cams lived under nested "Animals" and "Support" menus, three or more clicks from the homepage.',
      styleGuide:
        'Developed a warm, nature-forward visual system: earthy greens and sand tones, large photography of animals in habitat, accessible sans-serif type for body copy, and a display face for conservation headlines. Donation CTAs use a distinct but harmonious accent color so they feel inviting, not aggressive.',
      testing: {
        summary:
          'Ran informal usability walkthroughs with 3 classmates on the hi-fi prototype, focusing on whether users could find live cams and understand donation impact within 60 seconds.',
        findings: [
          'Users found live cams within 2 clicks after the homepage redesign (previously 4+ in the current site audit).',
          'The conservation impact page reduced "where does my money go?" questions, 3 of 3 testers cited the breakdown section as most convincing.',
          'Donate button placement on cam pages felt natural when preceded by an animal story, but pushy when shown before any content loaded.',
        ],
      },
      futureSteps: [
        'Test mobile layouts, most live cam traffic is likely on phones and tablets.',
        'Validate donation flow with real San Diego Zoo stakeholders or nonprofit UX practitioners.',
        'Explore personalization: surface species or cam feeds based on past viewing behavior.',
        'Add accessibility audit for cam video players (captions, keyboard navigation, reduced motion).',
        'Prototype a "conservation dashboard" showing cumulative donor impact over time.',
      ],
    },
  },
];

export const visibleProjects = projects.filter((project) => !project.hidden);
