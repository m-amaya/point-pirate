import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';

interface Props {
  value: string;
  votingInProgress: boolean;
  isSelected?: boolean;
  index?: number;
  selectedIndex?: number;
  onSelected?: (i?: number) => void;
}

export const StoryPoint: React.FC<Props> = ({
  value,
  votingInProgress,
  isSelected,
  index,
  selectedIndex,
  onSelected,
}) => {
  const calcSelected =
    index && selectedIndex ? index === selectedIndex : isSelected;

  return (
    <Ball
      value={value}
      votingInProgress={votingInProgress}
      onClick={() => {
        if (onSelected) {
          onSelected(index);
        }
      }}
      isSelected={calcSelected}
    />
  );
};

const Ball = styled.div<
  Pick<Props, 'value' | 'votingInProgress' | 'isSelected'>
>((props) => ({
  'position': 'relative',
  'backgroundColor': props.isSelected ? theme.ball.bgSelected : theme.ball.bg,
  'borderRadius': '50%',
  'color': theme.ball.fg,
  'cursor': props.votingInProgress ? 'pointer' : 'not-allowed',
  'height': '3rem',
  'width': '3rem',
  '&::after': {
    content: `"${props.value}"`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
