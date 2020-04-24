import React from 'react';
import { constants } from './constants';
import { theme } from './theme';

/**
 * Style
 */
export const style = { constants, theme };

/**
 * Context shortcut
 */
export const StyleCtx = React.createContext(style);
