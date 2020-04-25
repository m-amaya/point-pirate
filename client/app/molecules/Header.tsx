import React from 'react';
import styled from '@emotion/styled';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonKind } from 'app/atoms/Button';
import { Divider } from 'app/atoms/Divider';
import { Title } from 'app/atoms/Title';

interface Props {
  withIcon?: {
    color: string;
    icon: IconDefinition;
  };
  title: string;
  actionButton: {
    kind: ButtonKind;
    text: string;
  };
}

export const Header: React.FC<Props> = ({ withIcon, title, actionButton }) => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          {withIcon && <Icon icon={withIcon.icon} color={withIcon.color} />}
          <Title>{title}</Title>
        </TitleWrapper>
        <Button kind={actionButton.kind}>{actionButton.text}</Button>
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

const Icon = styled(FontAwesomeIcon)<{ color: string }>((props) => ({
  color: props.color,
  fontSize: '2rem',
  marginRight: '1rem',
}));

const TitleWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});
