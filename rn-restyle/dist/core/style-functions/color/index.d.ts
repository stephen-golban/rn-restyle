import type { ColorProps } from './type';
import type { TextStyle } from 'react-native';
import type { ViewStyle } from 'react-native';
import type { BaseTheme } from '../../../types/theme';
export declare const colorFunction: <Theme extends BaseTheme>() => {
    backgroundColor: (props: ColorProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    color: (props: ColorProps<Theme>, theme: Theme) => Partial<TextStyle>;
    borderColor: (props: ColorProps<Theme>, theme: Theme) => Partial<ViewStyle>;
};
//# sourceMappingURL=index.d.ts.map