import type { ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import type { ImageStyle } from 'react-native';
import type { BaseTheme } from '../../types/theme';
import * as styleFunctions from '../style-functions';
export type Style = ViewStyle | TextStyle | ImageStyle;
export type StylableComponent<P = any> = React.ComponentType<P & {
    style?: any;
}>;
export type RestyleComponentProps<Theme extends BaseTheme, C extends StylableComponent> = Omit<React.ComponentProps<C>, 'children' | 'style'> & {
    variant?: string;
    children?: React.ReactNode;
    style?: React.ComponentProps<C>['style'];
} & styleFunctions.SpacingProps<Theme> & styleFunctions.ColorProps<Theme> & styleFunctions.LayoutProps<Theme> & styleFunctions.BorderProps<Theme>;
//# sourceMappingURL=type.d.ts.map