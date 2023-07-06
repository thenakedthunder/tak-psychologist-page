import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `DefaultParagraph`.
 */
export type DefaultParagraphProps =
  SliceComponentProps<Content.DefaultParagraphSlice>;

/**
 * Component for "DefaultParagraph" Slices.
 */
const DefaultParagraph = ({ slice }: DefaultParagraphProps): JSX.Element => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    Placeholder component for default_paragraph (variation: 
    {slice.variation}
    )Slices
  </section>
);

export default DefaultParagraph;
