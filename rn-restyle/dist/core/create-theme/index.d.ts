import type { BaseTheme } from '../../types/theme';
/**
 * Creates a strongly typed theme object
 *
 * @param themeConfig - Configuration object extending BaseTheme
 * @returns A theme object that can be used with the ThemeProvider
 */
export declare function createTheme<T extends BaseTheme>(themeConfig: T): T;
export default createTheme;
//# sourceMappingURL=index.d.ts.map