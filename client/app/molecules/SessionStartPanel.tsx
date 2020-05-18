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

export const SessionStartPanel: React.FC<Props> = ({
  inRoom,
  inSession,
  me,
}) => {
  return (
    <div>
      <StoryForm inSession={inSession} />
      <StoryPointRow inVote={inSession.state === 'vote'} />
      <TeamList
        me={me}
        members={inRoom.members}
        votes={inSession.votes}
        state={inSession.state}
      />
    </div>
  );
};
