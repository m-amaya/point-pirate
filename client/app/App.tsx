import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageLayout } from 'app/molecules/PageLayout';
import { Rooms } from 'app/pages/Rooms';
import { RoomDetail } from 'app/pages/RoomDetail';

export const App: React.FC = hot(() => {
  return (
    <PageLayout>
      <Switch>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route path="/rooms/:roomId">
          <RoomDetail />
        </Route>
        <Route path="*">
          <Redirect to="/rooms" />
        </Route>
      </Switch>
    </PageLayout>
  );
});
