import styled from 'styled-components';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import Select, {
  components, DropdownIndicatorProps, GroupBase,
} from 'react-select';
import { AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';

import { H2, SmallParagraph } from 'components/atoms/typography.styles';
import {
  Blue050, Green010, Green050, Green100, Grey010, Grey100,
} from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import serviceOptions, { ServiceOption } from 'components/Form/content/serviceOptions';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';

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
    padding: 15px 20px 40px;
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

interface FaszomState {
  menuIsOpen: boolean;
}

const baseStyles = {
  control: (styles: object, state: FaszomState) => ({
    ...styles,
    backgroundColor: Grey010,
    border: '0',
    '&:focus-within': {
      border: `1px solid ${Green050}`,
      borderBottom: `${state.menuIsOpen ? 'none' : `1px solid ${Green050}`}`,
    },
    '&:focus': {
      border: `1px solid ${Green050}`,
    },
    '&:hover': {
      borderBottom: `1px solid ${Green050}`,
    },
    boxShadow: 'none',
    borderBottom: `1px solid ${Green050}`,
    borderRadius: '14px 14px 0px 0px',
    height: '52px',
    padding: '15px 2px 15px 20px',
  }),
  option: (styles: object) => ({
    ...styles,
    backgroundColor: Grey010,
    color: Green050,
    padding: '15px 2px 15px 20px',
    borderRadius: '0px 0px 14px 14px',
    borderBottom: '0px',
  }),
  menu: (styles: object) => ({
    ...styles,
    borderRadius: '0px 0px 14px 14px',
    marginTop: '0px',
    border: `1px solid ${Green050}`,
    borderTop: '0px',
    boxShadow: 'none',
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
  placeholder: (styles: object) => ({
    ...styles,
    color: Grey100,
  }),
};

const DropdownIndicator = (props: DropdownIndicatorProps<
  ServiceOption, false, GroupBase<ServiceOption>
  >) => (
    <components.DropdownIndicator {...props}>
      <IoChevronDownCircleOutline color={Green050} size={22} />
    </components.DropdownIndicator>
);

const FormBottom = styled.div`
  padding-top: 12px;

  display: grid;
  grid-template-columns: 25px auto;
  column-gap: 20px;
`;

const CheckBox = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid ${Green050};
  border-radius: 7px;
  `;

interface CheckMarkProps {
  checked: boolean
}

const CheckMark = styled.div<CheckMarkProps>`
  padding: 2px 2px;
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
  width: 295px;
`;

const Form = () => {
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);
  const messageMaxCharacterCount = 300;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target;
    setMessageCharacterCount(event.target.value.length);
    input.scrollTop = input.scrollHeight;
  };

  const [checked, setIsChecked] = useState(false);
  const toggleIsChecked = () => setIsChecked(!checked);

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
            placeholder="Szolgáltatás kiválasztása"
            components={{ DropdownIndicator }}
            isSearchable={false}
            styles={baseStyles}
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
        <FormBottom>
          <CheckBox onClick={toggleIsChecked}>
            <CheckMark checked={checked}>
              <AiOutlineCheck size={19} color={Green050} />
            </CheckMark>
          </CheckBox>
          <SmallParagraph color={Green100}>
            Elismerem, hogy Radványi Balázs a legnagyobb király, és mindenben igaza van.
            Ha korábban nem értettem volna vele egyet valamiben, akkor ott én tévedtem.
          </SmallParagraph>
          <ButtonContainer>
            <PrimaryCTAButton color={Grey010} backgroundColor={Blue050} text="Küldés" linkHref="" />
          </ButtonContainer>
        </FormBottom>
      </FormContainer>
    </BackgroundWrapper>
  );
};

export default Form;
