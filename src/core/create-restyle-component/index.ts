import type { ComponentProps, ComponentType } from 'react';
import type { BaseTheme, RestyleFunctionContainer } from '../../typings';

import { base_properties, type BaseProps } from '../../properties';
import { buildRestyleComponent } from '../build-restyle-component';

const createRestyleComponent = <
  Theme extends BaseTheme,
  C extends ComponentType<any>,
>(
  theme: Theme,
  BaseComponent: C
) => {
  type RestyleProps = BaseProps<Theme> &
    Omit<ComponentProps<C>, keyof BaseProps<Theme>>;

  const RestyledComponent = buildRestyleComponent<RestyleProps, Theme>(
    base_properties(theme) as RestyleFunctionContainer<
      BaseProps<Theme>,
      Theme
    >[],
    BaseComponent
  );

  return RestyledComponent;
};

export { createRestyleComponent };
