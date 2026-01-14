export const theme = {
  colors: {
    primary: '#F59E0B', // Warm Orange
    secondary: {
      light: '#FFFEFA', // Soft Warm White
      dark: '#1A1A1A',  // Professional Dark
    },
    accent: '#FBBF24',  // Slightly lighter orange
    text: {
      primary: '#1F2937', // Gray 800
      secondary: '#4B5563', // Gray 600
      muted: '#9CA3AF',   // Gray 400
    },
    border: '#E5E7EB',    // Gray 200
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.75rem', // Rounded cards
    lg: '1.5rem',  // Extra rounded sections
    full: '9999px',
  },
  animations: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
};

export type Theme = typeof theme;
