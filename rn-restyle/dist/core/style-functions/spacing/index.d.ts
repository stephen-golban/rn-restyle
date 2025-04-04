import type { ViewStyle } from 'react-native';
import type { BaseTheme } from '../../../types/theme';
import type { SpacingProps } from './type';
export declare const spacingFunctions: <Theme extends BaseTheme>() => {
    padding: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    paddingTop: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    paddingRight: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    paddingBottom: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    paddingLeft: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    paddingHorizontal: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    paddingVertical: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    margin: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    marginTop: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    marginRight: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    marginBottom: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    marginLeft: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    marginHorizontal: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    marginVertical: (props: SpacingProps<Theme>, theme: Theme) => Partial<ViewStyle>;
};
//# sourceMappingURL=index.d.ts.map