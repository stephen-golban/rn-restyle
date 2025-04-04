import { createStyleFunction } from "../../styleFunction";

import type { BorderProps } from "./type";
import type { ViewStyle } from "react-native";
import type { BaseTheme } from "../../../types/theme";

const borderRadius = <Theme extends BaseTheme>() => {
  return {
    borderRadius: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "borderRadii"
    >({
      property: ["borderRadius", "br"],
      themeKey: "borderRadii",
    }),
    borderTopLeftRadius: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "borderRadii"
    >({
      property: ["borderTopLeftRadius", "btlr"],
      themeKey: "borderRadii",
    }),
    borderTopRightRadius: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "borderRadii"
    >({
      property: ["borderTopRightRadius", "btrr"],
      themeKey: "borderRadii",
    }),
    borderBottomLeftRadius: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "borderRadii"
    >({
      property: ["borderBottomLeftRadius", "bblr"],
      themeKey: "borderRadii",
    }),
    borderBottomRightRadius: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "borderRadii"
    >({
      property: ["borderBottomRightRadius", "bbrr"],
      themeKey: "borderRadii",
    }),
  };
};

const borderWidth = <Theme extends BaseTheme>() => {
  return {
    borderWidth: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "spacing"
    >({
      property: ["borderWidth", "bw"],
      themeKey: "spacing",
    }),
    borderTopWidth: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "spacing"
    >({
      property: ["borderTopWidth", "btw"],
      themeKey: "spacing",
    }),
    borderRightWidth: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "spacing"
    >({
      property: ["borderRightWidth", "bwr"],
      themeKey: "spacing",
    }),
    borderBottomWidth: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "spacing"
    >({
      property: ["borderBottomWidth", "bwb"],
      themeKey: "spacing",
    }),
    borderLeftWidth: createStyleFunction<
      Theme,
      BorderProps<Theme>,
      ViewStyle,
      "spacing"
    >({
      property: ["borderLeftWidth", "bwl"],
      themeKey: "spacing",
    }),
  };
};

export const borderFunctions = <Theme extends BaseTheme>() => {
  return {
    ...borderRadius<Theme>(),
    ...borderWidth<Theme>(),
  };
};

export const borderRounded = <Theme extends BaseTheme>() => {
  return (props: BorderProps<Theme>, _theme: Theme): Partial<ViewStyle> => {
    if (props.rounded) {
      return {
        borderRadius: 9999,
      };
    }
    return {};
  };
};
