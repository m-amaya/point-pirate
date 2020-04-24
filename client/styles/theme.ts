import Color from 'color';

/**
 * Convert a hex color to an rgba with alpha
 */
export const rgba = (hexColor: string, alpha: number) =>
  Color(hexColor).alpha(alpha).rgb().string();

/**
 * Colors (not to be used directly)
 */
const colors = {
  white: '#FFFFFF',
  grayDarkest: '#37393F',
  black: '#000000',
  red: '#E27E7E',
};

/**
 * Theme
 */
export const theme = {
  page: {
    bg: colors.grayDarkest,
    fg: colors.white,
  },
  footer: {
    bg: colors.black,
  },
  icon: {
    logo: colors.red,
    user: '#646464',
  },
};
