import React from 'react';
import { StoryResults } from 'app/molecules/StoryResults';
import { StoryPointRow } from 'app/molecules/StoryPointRow';
import { TeamList } from 'app/molecules/TeamList';

export const SessionVotingPanel: React.FC = () => {
  return (
    <div>
      <StoryResults />
      <StoryPointRow votingInProgress />
      <TeamList votingInProgress />
    </div>
  );
};
