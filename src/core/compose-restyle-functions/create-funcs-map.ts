import type {
  BaseTheme,
  RestyleFunction,
  RestyleFunctionContainer,
} from '../../typings';

import type { FuncsMap } from './type';
import type { AllProps } from '../../properties';

function flattenFuncs<Theme extends BaseTheme, TProps extends AllProps<Theme>>(
  restyleFunctions: (
    | RestyleFunctionContainer<TProps, Theme>
    | RestyleFunctionContainer<TProps, Theme>[]
  )[]
): RestyleFunctionContainer<TProps, Theme>[] {
  return restyleFunctions.flat();
}

function createFuncsMap<
  Theme extends BaseTheme,
  TProps extends AllProps<Theme>,
>(
  flattenedFuncs: RestyleFunctionContainer<TProps, Theme>[]
): { [key in keyof TProps]: RestyleFunction<TProps, Theme, string> } {
  return flattenedFuncs.reduce(
    (acc, each) => {
      acc[each.property] = each.func;
      return acc;
    },
    {} as FuncsMap<Theme, TProps>
  );
}

export { createFuncsMap, flattenFuncs };
