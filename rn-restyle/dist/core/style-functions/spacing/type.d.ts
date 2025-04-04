import type { BaseTheme } from "../../../types/theme";
import type { StyleProps } from "../../styleFunction";
export type SpacingProps<Theme extends BaseTheme> = StyleProps<Theme, "spacing"> & {
    m?: StyleProps<Theme, "spacing">["margin"];
    mt?: StyleProps<Theme, "spacing">["marginTop"];
    mr?: StyleProps<Theme, "spacing">["marginRight"];
    mb?: StyleProps<Theme, "spacing">["marginBottom"];
    ml?: StyleProps<Theme, "spacing">["marginLeft"];
    mx?: StyleProps<Theme, "spacing">["marginHorizontal"];
    my?: StyleProps<Theme, "spacing">["marginVertical"];
    p?: StyleProps<Theme, "spacing">["padding"];
    pt?: StyleProps<Theme, "spacing">["paddingTop"];
    pr?: StyleProps<Theme, "spacing">["paddingRight"];
    pb?: StyleProps<Theme, "spacing">["paddingBottom"];
    pl?: StyleProps<Theme, "spacing">["paddingLeft"];
    px?: StyleProps<Theme, "spacing">["paddingHorizontal"];
    py?: StyleProps<Theme, "spacing">["paddingVertical"];
};
//# sourceMappingURL=type.d.ts.map