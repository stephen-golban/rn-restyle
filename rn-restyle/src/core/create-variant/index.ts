import type { BaseTheme } from '../../types/theme';

/**
 * Creates a style variant processor that maps props to styles defined in the theme
 */
export function createVariant<Theme extends BaseTheme, K extends keyof Theme>({
  themeKey,
  property = 'variant',
}: {
  themeKey: K;
  property?: string;
}) {
  return (props: Record<string, any>, theme: Theme) => {
    const value = props[property];

    if (value === undefined) {
      return {};
    }

    const variants = theme[themeKey];

    if (!variants || typeof variants !== 'object') {
      return {};
    }

    if (value in variants) {
      return variants[value as keyof typeof variants];
    }

    return {};
  };
}

export default createVariant;
