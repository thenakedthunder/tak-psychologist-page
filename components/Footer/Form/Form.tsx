import { AiOutlineCheck } from 'react-icons/ai';
import { useEffect, useState } from 'react';

import { SmallParagraph } from 'components/atoms/typography.styles';
import {
  Green050, Green100, Grey010,
} from 'components/styling/colors';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import {
  StyledForm,
  FormFields,
  ButtonContainer,
  CheckBox,
  CheckBoxErrorContainer,
  CheckBoxWrapper,
  CheckMark,
  FormBottom,
} from 'components/Footer/Form/Form.styles';
import TextInput from 'components/Footer/Form/molecules/TextInput';
import MessageInput from 'components/Footer/Form/molecules/MessageInput';
import ErrorMessage from 'components/Footer/Form/atoms/ErrorMessage';
import labelTexts from 'components/Footer/Form/content/labelTexts';
import ServiceSelector from './molecules/ServiceSelector';

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
    const errors = {
      name: '',
      email: '',
      message: '',
      dataHandlingCheckBox: '',
    };

    if (isTouched('name', stateToValidate) && stateToValidate.data.name.trim().length < 3) {
      errors.name = labelTexts.name.error;
    }

    if (isTouched('email', stateToValidate) && !emailRegExp.test(stateToValidate.data.email.trim())) {
      errors.email = labelTexts.email.error;
    }

    if (isTouched('message', stateToValidate) && stateToValidate.data.message.trim().length < 3) {
      errors.message = labelTexts.message.error;
    }

    if ((isTouched('dataHandlingCheckBox', stateToValidate)) && !stateToValidate.data.dataHandlingCheckBox) {
      errors.dataHandlingCheckBox = labelTexts.checkBoxUncheckedError;
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

  const sendForm = () => {
    console.log('TO DO');
  };

  const submit = () => {
    validateForm(formState);
    if (!formState.hasErrors) { sendForm(); }
  };

  return (
    <StyledForm onSubmit={() => submit()}>
      <FormFields>
        <TextInput
          id="name"
          name="name"
          className={formState.errors.name ? 'has-error' : ''}
          placeholder={labelTexts.name.placeholder}
          value={formState.data.name}
          error={formState.errors.name}
          onChanged={(input) => updateData('name', input)}
        />
        <TextInput
          id="email"
          name="email"
          className={formState.errors.email ? 'has-error' : ''}
          placeholder={labelTexts.email.placeholder}
          value={formState.data.email}
          error={formState.errors.email}
          onChanged={(input) => updateData('email', input)}
        />
        <input type="text" id="phone" name="phone" placeholder={labelTexts.phoneNumber.placeholder} />
        <ServiceSelector
          name="service"
          id="service"
          placeholder={labelTexts.serviceSelection.placeholder}
        />
        <MessageInput
          className={formState.errors.message ? 'has-error' : ''}
          placeholder={labelTexts.message.placeholder}
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
          <SmallParagraph textColor={Green100}>
            {labelTexts.checkboxStatement}
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
            textColor={Grey010}
            backgroundColor={Green100}
            text="Küldés"
            isDisabled={formState.hasErrors}
          />
        </ButtonContainer>
      </FormBottom>
    </StyledForm>
  );
};

export default Form;
