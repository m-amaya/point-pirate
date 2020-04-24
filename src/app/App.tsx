import { Flex } from 'app/components/Flex';
import { Sidebar } from 'app/components/Sidebar';
import { SidePanel } from 'app/components/SidePanel';
import { AlertsPage } from 'app/pages/AlertsPage';
import { BrowsePage } from 'app/pages/BrowsePage';
import { HomePage } from 'app/pages/HomePage';
import { ProfilePage } from 'app/pages/ProfilePage';
import React, { useContext } from 'react';
import { hot } from 'react-hot-loader/root';
import { useObservable } from 'rxjs-hooks';
import { StoreCtx } from 'store';
import { View } from 'store/view.store';

const renderPage = (view: View) => {
  switch (view) {
    case 'home':
      return <HomePage />;
    case 'browse':
      return <BrowsePage />;
    case 'alerts':
      return <AlertsPage />;
    case 'profile':
      return <ProfilePage />;
    default:
      return <HomePage />;
  }
};

export const App: React.FC = hot(() => {
  const {
    view: { currentView$ },
  } = useContext(StoreCtx);
  const currentView = useObservable(() => currentView$, 'home');

  return (
    <Flex row css={{ height: '100vh' }}>
      <Sidebar />
      {renderPage(currentView)}
      <SidePanel />
    </Flex>
  );
});
