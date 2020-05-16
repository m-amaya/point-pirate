import React from 'react';
import { Header } from 'app/molecules/Header';
import { SessionStartPanel } from 'app/molecules/SessionStartPanel';
import { SessionVotingPanel } from 'app/molecules/SessionVotingPanel';
import { SessionResultsPanel } from 'app/molecules/SessionResultsPanel';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { theme } from 'styles/theme';

export const RoomDetail: React.FC = () => {
  return (
    <div>
      <Header
        title="WinTogether"
        actionButton={{ kind: 'primary', text: 'LEAVE' }}
        withIcon={{ color: theme.icon.activeRoom, icon: faCommentDots }}
      />
      {/* <SessionStartPanel /> */}
      {/* <SessionVotingPanel /> */}
      {/* <SessionResultsPanel /> */}
    </div>
  );
};
