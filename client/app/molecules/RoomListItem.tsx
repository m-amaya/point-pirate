import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faCommentSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'app/atoms/Button';
import { theme } from 'styles/theme';

interface Room {
  id: string;
  name: string;
  isActive: boolean;
}

export const RoomListItem: React.FC<Room> = ({ name, isActive }) => {
  const [hoverOnInactiveRoom, setHover] = useState(false);

  const onMouseEnter = () => {
    if (!isActive) {
      setHover(true);
    }
  };

  const onMouseLeave = () => {
    if (!isActive) {
      setHover(false);
    }
  };

  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Item>
        <Icon
          icon={isActive ? faCommentDots : faCommentSlash}
          isActive={isActive}
        />
        <RoomName>{name}</RoomName>
      </Item>
      <ActionItem>
        {hoverOnInactiveRoom && <Button kind="primary">REMOVE</Button>}
        {isActive ? (
          <Button kind="secondary">JOIN</Button>
        ) : (
          <Button kind="tertiary">START</Button>
        )}
      </ActionItem>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
});

const Item = styled.div({
  display: 'flex',
});

const ActionItem = styled.div({
  'display': 'flex',
  '& > *': {
    marginLeft: '0.5rem',
  },
});

const Icon = styled(FontAwesomeIcon)<Pick<Room, 'isActive'>>((props) => ({
  color: props.isActive ? theme.icon.activeRoom : theme.icon.inactiveRoom,
  fontSize: '1.75rem',
}));

const RoomName = styled.div({
  marginLeft: '1rem',
});
