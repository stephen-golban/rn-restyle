import type { BaseTheme, RestyleExtendedProps } from '../../typings';
import { border, type BorderProps } from '../border';
import { layout, type LayoutProps } from '../layout';
import { position, type PositionProps } from '../position';
import {
  shadow,
  textShadow,
  type ShadowProps,
  type TextShadowProps,
} from '../shadow';
import { spacing, type SpacingProps } from '../spacing';
import { typography, type TypographyProps } from '../typography';
import {
  bg,
  color,
  opacity,
  type BgProps,
  type OpacityProps,
  type ColorProps,
} from '../visibility';

const base_properties = <T extends BaseTheme>(theme: T) => [
  bg,
  color,
  opacity,
  ...layout,
  ...shadow,
  ...position,
  ...border(theme),
  ...spacing(theme),
];

const all = <T extends BaseTheme>(theme: T) => [
  ...textShadow,
  ...typography,
  ...base_properties(theme),
];

type BaseProps<Theme extends BaseTheme> = BgProps<Theme> &
  LayoutProps &
  OpacityProps &
  ColorProps<Theme> &
  ShadowProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  PositionProps<Theme> &
  RestyleExtendedProps;

type AllProps<Theme extends BaseTheme> = BaseProps<Theme> &
  TypographyProps &
  TextShadowProps<Theme>;

export { all, base_properties, type AllProps, type BaseProps };
