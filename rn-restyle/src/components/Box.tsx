import React from 'react';
import { View } from 'react-native';
import { createRestyleComponent } from '../core/create-restyle-component';

import type { BaseTheme } from '../types/theme';
import type { RestyleComponentProps } from '../core';

// Create our base Box component
export const createBox = <Theme extends BaseTheme>() => {
  const BoxComponent = createRestyleComponent<Theme, typeof View, 'boxVariants'>(View, 'boxVariants');

  // Create a wrapper component that handles children properly
  const Box = ({ children, ...rest }: React.PropsWithChildren<RestyleComponentProps<Theme, typeof View>>) => {
    return (
      // @ts-ignore - The type system doesn't understand that children is passed correctly
      <BoxComponent {...rest}>{children}</BoxComponent>
    );
  };

  return Box;
};

// Export a type for Box props for easier consumption
export type BoxProps<Theme extends BaseTheme> = React.PropsWithChildren<RestyleComponentProps<Theme, typeof View>>;

// Export a default Box component with the default BaseTheme
export default createBox<BaseTheme>();
