import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import type { ScaledSize } from 'react-native';
import type { BaseTheme, ResponsiveValue } from '../types/theme';
import { useRestyleTheme } from '../theme/ThemeContext';

// Define the type for the responsive hook result
type ResponsiveStyleResult<T> = {
  value: T;
  isLoading: boolean;
};

/**
 * Hook to handle responsive styles based on screen dimensions and breakpoints
 */
export function useResponsiveStyles<T, Theme extends BaseTheme = BaseTheme>(
  responsiveValue: ResponsiveValue<T, Extract<keyof Theme['breakpoints'], string>>,
): ResponsiveStyleResult<T> {
  // Get theme for breakpoints
  const theme = useRestyleTheme<Theme>();

  // Track current dimensions
  const [dimensions, setDimensions] = useState<ScaledSize>(Dimensions.get('window'));
  const [isLoading, setIsLoading] = useState(true);

  // Handle dimension changes
  useEffect(() => {
    const handleChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    // Subscribe to dimension changes
    const subscription = Dimensions.addEventListener('change', handleChange);

    // We've loaded our initial dimensions
    setIsLoading(false);

    // Clean up subscription
    return () => subscription.remove();
  }, []);

  // If it's not a responsive value (object), just return it directly
  if (typeof responsiveValue !== 'object' || responsiveValue === null) {
    return { value: responsiveValue, isLoading: false };
  }

  // Find the matching breakpoint for the current screen size
  const breakpoints = theme.breakpoints;
  let matchingBreakpoint: string | null = null;
  let highestBreakpointWidth = -1;

  // Check each breakpoint to find the best match
  for (const breakpointName in breakpoints) {
    const breakpoint = breakpoints[breakpointName];

    // Check if this breakpoint matches and is larger than any previous match
    if (
      // Single width value
      (typeof breakpoint === 'number' && dimensions.width >= breakpoint && breakpoint > highestBreakpointWidth) ||
      // Width and height object
      (typeof breakpoint === 'object' &&
        dimensions.width >= breakpoint.width &&
        (breakpoint.height === undefined || dimensions.height >= breakpoint.height) &&
        breakpoint.width > highestBreakpointWidth)
    ) {
      highestBreakpointWidth = typeof breakpoint === 'number' ? breakpoint : breakpoint.width;
      matchingBreakpoint = breakpointName;
    }
  }

  // If we found a matching breakpoint, and a value exists for it, return that value
  if (matchingBreakpoint && responsiveValue[matchingBreakpoint as keyof typeof responsiveValue] !== undefined) {
    return {
      value: responsiveValue[matchingBreakpoint as keyof typeof responsiveValue] as T,
      isLoading,
    };
  }

  // Default fallback - assume the actual value is the non-responsive direct value
  return { value: responsiveValue as T, isLoading };
}

/**
 * Utility function to compute responsive styles for an array of style objects
 */
export function computeResponsiveStyles<Theme extends BaseTheme = BaseTheme>(
  styleObjects: Record<string, any>[],
  theme: Theme,
): Record<string, any>[] {
  const processedStyles: Record<string, any>[] = [];

  // Process each style object
  for (const styleObj of styleObjects) {
    const processedStyle: Record<string, any> = {};

    // Process each property in the style object
    for (const key in styleObj) {
      const value = styleObj[key];

      // Check if it's a responsive value (object)
      if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        // Find the matching breakpoint for responsive values
        let highestBreakpointWidth = -1;
        let matchingValue = undefined;

        for (const breakpointName in value) {
          if (breakpointName in theme.breakpoints) {
            const breakpoint = theme.breakpoints[breakpointName];
            if (breakpoint !== undefined) {
              const breakpointWidth = typeof breakpoint === 'number' ? breakpoint : breakpoint.width;

              if (breakpointWidth > highestBreakpointWidth) {
                highestBreakpointWidth = breakpointWidth;
                matchingValue = value[breakpointName];
              }
            }
          }
        }

        // If we found a match, use it
        if (matchingValue !== undefined) {
          processedStyle[key] = matchingValue;
        }
      } else {
        // Not a responsive value, just pass it through
        processedStyle[key] = value;
      }
    }

    // Only add non-empty objects
    if (Object.keys(processedStyle).length > 0) {
      processedStyles.push(processedStyle);
    }
  }

  return processedStyles;
}

export default useResponsiveStyles;
