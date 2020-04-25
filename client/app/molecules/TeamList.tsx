import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Label } from 'app/atoms/Label';
import { theme } from 'styles/theme';

type VotingState = 'start' | 'pending' | 'voted';

interface Member {
  id: string;
  name: string;
  vote?: string;
}

const team: Member[] = [
  {
    id: '0',
    name: 'mamaya',
    vote: '13',
  },
  {
    id: '1',
    name: 'Roadtoe Ginger',
  },
  {
    id: '2',
    name: 'joe 42',
  },
];

interface Props {
  votingInProgress: boolean;
}

export const TeamList: React.FC<Props> = ({ votingInProgress }) => {
  return (
    <Container>
      <Label>Team</Label>
      {team.map((member) => (
        <MemberRow
          key={member.id}
          {...member}
          votingInProgress={votingInProgress}
        />
      ))}
    </Container>
  );
};

const Container = styled.div({
  marginBottom: '2rem',
});

const MemberRow: React.FC<Member & Props> = ({
  name,
  vote,
  votingInProgress,
}) => {
  const votingState: VotingState = votingInProgress
    ? vote
      ? 'voted'
      : 'pending'
    : 'start';

  console.log('voting state:', votingState);

  return (
    <Wrapper>
      <MemberWrapper>
        <Icon
          icon={votingState === 'voted' ? faCheck : faCircleNotch}
          spin={votingState === 'pending'}
          voted={votingState === 'voted'}
        />
        <Name>{name}</Name>
      </MemberWrapper>
      <VoteBox
        vote={
          votingState === 'voted' && (name === 'mamaya' || !votingInProgress)
            ? vote
            : undefined
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1rem 0',
});

const MemberWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Icon = styled(FontAwesomeIcon)<{ voted: boolean }>((props) => ({
  color: props.voted ? theme.icon.check : theme.icon.notch,
}));

const Name = styled.div({
  fontSize: '1.2rem',
  marginLeft: '0.75rem',
});

const VoteBox = styled.div<{ vote?: string }>((props) => ({
  'position': 'relative',
  'backgroundColor': theme.votebox.bg,
  'borderRadius': 3,
  'height': '1.75rem',
  'width': '2rem',
  '&::after': {
    content: `"${props.vote ? props.vote : ' '}"`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1rem',
  },
}));
