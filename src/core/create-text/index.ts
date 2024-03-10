import React from 'react';

import {
  color,
  opacity,
  spacing,
  textShadow,
  typography,
  type ColorProps,
  type OpacityProps,
  type SpacingProps,
  type TextShadowProps,
  type TypographyProps,
} from '../../properties';
import { createVariant, type VariantProps } from '../create-variant';
import type { BaseTheme, RestyleFunctionContainer } from '../../typings';

import { Text } from 'react-native';
import { buildRestyleComponent } from '../build-restyle-component';

type TextRestyleProps<Theme extends BaseTheme> = ColorProps<Theme> &
  OpacityProps &
  TypographyProps &
  SpacingProps<Theme> &
  TextShadowProps<Theme> &
  VariantProps<Theme, 'textVariants'> & {
    children?: React.ReactNode;
  };

const textRestyleFunctions = <T extends BaseTheme>(theme: T) => [
  color,
  opacity,
  typography,
  spacing(theme),
  textShadow,
  createVariant({ themeKey: 'textVariants' }),
];

const createText = <Theme extends BaseTheme>(theme: Theme) => {
  return buildRestyleComponent<
    TextRestyleProps<Theme> & React.ComponentProps<typeof Text>,
    Theme
  >(
    textRestyleFunctions(theme) as RestyleFunctionContainer<
      TextRestyleProps<Theme>,
      Theme
    >[],
    Text
  );
};

export { createText, textRestyleFunctions, type TextRestyleProps };
