const shared = {
  fonts: {
    display: "'Host Grotesk', 'Open Sans', sans-serif",
    body: "'Host Grotesk', 'Open Sans', sans-serif",
    mono: "'JetBrains Mono', 'Open Sans', monospace",
  },
  typography: {
    baseSize: '16px',
    headingSize: '1.5rem',
    headingWeight: 600,
    bodyWeight: 400,
    bodyBoldWeight: 600,
    heroSize: 'clamp(2.75rem, 7vw, 4.5rem)',
    displayLetterSpacing: '-0.03em',
    displayScaleX: 1,
  },
  maxWidth: '920px',
  navHeight: '64px',
  radius: '12px',
};

export const lightTheme = {
  ...shared,
  mode: 'light',
  colors: {
    background: '#EBE4DA',
    foreground: '#2A241C',
    card: '#FFFBF5',
    mutedForeground: '#6A5E52',
    accent: '#ED3801',
    accentBlue: '#0E75DD',
    accentOrange: '#F55524',
    accentRed: '#ED3801',
    placeholder: '#DDD4C8',
    border: 'rgba(42, 36, 28, 0.14)',
    hoverYellow: '#F3E6C8',
    hoverYellowBorder: '#D9C9B0',
    hoverBrown: '#961001',
    navBg: 'rgba(235, 228, 218, 0.94)',
    navLink: '#2A241C',
    navLinkActive: '#ED3801',
    navLinkHover: '#961001',
    tagYellow: '#F3E6C8',
    footerBg: 'transparent',
    toggleTrack: '#FFFBF5',
    toggleBorder: '#1A2536',
    toggleSun: '#F4C16E',
  },
};

export const darkTheme = {
  ...shared,
  mode: 'dark',
  colors: {
    background: '#1A2639',
    foreground: '#FDF5E6',
    card: '#223148',
    mutedForeground: '#C8BDB0',
    accent: '#FFB38A',
    accentBlue: '#8ECAE6',
    accentOrange: '#FFB38A',
    accentRed: '#FFB38A',
    placeholder: '#2A3A52',
    border: 'rgba(253, 245, 230, 0.18)',
    hoverYellow: '#2A3A52',
    hoverYellowBorder: '#FFB38A',
    hoverBrown: '#FFB38A',
    navBg: 'rgba(26, 38, 57, 0.92)',
    navLink: '#FDF5E6',
    navLinkActive: '#FFB38A',
    navLinkHover: '#FFB38A',
    tagYellow: '#FFB38A',
    footerBg: 'transparent',
    toggleTrack: '#1A2536',
    toggleBorder: '#EBD6C1',
    toggleSun: '#FFFFFF',
  },
};

export const tagColors = [
  { bg: '#ED3801', color: '#FFFFFF' },
  { bg: '#0E75DD', color: '#FFFFFF' },
  { bg: '#6CB841', color: '#FFFFFF' },
  { bg: '#1E2127', color: '#FFFFFF' },
  { bg: '#EBEDB8', color: '#1E2127' },
];

export const tagColor = (index) => tagColors[index % tagColors.length];
