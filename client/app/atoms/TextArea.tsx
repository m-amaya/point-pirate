import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const TextArea: React.FC = () => {
  return <BaseTextArea placeholder="Enter description here" rows={3} />;
};

const BaseTextArea = styled(TextareaAutosize)({
  backgroundColor: theme.textarea.bg,
  border: 'none',
  borderRadius: 3,
  color: theme.textarea.fg,
  fontSize: '1rem',
  outline: 0,
  padding: '1rem',
  resize: 'none',
  width: '100%',
});
