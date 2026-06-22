export const uxTheme = {
  colors: {
    background: '#FBF3E2',
    foreground: '#2C1A0F',
    card: '#FFF5D6',
    mutedForeground: '#7A5230',
    accent: '#C47A1E',
    accentBlue: '#2E6B9E',
    accentGreen: '#3A7A50',
    border: 'rgba(92, 51, 23, 0.18)',
    statusGreen: '#1A5432',
    statusGreenBg: '#D9F0E4',
    statusGreenBorder: '#9ED4B4',
    hoverYellow: '#FEF3CC',
    hoverYellowBorder: '#F5DC88',
    hoverBrown: '#7A5010',
    overlay: 'rgba(44, 26, 15, 0.72)',
    overlayLight: 'rgba(44, 26, 15, 0.12)',
    navBg: 'rgba(251, 243, 226, 0.94)',
    socialHoverBg: '#FDDDD9',
    socialHoverColor: '#9B2B1E',
    socialHoverBorder: '#F5B8B2',
  },
  fonts: {
    display: "'Bricolage Grotesque', sans-serif",
    body: "'Instrument Sans', sans-serif",
    mono: "'DM Mono', monospace",
  },
  maxWidth: '1280px',
  navHeight: '56px',
};

export const tagColors = [
  { bg: '#FDDDD9', color: '#9B2B1E', border: '#F5B8B2' },
  { bg: '#FEF3CC', color: '#7A5010', border: '#F5DC88' },
  { bg: '#D9EAF7', color: '#1A4A72', border: '#A8CCE8' },
  { bg: '#D9F0E4', color: '#1A5432', border: '#9ED4B4' },
  { bg: '#F2E0D0', color: '#5C2E12', border: '#DEB898' },
];

export const tagColor = (index) => tagColors[index % tagColors.length];
