import Select from 'react-select';

import serviceOptions from 'components/Footer/Form/content/serviceOptions';
import baseStyles from 'components/Footer/Form/molecules/ServiceSelector.styles';
import DropdownIndicator from 'components/Footer/Form/atoms/DropDownIndicator';

interface SelectProps {
  id: string;
  name: string;
  placeholder: string;
}

const ServiceSelector = ({ id, name, placeholder }: SelectProps) => (
  <Select
    instanceId={id}
    name={name}
    options={serviceOptions}
    placeholder={placeholder}
    components={{ DropdownIndicator }}
    isSearchable={false}
    styles={baseStyles}
  />
);

export default ServiceSelector;
