import { css } from '@emotion/core';
import styled from '@emotion/styled';

interface Props {
  src: string;
  size?: CssSize | Size;
}

const iconSizeStyle = ({ size = '1em' }: Props) =>
  typeof size === 'object' ? size : css({ width: size, height: size });

export const Icon = styled.i<Props>(
  {
    display: 'inline-block',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    verticalAlign: 'middle',
  },
  ({ src }) => ({ backgroundImage: `url(${src})` }),
  iconSizeStyle,
);
