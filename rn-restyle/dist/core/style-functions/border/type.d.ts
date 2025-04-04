import type { StyleProps } from "../../styleFunction";
import type { BaseTheme } from "../../../types/theme";
import type { FlexStyle, ViewStyle } from "react-native";
export type BorderProps<Theme extends BaseTheme> = StyleProps<Theme, "borderRadii" | "spacing" | "colors"> & {
    rounded?: boolean;
    bw?: keyof Theme["spacing"] | FlexStyle["borderWidth"];
    btw?: keyof Theme["spacing"] | FlexStyle["borderTopWidth"];
    bwr?: keyof Theme["spacing"] | FlexStyle["borderRightWidth"];
    bwb?: keyof Theme["spacing"] | FlexStyle["borderBottomWidth"];
    bwl?: keyof Theme["spacing"] | FlexStyle["borderLeftWidth"];
    br?: keyof Theme["borderRadii"] | ViewStyle["borderRadius"];
    btlr?: keyof Theme["borderRadii"] | ViewStyle["borderTopLeftRadius"];
    btrr?: keyof Theme["borderRadii"] | ViewStyle["borderTopRightRadius"];
    bblr?: keyof Theme["borderRadii"] | ViewStyle["borderBottomLeftRadius"];
    bbrr?: keyof Theme["borderRadii"] | ViewStyle["borderBottomRightRadius"];
};
//# sourceMappingURL=type.d.ts.map