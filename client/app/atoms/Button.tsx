import React from 'react';
import styled from '@emotion/styled';
import { font } from 'styles/font';
import { theme } from 'styles/theme';
import { Popover, Props as PopoverProps } from './Popover';

export type ButtonKind = 'primary' | 'secondary' | 'tertiary';

export interface Props {
  kind: ButtonKind;
  popover?: PopoverProps;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  kind,
  popover,
  onClick,
  children,
}) => {
  return popover ? (
    <Popover {...popover}>
      <BaseButton kind={kind} onClick={onClick}>
        {children}
      </BaseButton>
    </Popover>
  ) : (
    <div>
      <BaseButton kind={kind} onClick={onClick}>
        {children}
      </BaseButton>
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
