import type { BaseTheme } from './theming';

interface RestyleFunctionContainer<
  TProps extends { [key: string]: any },
  Theme extends BaseTheme = BaseTheme,
  P extends keyof TProps = keyof TProps,
  K extends keyof Theme | undefined = keyof Theme | undefined,
> {
  property: P;
  themeKey: K | undefined;
  variant: boolean;
  func: RestyleFunction<TProps, Theme>;
}

type RestyleFunction<
  TProps extends { [key: string]: any } = { [key: string]: any },
  Theme extends BaseTheme = BaseTheme,
  S extends keyof any = string,
> = (
  props: TProps,
  theme: Theme
) => {
  [key in S]?: any;
};

interface RestyleExtendedProps {
  /**
   * Enable to using {flex:1}
   * @default undefined
   */
  fill?: boolean;

  /**
   * Applies Stylesheet.absoluteFillObject
   * @default undefined
   */
  absoluteFill?: boolean;

  /**
   * Set width = '100%'
   * Set height = '100%'
   * @default undefined
   */
  fullSize?: boolean;

  /**
   * Set true for using alignItems = 'center'
   * Set true for using justifyContent = 'center'
   * @default undefined
   */
  center?: boolean;

  /**
   * Set true for using justifyContent = 'space-between'
   * @default undefined
   */
  between?: boolean;

  /**
   * Set true for using position = 'absolute'
   * @default undefined
   */
  absolute?: boolean;

  /**
   * Set true for using position = 'relative'
   * @default undefined
   */
  relative?: boolean;

  /**
   * Set true for using flexDirection = 'row'
   * @default undefined
   */
  row?: boolean;

  /**
   * Set true for using flexDirection = 'column'
   * @default undefined
   */
  col?: boolean;

  /**
   * Set true for using justifyContent = 'space-around'
   * @default undefined
   */
  around?: boolean;
}

export type { RestyleFunctionContainer, RestyleFunction, RestyleExtendedProps };
