import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  ChangeEventHandler,
  KeyboardEventHandler,
} from 'react';
import styled from '@emotion/styled';
import { Button } from 'app/atoms/Button';
import { PopoverContentProps } from 'app/atoms/Popover';
import { StoreCtx } from 'store';
import { theme } from 'styles/theme';

export const AddRoomPopoverContent: React.FC<PopoverContentProps> = ({
  closePopover,
}) => {
  const { rooms } = useContext(StoreCtx);
  const inputEl = useRef<HTMLInputElement>(null);
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  const addRoom = () => {
    if (roomName) {
      rooms.addRoom(roomName);
    }

    if (closePopover) {
      closePopover();
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setRoomName(value);

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
    if (key === 'Enter') {
      addRoom();
    }
  };

  return (
    <Wrapper>
      <RoomName
        ref={inputEl}
        type="text"
        value={roomName}
        placeholder="Enter a Room Name..."
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <Button kind="secondary" onClick={addRoom}>
        ENTER
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const RoomName = styled.input({
  backgroundColor: theme.input.bg,
  border: 'none',
  color: theme.input.fg,
  fontSize: '1rem',
  lineHeight: '1.6rem',
  marginRight: '1rem',
  outline: 'none',
  width: 200,
});
