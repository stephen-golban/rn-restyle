import React from 'react';
import { Text as RNText } from 'react-native';
import type { BaseTheme } from '../types/theme';
import type { RestyleComponentProps } from '../core/create-restyle-component/type';
export declare const createText: <Theme extends BaseTheme>() => ({ children, ...rest }: React.PropsWithChildren<RestyleComponentProps<Theme, typeof RNText>>) => import("react/jsx-runtime").JSX.Element;
export type TextProps<Theme extends BaseTheme> = React.PropsWithChildren<RestyleComponentProps<Theme, typeof RNText>>;
declare const _default: ({ children, ...rest }: React.PropsWithChildren<RestyleComponentProps<BaseTheme, typeof RNText>>) => import("react/jsx-runtime").JSX.Element;
export default _default;
//# sourceMappingURL=Text.d.ts.map