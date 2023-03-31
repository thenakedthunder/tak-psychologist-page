import styled from 'styled-components';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

import { DefaultParagraph, H2, SmallParagraph } from 'components/atoms/typography.styles';
import { Green010, Green050, Green100 } from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { useState } from 'react';

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

  input[type=text], select {
    height: 52px;
    padding: 15px 20px;
  }
  
  textarea {
    height: 132px;
    padding: 15px 20px 30px;
  }

  select {
    appearance: none;
  }

  input[type=text], select, textarea {
    background: #FFFFF5;
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

const Option = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

const Counter = styled(SmallParagraph)`
  position: relative;
  bottom: 34px;
  text-align: end;
  right: 20px;
`;

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
          <select name="service" id="service">
            <option value="none">
              Szolgáltatás kiválasztása <IoChevronDownCircleOutline color={Green100} size={32} />
            </option>
            <option value="chase-the-demon">Rontás levétele</option>
            <option value="exercise-book">Egzörszájzbuk!</option>
            <option value="aura-massage">Auramasszász</option>
          </select>
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
