import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `SocialLink`.
 */
export type SocialLinkProps = SliceComponentProps<Content.SocialLinkSlice>;

/**
 * Component for "SocialLink" Slices.
 */
const SocialLink = ({ slice }: SocialLinkProps): JSX.Element => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    Placeholder component for social_link (variation: {slice.variation})
    Slices
  </section>
);


export default SocialLink;
