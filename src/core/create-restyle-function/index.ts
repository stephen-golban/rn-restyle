import { createMemoizationKey, getThemeValue } from './util';

import type {
  BaseTheme,
  RNStyleProperty,
  StyleTransformFunction,
  RestyleFunction,
} from '../../typings';

const memoizedThemes: WeakMap<BaseTheme, any> = new WeakMap();

const createRestyleFunction = <
  Theme extends BaseTheme = BaseTheme,
  TProps extends { [key: string]: any } = { [key: string]: any },
  P extends keyof TProps = keyof TProps,
  K extends keyof Theme | undefined = undefined,
  S extends RNStyleProperty = RNStyleProperty,
>({
  property,
  transform,
  styleProperty,
  themeKey,
}: {
  property: P;
  transform?: StyleTransformFunction<Theme, K, TProps[P]>;
  styleProperty?: S;
  themeKey?: K;
}) => {
  const styleProp = styleProperty || property.toString();

  const func: RestyleFunction<TProps, Theme, S | P> = (props, theme) => {
    if (memoizedThemes.get(theme) == null) {
      memoizedThemes.set(theme, {});
    }

    const memoizedMapHashKey = (() => {
      if (
        themeKey &&
        property &&
        props[property] &&
        typeof themeKey === 'string' &&
        typeof property === 'string'
      ) {
        let propertyValue = '';
        if (typeof props[property] === 'object') {
          for (const [breakpoint, value] of Object.entries(props[property])) {
            propertyValue += `${breakpoint}:${value}`;
          }
        } else {
          propertyValue = String(props[property]);
        }

        return createMemoizationKey(
          String(themeKey),
          String(property),
          propertyValue
        );
      } else {
        return null;
      }
    })();

    if (memoizedMapHashKey != null) {
      const memoizedValue = memoizedThemes.get(theme)[memoizedMapHashKey];
      if (memoizedValue != null) {
        return memoizedValue;
      }
    }

    const value = (() => {
      return getThemeValue(props[property], { theme, themeKey, transform });
    })();
    if (value === undefined) return {};

    if (memoizedMapHashKey != null) {
      memoizedThemes.get(theme)[memoizedMapHashKey] = {
        [styleProp]: value,
      };
      return memoizedThemes.get(theme)[memoizedMapHashKey];
    }
    return {
      [styleProp]: value,
    } as { [key in S | P]?: typeof value };
  };

  return {
    property,
    themeKey,
    variant: false,
    func,
  };
};

export { createRestyleFunction };
