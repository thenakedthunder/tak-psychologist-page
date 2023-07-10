import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `TextWithHeadings`.
 */
export type TextWithHeadingsProps =
  SliceComponentProps<Content.TextWithHeadingsSlice>;

/**
 * Component for "TextWithHeadings" Slices.
 */
const TextWithHeadings = ({ slice }: TextWithHeadingsProps): JSX.Element => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    Placeholder component for text_with_headings (variation:
    {slice.variation}
    ) Slices
  </section>
);

export default TextWithHeadings;
