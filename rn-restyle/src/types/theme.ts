import type { TextStyle, ViewStyle } from 'react-native';

// Base palette definition
export type ColorPalette = Record<string, string>;

// Type for spacing values (number or string)
export type SpacingValue = number | string;

// Type for breakpoint dimensions
export interface Breakpoint {
  width: number;
  height?: number;
}

// Type for the breakpoints object
export type Breakpoints = Record<string, Breakpoint | number>;

// Type for responsive values based on breakpoints
export type ResponsiveValue<T, B extends string = string> = 
  | T 
  | Partial<Record<B, T>>;

// Type for variants that can be applied to components
export interface Variants {
  [variantGroup: string]: {
    [variantName: string]: ViewStyle | TextStyle;
  };
}

// Base theme interface
export interface BaseTheme {
  colors: ColorPalette;
  spacing: Record<string, SpacingValue>;
  breakpoints: Breakpoints;
  borderRadii?: Record<string, number>;
  fontSizes?: Record<string, number>;
  fontFamily?: Record<string, string>;
  textVariants?: Record<string, TextStyle>;
  cardVariants?: Record<string, ViewStyle>;
  buttonVariants?: Record<string, ViewStyle>;
  boxVariants?: Record<string, ViewStyle>;
  // Can be extended with other variant types
}

// Helper type for extracting keys from theme sections
export type ThemeKeys<T, K extends keyof T> = keyof T[K]; 