import type { BaseTheme } from '../../typings';
import type { TextStyle, ViewStyle } from 'react-native';

import { getKeys } from '../utilities';
import { createRestyleFunction } from '../../core/create-restyle-function';

const shadowProperties = {
  shadowOpacity: true,
  shadowOffset: true,
  shadowRadius: true,
  elevation: true,
};

const textShadowProperties = {
  textShadowOffset: true,
  textShadowRadius: true,
};

const shadow = [
  ...getKeys(shadowProperties).map((property) => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'shadowColor',
    themeKey: 'colors',
  }),
];

const textShadow = [
  ...getKeys(textShadowProperties).map((property) => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'textShadowColor',
    themeKey: 'colors',
  }),
];

type ShadowProps<Theme extends BaseTheme> = {
  [Key in keyof typeof shadowProperties]?: ViewStyle[Key];
} & {
  shadowColor?: keyof Theme['colors'];
};

type TextShadowProps<Theme extends BaseTheme> = {
  [Key in keyof typeof textShadowProperties]?: TextStyle[Key];
} & {
  textShadowColor?: keyof Theme['colors'];
};

export { shadow, textShadow, type ShadowProps, type TextShadowProps };
