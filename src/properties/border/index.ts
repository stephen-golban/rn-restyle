import { type ViewStyle } from 'react-native';
import type { BaseTheme, RNStyleProperty } from '../../typings';

import { getKeys } from '../utilities';
import { createRestyleFunction } from '../../core/create-restyle-function';

const borderProperties = {
  bw: 'borderWidth',
  bs: 'borderStyle',
  btw: 'borderTopWidth',
  blw: 'borderLeftWidth',
  brw: 'borderRightWidth',
  bbw: 'borderBottomWidth',
} as const;

const borderRadiusProperties = {
  br: 'borderRadius',
  btlr: 'borderTopLeftRadius',
  btrr: 'borderTopRightRadius',
  bblr: 'borderBottomLeftRadius',
  bbrr: 'borderBottomRightRadius',
};

const borderColorProperties = {
  bc: 'borderColor',
  btc: 'borderTopColor',
  blc: 'borderLeftColor',
  brc: 'borderRightColor',
  bbc: 'borderBottomColor',
};

const border = <T extends BaseTheme>({ metrics }: T) => [
  ...getKeys(borderProperties).map((property) => {
    const styleProperty = borderProperties[property] as RNStyleProperty;
    return createRestyleFunction({
      property,
      styleProperty,
    });
  }),
  ...getKeys(borderColorProperties).map((property) => {
    const styleProperty = borderColorProperties[property] as RNStyleProperty;

    return createRestyleFunction({
      property,
      styleProperty,
      themeKey: 'colors',
    });
  }),
  ...getKeys(borderRadiusProperties).map((property) => {
    const styleProperty = borderRadiusProperties[property] as RNStyleProperty;

    return createRestyleFunction({
      property,
      styleProperty,
      transform: ({ value }: { value: keyof typeof metrics | number }) =>
        typeof value === 'number' ? value : metrics[value],
    });
  }),
];

type BorderProps<T extends BaseTheme> = {
  [Key in keyof typeof borderProperties]?: ViewStyle[(typeof borderProperties)[Key]];
} & {
  [Key in keyof typeof borderColorProperties]?: keyof T['colors'];
} & {
  [Key in keyof typeof borderRadiusProperties]?: keyof T['metrics'] | number;
};

export { border, type BorderProps };
