// Theme types
export type { BaseTheme, Breakpoints, ColorPalette, ResponsiveValue, SpacingValue } from './types/theme';

// Theme context and provider
export { ThemeProvider, useThemeSwitch, useRestyleTheme } from './theme/ThemeContext';

// Core components
export { default as Box, createBox } from './components/Box';
export type { BoxProps } from './components/Box';
export { default as Text, createText } from './components/Text';
export type { TextProps } from './components/Text';

// Hooks
export { useResponsiveStyles, computeResponsiveStyles } from './hooks/useResponsiveStyles';

export * from './core';
