import type { FlexStyle } from 'react-native';
import type { BaseTheme } from '../../typings';

import { getKeys } from '../utilities';
import { createRestyleFunction } from '../../core/create-restyle-function';

const properties = {
  position: true,
  top: true,
  right: true,
  bottom: true,
  left: true,
  start: true,
  end: true,
} as const;

type Keys = keyof typeof properties;

const position = [
  ...getKeys(properties).map((property) => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'zIndex',
    themeKey: 'metrics',
  }),
];

type PositionProps<Theme extends BaseTheme> = {
  [Key in Keys]?: FlexStyle[Key];
} & {
  zIndex?: keyof Theme['metrics'] | number;
};

export { position, type PositionProps };
