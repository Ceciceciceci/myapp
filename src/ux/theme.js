export const uxTheme = {
  colors: {
    background: '#FBF3E2',
    foreground: '#2C1A0F',
    card: '#FFF5D6',
    mutedForeground: '#7A5230',
    accent: '#F6A66C',
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
    navBorder: '#d8d7d7',
    navName: '#F6A66C',
    navSubtitle: '#828282',
    navLink: '#4F4F4F',
    navLinkActive: '#ED6F24',
    navLinkHover: '#7DB9E1',
    buttonBg: '#7DC3E1',
    buttonBgHover: '#6AB8D4',
    buttonText: '#1A293D',
    buttonTextMuted: '#FBF8F2',
    tagYellow: '#F9D08A',
    socialHoverBg: '#FDDDD9',
    socialHoverColor: '#9B2B1E',
    socialHoverBorder: '#F5B8B2',
  },
  fonts: {
    display: "'Fredoka One', sans-serif",
    displayLight: "'Fredoka', sans-serif",
    body: "'Instrument Sans', sans-serif",
    mono: "'Sometype Mono', monospace",
  },
  typography: {
    displayLetterSpacing: '0.2px',
    displayScaleX: 0.95,
  },
  maxWidth: '1280px',
  navHeight: '64px',
};

export const tagColors = [
  { bg: '#ED6F24', color: '#FFFFFF' },
  { bg: '#F9D08A', color: '#FFFFFF' },
  { bg: '#7DC3E1', color: '#FFFFFF' },
  { bg: '#A6C550', color: '#FFFFFF' },
  { bg: '#F6A66C', color: '#FFFFFF' },
];

export const tagColor = (index) => tagColors[index % tagColors.length];

export const displayFontStyle = (origin = 'left center') => ({
  fontFamily: uxTheme.fonts.display,
  letterSpacing: uxTheme.typography.displayLetterSpacing,
  transform: `scaleX(${uxTheme.typography.displayScaleX})`,
  transformOrigin: origin,
});
