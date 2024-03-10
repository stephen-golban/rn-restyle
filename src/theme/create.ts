import type { BaseTheme } from '../typings';

const createTheme = <T extends BaseTheme>(themeObject: T): T => themeObject;

export { createTheme };
