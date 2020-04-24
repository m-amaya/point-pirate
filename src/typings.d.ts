declare module '*.svg' {
  const content: any;
  export default content;
}

type CssSize = string | number;
type ClickHandler<T = unknown> = (e: React.SyntheticEvent<T>) => void;

interface Size {
  height: CssSize;
  width: CssSize;
}
