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

export const projects = [
  {
    id: 'stretchie',
    year: '2025-2026',
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
    id: 'fxnction',
    year: '2024',
    title: 'f(x)nction',
    subtitle: 'Increasing wrist guard sales with an easy to use Shopify storefront',
    tags: ['Shopify', 'UX Design', 'Front-End', 'E-commerce'],
    brief:
      'Built a Shopify website with a coworker to help the owner of f(x)nction sell more wrist guards with accurate product information and hands-off order management.',
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
      'Asked the project owner about product requirements, target age group, and what needed to be displayed on the storefront.',
      'Reviewed a design sketch from the graphic design team and matched Shopify templates to their vision.',
      'Researched retailer options and chose Shopify for its global adoption, order data storage, and developer tooling.',
      'Learned Shopify Developer Tools through online courses to customize templates and ship under a tight deadline.',
    ],
    process: [
      {
        label: 'Overview',
        body:
          'As a team of two, my coworker and I created a Shopify website to help the owner of f(x)nction sell more wrist guards with more accurate information for records and a hands-off ordering process. f(x)nction is in a brand partnership with Future Motion to sell wrist guards to Onewheel riders.',
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
        'f(x)nction is in a brand partnership with Future Motion to sell wrist guards to Onewheel riders. Before this project, orders were tracked manually and customers placed purchases through spreadsheets or email.',
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
            'Walked through product, audience, and display requirements with the project owner.',
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
    tags: ['UX Design', 'Web Dev', 'Drupal', 'React'],
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
    tags: ['UX Research', 'UI Design', 'Wireframing', 'Prototyping'],
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
          { src: sdzMobileDonateMonkey, alt: 'Mobile donation amount — monkey' },
          { src: sdzMobileDonateElephant, alt: 'Mobile donation amount — elephant' },
          { src: sdzMobileDonateRhino, alt: 'Mobile donation amount — rhino' },
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
