import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { theme } from 'styles/theme';

export const User: React.FC = () => {
  return (
    <Wrapper>
      <Icon icon={faSmile} />
      <Name>Roadtoe Ginger</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
});

const Icon = styled(FontAwesomeIcon)({
  color: theme.icon.user,
});

const Name = styled.div({
  fontSize: '1rem',
  marginLeft: '0.5rem',
});
