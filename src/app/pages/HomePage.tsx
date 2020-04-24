import { ChatterCard, ChatterForm } from 'app/components/ChatterCard';
import { FilterBar } from 'app/components/FilterBar';
import { Flex } from 'app/components/Flex';
import { Page } from 'app/components/Page';
import { ToggleDirection } from 'app/components/ToggleSwitch';
import { TitleText } from 'app/components/Typography';
import { descend, isNil, keys, sort, prop, values } from 'ramda';
import React, { useContext, useState } from 'react';
import { useObservable } from 'rxjs-hooks';
import { StoreCtx } from 'store';
import { Post } from 'store/chatter.store';

export const HomePage: React.FC = () => {
  const {
    chatter: { likedPostsForView$, postsForView$, send, like, unlike, clear },
    user,
  } = useContext(StoreCtx);
  const [content, setContent] = useState('');
  const [toggleDirection, setToggleDirection] = useState<ToggleDirection>(
    'left',
  );
  const posts = useObservable(() => postsForView$, []);
  const likedRecord = useObservable<Record<string, Post>>(
    () => likedPostsForView$,
    {},
  );
  const likedCount = keys(likedRecord).length;
  const likedPosts = sort(descend(prop('timestamp')), values(likedRecord));

  const onSubmit: ClickHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (content) {
      send(content);
    }
  };

  const onLike = (likedPost: Post) =>
    isNil(likedRecord[likedPost.id])
      ? like(likedPost, likedRecord)
      : unlike(likedPost.id, likedRecord);

  const onToggle = () =>
    setToggleDirection(toggleDirection === 'left' ? 'right' : 'left');

  return (
    <Page title="Home">
      <ChatterForm
        user={user.session}
        onChange={(event) => setContent(event.currentTarget.value)}
        onSubmit={onSubmit}
      />
      <Title />
      <FilterBar
        toggleDirection={toggleDirection}
        likedCount={likedCount}
        onToggle={onToggle}
        onClear={clear}
      />
      {toggleDirection === 'left'
        ? posts.map((post) => (
            <ChatterCard
              key={post.id}
              post={post}
              isLiked={!isNil(likedRecord[post.id])}
              onLike={onLike}
              user={user.byUsername[post.username]}
            />
          ))
        : likedPosts.map((post) => (
            <ChatterCard
              key={post.id}
              post={post}
              isLiked
              onLike={onLike}
              user={user.byUsername[post.username]}
            />
          ))}
    </Page>
  );
};

const Title: React.FC = () => (
  <Flex css={{ paddingTop: '2em', paddingBottom: '1em' }}>
    <TitleText>Chatters</TitleText>
  </Flex>
);
