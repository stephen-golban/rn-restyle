import React from 'react';
import { View } from 'react-native';
import type { BaseTheme } from '../types/theme';
import type { RestyleComponentProps } from '../core';
declare const CardBase: React.FC<React.ComponentProps<typeof View>>;
export declare const createCard: <Theme extends BaseTheme>() => (props: RestyleComponentProps<Theme, React.FC<import("react-native").ViewProps>>) => import("react/jsx-runtime").JSX.Element;
export type CardProps<Theme extends BaseTheme> = RestyleComponentProps<Theme, typeof CardBase>;
declare const _default: (props: RestyleComponentProps<BaseTheme, React.FC<import("react-native").ViewProps>>) => import("react/jsx-runtime").JSX.Element;
export default _default;
//# sourceMappingURL=Card.d.ts.map