import React from 'react';
import { View } from 'react-native';
import type { BaseTheme } from '../types/theme';
import { createRestyleComponent } from '../core/create-restyle-component';
import type { RestyleComponentProps } from '../core';

// Card base component with shadow styles
const CardBase: React.FC<React.ComponentProps<typeof View>> = ({ style, children, ...rest }) => {
  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 3,
          padding: 16,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

// Create our Card component using createRestyleComponent
export const createCard = <Theme extends BaseTheme>() => {
  return createRestyleComponent<Theme, typeof CardBase, 'cardVariants'>(CardBase, 'cardVariants');
};

// Export a type for Card props for easier consumption
export type CardProps<Theme extends BaseTheme> = RestyleComponentProps<Theme, typeof CardBase>;

// Export a default Card component with the default BaseTheme
export default createCard<BaseTheme>();
