import type { BaseTheme } from '../../types/theme';
import type { RestyleComponentProps, StylableComponent } from './type';
export declare function createRestyleComponent<Theme extends BaseTheme, C extends StylableComponent, VariantKey extends string = string>(Component: C, variantKey?: VariantKey): (props: RestyleComponentProps<Theme, C>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map