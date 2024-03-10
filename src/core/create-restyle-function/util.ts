import type {
  BaseTheme,
  PropValue,
  StyleTransformFunction,
} from '../../typings';

function createMemoizationKey(
  themeKey: keyof BaseTheme,
  property: string,
  value: unknown
): string {
  return `${themeKey}-${property}-${value}`;
}

interface Props<
  TVal extends PropValue,
  Theme extends BaseTheme,
  K extends keyof Theme | undefined,
> {
  theme: Theme;
  transform?: StyleTransformFunction<Theme, K, TVal>;
  themeKey?: K;
}

function getThemeValue<
  TVal extends PropValue,
  Theme extends BaseTheme,
  K extends keyof Theme | undefined,
>(value: TVal | undefined, props: Props<TVal, Theme, K>) {
  const { theme, transform, themeKey } = props;
  if (transform) return transform({ value, theme, themeKey });
  if (isThemeKey(theme, themeKey)) {
    if (value && theme[themeKey][value as string] === undefined)
      throw new Error(
        `Value '${value}' does not exist in theme['${String(themeKey)}']`
      );

    return value ? theme[themeKey][value as string] : value;
  }

  return value;
}

function isThemeKey<Theme extends BaseTheme>(
  theme: Theme,
  K: keyof Theme | undefined
): K is keyof Theme {
  return theme[K as keyof Theme];
}

export { getThemeValue, createMemoizationKey };
