import styled from '@emotion/styled';
import { style } from 'styles';

const {
  constants: { font },
  theme: { page, link, card },
} = style;

export const LogoText = styled.span({
  color: page.fgTitle,
  fontFamily: font.family.title,
  fontSize: '1.75em',
  fontWeight: font.weight.title.regular,
});

export const TabText = styled.span({
  fontFamily: font.family.text,
  fontSize: '1em',
  fontWeight: font.weight.text.bold,
});

export const TitleText = styled.span({
  color: page.fgTitle,
  fontFamily: font.family.title,
  fontSize: '2em',
  fontWeight: font.weight.title.bold,
});

export const Link = styled.a({
  'color': link.fg,
  'cursor': 'pointer',
  'fontSize': '0.8em',
  'fontWeight': font.weight.text.bold,
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const UsernameText = styled.div({
  color: card.fgTitle,
  fontWeight: font.weight.text.bold,
});

export const TimestampText = styled.div({
  color: card.fgSubtitle,
  fontSize: '0.9em',
});
