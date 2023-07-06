import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `LargeParagraph`.
 */
export type LargeParagraphProps =
  SliceComponentProps<Content.LargeParagraphSlice>;

/**
 * Component for "LargeParagraph" Slices.
 */
const LargeParagraph = ({ slice }: LargeParagraphProps): JSX.Element => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    Placeholder component for large_paragraph (variation:
    {slice.variation}
    )Slices
  </section>
);

export default LargeParagraph;
