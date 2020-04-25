import React from 'react';
import styled from '@emotion/styled';
import { Logo } from 'app/atoms/Logo';
import { User } from 'app/atoms/User';
import { theme } from 'styles/theme';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <User />
      </Header>
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  position: 'relative',
  height: '100%',
  width: '100%',
});

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const Content = styled.div({
  margin: '50px auto',
  width: '100%',
  maxWidth: 500,
});

const Footer = styled.div({
  position: 'fixed',
  bottom: 0,
  left: 0,
  backgroundColor: theme.footer.bg,
  height: 15,
  width: '100%',
});
