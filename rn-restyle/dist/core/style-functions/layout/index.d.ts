import type { LayoutProps } from "./type";
import type { ViewStyle } from "react-native";
import type { BaseTheme } from "../../../types/theme";
export declare const layoutFunctions: <Theme extends BaseTheme>() => {
    position: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    zIndex: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    top: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    left: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    right: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    bottom: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    width: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    height: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    flex: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    grow: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    shrink: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    basis: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    flexWrap: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    flexDirection: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    alignContent: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    alignSelf: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    alignItems: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
    justifyContent: (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
};
export declare const centerStyle: <Theme extends BaseTheme>() => (props: LayoutProps<Theme>, theme: Theme) => Partial<ViewStyle>;
//# sourceMappingURL=index.d.ts.map