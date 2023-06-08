import styled from 'styled-components';

import { Figtree } from 'next/font/google';

import {
  Grey010, Green050, Blue100, ErrorRed,
} from 'components/styling/colors';

const figtree = Figtree({ subsets: ['latin-ext'], style: ['normal', 'italic'], weight: ['400', '600'] });

export const StyledForm = styled.form`
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
    color: ${Green050};
    font-family: ${figtree.style.fontFamily}, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    width: 100%;

    &.has-error {
      border-bottom: 1px solid ${ErrorRed};
      color: ${ErrorRed};
      
      ::placeholder {
        color: ${ErrorRed};
        /* Firefox */
      }
      
      :-ms-input-placeholder {
        color: ${ErrorRed};
        /* Internet Explorer 10-11 */
      }
      
      ::-ms-input-placeholder {
        color: ${ErrorRed};
        /* Microsoft Edge */
      }

      &:focus-visible {
        border: 1px solid ${ErrorRed};
      }
    }
    
    &:focus-visible {
      border: 1px solid ${Green050};
    }

    ::placeholder {
      color: ${Blue100};
      opacity: 1; 
      font-family: ${figtree.style.fontFamily}, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      /* Firefox */
    }

    :-ms-input-placeholder {
      color: ${Green050};
      font-family: ${figtree.style.fontFamily}, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;

      &.has-error {
        color: ${ErrorRed};
      }
      /* Internet Explorer 10-11 */
    }

    ::-ms-input-placeholder {
      color: ${Green050};
      font-family: ${figtree.style.fontFamily}, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;

      &.has-error {
        color: ${ErrorRed};
      }
      /* Microsoft Edge */
    }
  }
`;

export const FormFields = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 20px;
`;

export const FormBottom = styled.div`
  padding-top: 20px;
  
  display: grid;
  
  @media screen and (min-width: 576px) {
    padding-top: 30px;
    grid-template-columns: auto 128px;
    grid-column-gap: 44px;
  }
  `;

export const CheckBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 25px auto;
  column-gap: 20px;
`;

interface CheckBoxProps {
  error: string;
}

export const CheckBox = styled.div`
  height: 25px;
  width: 25px;
  border: ${(props: CheckBoxProps) => (props.error ? `1px solid ${ErrorRed}` : `1px solid ${Green050}`)};
  border-radius: 7px;
  `;

interface CheckMarkProps {
  checked: boolean
}

export const CheckMark = styled.div<CheckMarkProps>`
  padding: 2px 2px;
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
`;

export const CheckBoxErrorContainer = styled.div`
  grid-column: span 2;
`;

export const ButtonContainer = styled.div`
  padding-top: 30px;
  width: 100%;

  @media screen and (min-width: 576px) {
    margin: 0 auto;
    width: 128px;
    padding-top: 0px;
  }
`;
