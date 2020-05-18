import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCheck } from '@fortawesome/free-solid-svg-icons';
import { find, isNil } from 'ramda';
import React from 'react';

import { Label } from 'app/atoms/Label';
import { SessionState, Vote } from 'store/session.store';
import { User } from 'store/user.store';
import { theme } from 'styles/theme';

type VoteState = 'start' | 'pending' | 'voted';

interface UserWithVote extends User {
  isMe: boolean;
  points?: number;
  state: VoteState;
}

interface Props {
  me: User;
  members: User[];
  votes: Vote[];
  state?: SessionState;
}

const getVoteState = (state: SessionState, points?: number): VoteState => {
  if (state === 'start') {
    return 'start';
  } else if (state === 'vote' && isNil(points)) {
    return 'pending';
  }

  return 'voted';
};

export const TeamList: React.FC<Props> = ({
  me,
  members = [],
  votes = [],
  state = 'start',
}) => {
  const membersWithVote: UserWithVote[] = members.map((member) => {
    const vote = find((vote) => vote.user.id === member.id, votes);

    return {
      ...member,
      isMe: member.id === me.id,
      points: vote ? vote.points : undefined,
      state: getVoteState(state, vote ? vote.points : undefined),
    };
  });

  return (
    <Container>
      <Label>Team</Label>
      {membersWithVote.map((member) => (
        <MemberRow key={member.id} {...member} sessionState={state} />
      ))}
    </Container>
  );
};

const Container = styled.div({
  marginBottom: '2rem',
});

const MemberRow: React.FC<UserWithVote & { sessionState: SessionState }> = ({
  name,
  isMe,
  points,
  state,
  sessionState,
}) => {
  return (
    <Wrapper>
      <MemberWrapper>
        <Icon
          icon={state === 'voted' ? faCheck : faCircleNotch}
          spin={state === 'pending'}
          voted={state === 'voted'}
        />
        <Name>{name}</Name>
      </MemberWrapper>
      <VoteBox
        points={
          (isMe && state === 'voted') || sessionState === 'results'
            ? points === -1
              ? '🤷‍♂'
              : points
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

const VoteBox = styled.div<{ points?: number | string }>((props) => ({
  'position': 'relative',
  'backgroundColor': theme.votebox.bg,
  'borderRadius': 3,
  'height': '1.75rem',
  'width': '2rem',
  '&::after': {
    content: `"${props.points ? props.points : '-'}"`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1rem',
  },
}));
