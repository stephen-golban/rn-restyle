import { createTheme } from 'rn-restyle';

const palette = {
  purple: '#5A31F4',
  green: '#099C77',
  black: '#101010',
  white: '#FFF',
};

export const theme = createTheme({
  colors: {
    background: palette.white,
    cardPrimaryBackground: palette.purple,
    cardSecondaryBackground: palette.green,
    title: palette.black,
    text: palette.white,
  },
  metrics: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      color: 'text',
    },
    header: {
      fontSize: 48,
      fontWeight: 'bold',
      color: 'title',
    },
    body: {
      fontSize: 16,
    },
  },
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    title: palette.white,
  },
};

export type Theme = typeof theme;
