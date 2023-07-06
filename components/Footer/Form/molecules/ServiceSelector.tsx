import Select from 'react-select';

import { SelectSlice } from 'prismicio-types';
import { SliceZone } from '@prismicio/client';

import baseStyles from 'components/Footer/Form/molecules/ServiceSelector.styles';
import DropdownIndicator from 'components/Footer/Form/atoms/DropDownIndicator';

interface SelectProps {
  id: string;
  name: string;
  placeholder: string;
  serviceOptions: SliceZone<SelectSlice>;
}

const convertServiceOptions = (options: SliceZone<SelectSlice>) =>
  options[0]?.items.map((item) => ({
    value: item.option ?? '',
    label: item.option ?? '',
  }));

const ServiceSelector = ({
  id, name, placeholder, serviceOptions,
}: SelectProps) => (
  <Select
    instanceId={id}
    name={name}
    options={convertServiceOptions(serviceOptions)}
    placeholder={placeholder}
    components={{ DropdownIndicator }}
    isSearchable={false}
    styles={baseStyles}
  />
);

export default ServiceSelector;
