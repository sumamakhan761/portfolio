import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
/**
 * Props for `TextBLock`.
 */
export type TextBLockProps = SliceComponentProps<Content.TextBLockSlice>;

/**
 * Component for "TextBlock" Slices.
 */

  

/**
 * Component for "TextBLock" Slices.
 */
const TextBLock = ({ slice }: TextBLockProps): JSX.Element => {
  return (
    <div className="max-w-prose">
    <PrismicRichText field={slice.primary.text} />
  </div>
  );
};

export default TextBLock;
