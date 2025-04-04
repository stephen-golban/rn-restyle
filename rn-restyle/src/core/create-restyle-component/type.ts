import type { ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import type { ImageStyle } from 'react-native';
import type { BaseTheme } from '../../types/theme';
import * as styleFunctions from '../style-functions';

// Type for style objects - can be ViewStyle, TextStyle, or ImageStyle
export type Style = ViewStyle | TextStyle | ImageStyle;

// Helper type for component that can receive a style prop
export type StylableComponent<P = any> = React.ComponentType<P & { style?: any }>;

// The props that will be passed to the created component

export type RestyleComponentProps<Theme extends BaseTheme, C extends StylableComponent> = Omit<
  React.ComponentProps<C>,
  'children' | 'style'
> & {
  variant?: string;
  children?: React.ReactNode;
  style?: React.ComponentProps<C>['style'];
} & styleFunctions.SpacingProps<Theme> &
  styleFunctions.ColorProps<Theme> &
  styleFunctions.LayoutProps<Theme> &
  styleFunctions.BorderProps<Theme>;
