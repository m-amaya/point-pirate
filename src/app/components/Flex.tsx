import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import React from 'react';

/**
 * Types
 */

type Alignment = 'stretch' | 'center' | 'baseline' | 'start' | 'end';
type Justification =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

/**
 * Defaults are aligned to the original Facebook `css-layout` (now `yoga`).
 * See (https://github.com/facebook/yoga/blob/4d964bdbc378d1029bbba8ce8f90d32b18516fd0/README.md)
 */
export interface FlexProps {
  row?: boolean;
  reverse?: boolean;
  wrap?: boolean;
  align?: Alignment;
  alignSelf?: Alignment;
  justify?: Justification;
  shrink?: number | boolean;
  grow?: number | boolean;
  scroll?: boolean;
  scrollX?: boolean;
  scrollY?: boolean;
  contain?: boolean;
  basis?:
    | 'auto'
    | 'fill'
    | 'min-content'
    | 'max-content'
    | 'fit-content'
    | 'content'
    | CssSize;
  testId?: string;
}

/**
 * Styles
 */

const baseStyle = css({
  display: 'flex',
  boxSizing: 'border-box',
  position: 'relative',
  border: '0 solid black',
  margin: 0,
  padding: 0,
  minWidth: 0,
});

/** Prepend 'flex' to shorthand values. */
const flexPrefix = (value: Alignment | Justification | string) =>
  value === 'start' || value === 'end' ? `flex-${value}` : value;

const flexStyle = (props: FlexProps) => {
  const {
    row = false,
    reverse = false,
    wrap = false,
    basis = 'auto',
    align = 'stretch',
    justify = 'normal',
    alignSelf = 'auto',
    contain = false,
    scroll = false,
    scrollX = false,
    scrollY = false,
  } = props;

  let { grow = 0, shrink = 0 } = props;

  /**
   * Grow and shrink have boolean aliases for convenience in the common
   * case of the value being 1. (e.g. <Flex grow />)
   */
  if (typeof grow === 'boolean') {
    grow = grow ? 1 : 0;
  }
  if (typeof shrink === 'boolean') {
    shrink = shrink ? 1 : 0;
  }

  return css(
    {
      flexDirection: `${row ? 'row' : 'column'}${
        reverse ? '-reverse' : ''
      }` as FlexDirection,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      alignItems: flexPrefix(align),
      alignContent: 'flex-start',
      alignSelf: flexPrefix(alignSelf),
      justifyContent: flexPrefix(justify),
    },
    contain && { overflow: 'hidden' },
    scrollX && { overflowX: 'auto' },
    scrollY && { overflowY: 'auto' },
    scroll && { overflow: 'auto' },
  );
};

/**
 * Base Tags
 */

const BaseDiv = styled('div', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && prop !== 'wrap' && prop !== 'overflow',
})<FlexProps>(baseStyle, flexStyle);
const BaseForm = BaseDiv.withComponent('form');
const BaseTextarea = BaseDiv.withComponent('textarea');
const BaseButton = BaseDiv.withComponent('button');

/**
 * Flex is our primary view primitive.
 *
 * Implements a `div` with a flex layout. The most common flex parameters are exposed as props. Defaults inspired by Facebook's yoga (see above). The defaults provide the following properties:
 *
 * * box-sizing: border-box is the most convenient way to express the relation between width and borderWidth.
 * * Everything is display: flex by default. All the behaviors of block and inline-block can be expressed in term of flex but not the opposite.
 * * All the flex elements are oriented from top to bottom, left to right and do not shrink. This is how things are laid out using the default CSS settings and what you'd expect.
 * * Everything is position: relative. This makes position: absolute target the direct parent and not some parent which is either relative or absolute. If you want to position an element relative to something else, you should move it in the DOM instead of relying of CSS. It also makes top, left, right, bottom do something when not specifying position: absolute.
 */
export const Flex = React.forwardRef<
  HTMLDivElement,
  FlexProps & JSX.IntrinsicElements['div']
>((props, ref) => <BaseDiv ref={ref} data-test={props.testId} {...props} />);

export const FlexForm = React.forwardRef<
  HTMLFormElement,
  FlexProps & JSX.IntrinsicElements['form']
>((props, ref) => <BaseForm ref={ref} data-test={props.testId} {...props} />);

export const FlexTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FlexProps & JSX.IntrinsicElements['textarea']
>((props, ref) => (
  <BaseTextarea ref={ref} data-test={props.testId} {...props} />
));

export const FlexButton = React.forwardRef<
  HTMLButtonElement,
  FlexProps & JSX.IntrinsicElements['button']
>((props, ref) => <BaseButton ref={ref} data-test={props.testId} {...props} />);
