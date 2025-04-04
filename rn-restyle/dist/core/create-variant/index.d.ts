import type { BaseTheme } from '../../types/theme';
/**
 * Creates a style variant processor that maps props to styles defined in the theme
 */
export declare function createVariant<Theme extends BaseTheme, K extends keyof Theme>({ themeKey, property, }: {
    themeKey: K;
    property?: string;
}): (props: Record<string, any>, theme: Theme) => (Theme[K] & object)[keyof Theme[K]] | {};
export default createVariant;
//# sourceMappingURL=index.d.ts.map