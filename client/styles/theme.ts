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
  gray: '#707070',
  grayDarker: '#575757',
  grayDarkest: '#37393F',
  black: '#000000',
  red: '#F16771',
  redDarker: '#C2545C',
  green: '#6CC795',
  greenDarker: '#529370',
};

/**
 * Theme
 */
export const theme = {
  page: {
    bg: colors.grayDarkest,
    fg: colors.white,
    divider: {
      highlight: '#4a4a4a',
      shadow: '#252525',
    },
  },
  footer: {
    bg: colors.black,
  },
  icon: {
    logo: colors.red,
    user: '#646464',
    activeRoom: colors.green,
    inactiveRoom: colors.gray,
    notch: '#707070',
    check: colors.green,
    times: colors.grayDarker,
  },
  input: {
    bg: colors.black,
    fg: colors.white,
  },
  popover: {
    bg: colors.black,
    fg: colors.white,
  },
  button: {
    fg: colors.white,
    primary: {
      bg: colors.red,
      border: colors.redDarker,
    },
    secondary: {
      bg: colors.green,
      border: colors.greenDarker,
    },
    tertiary: {
      bg: colors.gray,
      border: colors.grayDarker,
    },
  },
  textarea: {
    bg: colors.black,
    fg: colors.white,
  },
  ball: {
    bg: colors.black,
    bgSelected: colors.red,
    fg: colors.white,
  },
  votebox: {
    bg: colors.black,
  },
};
