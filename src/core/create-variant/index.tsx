import { StyleSheet } from 'react-native';
import { type AllProps, all } from '../../properties';
import type {
  BaseTheme,
  SafeVariants,
  RestyleFunctionContainer,
  RestyleFunction,
} from '../../typings';

import { composeRestyleFunctions } from '../compose-restyle-functions';
import { createRestyleFunction } from '../create-restyle-function';

function createVariant<
  Theme extends BaseTheme,
  K extends keyof SafeVariants<Theme> = keyof SafeVariants<Theme>,
  P extends keyof any = keyof any,
>(params: {
  property: P;
  themeKey: K;
  defaults?: AllProps<Theme>;
}): RestyleFunctionContainer<VariantProps<Theme, K, P>, Theme, P, K>;
// Without Custom Prop Name
function createVariant<
  Theme extends BaseTheme,
  K extends keyof SafeVariants<Theme> = keyof SafeVariants<Theme>,
>(params: {
  themeKey: K;
  defaults?: AllProps<Theme>;
}): RestyleFunctionContainer<VariantProps<Theme, K>, Theme, 'variant', K>;
function createVariant<
  Theme extends BaseTheme,
  K extends keyof SafeVariants<Theme>,
  P extends keyof any,
  TProps extends VariantProps<Theme, K, P>,
>({
  property = 'variant' as P,
  themeKey,
  defaults,
}: {
  property?: P;
  themeKey: K;
  defaults?: AllProps<Theme>;
}) {
  const styleFunction = createRestyleFunction<Theme, TProps, P, K>({
    property,
    themeKey,
  });
  const func: RestyleFunction<TProps, Theme> = (props, theme) => {
    const expandedProps = styleFunction.func(props, theme)[property];

    const variantDefaults = theme[themeKey]
      ? (theme[themeKey].defaults as Partial<AllProps<Theme>>)
      : {};

    if (!expandedProps && !defaults && !variantDefaults) return {};
    const allRestyleFunctions = composeRestyleFunctions(all(theme));

    return StyleSheet.flatten(
      allRestyleFunctions.buildStyle(
        { ...defaults, ...variantDefaults, ...expandedProps },
        theme
      )
    );
  };
  return {
    property,
    themeKey,
    variant: true,
    func,
  };
}

type VariantProps<
  Theme extends BaseTheme,
  K extends keyof Theme,
  Property extends keyof any = 'variant',
> = {
  [key in Property]?: keyof Omit<Theme[K], 'defaults'>;
};

export { createVariant, type VariantProps };
