import type { BaseTheme } from "../../../types/theme";
import type { StyleProps } from "../../styleFunction";
import type { FlexAlignType, FlexStyle } from "react-native";

export type FlexDirectionValue =
  | Omit<FlexStyle["flexDirection"], "column" | "column-reverse">
  | "col"
  | "col-reverse";

export type RestyleDimensions<Theme extends BaseTheme> = {
  w?: keyof Theme["spacing"] | FlexStyle["width"];
  h?: keyof Theme["spacing"] | FlexStyle["height"];
};

export type RestyleWrap = {
  wrap?: boolean;
  ["no-wrap"]?: boolean;
  ["wrap-reverse"]?: boolean;
  flexWrap?: FlexStyle["flexWrap"];
};

export type RestyleDirection = {
  row?: boolean;
  col?: boolean;
  ["row-reverse"]?: boolean;
  ["col-reverse"]?: boolean;
  direction?: FlexDirectionValue;
};

export type RestyleJustify = {
  around?: boolean;
  evenly?: boolean;
  between?: boolean;
  justify?: FlexAlignType;
  ["justify-end"]?: boolean;
  ["justify-start"]?: boolean;
  ["justify-center"]?: boolean;
};

export type RestyleAlignItems = {
  items?: FlexAlignType;
  ["items-end"]?: boolean;
  ["items-start"]?: boolean;
  ["items-center"]?: boolean;
  ["items-stretch"]?: boolean;
  ["items-baseline"]?: boolean;
};

export type RestyleAlignContent = {
  content?: FlexStyle["alignContent"];
  ["content-end"]?: boolean;
  ["content-start"]?: boolean;
  ["content-around"]?: boolean;
  ["content-center"]?: boolean;
  ["content-stretch"]?: boolean;
  ["content-between"]?: boolean;
};

export type RestyleAlignSelf = {
  self?: FlexStyle["alignSelf"];
  ["self-end"]?: boolean;
  ["self-auto"]?: boolean;
  ["self-start"]?: boolean;
  ["self-center"]?: boolean;
  ["self-stretch"]?: boolean;
  ["self-baseline"]?: boolean;
};

export type RestylePositioning = {
  absolute?: boolean;
  relative?: boolean;
  z?: FlexStyle["zIndex"];
  position?: FlexStyle["position"];
  top?: FlexStyle["top"];
  left?: FlexStyle["left"];
  right?: FlexStyle["right"];
  bottom?: FlexStyle["bottom"];
};

export type RestyleFlexLayout = {
  fill?: boolean;
  unfill?: boolean;
  flex?: FlexStyle["flex"];
  grow?: FlexStyle["flexGrow"];
  basis?: FlexStyle["flexBasis"];
  shrink?: FlexStyle["flexShrink"];
  center?: boolean; // Shorthand for alignItems: center + justifyContent: center
};

export type LayoutProps<Theme extends BaseTheme> = StyleProps<Theme> &
  RestyleDimensions<Theme> &
  RestyleWrap &
  RestyleDirection &
  RestyleJustify &
  RestyleAlignItems &
  RestyleAlignContent &
  RestyleAlignSelf &
  RestylePositioning &
  RestyleFlexLayout;
