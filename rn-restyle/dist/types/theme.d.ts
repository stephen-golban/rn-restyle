import type { TextStyle, ViewStyle } from 'react-native';
export type ColorPalette = Record<string, string>;
export type SpacingValue = number | string;
export interface Breakpoint {
    width: number;
    height?: number;
}
export type Breakpoints = Record<string, Breakpoint | number>;
export type ResponsiveValue<T, B extends string = string> = T | Partial<Record<B, T>>;
export interface Variants {
    [variantGroup: string]: {
        [variantName: string]: ViewStyle | TextStyle;
    };
}
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
}
export type ThemeKeys<T, K extends keyof T> = keyof T[K];
//# sourceMappingURL=theme.d.ts.map