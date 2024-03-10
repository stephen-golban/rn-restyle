import type { BaseTheme, RNStyleProperty } from '../../typings';

import { getKeys } from '../utilities';
import { createRestyleFunction } from '../../core/create-restyle-function';

const properties = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  g: 'gap',
  rg: 'rowGap',
  cg: 'columnGap',
};

const spacing = <T extends BaseTheme>({ metrics }: T) => {
  return getKeys(properties).map((property) => {
    const styleProperty = properties[property] as RNStyleProperty;

    return createRestyleFunction({
      property,
      styleProperty,
      transform: ({ value }: { value: keyof typeof metrics | number }) =>
        typeof value === 'number' ? value : metrics[value],
    });
  });
};

type SpacingProps<T extends BaseTheme> = {
  [Key in keyof typeof properties]?: keyof T['metrics'] | number;
};

export { spacing, type SpacingProps };
