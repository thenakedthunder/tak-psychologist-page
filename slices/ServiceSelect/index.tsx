import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Select`.
 */
export type SelectProps = SliceComponentProps<Content.SelectSlice>;

/**
 * Component for "Select" Slices.
 */
const Select = ({ slice }: SelectProps): JSX.Element => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    Placeholder component for select (variation:
    {' '}
    {slice.variation}
    ) Slices
  </section>
);

export default Select;
