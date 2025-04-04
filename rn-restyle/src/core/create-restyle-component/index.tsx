import { useRestyleTheme } from '../../theme/ThemeContext';
import type { BaseTheme } from '../../types/theme';
import * as styleFunctions from '../style-functions';
import type { RestyleComponentProps, StylableComponent, Style } from './type';

// The main function to create a restyle component
export function createRestyleComponent<
  Theme extends BaseTheme,
  C extends StylableComponent,
  VariantKey extends string = string,
>(Component: C, variantKey?: VariantKey) {
  // Create the restyled component that accepts theme-aware props
  const RestyledComponent = (props: RestyleComponentProps<Theme, C>) => {
    // Extract props that we'll pass to the underlying component
    const { variant, children, style, ...restProps } = props;

    // Get the current theme
    const theme = useRestyleTheme<Theme>();

    // Prepare to collect all style objects
    const styleObjects: any[] = [];

    // Process variant first if it exists
    if (variant && variantKey && theme[variantKey as keyof Theme]) {
      const variants = theme[variantKey as keyof Theme] as Record<string, Style>;
      if (variants && variants[variant]) {
        styleObjects.push(variants[variant]);
      }
    }

    // Process spacing props
    const spacingFns = styleFunctions.spacingFunctions<Theme>();
    Object.keys(spacingFns).forEach((key) => {
      const styleFn = spacingFns[key as keyof typeof spacingFns];
      const styleObj = styleFn(restProps as any, theme);
      if (styleObj && Object.keys(styleObj).length > 0) {
        styleObjects.push(styleObj);
      }
    });

    // Process color props
    const colorFns = styleFunctions.colorFunction<Theme>();
    Object.keys(colorFns).forEach((key) => {
      const styleFn = colorFns[key as keyof typeof colorFns];
      const styleObj = styleFn(restProps as any, theme);
      if (styleObj && Object.keys(styleObj).length > 0) {
        styleObjects.push(styleObj);
      }
    });

    // Process layout props
    const layoutFns = styleFunctions.layoutFunctions<Theme>();
    Object.keys(layoutFns).forEach((key) => {
      const styleFn = layoutFns[key as keyof typeof layoutFns];
      const styleObj = styleFn(restProps as any, theme);
      if (styleObj && Object.keys(styleObj).length > 0) {
        styleObjects.push(styleObj);
      }
    });

    // Process border props
    const borderFns = styleFunctions.borderFunctions<Theme>();
    Object.keys(borderFns).forEach((key) => {
      const styleFn = borderFns[key as keyof typeof borderFns];
      const styleObj = styleFn(restProps as any, theme);
      if (styleObj && Object.keys(styleObj).length > 0) {
        styleObjects.push(styleObj);
      }
    });

    // Process center shorthand
    const centerStyle = styleFunctions.centerStyle<Theme>()(restProps as any, theme);
    if (centerStyle && Object.keys(centerStyle).length > 0) {
      styleObjects.push(centerStyle);
    }

    // Add the user's style prop as the final override
    if (style) {
      styleObjects.push(style);
    }

    // Return the Component with all our processed styles
    return (
      <Component {...(restProps as any)} style={styleObjects}>
        {children}
      </Component>
    );
  };

  return RestyledComponent;
}
