import React, { ChangeEventHandler } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';

interface Props {
  description: string;
  onUpdate: (description: string) => void;
}

export const TextArea: React.FC<Props> = ({ description, onUpdate }) => {
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    currentTarget: { value },
  }) => onUpdate(value);

  return (
    <BaseTextArea
      placeholder="Enter description here"
      rows={3}
      value={description}
      onChange={onChange}
    />
  );
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
