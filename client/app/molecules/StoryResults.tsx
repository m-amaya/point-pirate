import React from 'react';
import styled from '@emotion/styled';
import { Divider } from 'app/atoms/Divider';
import { Label } from 'app/atoms/Label';

export const StoryResults: React.FC = () => {
  return (
    <div>
      <LabelRow>
        <Label>Story</Label>
        <Timer>00:01</Timer>
      </LabelRow>
      <Description>Description</Description>
      <Divider />
    </div>
  );
};

const LabelRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
});

const Timer = styled.div({
  fontSize: '1.1rem',
});

const Description = styled.div({
  fontSize: '1rem',
  marginBottom: '2rem',
});
