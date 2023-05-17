import {
  components, DropdownIndicatorProps, GroupBase,
} from 'react-select';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

import { ServiceOption } from 'components/Footer/Form/content/serviceOptions';
import { Green050 } from 'components/styling/colors';

const DropdownIndicator = (props: DropdownIndicatorProps<
  ServiceOption, false, GroupBase<ServiceOption>
>) => {
  const Indicator = components.DropdownIndicator;

  return (
    <Indicator {...props}>
      <IoChevronDownCircleOutline color={Green050} size={26} />
    </Indicator>
  );
};

export default DropdownIndicator;
