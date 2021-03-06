import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'app/atoms/Button';
import { Divider } from 'app/atoms/Divider';
import { StoryResults } from 'app/molecules/StoryResults';
import { StoryPointGrid } from 'app/molecules/StoryPointGrid';
import { TeamList } from 'app/molecules/TeamList';
import { RoomDetail, Session } from 'store/session.store';
import { User } from 'store/user.store';

interface Props {
  inRoom: RoomDetail;
  inSession: Session;
  me: User;
}

export const SessionResultsPanel: React.FC<Props> = ({
  inRoom,
  inSession,
  me,
}) => {
  return (
    <div>
      <StoryResults />
      <StoryPointGrid />
      <TeamList
        me={me}
        members={inRoom.members}
        votes={inSession.votes}
        state={inSession.state}
      />
      <Divider />
      <ButtonRow>
        <Button kind="primary">RE-VOTE</Button>
        <Button kind="secondary">NEXT VOTE</Button>
      </ButtonRow>
    </div>
  );
};

const ButtonRow = styled.div({
  'display': 'flex',
  'justifyContent': 'flex-end',
  '& > *': {
    marginLeft: '0.5rem',
  },
});
