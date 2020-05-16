import React, { useContext, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'app/molecules/Header';
import { SessionStartPanel } from 'app/molecules/SessionStartPanel';
import { SessionVotingPanel } from 'app/molecules/SessionVotingPanel';
import { SessionResultsPanel } from 'app/molecules/SessionResultsPanel';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { StoreCtx } from 'store';
import { theme } from 'styles/theme';

export const RoomDetail: React.FC = () => {
  const { roomDetail } = useContext(StoreCtx);
  const { roomId } = useParams<{ roomId: string }>();

  useLayoutEffect(() => {
    roomDetail.joinRoom(roomId);
  }, []);

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
