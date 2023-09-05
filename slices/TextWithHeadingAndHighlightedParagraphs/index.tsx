import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextWithHeadingAndHighlightedParagraphs`.
 */
export type TextWithHeadingAndHighlightedParagraphsProps =
  SliceComponentProps<Content.TextWithHeadingAndHighlightedParagraphsSlice>;

/**
 * Component for "TextWithHeadingAndHighlightedParagraphs" Slices.
 */
const TextWithHeadingAndHighlightedParagraphs = ({
  slice,
}: TextWithHeadingAndHighlightedParagraphsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_with_heading_and_highlighted_paragraphs
      (variation: {slice.variation}) Slices
    </section>
  );
};

export default TextWithHeadingAndHighlightedParagraphs;
