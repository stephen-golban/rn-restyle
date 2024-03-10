import type { TextStyle } from 'react-native';

type StyleTransformFunction<
  T extends BaseTheme,
  K extends keyof T | undefined,
  V,
> = (params: {
  value: V | undefined | null;
  theme: T;
  themeKey?: K;
}) => V | undefined | null;

interface KnownBaseTheme {
  colors: {
    [key: string]: string;
  };
  metrics: {
    [key: string]: number;
  };
  textVariants: {
    [key: string]: TextStyle;
  };
}

interface BaseTheme extends KnownBaseTheme {
  [key: string]: any;
}

export type { BaseTheme, StyleTransformFunction, KnownBaseTheme };
