import styled from 'styled-components';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import Select, { components, DropdownIndicatorProps, Option } from 'react-select';

import { H2, SmallParagraph } from 'components/atoms/typography.styles';
import {
  Green010, Green050, Green100, Grey010,
} from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { useState } from 'react';
import serviceOptions from 'components/Form/content/serviceOptions';

const FormContainer = styled.div`
  padding: 80px 40px 40px;
  background-color: ${Green010};
  max-width: 1440px;
  margin: 0 auto;
`;

const FormFields = styled.form`
  display: grid;
  grid-template-columns: auto;
  row-gap: 20px;
  padding: 57px 0 0;

  input[type=text] {
    height: 52px;
    padding: 15px 20px;
  }
  
  textarea {
    height: 132px;
    padding: 15px 20px 30px;
  }

  input[type=text], textarea {
    background: ${Grey010};
    border: none;
    border-bottom: 1px solid ${Green050};
    border-radius: 14px 14px 0px 0px;
    color: ${Green050};
    font-family: 'Figtree', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

    &:focus-visible {
      border: 1px solid ${Green050};
    }

    ::placeholder {
      color: ${Green050};
      opacity: 1; 
      font-family: 'Figtree', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${Green050};
      font-family: 'Figtree', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${Green050};
      font-family: 'Figtree', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
    }
  }
`;

const Counter = styled(SmallParagraph)`
  position: relative;
  bottom: 34px;
  text-align: end;
  right: 20px;
`;

const colourStyles = {
  control: (styles: object) => ({
    ...styles,
    backgroundColor: Grey010,
    border: 'none',
    borderBottom: `1px solid ${Green050}`,
    borderRadius: '14px 14px 0px 0px',
    height: '52px',
    padding: '15px 2px 15px 20px',
    '&:active': {
      borderBottom: `1px solid ${Green050}`,
    },
    '&:focus': {
      borderBottom: `1px solid ${Green050}`,
    },
    '&:focus-within': {
      borderBottom: `1px solid ${Green050}`,
    },
    '&:target': {
      borderBottom: `1px solid ${Green050}`,
    },
    '&:hover': {
      borderBottom: `1px solid ${Green050}`,
    },
    '&:visited': {
      borderBottom: `1px solid ${Green050}`,
    },
    '&:focus-visible': {
      borderBottom: `1px solid ${Green050}`,
    },
  }),
  singleValue: (styles: object) => ({
    ...styles,
    color: Green050,
    fontFamily: '"Figtree" sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '140%',
    margin: '0',
  }),
  valueContainer: (styles: object) => ({
    ...styles,
    padding: '0',
    display: 'block',
  }),
  input: (styles: object) => ({
    ...styles,
    display: 'grid',
  }),
  indicatorSeparator: (styles: object) => ({
    ...styles,
    display: 'none',
  }),
  indicatorsContainer: (styles: object) => ({
    ...styles,
    height: '22px',
    padding: '0',
  }),
};

const DropdownIndicator = (props: DropdownIndicatorProps<Option, false>) => (
  <components.DropdownIndicator {...props}>
    <IoChevronDownCircleOutline color={Green050} size={22} />
  </components.DropdownIndicator>
);

const Form = () => {
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);
  const messageMaxCharacterCount = 300;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target;
    setMessageCharacterCount(event.target.value.length);
    input.scrollTop = input.scrollHeight;
  };

  return (
    <BackgroundWrapper color={Green010}>
      <FormContainer>
        <H2 color={Green100}>Űrlap</H2>
        <FormFields>
          <input type="text" id="name" name="name" placeholder="Teljes név" />
          <input type="text" id="email" name="email" placeholder="Email cím" />
          <input type="text" id="phone" name="phone" placeholder="Telefonszám" />
          <Select
            name="service"
            id="service"
            options={serviceOptions}
            defaultValue={serviceOptions[0]}
            placeholder={serviceOptions[0].label}
            styles={colourStyles}
            components={{ DropdownIndicator }}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Üzenet, maximum 300 karakterben"
            maxLength={300}
            onChange={handleChange}
          />
        </FormFields>
        <Counter color={Green050}>
          {messageCharacterCount}
          /
          {messageMaxCharacterCount}
        </Counter>
      </FormContainer>
    </BackgroundWrapper>
  );
};

export default Form;
