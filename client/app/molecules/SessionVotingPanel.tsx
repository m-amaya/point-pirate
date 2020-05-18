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

export const SessionVotingPanel: React.FC<Props> = ({
  inRoom,
  inSession,
  me,
}) => {
  return (
    <div>
      <StoryResults
        startDate={inSession.startDate}
        description={inSession.storyDescription}
      />
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
