import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { theme } from 'styles/theme';
import { font } from 'styles/font';

export const Logo: React.FC = () => {
  return (
    <Wrapper>
      <Icon icon={faSkullCrossbones} />
      <Title>Point Pirate</Title>
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

const Title = styled.div({
  fontFamily: font.title.family,
  fontSize: '2rem',
  marginLeft: '1rem',
});
