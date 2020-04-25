import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'app/atoms/Button';
import { Divider } from 'app/atoms/Divider';
import { Label } from 'app/atoms/Label';
import { TextArea } from 'app/atoms/TextArea';

export const StoryForm: React.FC = () => {
  return (
    <div>
      <Label>Story</Label>
      <TextArea />
      <ButtonRow>
        <Button kind="secondary">START VOTE</Button>
      </ButtonRow>
      <Divider />
    </div>
  );
};

const ButtonRow = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '0.5rem',
});
