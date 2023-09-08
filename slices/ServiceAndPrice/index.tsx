import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceAndPrice`.
 */
export type ServiceAndPriceProps =
  SliceComponentProps<Content.ServiceAndPriceSlice>;

/**
 * Component for "ServiceAndPrice" Slices.
 */
const ServiceAndPrice = ({ slice }: ServiceAndPriceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for service_and_price (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServiceAndPrice;
