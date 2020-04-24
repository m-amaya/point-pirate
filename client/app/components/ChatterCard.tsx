import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import {
  FontAwesomeIcon,
  Props as FontAwesomeProps,
} from '@fortawesome/react-fontawesome';
import { FlexForm, Flex } from 'app/components/Flex';
import { TimestampText, UsernameText } from 'app/components/Typography';
import React, { useContext } from 'react';
import TimeAgo from 'react-timeago';
import { Post } from 'store/chatter.store';
import { User } from 'store/user.store';
import { StyleCtx } from 'styles';
import { Textarea, Button } from './Form';

/**
 * Chatter Form
 */
export const ChatterForm: React.FC<{
  user: User;
  onChange: ClickHandler<HTMLTextAreaElement>;
  onSubmit: ClickHandler<HTMLButtonElement>;
}> = ({ user, onChange, onSubmit }) => {
  const {
    theme: { button, card },
  } = useContext(StyleCtx);

  return (
    <FlexForm
      css={{
        border: `1px solid ${card.border}`,
        borderRadius: 5,
        padding: '1em',
      }}>
      <Flex row>
        <Avatar
          icon={user.icon}
          theme={{ bg: card.bgPlacemat, border: card.border, fg: user.color }}
        />
        <Textarea
          placeholder="What's on your mind?"
          theme={card}
          onChange={onChange}
        />
      </Flex>
      <Flex justify="end" row>
        <Button text="Post" type="submit" theme={button} onClick={onSubmit} />
      </Flex>
    </FlexForm>
  );
};

/**
 * Chatter Card
 */
export const ChatterCard: React.FC<{
  post: Post;
  isLiked?: boolean;
  onLike(post: Post): void;
  user: User;
}> = ({ post, isLiked, onLike, user }) => {
  const isDisliked = false;
  const {
    theme: { card },
  } = useContext(StyleCtx);
  const likedColor = isLiked ? card.fgLiked : card.border;
  const dislikedColor = isDisliked ? card.fgDisliked : card.border;

  const onClick = () => onLike(post);

  return (
    <Placemat
      theme={{
        bg: card.bgPlacemat,
        border: likedColor,
      }}>
      <Card
        isDisliked={isDisliked}
        theme={{
          bg: isDisliked ? card.bgPlacemat : card.bg,
          border: likedColor,
        }}>
        <CardHead>
          <Avatar
            icon={user.icon}
            theme={{
              bg: card.bgPlacemat,
              border: card.border,
              fg: user.color,
            }}
          />
          <Flex css={{ paddingLeft: '1em' }}>
            <UsernameText>{user.username}</UsernameText>
            <TimestampText>
              <TimeAgo date={post.timestamp} /> &bull; Post #{post.count}
            </TimestampText>
          </Flex>
        </CardHead>
        <CardBody>{post.content}</CardBody>
      </Card>
      <ThumbColumn
        isLiked={isLiked}
        isDisliked={isDisliked}
        onClick={onClick}
        theme={{
          fgHover: card.fgHover,
          fgLiked: likedColor,
          fgDisliked: dislikedColor,
          bgHover: card.bgHover,
        }}
      />
    </Placemat>
  );
};

/**
 * Placemat
 */
const Placemat: React.FC<{ theme: { bg: string; border: string } }> = ({
  theme,
  ...rest
}) => (
  <Flex
    row
    css={{
      backgroundColor: theme.bg,
      border: `1px solid ${theme.border}`,
      borderRadius: 5,
      minHeight: 200,
      marginTop: '1em',
      width: '100%',
    }}
    {...rest}
  />
);

/**
 * Card
 */
const Card: React.FC<{
  isDisliked?: boolean;
  theme: { bg: string; border: string };
}> = ({ isDisliked, theme, ...rest }) => (
  <Flex
    css={{
      backgroundColor: theme.bg,
      borderRight: `1px solid ${theme.border}`,
      borderRadius: 5,
      opacity: isDisliked ? 0.5 : 1,
      padding: '1em',
      width: 'calc(100% - 50px)',
    }}
    {...rest}
  />
);

/**
 * Card Head
 */
const CardHead: React.FC = (props) => <Flex align="center" row {...props} />;

/**
 * Card Body
 */
const CardBody: React.FC = (props) => (
  <div
    css={{
      paddingTop: '1em',
      width: '100%',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
    }}
    {...props}
  />
);

/**
 * Thumb Column
 */
const ThumbColumn: React.FC<{
  isLiked?: boolean;
  isDisliked?: boolean;
  onClick: ClickHandler;
  theme: {
    fgHover: string;
    fgLiked: string;
    fgDisliked: string;
    bgHover: string;
  };
}> = ({ isLiked, isDisliked, onClick, theme }) => (
  <Flex align="center" justify="end" css={{ paddingBottom: '1em', width: 50 }}>
    <ThumbIcon
      direction="up"
      isLiked={isLiked}
      onClick={onClick}
      theme={{
        fg: theme.fgLiked,
        fgHover: theme.fgHover,
        bgHover: theme.bgHover,
      }}
    />
    <ThumbIcon
      direction="down"
      isDisliked={isDisliked}
      theme={{
        fg: theme.fgDisliked,
        fgHover: theme.fgHover,
        bgHover: theme.bgHover,
      }}
    />
  </Flex>
);

/**
 * Thumb Icon
 */
const ThumbIcon: React.FC<{
  direction: 'up' | 'down';
  isLiked?: boolean;
  isDisliked?: boolean;
  onClick?: ClickHandler;
  theme: { fg: string; fgHover: string; bgHover: string };
}> = ({ direction, isLiked, isDisliked, onClick, theme }) => {
  const isSelected =
    (direction === 'up' && isLiked) || (direction === 'down' && isDisliked);

  return (
    <Flex onClick={onClick}>
      <FontAwesomeIcon
        icon={direction === 'up' ? faThumbsUp : faThumbsDown}
        css={{
          'borderRadius': '50%',
          'color': theme.fg,
          'cursor': 'pointer',
          'fontSize': '2em',
          'padding': 6,
          'transition': 'all 200ms',
          '&:hover': {
            backgroundColor: theme.bgHover,
            color: !isSelected ? theme.fgHover : undefined,
          },
        }}
      />
    </Flex>
  );
};

/**
 * Avatar
 */
const Avatar: React.FC<{
  icon: FontAwesomeProps['icon'];
  theme: { bg: string; border: string; fg: string };
}> = ({ icon, theme }) => (
  <Flex
    align="center"
    justify="center"
    css={{
      backgroundColor: theme.bg,
      border: `1px solid ${theme.border}`,
      borderRadius: '50%',
      color: theme.fg,
      height: '4em',
      width: '4em',
    }}>
    <FontAwesomeIcon icon={icon} css={{ fontSize: '2em' }} />
  </Flex>
);
