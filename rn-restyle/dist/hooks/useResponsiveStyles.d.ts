import type { BaseTheme, ResponsiveValue } from '../types/theme';
type ResponsiveStyleResult<T> = {
    value: T;
    isLoading: boolean;
};
/**
 * Hook to handle responsive styles based on screen dimensions and breakpoints
 */
export declare function useResponsiveStyles<T, Theme extends BaseTheme = BaseTheme>(responsiveValue: ResponsiveValue<T, Extract<keyof Theme['breakpoints'], string>>): ResponsiveStyleResult<T>;
/**
 * Utility function to compute responsive styles for an array of style objects
 */
export declare function computeResponsiveStyles<Theme extends BaseTheme = BaseTheme>(styleObjects: Record<string, any>[], theme: Theme): Record<string, any>[];
export default useResponsiveStyles;
//# sourceMappingURL=useResponsiveStyles.d.ts.map