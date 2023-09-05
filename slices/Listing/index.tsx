import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Listing`.
 */
export type ListingProps = SliceComponentProps<Content.ListingSlice>;

/**
 * Component for "Listing" Slices.
 */
const Listing = ({ slice }: ListingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for listing (variation: {slice.variation}) Slices
    </section>
  );
};

export default Listing;
