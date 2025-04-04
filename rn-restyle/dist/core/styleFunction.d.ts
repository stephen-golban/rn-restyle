import type { BaseTheme, ResponsiveValue, ThemeKeys } from '../types/theme';
export type StyleFunction<Theme extends BaseTheme, Props, Output extends Record<string, any>, K extends keyof Theme = never> = {
    property: keyof Output | ReadonlyArray<string>;
    themeKey?: K;
    transform?: (value: any, theme: Theme) => any;
    defaultValue?: any;
    styleProperty?: keyof Output;
};
export type StyleProps<Theme extends BaseTheme, K extends keyof Theme | never = never> = {
    [Key: string]: ResponsiveValue<K extends keyof Theme ? ThemeKeys<Theme, K> | (string & {}) | number : any, Extract<keyof Theme['breakpoints'], string>> | undefined;
};
export declare const createStyleFunction: <Theme extends BaseTheme, Props extends StyleProps<Theme, K>, Output extends Record<string, any>, K extends keyof Theme | never = never>({ property, themeKey, transform, defaultValue, styleProperty, }: StyleFunction<Theme, Props, Output, K>) => (props: Props, theme: Theme) => Partial<Output>;
//# sourceMappingURL=styleFunction.d.ts.map