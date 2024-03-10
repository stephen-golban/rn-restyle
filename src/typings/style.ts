import type { KnownBaseTheme } from './theming';
import type {
  FlexStyle,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

type PropValue = string | number | undefined | null;

type SafeVariants<T> = Omit<T, keyof KnownBaseTheme>;

type RNStyle =
  | ViewStyle
  | TextStyle
  | ImageStyle
  | ((...args: any[]) => StyleProp<ViewStyle>);

type RNStyleProperty = keyof ViewStyle | keyof TextStyle | keyof ImageStyle;

type FlexStyleValidator<
  Keys extends string,
  BaseKeys extends keyof FlexStyle,
  ExtendedKeys extends string,
  ExtendedToFlexStyleMap extends { [K in ExtendedKeys]: keyof FlexStyle },
> = {
  [Key in Keys]?: Key extends ExtendedKeys
    ? FlexStyle[ExtendedToFlexStyleMap[Key]]
    : Key extends BaseKeys
      ? FlexStyle[Key]
      : never;
};

export type {
  RNStyle,
  PropValue,
  SafeVariants,
  RNStyleProperty,
  FlexStyleValidator,
};
