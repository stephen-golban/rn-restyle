import type { BaseTheme, RestyleFunctionContainer } from '../../typings';

import React from 'react';
import { View } from 'react-native';

import { useRestyle } from '../hooks';
import { composeRestyleFunctions } from '../compose-restyle-functions';

const buildRestyleComponent = <
  Props extends { [key: string]: any },
  Theme extends BaseTheme,
>(
  funcs: (
    | RestyleFunctionContainer<Props, Theme>
    | RestyleFunctionContainer<Props, Theme>[]
  )[],
  BaseComponent: React.ComponentType<any> = View
) => {
  const composed = composeRestyleFunctions(funcs);

  const RestyleComponent = React.forwardRef((props: Props, ref) => {
    const passedProps = useRestyle(composed, props);
    return <BaseComponent ref={ref} {...passedProps} />;
  });

  type RestyleComponentType = typeof RestyleComponent;
  return RestyleComponent as RestyleComponentType & {
    defaultProps?: Partial<React.ComponentProps<RestyleComponentType>>;
  };
};

export { buildRestyleComponent };
