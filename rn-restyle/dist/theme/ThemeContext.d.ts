import React from 'react';
import type { ReactNode } from 'react';
import type { BaseTheme } from '../types/theme';
export declare const ThemeContext: React.Context<{
    theme: BaseTheme;
    setTheme: (theme: BaseTheme) => void;
}>;
interface ThemeProviderProps<T extends BaseTheme = BaseTheme> {
    theme?: T;
    children: ReactNode;
}
export declare const ThemeProvider: <T extends BaseTheme = BaseTheme>({ theme, children }: ThemeProviderProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const useRestyleTheme: <T extends BaseTheme = BaseTheme>() => T;
export declare const useThemeSwitch: <T extends BaseTheme = BaseTheme>() => {
    currentTheme: T;
    switchTheme: (newTheme: BaseTheme) => void;
};
export {};
//# sourceMappingURL=ThemeContext.d.ts.map