import type { TextStyle } from 'react-native';
import { createRestyleFunction } from '../../core/create-restyle-function';
import { getKeys } from '../utilities';

const typographyProperties = {
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  includeFontPadding: true,
  fontVariant: true,
  letterSpacing: true,
  lineHeight: true,
  textAlign: true,
  textAlignVertical: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textTransform: true,
  verticalAlign: true,
  writingDirection: true,
};

const typography = getKeys(typographyProperties).map((property) => {
  return createRestyleFunction({
    property,
  });
});

type TypographyProps = {
  [Key in keyof typeof typographyProperties]?: TextStyle[Key];
};

export { typography, type TypographyProps };
