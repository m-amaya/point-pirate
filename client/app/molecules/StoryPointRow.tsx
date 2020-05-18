import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Divider } from 'app/atoms/Divider';
import { Label } from 'app/atoms/Label';
import { StoryPoint } from 'app/atoms/StoryPoint';

const AVAILABLE_STORY_POINTS = [1, 2, 3, 5, 8, 13, -1];

interface Props {
  inVote: boolean;
}

export const StoryPointRow: React.FC<Props> = ({ inVote }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const onSelected = (i?: number) => {
    if (selectedIndex === i) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(i || -1);
    }
  };

  return (
    <div>
      <Label>Story Points</Label>
      <Row>
        {AVAILABLE_STORY_POINTS.map((storyPoint, i) => (
          <StoryPoint
            key={i}
            value={storyPoint}
            inVote={inVote}
            index={i}
            selectedIndex={selectedIndex}
            onSelected={onSelected}
          />
        ))}
      </Row>
      <Divider />
    </div>
  );
};

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1rem 0 2rem',
});
