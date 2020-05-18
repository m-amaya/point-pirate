import { useObservableState } from 'observable-hooks';
import React, { useContext, useLayoutEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Header } from 'app/molecules/Header';
import { SessionStartPanel } from 'app/molecules/SessionStartPanel';
import { SessionVotingPanel } from 'app/molecules/SessionVotingPanel';
import { SessionResultsPanel } from 'app/molecules/SessionResultsPanel';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { StoreCtx } from 'store';
import { INIT_ROOM } from 'store/session.store';
import { theme } from 'styles/theme';

export const RoomDetail: React.FC = () => {
  const { rooms, session } = useContext(StoreCtx);
  const history = useHistory();
  const { roomId } = useParams<{ roomId: string }>();
  const inRoom = useObservableState(session.inRoom$, INIT_ROOM);

  useLayoutEffect(() => {
    rooms.joinRoom(roomId);
  }, []);

  return (
    <div>
      <Header
        title={inRoom.name}
        actionButton={{
          kind: 'primary',
          text: 'LEAVE',
          onClick: () => {
            rooms.leaveRoom();
            history.push('/rooms');
          },
        }}
        withIcon={{ color: theme.icon.activeRoom, icon: faCommentDots }}
      />
      {/* <SessionStartPanel /> */}
      {/* <SessionVotingPanel /> */}
      {/* <SessionResultsPanel /> */}
    </div>
  );
};
