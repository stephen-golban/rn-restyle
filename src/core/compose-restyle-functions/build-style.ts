import { StyleSheet, type ViewStyle } from 'react-native';

import type { FuncsMap } from './type';
import type { AllProps } from '../../properties';
import type { BaseTheme, RNStyle } from '../../typings';

function buildStyle<Theme extends BaseTheme, TProps extends AllProps<Theme>>(
  props: TProps,
  theme: Theme,
  funcsMap: FuncsMap<Theme, TProps>
): RNStyle {
  const styles: ViewStyle = {};

  Object.keys(props).forEach((key) => {
    if (funcsMap[key as keyof typeof funcsMap]) {
      const mappedProps = funcsMap[key as keyof typeof funcsMap](props, theme);
      Object.assign(styles, mappedProps);
    }
  });

  return StyleSheet.create({ stylesheet: styles }).stylesheet;
}

export { buildStyle };
