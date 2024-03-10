import type { AllProps } from '../../properties';
import type { BaseTheme, RestyleFunctionContainer } from '../../typings';

import { buildStyle } from './build-style';
import { createPropertiesMap } from './create-properties-map';
import { createFuncsMap, flattenFuncs } from './create-funcs-map';

const composeRestyleFunctions = <
  Theme extends BaseTheme,
  TProps extends AllProps<Theme>,
>(
  funcs: (
    | RestyleFunctionContainer<TProps, Theme>
    | RestyleFunctionContainer<TProps, Theme>[]
  )[]
) => {
  const flattenedFuncs = flattenFuncs(funcs);
  const funcsMap = createFuncsMap(flattenedFuncs);
  const propertiesMap = createPropertiesMap(funcsMap);

  return {
    buildStyle: (props: TProps, theme: Theme) =>
      buildStyle(props, theme, funcsMap),
    properties: Object.keys(funcsMap),
    propertiesMap,
  };
};

export { composeRestyleFunctions };
