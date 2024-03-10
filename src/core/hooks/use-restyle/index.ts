import { type StyleProp } from 'react-native';
import type {
  RNStyle,
  BaseTheme,
  RestyleExtendedProps,
} from '../../../typings';

import { useMemo } from 'react';
import { useTheme } from '../../../theme';
import { extendStyles } from './extend-styles';
import { filterRestyleProps } from './filter-restyle-props';

const useRestyle = <
  Theme extends BaseTheme,
  TRestyleProps extends RestyleExtendedProps & { [key: string]: any },
  TProps extends TRestyleProps & { style?: StyleProp<RNStyle> },
>(
  composedRestyleFunction: {
    buildStyle: <TInputProps extends TProps>(
      props: TInputProps,
      theme: Theme
    ) => RNStyle;
    properties: (keyof TProps)[];
    propertiesMap: { [key in keyof TProps]?: boolean | undefined };
  },
  props: TProps
) => {
  const theme = useTheme<Theme>();

  const { cleanProps, restyleProps, serializedRestyleProps } =
    filterRestyleProps(props, composedRestyleFunction.propertiesMap);
  const extendedStyles = extendStyles(cleanProps);

  const calculatedStyle: StyleProp<RNStyle> = useMemo(() => {
    const style = composedRestyleFunction.buildStyle(
      restyleProps as TProps,
      theme
    );
    const finalStyle = [style, extendedStyles];
    const styleProp: StyleProp<RNStyle> = props.style;

    return typeof styleProp === 'function'
      ? (((...args: any[]) =>
          [finalStyle, styleProp(...args)].filter(
            Boolean
          )) as StyleProp<RNStyle>)
      : [finalStyle, styleProp].filter(Boolean);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, props.style, serializedRestyleProps, composedRestyleFunction]);

  cleanProps.style = calculatedStyle;
  return cleanProps;
};

export { useRestyle };
