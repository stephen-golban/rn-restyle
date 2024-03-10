import { StyleSheet } from 'react-native';

/**
 * Extends the styles based on specific prop flags.
 * @param props The props containing style flags.
 */
function extendStyles(props: { [key: string]: any }) {
  let extendedStyles = {};

  // Mapping of prop flags to style adjustments
  const styleMappings = {
    fill: { flex: 1 },
    row: { flexDirection: 'row' },
    col: { flexDirection: 'column' },
    absolute: { position: 'absolute' },
    relative: { position: 'relative' },
    around: { justifyContent: 'space-around' },
    fullSize: { width: '100%', height: '100%' },
    between: { justifyContent: 'space-between' },
    absoluteFill: StyleSheet.absoluteFillObject,
    center: { alignItems: 'center', justifyContent: 'center' },
  };

  Object.keys(styleMappings).forEach((key) => {
    if (props[key]) {
      extendedStyles = {
        ...extendedStyles,
        ...styleMappings[key as keyof typeof styleMappings],
      };
    }
  });

  return extendedStyles;
}

export { extendStyles };
