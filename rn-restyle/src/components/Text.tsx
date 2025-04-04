import React from 'react';
import { Text as RNText } from 'react-native';
import { createRestyleComponent } from '../core/create-restyle-component';

import type { BaseTheme } from '../types/theme';
import type { RestyleComponentProps } from '../core/create-restyle-component/type';

// Create our base Text component
export const createText = <Theme extends BaseTheme>() => {
  const TextComponent = createRestyleComponent<Theme, typeof RNText, 'textVariants'>(RNText, 'textVariants');

  // Create a wrapper component that handles children properly
  const Text = ({ children, ...rest }: React.PropsWithChildren<RestyleComponentProps<Theme, typeof RNText>>) => {
    return (
      // @ts-ignore - The type system doesn't understand that children is passed correctly
      <TextComponent {...rest}>{children}</TextComponent>
    );
  };

  return Text;
};

// Export a type for Text props for easier consumption
export type TextProps<Theme extends BaseTheme> = React.PropsWithChildren<RestyleComponentProps<Theme, typeof RNText>>;

// Export a default Text component with the default BaseTheme
export default createText<BaseTheme>();
