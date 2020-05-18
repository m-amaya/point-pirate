import { useObservableState } from 'observable-hooks';
import React, { useContext, useLayoutEffect } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useParams,
} from 'react-router-dom';
import { Header } from 'app/molecules/Header';
import { SessionStartPanel } from 'app/molecules/SessionStartPanel';
import { SessionVotingPanel } from 'app/molecules/SessionVotingPanel';
import { SessionResultsPanel } from 'app/molecules/SessionResultsPanel';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { StoreCtx } from 'store';
import { INIT_ROOM, INIT_SESSION } from 'store/session.store';
import { INIT_USER } from 'store/user.store';
import { theme } from 'styles/theme';

export const RoomDetail: React.FC = () => {
  const { rooms, session, user } = useContext(StoreCtx);
  const history = useHistory();
  const { roomId } = useParams<{ roomId: string }>();
  const inRoom = useObservableState(session.inRoom$, INIT_ROOM);
  const inSession = useObservableState(session.inSession$, INIT_SESSION);
  const me = useObservableState(user.me$, INIT_USER);

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
      <Switch>
        <Route path={`/rooms/:roomId/start`}>
          <SessionStartPanel inRoom={inRoom} inSession={inSession} me={me} />
        </Route>
        <Route path={`/rooms/:roomId/vote`}>
          <SessionVotingPanel inRoom={inRoom} inSession={inSession} me={me} />
        </Route>
        <Route path={`/rooms/:roomId/results`}>
          <SessionResultsPanel inRoom={inRoom} inSession={inSession} me={me} />
        </Route>
        <Route path="/">
          <Redirect to={`/rooms/${roomId}/start`} />
        </Route>
      </Switch>
    </div>
  );
};
