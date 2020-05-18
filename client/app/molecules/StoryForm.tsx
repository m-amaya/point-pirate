import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from 'app/atoms/Button';
import { Divider } from 'app/atoms/Divider';
import { Label } from 'app/atoms/Label';
import { TextArea } from 'app/atoms/TextArea';
import { StoreCtx } from 'store';
import { Session } from 'store/session.store';

interface Props {
  inSession: Session;
}

export const StoryForm: React.FC<Props> = ({ inSession }) => {
  const { session } = useContext(StoreCtx);
  const history = useHistory();

  const onUpdate = (description: string) =>
    session.updateDescription(inSession.id, description);

  const onClick = () => {
    session.startSession(inSession.id);
    history.push(`/rooms/${inSession.inRoom}/vote`);
  };

  return (
    <div>
      <Label>Story</Label>
      <TextArea description={inSession.storyDescription} onUpdate={onUpdate} />
      <ButtonRow>
        <Button kind="secondary" onClick={onClick}>
          START VOTE
        </Button>
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
