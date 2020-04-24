import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { theme } from 'styles/theme';
import { Title } from './Title';

export const Logo: React.FC = () => {
  return (
    <Wrapper>
      <Icon icon={faSkullCrossbones} />
      <Title style={{ marginLeft: '1rem' }}>Point Pirate</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
});

const Icon = styled(FontAwesomeIcon)({
  color: theme.icon.logo,
  fontSize: '2.5rem',
});
