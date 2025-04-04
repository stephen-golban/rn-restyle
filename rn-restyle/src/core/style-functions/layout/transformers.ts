import type { FlexStyle } from "react-native";

// Transform shorthand values to actual style values for position
const position = (value: string | boolean): FlexStyle["position"] => {
  if (value === true) return "relative"; // Default value if boolean true

  switch (value) {
    case "absolute":
      return "absolute";
    case "relative":
      return "relative";
    default:
      return value as FlexStyle["position"];
  }
};

// Transform shorthand values to actual style values for flex
const flex = (value: string | number | boolean): FlexStyle["flex"] => {
  if (value === true) return 1; // Default value if boolean true

  switch (value) {
    case "fill":
      return 1;
    case "unfill":
      return undefined as unknown as number;
    default:
      return value as number;
  }
};

// Transform shorthand values to actual style values for flexDirection
const flexDirection = (value: string | boolean): FlexStyle["flexDirection"] => {
  if (value === true) return "row"; // Default value if boolean true

  switch (value) {
    case "row":
      return "row";
    case "col":
      return "column";
    case "row-reverse":
      return "row-reverse";
    case "col-reverse":
      return "column-reverse";
    default:
      return value as FlexStyle["flexDirection"];
  }
};

// Transform shorthand values to actual style values for justifyContent
const justify = (value: string | boolean): FlexStyle["justifyContent"] => {
  if (value === true) return "center"; // Default value if boolean true

  switch (value) {
    case "justify-start":
      return "flex-start";
    case "justify-end":
      return "flex-end";
    case "justify-center":
      return "center";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "evenly":
      return "space-evenly";
    default:
      return value as FlexStyle["justifyContent"];
  }
};

// Transform shorthand values to actual style values for alignItems
const alignItems = (value: string | boolean): FlexStyle["alignItems"] => {
  if (value === true) return "center"; // Default value if boolean true

  switch (value) {
    case "items-start":
      return "flex-start";
    case "items-end":
      return "flex-end";
    case "items-center":
      return "center";
    case "items-stretch":
      return "stretch";
    case "items-baseline":
      return "baseline";
    default:
      return value as FlexStyle["alignItems"];
  }
};

// Transform shorthand values for alignSelf
const alignSelf = (value: string | boolean): FlexStyle["alignSelf"] => {
  if (value === true) return "auto"; // Default value if boolean true

  switch (value) {
    case "self-start":
      return "flex-start";
    case "self-end":
      return "flex-end";
    case "self-center":
      return "center";
    case "self-stretch":
      return "stretch";
      return "baseline";
    case "self-auto":
      return "auto";
    default:
      return value as FlexStyle["alignSelf"];
  }
};

// Transform shorthand values for alignContent
const alignContent = (value: string | boolean): FlexStyle["alignContent"] => {
  if (value === true) return "flex-start"; // Default value if boolean true

  switch (value) {
    case "content-start":
      return "flex-start";
    case "content-end":
      return "flex-end";
    case "content-center":
      return "center";
    case "content-stretch":
      return "stretch";
    case "content-between":
      return "space-between";
    case "content-around":
      return "space-around";
    default:
      return value as FlexStyle["alignContent"];
  }
};

export {
  position,
  flex,
  flexDirection,
  justify,
  alignItems,
  alignSelf,
  alignContent,
};
