import {
  components, DropdownIndicatorProps, GroupBase,
} from 'react-select';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

import { ServiceOption } from 'components/Footer/Form/content/serviceOptions';
import { Green050 } from 'components/styling/colors';

const DropdownIndicator = (props: DropdownIndicatorProps<
  ServiceOption, false, GroupBase<ServiceOption>
>) => (
  <components.DropdownIndicator {...props}>
    <IoChevronDownCircleOutline textColor={Green050} size={26} />
  </components.DropdownIndicator>
);

export default DropdownIndicator;
