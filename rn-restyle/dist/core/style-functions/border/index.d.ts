import type { BorderProps } from "./type";
import type { ViewStyle } from "react-native";
import type { BaseTheme } from "../../../types/theme";
export declare const borderFunctions: <Theme extends BaseTheme>() => {
    borderWidth: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderTopWidth: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderRightWidth: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderBottomWidth: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderLeftWidth: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderRadius: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderTopLeftRadius: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderTopRightRadius: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderBottomLeftRadius: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    borderBottomRightRadius: (props: BorderProps<Theme>, theme: Theme) => Partial<ViewStyle>;
};
export declare const borderRounded: <Theme extends BaseTheme>() => (props: BorderProps<Theme>, _theme: Theme) => Partial<ViewStyle>;
//# sourceMappingURL=index.d.ts.map