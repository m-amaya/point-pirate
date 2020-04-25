import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'app/atoms/Divider';
import { Label } from 'app/atoms/Label';
import { StoryPoint } from 'app/atoms/StoryPoint';
import { theme } from 'styles/theme';

const results = [
  [
    { value: '1', count: 1 },
    { value: '2', count: 0 },
    { value: '3', count: 1 },
  ],
  [
    { value: '5', count: 1 },
    { value: '8', count: 3, isHighest: true },
    { value: '13', count: 1 },
  ],
  [{ value: '🤷‍♂️', count: 1 }],
];

export const StoryPointGrid: React.FC = () => {
  return (
    <div>
      <Label>Results</Label>
      <Grid>
        {results.map((resultRow, i) => (
          <ResultRow key={i}>
            {resultRow.map((storypoint, i) => (
              <StoryPointResult key={i} {...storypoint} />
            ))}
          </ResultRow>
        ))}
      </Grid>
      <Divider />
    </div>
  );
};

const Grid = styled.div({
  marginBottom: '2rem',
});

const ResultRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1rem 0',
});

interface Props {
  value: string;
  count: number;
  isHighest?: boolean;
}

const StoryPointResult: React.FC<Props> = ({ value, count, isHighest }) => {
  return (
    <Result>
      <StoryPoint
        value={value}
        votingInProgress={false}
        isSelected={isHighest === true}
      />
      <div>
        <Icon icon={faTimes} /> {count}
      </div>
    </Result>
  );
};

const Result = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Icon = styled(FontAwesomeIcon)({
  color: theme.icon.times,
  marginLeft: '0.75rem',
  marginRight: '0.5rem',
});
