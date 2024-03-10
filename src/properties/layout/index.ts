import type { FlexStyleValidator } from '../../typings/style';

import { getKeys, transformProperty } from '../utilities';
import { createRestyleFunction } from '../../core/create-restyle-function';

const base = {
  flex: true,
  overflow: true,
  flexWrap: true,
  flexGrow: true,
  flexBasis: true,
  alignSelf: true,
  flexShrink: true,
  aspectRatio: true,
  alignContent: true,
};

const extended = {
  w: 'width',
  h: 'height',
  minw: 'minWidth',
  maxw: 'maxWidth',
  minh: 'minHeight',
  maxh: 'maxHeight',
  align: 'alignItems',
  justify: 'justifyContent',
  direction: 'flexDirection',
} as const;

type BaseKeys = keyof typeof base;
type ExtendedKeys = keyof typeof extended;

type Keys = ExtendedKeys | BaseKeys;

const properties = { ...base, ...extended };

const layout = getKeys(properties).map((key) => {
  return createRestyleFunction(transformProperty(properties, key));
});

type LayoutProps = FlexStyleValidator<
  Keys,
  BaseKeys,
  ExtendedKeys,
  typeof extended
>;

export { layout, type LayoutProps };
