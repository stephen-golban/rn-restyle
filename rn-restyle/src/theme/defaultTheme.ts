import type { BaseTheme } from '../types/theme';
import type { TextStyle, ViewStyle } from 'react-native';

// Define default colors
const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  black: '#000000',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
};

// Define default spacing values
const spacing = {
  '0': 0,
  '2': 2,
  '4': 4,
  '8': 8,
  '12': 12,
  '16': 16,
  '20': 20,
  '24': 24,
  '32': 32,
  '40': 40,
  '48': 48,
  '56': 56,
  '64': 64,
  '80': 80,
  '100': 100,
};

// Define default breakpoints
const breakpoints = {
  phone: {
    width: 0,
  },
  tablet: {
    width: 768,
  },
  desktop: {
    width: 1024,
  },
};

// Define default border radii
const borderRadii = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 16,
  full: 9999,
};

// Define default font sizes
const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
};

// Define text variants
const textVariants: Record<string, TextStyle> = {
  defaults: {
    fontSize: 16,
    color: colors.dark,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
  },
  subtitle: {
    fontSize: 18,
    color: colors.gray700,
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 12,
    color: colors.gray600,
  },
};

// Define box variants
const boxVariants: Record<string, ViewStyle> = {
  defaults: {
    backgroundColor: colors.white,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
};

// Define card variants
const cardVariants: Record<string, ViewStyle> = {
  defaults: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  elevated: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  bordered: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
};

// Export the default theme
const defaultTheme: BaseTheme = {
  colors,
  spacing,
  breakpoints,
  borderRadii,
  fontSizes,
  textVariants,
  boxVariants,
  cardVariants,
};

export default defaultTheme;
