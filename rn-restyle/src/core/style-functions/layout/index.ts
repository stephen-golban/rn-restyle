import * as transformers from "./transformers";
import { createStyleFunction } from "../../styleFunction";

import type { LayoutProps } from "./type";
import type { ViewStyle } from "react-native";
import type { BaseTheme } from "../../../types/theme";

const layout = <Theme extends BaseTheme>() => {
  return {
    flex: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: ["flex", "fill", "unfill"],
      transform: transformers.flex,
    }),
    grow: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: ["flexGrow", "grow"],
    }),
    shrink: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: ["flexShrink", "shrink"],
    }),
    basis: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: ["flexBasis", "basis"],
    }),
    flexWrap: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: ["flexWrap", "wrap", "no-wrap", "wrap-reverse"],
    }),
    flexDirection: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: [
        "flexDirection",
        "direction",
        "row",
        "col",
        "row-reverse",
        "col-reverse",
      ],
      transform: transformers.flexDirection,
    }),
    alignContent: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: [
        "alignContent",
        "content",
        "content-start",
        "content-end",
        "content-center",
        "content-around",
        "content-between",
        "content-stretch",
      ],
      transform: transformers.alignContent,
    }),
    alignSelf: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: [
        "alignSelf",
        "self",
        "self-start",
        "self-end",
        "self-center",
        "self-stretch",
        "self-baseline",
      ],
      transform: transformers.alignSelf,
    }),
    alignItems: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: [
        "alignItems",
        "items",
        "items-start",
        "items-end",
        "items-center",
        "items-stretch",
        "items-baseline",
      ],
      transform: transformers.alignItems,
    }),
    justifyContent: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: [
        "justifyContent",
        "justify",
        "justify-start",
        "justify-end",
        "justify-center",
        "between",
        "around",
        "evenly",
      ],
      transform: transformers.justify,
    }),
  };
};

const dimensions = <Theme extends BaseTheme>() => {
  return {
    width: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle, "spacing">(
      {
        property: ["width", "w"],
        themeKey: "spacing",
      }
    ),
    height: createStyleFunction<
      Theme,
      LayoutProps<Theme>,
      ViewStyle,
      "spacing"
    >({
      property: ["height", "h"],
      themeKey: "spacing",
    }),
  };
};

const positioning = <Theme extends BaseTheme>() => {
  return {
    position: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle>({
      property: ["position", "position", "absolute", "relative"],
      transform: transformers.position,
    }),
    zIndex: createStyleFunction<
      Theme,
      LayoutProps<Theme>,
      ViewStyle,
      "spacing"
    >({
      property: ["zIndex", "z"],
      themeKey: "spacing",
    }),
    top: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle, "spacing">({
      property: "top",
      themeKey: "spacing",
    }),
    left: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle, "spacing">({
      property: "left",
      themeKey: "spacing",
    }),
    right: createStyleFunction<Theme, LayoutProps<Theme>, ViewStyle, "spacing">(
      {
        property: "right",
        themeKey: "spacing",
      }
    ),
    bottom: createStyleFunction<
      Theme,
      LayoutProps<Theme>,
      ViewStyle,
      "spacing"
    >({
      property: "bottom",
      themeKey: "spacing",
    }),
  };
};

export const layoutFunctions = <Theme extends BaseTheme>() => {
  return {
    ...layout<Theme>(),
    ...dimensions<Theme>(),
    ...positioning<Theme>(),
  };
};

// Center utility function to set both alignItems and justifyContent to center
export const centerStyle = <Theme extends BaseTheme>() => {
  return (props: LayoutProps<Theme>, theme: Theme): Partial<ViewStyle> => {
    if (props.center) {
      return {
        alignItems: "center",
        justifyContent: "center",
      };
    }
    return {};
  };
};
