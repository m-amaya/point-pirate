import React from 'react';
import styled from '@emotion/styled';
import { font } from 'styles/font';
import { theme } from 'styles/theme';

export type ButtonKind = 'primary' | 'secondary' | 'tertiary';

interface Props {
  kind: ButtonKind;
}

export const Button: React.FC<Props> = ({ kind, children }) => {
  return (
    <div>
      <BaseButton kind={kind}>{children}</BaseButton>
    </div>
  );
};

const BaseButton = styled.button<Props>(({ kind }) => ({
  'backgroundColor': theme.button[kind].bg,
  'border': 'none',
  'borderBottom': `5px solid ${theme.button[kind].border}`,
  'borderRadius': 5,
  'color': theme.button.fg,
  'cursor': 'pointer',
  'fontFamily': font.text.family,
  'fontSize': '1rem',
  'fontWeight': font.text.weight.bold,
  'outline': 0,
  'opacity': 0.8,
  'padding': '0.3rem 0.6rem',
  'transition': 'all 200ms',
  '&:hover': {
    opacity: 1,
  },
  '&:active': {
    backgroundColor: theme.button[kind].border,
  },
}));
