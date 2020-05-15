import React, {
  useRef,
  useState,
  KeyboardEventHandler,
  ChangeEventHandler,
} from 'react';
import styled from '@emotion/styled';
import { Button } from 'app/atoms/Button';
import { PopoverContentProps } from 'app/atoms/Popover';
import { theme } from 'styles/theme';

export const AddRoomPopoverContent: React.FC<PopoverContentProps> = ({
  closePopover,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [roomName, setRoomName] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setRoomName(value);

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
    if (key === 'Enter' && closePopover && roomName) {
      closePopover();
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
      <Button kind="secondary" onClick={closePopover}>
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
