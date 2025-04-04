import { createStyleFunction } from '../../styleFunction';

import type { ColorProps } from './type';
import type { TextStyle } from 'react-native';
import type { ViewStyle } from 'react-native';
import type { BaseTheme } from '../../../types/theme';

export const colorFunction = <Theme extends BaseTheme>() => {
  return {
    backgroundColor: createStyleFunction<Theme, ColorProps<Theme>, ViewStyle, 'colors'>({
      property: ['backgroundColor', 'bg'],
      themeKey: 'colors',
    }),
    color: createStyleFunction<Theme, ColorProps<Theme>, TextStyle, 'colors'>({
      property: 'color',
      themeKey: 'colors',
    }),
    borderColor: createStyleFunction<Theme, ColorProps<Theme>, ViewStyle, 'colors'>({
      property: ['borderColor', 'bc'],
      themeKey: 'colors',
    }),
  };
};
