import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Divider = styled.div({
  'position': 'relative',
  'backgroundColor': theme.page.divider.shadow,
  'height': 1,
  'width': '100%',
  'margin': '1rem 0 2rem',
  '&:after': {
    content: '" "',
    position: 'absolute',
    top: 1,
    left: 0,
    backgroundColor: theme.page.divider.highlight,
    height: 1,
    width: '100%',
  },
});
