import { Badge } from 'app/components/Badge';
import { Flex } from 'app/components/Flex';
import { ToggleDirection, ToggleSwitch } from 'app/components/ToggleSwitch';
import { Link } from 'app/components/Typography';
import React, { useContext } from 'react';
import { StyleCtx } from 'styles';

export const FilterBar: React.FC<{
  toggleDirection: ToggleDirection;
  likedCount: number;
  onToggle: ClickHandler;
  onClear: ClickHandler;
}> = ({ toggleDirection, likedCount, onToggle, onClear }) => {
  const {
    theme: { page },
  } = useContext(StyleCtx);

  return (
    <Flex
      align="end"
      justify="space-between"
      row
      css={{ borderBottom: `1px solid ${page.divider}`, paddingBottom: 5 }}>
      <Flex row align="center" justify="center">
        <ToggleSwitch
          leftLabelText="All"
          rightLabelText="Liked"
          direction={toggleDirection}
          onToggle={onToggle}
        />
        <Badge>{likedCount}</Badge>
      </Flex>
      <Link onClick={onClear}>Clear</Link>
    </Flex>
  );
};
