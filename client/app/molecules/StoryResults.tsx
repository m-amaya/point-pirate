import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Divider } from 'app/atoms/Divider';
import { Label } from 'app/atoms/Label';
import { clearInterval } from 'timers';

interface Props {
  description: string;
  startDate: string | null;
}

export const StoryResults: React.FC<Props> = ({
  description,
  startDate = '',
}) => {
  const [runtime, setRuntime] = useState('00:00');

  useEffect(() => {
    const interval = setInterval(
      (startDate) => {
        console.log('startDate:', startDate);
        const start = startDate ? startDate : '';
        const startFrom = new Date(start).getTimezoneOffset();
        const now = new Date().getTimezoneOffset();
        const runtime = new Date(startFrom - now);

        setRuntime(`${runtime.getMinutes()}:${runtime.getSeconds()}`);
      },
      1000,
      startDate,
    );

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div>
      <LabelRow>
        <Label>Story</Label>
        <Timer>{runtime}</Timer>
      </LabelRow>
      <Description>{description}</Description>
      <Divider />
    </div>
  );
};

const LabelRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
});

const Timer = styled.div({
  fontSize: '1.1rem',
});

const Description = styled.div({
  fontSize: '1rem',
  marginBottom: '2rem',
});
