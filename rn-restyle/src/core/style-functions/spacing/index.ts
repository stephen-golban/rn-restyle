import type { ViewStyle } from 'react-native';
import { createStyleFunction } from '../../styleFunction';
import type { BaseTheme } from '../../../types/theme';
import type { SpacingProps } from './type';

const margin = <Theme extends BaseTheme>() => {
  return {
    margin: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['margin', 'm'],
      themeKey: 'spacing',
    }),
    marginTop: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['marginTop', 'mt'],
      themeKey: 'spacing',
    }),
    marginRight: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['marginRight', 'mr'],
      themeKey: 'spacing',
    }),

    marginBottom: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['marginBottom', 'mb'],
      themeKey: 'spacing',
    }),

    marginLeft: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['marginLeft', 'ml'],
      themeKey: 'spacing',
    }),

    marginHorizontal: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['marginHorizontal', 'mx'],
      themeKey: 'spacing',
    }),

    marginVertical: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['marginVertical', 'my'],
      themeKey: 'spacing',
    }),
  };
};

const padding = <Theme extends BaseTheme>() => {
  return {
    padding: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['padding', 'p'],
      themeKey: 'spacing',
    }),

    paddingTop: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['paddingTop', 'pt'],
      themeKey: 'spacing',
    }),

    paddingRight: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['paddingRight', 'pr'],
      themeKey: 'spacing',
    }),

    paddingBottom: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['paddingBottom', 'pb'],
      themeKey: 'spacing',
    }),

    paddingLeft: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['paddingLeft', 'pl'],
      themeKey: 'spacing',
    }),

    paddingHorizontal: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['paddingHorizontal', 'px'],
      themeKey: 'spacing',
    }),

    paddingVertical: createStyleFunction<Theme, SpacingProps<Theme>, ViewStyle, 'spacing'>({
      property: ['paddingVertical', 'py'],
      themeKey: 'spacing',
    }),
  };
};

export const spacingFunctions = <Theme extends BaseTheme>() => {
  return {
    ...margin<Theme>(),
    ...padding<Theme>(),
  };
};
