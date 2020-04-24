import React, { useContext } from 'react';
import { StyleCtx } from 'styles';

export const Badge: React.FC = (props) => {
  const {
    constants: { font },
    theme: { badge },
  } = useContext(StyleCtx);

  return (
    <span
      css={{
        backgroundColor: badge.bg,
        borderRadius: 10,
        color: badge.fg,
        fontSize: '0.8em',
        fontWeight: font.weight.text.bold,
        padding: '0 5px',
      }}
      {...props}
    />
  );
};
