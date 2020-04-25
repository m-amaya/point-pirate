import React from 'react';
import { StoryForm } from 'app/molecules/StoryForm';
import { StoryPointRow } from 'app/molecules/StoryPointRow';
import { TeamList } from 'app/molecules/TeamList';

export const SessionStartPanel: React.FC = () => {
  return (
    <div>
      <StoryForm />
      <StoryPointRow votingInProgress={false} />
      <TeamList votingInProgress={false} />
    </div>
  );
};
