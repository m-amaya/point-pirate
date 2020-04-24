import {
  faBell,
  faHashtag,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  Props as FontAwesomeProps,
} from '@fortawesome/react-fontawesome';
import { Flex } from 'app/components/Flex';
import { Icon } from 'app/components/Icon';
import { LogoText, TabText } from 'app/components/Typography';
import LogoSvg from 'assets/icons/chatter-icon.svg';
import React, { useContext } from 'react';
import { useObservable } from 'rxjs-hooks';
import { StoreCtx } from 'store';
import { ShowViewFn, View } from 'store/view.store';
import { StyleCtx } from 'styles';

interface Tab {
  text: string;
  view: View;
  icon: FontAwesomeProps['icon'];
}

const TABS: Tab[] = [
  { text: 'Home', view: 'home', icon: faHome },
  { text: 'Browse', view: 'browse', icon: faHashtag },
  { text: 'Alerts', view: 'alerts', icon: faBell },
  { text: 'Profile', view: 'profile', icon: faUser },
];

/**
 * Sidebar
 */
export const Sidebar: React.FC = () => {
  const {
    theme: { sidebar },
  } = useContext(StyleCtx);
  const {
    view: { currentView$, showView },
  } = useContext(StoreCtx);
  const currentView = useObservable(() => currentView$, 'home');

  return (
    <Flex
      basis={175}
      css={{
        backgroundColor: sidebar.bg,
        borderRight: `1px solid ${sidebar.border}`,
      }}>
      <Logo borderColor={sidebar.border} showView={showView} />
      {TABS.map((tab) => (
        <Tab
          key={tab.view}
          tab={tab}
          isActive={tab.view === currentView}
          showView={showView}
          style={sidebar}
        />
      ))}
    </Flex>
  );
};

/**
 * Logo
 */
const Logo: React.FC<{ borderColor: string; showView: ShowViewFn }> = ({
  borderColor,
  showView,
}) => (
  <Flex
    align="center"
    justify="center"
    css={{
      borderBottom: `1px solid ${borderColor}`,
      cursor: 'pointer',
      height: 175,
    }}
    onClick={() => showView('home')}>
    <Icon src={LogoSvg} size={75} />
    <LogoText css={{ paddingTop: 5 }}>Chatter</LogoText>
  </Flex>
);

/**
 * Tab
 */
const Tab: React.FC<{
  tab: Tab;
  isActive: boolean;
  showView: ShowViewFn;
  style: {
    bgHover: string;
    fgActive: string;
  };
}> = ({ tab: { icon, text, view }, isActive, showView, style }) => (
  <Flex
    row
    align="center"
    css={{
      'color': isActive ? style.fgActive : undefined,
      'cursor': 'pointer',
      'height': '4em',
      'transition': 'all 200ms',
      '&:hover': {
        backgroundColor: !isActive ? style.bgHover : undefined,
      },
    }}
    onClick={() => showView(view)}>
    <FontAwesomeIcon
      icon={icon}
      css={{ fontSize: '1.25em', margin: '0 0.75em 0 1em' }}
    />
    <TabText>{text}</TabText>
  </Flex>
);
