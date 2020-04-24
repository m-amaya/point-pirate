import React from 'react';
import { hot } from 'react-hot-loader/root';
import { PageLayout } from 'app/molecules/PageLayout';
import { Rooms } from 'app/pages/Rooms';

export const App: React.FC = hot(() => {
  return (
    <PageLayout>
      <Rooms />
    </PageLayout>
  );
});
