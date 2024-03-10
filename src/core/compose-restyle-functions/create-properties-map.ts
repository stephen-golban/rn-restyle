import type { BaseTheme } from '../../typings';
import type { AllProps } from '../../properties';

function createPropertiesMap<
  Theme extends BaseTheme,
  TProps extends AllProps<Theme>,
>(funcsMap: { [key in keyof TProps]: any }): {
  [key in keyof TProps]: true;
} {
  const properties = Object.keys(funcsMap);
  return properties.reduce(
    (acc, prop) => {
      acc[prop as keyof TProps] = true;
      return acc;
    },
    {} as { [key in keyof TProps]: true }
  );
}

export { createPropertiesMap };
