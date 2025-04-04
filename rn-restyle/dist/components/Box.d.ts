import React from 'react';
import { View } from 'react-native';
import type { BaseTheme } from '../types/theme';
import type { RestyleComponentProps } from '../core';
export declare const createBox: <Theme extends BaseTheme>() => ({ children, ...rest }: React.PropsWithChildren<RestyleComponentProps<Theme, typeof View>>) => import("react/jsx-runtime").JSX.Element;
export type BoxProps<Theme extends BaseTheme> = React.PropsWithChildren<RestyleComponentProps<Theme, typeof View>>;
declare const _default: ({ children, ...rest }: React.PropsWithChildren<RestyleComponentProps<BaseTheme, typeof View>>) => import("react/jsx-runtime").JSX.Element;
export default _default;
//# sourceMappingURL=Box.d.ts.map