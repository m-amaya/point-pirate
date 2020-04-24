import { css, Global } from '@emotion/core';
import React from 'react';
import { style } from './index';

const globalStyles = css({
  body: {
    'backgroundColor': style.theme.page.bg,
    'color': style.theme.page.fg,
    'fontFamily': style.constants.font.family.text,
    'fontSize': style.constants.font.size,
    'fontWeight': style.constants.font.weight.text.regular,
    'letterSpacing': '0.01em',
    'lineHeight': 1.43,
    'minWidth': style.constants.font.breakpoint.sm,

    /** Font smoothing */
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased',

    /** Disable select */
    'userSelect': 'none',
    'WebkitTouchCallout': 'none',

    '*': {
      boxSizing: 'border-box',
    },
  },

  a: {
    'color': style.theme.page.fg,
    'textDecoration': 'none',

    '&:hover': {
      color: style.theme.page.fg,
      textDecoration: 'none',
    },
  },
});

export const GlobalStyles: React.FC = () => <Global styles={globalStyles} />;
