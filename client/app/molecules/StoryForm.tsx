import { useObservableState } from 'observable-hooks';
import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from 'app/atoms/Button';
import { Divider } from 'app/atoms/Divider';
import { Label } from 'app/atoms/Label';
import { TextArea } from 'app/atoms/TextArea';
import { StoreCtx } from 'store';
import { INIT_SESSION } from 'store/session.store';

export const StoryForm: React.FC = () => {
  const { session } = useContext(StoreCtx);
  const history = useHistory();
  const inSession = useObservableState(session.inSession$, INIT_SESSION);
  const params = useParams();

  console.log('params:', params);

  const onUpdate = (description: string) =>
    session.updateDescription(inSession.id, description);

  return (
    <div>
      <Label>Story</Label>
      <TextArea description={inSession.storyDescription} onUpdate={onUpdate} />
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
