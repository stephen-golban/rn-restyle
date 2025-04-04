import type { BaseTheme } from '../../types/theme';

/**
 * Creates a strongly typed theme object
 *
 * @param themeConfig - Configuration object extending BaseTheme
 * @returns A theme object that can be used with the ThemeProvider
 */
export function createTheme<T extends BaseTheme>(themeConfig: T): T {
  // Validate required theme properties
  if (!themeConfig.colors) {
    console.warn('Theme is missing colors property');
  }

  if (!themeConfig.spacing) {
    console.warn('Theme is missing spacing property');
  }

  if (!themeConfig.breakpoints) {
    console.warn('Theme is missing breakpoints property');
  }

  return themeConfig;
}

export default createTheme;
