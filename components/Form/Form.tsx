import styled from 'styled-components';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import Select, {
  components, DropdownIndicatorProps, GroupBase,
} from 'react-select';
import { AiOutlineCheck } from 'react-icons/ai';
import { useEffect, useState } from 'react';

import {
  DefaultParagraph, H2, LargeParagraph, SmallParagraph,
} from 'components/atoms/typography.styles';
import {
  Blue050, Green010, Green050, Green100, Grey010,
} from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import serviceOptions, { ServiceOption } from 'components/Form/content/serviceOptions';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import BulletedInfoItem from 'components/molecules/BulletedInfoItem';
import Image from 'next/image';
import AvatarImage from 'public/assets/signature-profile.png';
import TextInput from './molecules/TextInput';
import MessageInput from './molecules/MessageInput';
import ErrorMessage from './atoms/ErrorMessage';

const BackgroundWrapperForForm = styled.div`
  @media screen and (min-width: 768px) {
    background-image: url(/assets/form-background.svg);
    background-repeat: no-repeat;
    background-position-x: 120%;
    background-position-y: bottom;
    background-size: 550px 600px;
  }

  @media screen and (min-width: 992px) {
    background-size: 600px;
    background-position-x: right;
    background-position-y: center;
  }

  @media screen and (min-width: 1200px) {
    background-size: 600px 650px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const FormContainer = styled.div`
  padding: 80px 40px 40px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 80px 140px 24px 130px;
    max-width: 1080px;
  }

  @media screen and (min-width: 1200px) {
    padding: 80px 230px 120px 130px;
    margin: 0;
    max-width: none;
  }
`;

const FormBody = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 3fr 4fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header form"
      "left-information form";
    -webkit-column-gap: 220px;
    column-gap: 220px;
    -webkit-align-content: start;
    -ms-flex-line-pack: start;
    align-content: end;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: auto 480px;
  }
`;

const FormHeader = styled(H2)`
  grid-area: header;
  `;

const LeftInformationDiv = styled.div`
  display: none;
  grid-area: left-information;

  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

const LeftInfoLargeParagraph = styled(LargeParagraph)`
  padding: 72px 0 20px;
`;

const BulletPointsContainer = styled.div`
  padding-top: 30px;
  display: grid;
  row-gap: 20px;
`;

const SignatureWithProfile = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  column-gap: 20px;
  padding-top: 60px;
  align-items: center;
`;

const ProfilePictureContainer = styled.div`
  height: 80px;
  width: 80px;
`;

const StyledForm = styled.form`
  padding: 57px 0 0;
  grid-area: form;

  @media screen and (min-width: 1200px) {
    padding-top: 40px;
  }

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
    color: ${Green100};
    font-family: 'Figtree', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    width: 100%;

    &.has-error {
      border-bottom: 1px solid #FF3030;
      color: #FF3030;
      
      ::placeholder {
        color: #FF3030;
        /* Firefox */
      }
      
      :-ms-input-placeholder {
        color: #FF3030;
        /* Internet Explorer 10-11 */
      }
      
      ::-ms-input-placeholder { /* Microsoft Edge */
        color: #FF3030;
      }

      &:focus-visible {
        border: 1px solid #FF3030;
      }
    }
    
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

      &.has-error {
        color: #FF3030;
      }
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${Green050};
      font-family: 'Figtree', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;

      &.has-error {
        color: #FF3030;
      }
    }
  }
`;

const FormFields = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 20px;
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
    color: Green100,
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
    color: Green100,
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
    color: Green050,
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
  padding-top: 20px;
  
  display: grid;
  
  @media screen and (min-width: 768px) {
    padding-top: 30px;
    grid-template-columns: auto 128px;
    grid-column-gap: 44px;
  }
  `;

const CheckBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 25px auto;
  column-gap: 20px;
`;

interface CheckBoxProps {
  error: string;
}

const CheckBox = styled.div`
  height: 25px;
  width: 25px;
  border: ${(props: CheckBoxProps) => (props.error ? '1px solid #FF3030' : `1px solid ${Green050}`)};
  border-radius: 7px;
  `;

interface CheckMarkProps {
  checked: boolean
}

const CheckMark = styled.div<CheckMarkProps>`
  padding: 2px 2px;
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
`;

const CheckBoxErrorContainer = styled.div`
  grid-column: span 2;
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
  width: 100%;

  @media screen and (min-width: 576px) {
    max-width: 496px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 128px;
    padding-top: 0px;
  }
`;

interface FormStateType {
  hasErrors: boolean;
  data: {
    name: string,
    email: string;
    phone: string;
    selectedService: string;
    message: string;
    dataHandlingCheckBox: boolean;
  };
  errors: {
    name: string,
    email: string;
    message: string;
    dataHandlingCheckBox: string;
  };
  touched: Set<string>;
}

const emailRegExp = /[^@]+@[^@]+\.[^@]{2,}/;

const Form = () => {
  const [checked, setIsChecked] = useState(false);

  const [formState, setFormState] = useState<FormStateType>({
    hasErrors: true,
    data: {
      name: '',
      email: '',
      phone: '',
      selectedService: '',
      message: '',
      dataHandlingCheckBox: false,
    },
    errors: {
      name: '',
      email: '',
      message: '',
      dataHandlingCheckBox: '',
    },
    touched: new Set<string>(),
  });

  const updateData = (key: string, value: boolean | string) => {
    const touchedCopy = formState.touched;
    touchedCopy.add(key);

    setFormState({
      ...formState,
      data: { ...formState.data, [key]: value },
      touched: touchedCopy,
    });
  };

  const toggleIsChecked = () => {
    updateData('dataHandlingCheckBox', !checked);
    setIsChecked(!checked);
  };

  const isTouched = (key: string, stateToValidate: FormStateType) =>
    stateToValidate.touched.has(key);

  const carryOutValidations = (stateToValidate: FormStateType = formState) => {
    const errors = { ...stateToValidate.errors };

    if (isTouched('name', stateToValidate) && stateToValidate.data.name.length < 3) {
      errors.name = 'Kérem, adja meg, hogy szólíthatom! (Legalább 3 karakter)';
    } else {
      errors.name = '';
    }

    if (isTouched('email', stateToValidate) && !emailRegExp.test(stateToValidate.data.email)) {
      errors.email = 'Kérem adjon meg valós e-mail címet!';
    } else {
      errors.email = '';
    }
    if (isTouched('message', stateToValidate) && stateToValidate.data.message.length < 3) {
      errors.message = 'Kérem, írja le, hogy miben segíthetek! (Legalább 3 karakter)';
    } else {
      errors.message = '';
    }
    if ((isTouched('dataHandlingCheckBox', stateToValidate)) && !stateToValidate.data.dataHandlingCheckBox) {
      errors.dataHandlingCheckBox = 'Kérem egyezzen bele a fenti nyilatkozattételbe!';
    } else {
      errors.dataHandlingCheckBox = '';
    }

    return errors;
  };

  const validateForm = (stateToValidate: FormStateType) => {
    const errors = carryOutValidations(stateToValidate);
    const hasInputErrors = Object.values(errors).filter((item) => item !== '').length > 0;

    const requiredFieldsNotTouched = Object.keys(stateToValidate.data)
      .filter((key) => key !== 'phone')
      .filter((key) => key !== 'selectedService')
      .some((key) => isTouched(key, stateToValidate) === false);

    const hasErrors = hasInputErrors || requiredFieldsNotTouched;

    setFormState({
      ...stateToValidate,
      errors,
      hasErrors,
    });

    return !hasErrors;
  };

  useEffect(
    () => {
      validateForm(formState);
    },
    [formState.data],
  );

  return (
    <BackgroundWrapper color={Green010}>
      <BackgroundWrapperForForm>
        <FormContainer>
          <FormBody>
            <FormHeader color={Green100}>Űrlap</FormHeader>
            <LeftInformationDiv>
              <LeftInfoLargeParagraph>Lorem ipsum dolor sitamet</LeftInfoLargeParagraph>
              <DefaultParagraph>
                Suspendisse neque leo, venenatis ut varius in, aliquam in nisl. Nam nisi velit,
                maximus nec augue ullamcorper, tincidunt accumsan magna.
              </DefaultParagraph>
              <BulletPointsContainer>
                <BulletedInfoItem bulletPointColor={Green050} textColor={Green100}>
                  Mauris sit amet eros sapien. In nec tincidunt sapien. Sed tristique risus non
                  augue elementum venenatis. Curabitur sapien arcu, ultrices non vehicula non.
                </BulletedInfoItem>
                <BulletedInfoItem bulletPointColor={Green050} textColor={Green100}>
                  Pellentesque et lorem. Integer interdum cursus mi. In in est porttitor, ornare
                  urna ut, dignissim dui. Pellentesque finibus tempus ligula, tincidunt tempor orci.
                </BulletedInfoItem>
              </BulletPointsContainer>
              <SignatureWithProfile>
                <ProfilePictureContainer>
                  <Image src={AvatarImage} />
                </ProfilePictureContainer>
                <DefaultParagraph color={Green100}>
                  Hont Gáspár Anita
                  <br />
                  Klinikai szakpszichológus
                </DefaultParagraph>
              </SignatureWithProfile>
            </LeftInformationDiv>
            <StyledForm onSubmit={() => validateForm(formState)}>
              <FormFields>
                <TextInput
                  id="name"
                  name="name"
                  className={formState.errors.name ? 'has-error' : ''}
                  placeholder="Teljes név"
                  value={formState.data.name}
                  error={formState.errors.name}
                  onChanged={(input) => updateData('name', input)}
                />
                <TextInput
                  id="email"
                  name="email"
                  className={formState.errors.email ? 'has-error' : ''}
                  placeholder="Email cím"
                  value={formState.data.email}
                  error={formState.errors.email}
                  onChanged={(input) => updateData('email', input)}
                />
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
                <MessageInput
                  className={formState.errors.message ? 'has-error' : ''}
                  placeholder="Üzenet, maximum 300 karakterben"
                  value={formState.data.message}
                  error={formState.errors.message}
                  onChanged={(input) => updateData('message', input)}
                />
              </FormFields>
              <FormBottom>
                <CheckBoxWrapper>
                  <CheckBox onClick={toggleIsChecked} error={formState.errors.dataHandlingCheckBox}>
                    <CheckMark checked={checked}>
                      <AiOutlineCheck size={19} color={Green050} />
                    </CheckMark>
                  </CheckBox>
                  <SmallParagraph color={Green100}>
                    Elismerem, hogy Radványi Balázs a legnagyobb király, és mindenben igaza van.
                    Ha korábban nem értettem volna vele egyet valamiben, akkor ott én tévedtem.
                  </SmallParagraph>
                  {formState.errors.dataHandlingCheckBox
                    && (
                      <CheckBoxErrorContainer>
                        <ErrorMessage error={formState.errors.dataHandlingCheckBox} />
                      </CheckBoxErrorContainer>
                    )}
                </CheckBoxWrapper>
                <ButtonContainer>
                  <PrimaryCTAButton
                    color={Grey010}
                    backgroundColor={Blue050}
                    text="Küldés"
                    isDisabled={formState.hasErrors}
                  />
                </ButtonContainer>
              </FormBottom>
            </StyledForm>
          </FormBody>
        </FormContainer>
      </BackgroundWrapperForForm>
    </BackgroundWrapper>
  );
};

export default Form;
