import React, {
  useContext,
  useRef,
  useState,
  ChangeEventHandler,
  KeyboardEventHandler,
} from 'react';
import styled from '@emotion/styled';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSubscription } from 'observable-hooks';
import { StoreCtx } from 'store';
import { theme } from 'styles/theme';

export const User: React.FC = () => {
  const { user } = useContext(StoreCtx);
  const [name, setName] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  useSubscription(user.meSubject, (me) => setName(me.name));

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => {
    if (value) {
      setName(value);
      user.updateUsername(value);
    } else {
      setName(name);
    }
  };

  const onKeypress: KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
    if (key === 'Enter' && inputEl && inputEl.current) {
      inputEl.current.blur();
    }
  };

  return (
    <Wrapper>
      <Icon icon={faSmile} />
      <Name
        ref={inputEl}
        type="text"
        value={name}
        size={name.length + 1}
        onChange={onChange}
        onKeyPress={onKeypress}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 1.5rem',
});

const Icon = styled(FontAwesomeIcon)({
  color: theme.icon.user,
});

const Name = styled.input({
  'backgroundColor': 'transparent',
  'border': 'none',
  'borderRadius': 3,
  'color': theme.input.fg,
  'cursor': 'pointer',
  'fontSize': '1rem',
  'marginLeft': '0.5rem',
  'outline': 'none',
  'transition': 'all 200ms',
  'width': 'auto',
  '&:hover, &:focus': {
    backgroundColor: theme.input.bg,
    padding: '0.25rem 0.5rem',
  },
});
