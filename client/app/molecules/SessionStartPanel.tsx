import React from 'react';
import { StoryForm } from 'app/molecules/StoryForm';
import { StoryPointRow } from 'app/molecules/StoryPointRow';
import { TeamList } from 'app/molecules/TeamList';
import { RoomDetail, Session } from 'store/session.store';
import { User } from 'store/user.store';

interface Props {
  inRoom: RoomDetail;
  inSession: Session;
  me: User;
}

export const SessionStartPanel: React.FC<Props> = () => {
  return (
    <div>
      <StoryForm />
      <StoryPointRow votingInProgress={false} />
      <TeamList votingInProgress={false} />
    </div>
  );
};
