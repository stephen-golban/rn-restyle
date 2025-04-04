import type { BaseTheme, ResponsiveValue, ThemeKeys } from '../types/theme';

// Define the type for style function
export type StyleFunction<
  Theme extends BaseTheme,
  Props,
  Output extends Record<string, any>,
  K extends keyof Theme = never,
> = {
  property: keyof Output | ReadonlyArray<string>;
  themeKey?: K;
  transform?: (value: any, theme: Theme) => any;
  defaultValue?: any;
  styleProperty?: keyof Output;
};

// Type for style props that are ready to be processed
export type StyleProps<Theme extends BaseTheme, K extends keyof Theme | never = never> = {
  [Key: string]:
    | ResponsiveValue<
        K extends keyof Theme ? ThemeKeys<Theme, K> | (string & {}) | number : any,
        Extract<keyof Theme['breakpoints'], string>
      >
    | undefined;
};

// Create a function to generate style processors based on property mappings
export const createStyleFunction = <
  Theme extends BaseTheme,
  Props extends StyleProps<Theme, K>,
  Output extends Record<string, any>,
  K extends keyof Theme | never = never,
>({
  property,
  themeKey,
  transform,
  defaultValue,
  styleProperty,
}: StyleFunction<Theme, Props, Output, K>) => {
  // Return a function that will process props based on the style function configuration
  return (props: Props, theme: Theme): Partial<Output> => {
    const styleObj: Partial<Output> = {};
    const properties = Array.isArray(property) ? property : [property];

    // Always use the first property as the actual style property unless explicitly overridden
    const targetProperty = styleProperty || (properties[0] as keyof Output);
    let propValue: any = undefined;

    // Check each property in order (treating all but the first as shorthands)
    for (const prop of properties) {
      const propName = prop as string;
      const currentValue = props[propName];

      if (currentValue !== undefined) {
        propValue = currentValue;
        break; // Stop at the first property that has a value
      }
    }

    // Process the found property value
    if (propValue !== undefined) {
      // If it's a responsive value (object with breakpoint keys)
      if (typeof propValue === 'object' && propValue !== null && !Array.isArray(propValue)) {
        // We'll handle responsive values elsewhere
        (styleObj as Record<keyof Output, unknown>)[targetProperty] = propValue;
      }
      // If it's a direct value
      else {
        // If we have a theme key, try to get the value from theme
        if (themeKey && (typeof propValue === 'string' || typeof propValue === 'number')) {
          const themeSection = theme[themeKey] as Record<string | number, unknown> | undefined;
          const themeValue = themeSection?.[propValue];

          if (themeValue !== undefined) {
            // If we have a transform function, apply it
            if (transform) {
              (styleObj as Record<keyof Output, unknown>)[targetProperty] = transform(themeValue, theme);
            } else {
              (styleObj as Record<keyof Output, unknown>)[targetProperty] = themeValue;
            }
          } else {
            // If no theme value found, use the raw value or transform it
            if (transform) {
              (styleObj as Record<keyof Output, unknown>)[targetProperty] = transform(propValue, theme);
            } else {
              (styleObj as Record<keyof Output, unknown>)[targetProperty] = propValue;
            }
          }
        }
        // No theme key specified, just use the value directly with optional transform
        else {
          if (transform) {
            (styleObj as Record<keyof Output, unknown>)[targetProperty] = transform(propValue, theme);
          } else {
            (styleObj as Record<keyof Output, unknown>)[targetProperty] = propValue;
          }
        }
      }
    }

    // If we didn't find a value but have a default, use it
    if (Object.keys(styleObj).length === 0 && defaultValue !== undefined) {
      if (transform) {
        (styleObj as Record<keyof Output, unknown>)[targetProperty] = transform(defaultValue, theme);
      } else {
        (styleObj as Record<keyof Output, unknown>)[targetProperty] = defaultValue;
      }
    }

    return styleObj;
  };
};
