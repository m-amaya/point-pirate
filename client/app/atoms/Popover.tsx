import React, { useState } from 'react';
import ReactPopover, { ArrowContainer } from 'react-tiny-popover';
import styled from '@emotion/styled';
import { font } from 'styles/font';
import { theme } from 'styles/theme';

export type PositionType = 'top' | 'right' | 'bottom' | 'left';

export interface PopoverContentProps {
  closePopover?: () => void;
}

export interface Props {
  content: JSX.Element;
  preferredPosition?: PositionType;
}

export const Popover: React.FC<Props> = ({
  content,
  preferredPosition = 'top',
  children,
}) => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => setOpen(!isOpen);
  const closePopover = () => setOpen(false);

  const contentWithProps = React.Children.map(content, (child) =>
    child ? React.cloneElement(child, { closePopover }) : null,
  );

  return (
    <ReactPopover
      isOpen={isOpen}
      position={preferredPosition}
      onClickOutside={closePopover}
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor={theme.popover.bg}
          arrowSize={6}>
          <PopoverContent>{contentWithProps}</PopoverContent>
        </ArrowContainer>
      )}>
      <div onClick={onClick}>{children}</div>
    </ReactPopover>
  );
};

const PopoverContent = styled.div({
  backgroundColor: theme.popover.bg,
  borderRadius: 3,
  color: theme.popover.fg,
  padding: '0.6rem 1rem',
  fontFamily: font.text.family,
  fontSize: '1rem',
  fontWeight: font.text.weight.regular,
});
