import projimg1 from '../../images/proj1-img.jpg';
import projimg2 from '../../images/proj2-img.jpg';
import projimg3 from '../../images/proj3-img.jpg';
import sdzoodesktopmain from '../../images/sdzoodesktopmain.png';
import flowchart from '../../images/flowchart.jpg';
import storyboard from '../../images/storyboard.jpg';

export const projects = [
  {
    id: 'classic-vacations',
    year: '2019–2020',
    title: 'Classic Vacations',
    subtitle: 'Travel website redesign & style guide',
    tags: ['UX Design', 'Web Dev', 'Drupal', 'React'],
    brief:
      'Wireframed and built a new site redesign with the UX designer and offshore dev team. Created a style guide to organize the brand and introduced React to the stack.',
    outcome: 'Live redesign · Style guide delivered',
    img: projimg1,
    role: 'Web Developer',
    duration: 'Jan 2019 – Sept 2020',
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
        img: projimg1,
      },
      {
        label: 'Style Guide',
        body: 'Documented the new brand system — type scale, color palette, button styles, and form patterns — so both the design site and production build stayed aligned.',
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
    processImgs: [projimg1, projimg3],
    links: [
      { label: 'Design site', url: 'http://classicvacationsdesign.com/' },
      { label: 'Production site', url: 'http://classicvacations.com/' },
    ],
  },
  {
    id: 'nook-net',
    year: '2020',
    title: 'Nook Net',
    subtitle: 'Animal Crossing guide site',
    tags: ['Front-End', 'Volunteer', 'PHP', 'Community'],
    brief:
      'Joined a volunteer dev team to build a guide site for Animal Crossing players. Built collection checklist pages and UI components for browsing in-game items.',
    outcome: 'Live community site · Collections pages',
    img: projimg2,
    role: 'Front-End Developer',
    duration: '2020',
    team: 'Volunteer dev team',
    heroImg: projimg2,
    problem:
      'Animal Crossing: New Horizons players needed a reliable, friendly guide for tracking collections — bugs, fish, fossils, and more. Existing wikis were dense and hard to use on mobile during gameplay.',
    approach: [
      'Collaborated with a distributed volunteer team over Discord.',
      'Built collection checklist UI patterns players could use to track progress.',
      'Prototyped interactions in CodePen before integrating into the PHP codebase.',
    ],
    process: [
      {
        label: 'Community Research',
        body: 'Talked with players about what they wished existing guides did better — quick lookup, checklist tracking, and mobile-friendly layouts while playing.',
        img: projimg2,
      },
      {
        label: 'UI Prototyping',
        body: 'Explored card layouts and checklist interactions in CodePen. Focused on scannable grids and clear completion states for long item lists.',
        img: projimg2,
      },
      {
        label: 'Collections Build',
        body: 'Implemented collection pages with filterable item grids. Pages are designed to grow as new game content is released.',
      },
    ],
    solution:
      'A community-driven guide with collection checklists and a approachable visual style — built by fans, for fans.',
    metrics: [
      { value: 'Live', label: 'Site at nooknet.net' },
      { value: '3+', label: 'Collection types' },
      { value: 'Mobile', label: 'First layout priority' },
      { value: 'Open', label: 'Volunteer-built' },
    ],
    processImgs: [projimg2],
    links: [
      { label: 'View Nook Net', url: 'https://nooknet.net/' },
      { label: 'UI prototype', url: 'https://codepen.io/ichiknees/pen/vYNeyjz' },
    ],
  },
  {
    id: 'san-diego-zoo',
    year: '2021',
    title: 'San Diego Zoo',
    subtitle: 'Conservation-focused site redesign',
    tags: ['UX Research', 'UI Design', 'Wireframing', 'Prototyping'],
    brief:
      'A conceptual redesign of the San Diego Zoo website during COVID-19 — surfacing live cams, conservation impact, and transparent donation paths for visitors who could no longer attend in person.',
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
      'Conducted 5 moderated interviews to dig into emotional drivers — education for children, tangible impact, and supporting endangered species from afar.',
      'Synthesized findings into two primary personas and a set of "How Might We" prompts to guide ideation.',
      'Mapped user flows for live cam discovery, donation, and membership — then prototyped a conservation-first homepage and impact pages.',
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
          'Clustered survey and interview data into themes — transparency, education, proximity, and cause-driven giving. Defined two personas (the Remote Supporter and the Local Family) and reframed the design challenge around remote engagement.',
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
      },
    ],
    solution:
      'A conservation-first site structure that leads with live cams and impact stories, shows exactly where donations and memberships go, and gives remote supporters — especially parents and cause-driven donors — a reason to engage even when they cannot visit in person.',
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
        'This was an independent case study completed in February 2021 as part of my UX/UI design coursework at UC Irvine. COVID-19 had dramatically reduced foot traffic to zoos nationwide. The San Diego Zoo already offered live animal cams and conservation programs online, but those features were hard to find. The redesign challenge: how do you keep people connected to wildlife, educated, and willing to give — when the front gate is closed?',
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
            text: 'of respondents said they donate when they know where the money goes — transparency is the primary trust signal.',
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
        'Remote users need an emotional hook before a financial ask — live cams and animal stories are the entry point, not the donate button.',
        'Parents are a key audience: educational value for children drives both visits and giving decisions.',
        'Transparency beats perks — users want impact reports and testimonials, not discount coupons.',
        'Membership and donation are different mental models: locals think visits; remote users think conservation impact.',
        'Endangered species content creates urgency for users who cannot physically visit the zoo.',
      ],
      personas: [
        {
          name: 'Maya — Remote Supporter',
          description:
            'Lives out of state, discovered the zoo through social media live cams during lockdown. Wants to help endangered species but needs to see proof of impact before donating.',
          needs: [
            'Easy access to live cams from the homepage',
            'Clear breakdown of how donations are used',
            'Stories about specific animals and conservation wins',
          ],
        },
        {
          name: 'James — Local Parent',
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
        'Restructured top-level navigation around user intent: Watch (live cams), Learn (conservation & education), Support (donate & membership), and Visit (planning for when gates reopen). Previously, conservation and cams lived under nested "Animals" and "Support" menus — three or more clicks from the homepage.',
      styleGuide:
        'Developed a warm, nature-forward visual system: earthy greens and sand tones, large photography of animals in habitat, accessible sans-serif type for body copy, and a display face for conservation headlines. Donation CTAs use a distinct but harmonious accent color so they feel inviting, not aggressive.',
      testing: {
        summary:
          'Ran informal usability walkthroughs with 3 classmates on the hi-fi prototype, focusing on whether users could find live cams and understand donation impact within 60 seconds.',
        findings: [
          'Users found live cams within 2 clicks after the homepage redesign (previously 4+ in the current site audit).',
          'The conservation impact page reduced "where does my money go?" questions — 3 of 3 testers cited the breakdown section as most convincing.',
          'Donate button placement on cam pages felt natural when preceded by an animal story, but pushy when shown before any content loaded.',
        ],
      },
      futureSteps: [
        'Test mobile layouts — most live cam traffic is likely on phones and tablets.',
        'Validate donation flow with real San Diego Zoo stakeholders or nonprofit UX practitioners.',
        'Explore personalization: surface species or cam feeds based on past viewing behavior.',
        'Add accessibility audit for cam video players (captions, keyboard navigation, reduced motion).',
        'Prototype a "conservation dashboard" showing cumulative donor impact over time.',
      ],
    },
  },
  {
    id: 'future-motion',
    year: '2020',
    title: 'Future Motion',
    subtitle: 'Factory operations internal tool',
    tags: ['React', 'Front-End', 'UX', 'Internal Tools'],
    brief:
      'Built front-end features for an internal web tool that sped up factory picking, packing, and shipping for OneWheel EV skateboards — making the workflow roughly 5× faster.',
    outcome: '5× faster workflow · React UI',
    img: projimg3,
    role: 'Software Engineer',
    duration: 'Oct – Dec 2020',
    team: '1 designer · engineering team',
    heroImg: projimg3,
    problem:
      'Factory staff used a slow internal tool for order fulfillment. UI friction at each step — picking, packing, shipping — added minutes per order at scale.',
    approach: [
      'Discussed UI improvements with the team before development to reduce rework.',
      'Built React front-end features focused on scan-and-confirm workflows.',
      'Prioritized large touch targets and clear status feedback for warehouse use.',
    ],
    process: [
      {
        label: 'UX Discovery',
        body: 'Mapped the existing picking and packing flow with operators. Identified steps where confirmation dialogs and status visibility caused the most delay.',
        img: projimg3,
      },
      {
        label: 'Interface Build',
        body: 'Implemented streamlined React views for each stage of fulfillment. Reduced clicks per order and made error states obvious before packages ship.',
      },
    ],
    solution:
      'A faster, clearer internal tool that cut fulfillment time dramatically — designed for real warehouse conditions, not desk workflows.',
    metrics: [
      { value: '5×', label: 'Faster fulfillment' },
      { value: 'React', label: 'Front-end stack' },
      { value: '3', label: 'Workflow stages' },
      { value: '0', label: 'Ambiguous handoffs' },
    ],
    processImgs: [projimg3],
    links: [],
  },
];
