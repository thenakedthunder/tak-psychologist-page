import { AiOutlineCheck } from 'react-icons/ai';
import { useEffect, useState } from 'react';

import { SmallParagraph } from 'components/atoms/typography.styles';
import {
  Blue050, Green050, Green100, Grey010,
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
import ServiceSelector from 'components/Footer/Form/molecules/ServiceSelector';
import labelTexts from 'components/Footer/Form/content/labelTexts';

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
      errors.name = labelTexts.nameInputError;
    } else {
      errors.name = '';
    }

    if (isTouched('email', stateToValidate) && !emailRegExp.test(stateToValidate.data.email)) {
      errors.email = labelTexts.emailInputError;
    } else {
      errors.email = '';
    }
    if (isTouched('message', stateToValidate) && stateToValidate.data.message.length < 3) {
      errors.message = labelTexts.messageError;
    } else {
      errors.message = '';
    }
    if ((isTouched('dataHandlingCheckBox', stateToValidate)) && !stateToValidate.data.dataHandlingCheckBox) {
      errors.dataHandlingCheckBox = labelTexts.checkBoxUncheckedError;
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
    <StyledForm onSubmit={() => validateForm(formState)}>
      <FormFields>
        <TextInput
          id="name"
          name="name"
          className={formState.errors.name ? 'has-error' : ''}
          placeholder={labelTexts.nameInputPlaceHolder}
          value={formState.data.name}
          error={formState.errors.name}
          onChanged={(input) => updateData('name', input)}
        />
        <TextInput
          id="email"
          name="email"
          className={formState.errors.email ? 'has-error' : ''}
          placeholder={labelTexts.emailInputPlaceHolder}
          value={formState.data.email}
          error={formState.errors.email}
          onChanged={(input) => updateData('email', input)}
        />
        <input type="text" id="phone" name="phone" placeholder={labelTexts.phoneNumberPlaceHolder} />
        <ServiceSelector
          name="service"
          id="service"
          placeholder={labelTexts.serviceSelectionPlaceHolder}
        />
        <MessageInput
          className={formState.errors.message ? 'has-error' : ''}
          placeholder={labelTexts.messagePlaceHolder}
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
            color={Grey010}
            backgroundColor={Blue050}
            text="Küldés"
            isDisabled={formState.hasErrors}
          />
        </ButtonContainer>
      </FormBottom>
    </StyledForm>
  );
};

export default Form;
