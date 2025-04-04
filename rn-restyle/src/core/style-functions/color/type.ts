import type { BaseTheme } from '../../../types/theme';
import type { StyleProps } from '../../styleFunction';

export type ColorProps<Theme extends BaseTheme> = StyleProps<Theme, 'colors'> & {
  bg?: StyleProps<Theme, 'colors'>['backgroundColor'];
  color?: StyleProps<Theme, 'colors'>['color'];
  borderColor?: StyleProps<Theme, 'colors'>['borderColor'];
};
