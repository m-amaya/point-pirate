import { css, Global } from '@emotion/core';
import React from 'react';

import { breakpoint } from './breakpoint';
import { font } from './font';
import { theme } from './theme';

const globalStyles = css({
  '#app': {
    'backgroundColor': theme.page.bg,
    'color': theme.page.fg,
    'fontFamily': font.text.family,
    'fontSize': font.size,
    'fontWeight': font.text.weight.regular,
    'letterSpacing': '0.01em',
    'lineHeight': 1.43,
    'height': '100vh',
    'minHeight': 800,
    'minWidth': breakpoint.sm,
    'overflowY': 'auto',

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

  'a': {
    'color': theme.page.fg,
    'textDecoration': 'none',

    '&:hover': {
      color: theme.page.fg,
      textDecoration: 'none',
    },
  },
});

export const GlobalStyles: React.FC = () => <Global styles={globalStyles} />;
