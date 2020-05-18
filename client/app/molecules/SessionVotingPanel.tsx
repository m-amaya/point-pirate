import React from 'react';
import { StoryResults } from 'app/molecules/StoryResults';
import { StoryPointRow } from 'app/molecules/StoryPointRow';
import { TeamList } from 'app/molecules/TeamList';
import { RoomDetail, Session } from 'store/session.store';
import { User } from 'store/user.store';

interface Props {
  inRoom: RoomDetail;
  inSession: Session;
  me: User;
}

export const SessionVotingPanel: React.FC<Props> = () => {
  return (
    <div>
      <StoryResults />
      <StoryPointRow votingInProgress />
      <TeamList votingInProgress />
    </div>
  );
};
