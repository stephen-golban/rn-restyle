/**
 * Filters and separates component props into cleanProps and restyleProps.
 * @param componentProps The props of the component.
 * @param omitPropertiesMap A map specifying which props to omit.
 */
const filterRestyleProps = <
  TRestyleProps,
  TProps extends { [key: string]: unknown } & TRestyleProps,
>(
  componentProps: TProps,
  omitPropertiesMap: { [key in keyof TProps]?: boolean | undefined }
) => {
  const cleanProps: TProps = {} as TProps;
  const restyleProps: TProps & { variant?: unknown } = {} as TProps;
  let serializedRestyleProps = '';
  if (omitPropertiesMap.variant) {
    restyleProps.variant = componentProps.variant ?? 'defaults';
  }
  for (const key in componentProps) {
    if (omitPropertiesMap[key as keyof TProps]) {
      restyleProps[key] = componentProps[key];
      serializedRestyleProps += `${String(key)}:${componentProps[key]};`;
    } else {
      cleanProps[key] = componentProps[key];
    }
  }

  const keys = { cleanProps, restyleProps, serializedRestyleProps };
  return keys;
};

export { filterRestyleProps };
