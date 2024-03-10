import type { BaseTheme } from '../../typings';

import { createRestyleFunction } from '../../core/create-restyle-function';

const bg = createRestyleFunction({
  property: 'bg',
  styleProperty: 'backgroundColor',
  themeKey: 'colors',
});

const color = [
  createRestyleFunction({
    property: 'color',
    themeKey: 'colors',
  }),
  createRestyleFunction({
    property: 'textDecorationColor',
    themeKey: 'colors',
  }),
];

const opacity = createRestyleFunction({
  property: 'opacity',
});

interface OpacityProps {
  opacity?: number;
}

interface BgProps<Theme extends BaseTheme> {
  bg?: keyof Theme['colors'];
}

interface ColorProps<Theme extends BaseTheme> {
  color?: keyof Theme['colors'];
  textDecorationColor?: keyof Theme['colors'];
}

export { bg, color, opacity, type BgProps, type ColorProps, type OpacityProps };
