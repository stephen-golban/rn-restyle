import type { AllProps } from '../../properties';
import type { BaseTheme, RestyleFunction } from '../../typings';

export type FuncsMap<T extends BaseTheme, TProps extends AllProps<T>> = {
  [key in keyof TProps]: RestyleFunction<TProps, T, string>;
};
