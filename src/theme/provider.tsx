import type { BaseTheme } from '../typings';

import React, { createContext, type ReactNode } from 'react';

const DEFAULT_THEME: BaseTheme = {
  colors: {},
  metrics: {},
  textVariants: {},
};

const ThemeContext = createContext<BaseTheme>(DEFAULT_THEME);

const ThemeProvider = ({
  theme,
  children,
}: {
  theme: BaseTheme;
  children: ReactNode;
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

export { DEFAULT_THEME, ThemeContext, ThemeProvider };
