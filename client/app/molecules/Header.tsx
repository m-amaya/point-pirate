import React from 'react';
import styled from '@emotion/styled';
import { Title } from 'app/atoms/Title';
import { Button } from 'app/atoms/Button';
import { Divider } from 'app/atoms/Divider';

export const Header: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Title>Rooms</Title>
        <Button kind="primary">ADD</Button>
      </Wrapper>
      <Divider />
    </>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
