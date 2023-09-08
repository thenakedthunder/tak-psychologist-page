import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FaqTopic`.
 */
export type FaqTopicProps = SliceComponentProps<Content.FaqTopicSlice>;

/**
 * Component for "FaqTopic" Slices.
 */
const FaqTopic = ({ slice }: FaqTopicProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for faq_topic (variation: {slice.variation}) Slices
    </section>
  );
};

export default FaqTopic;
