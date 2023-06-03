import styled from 'styled-components';

import { H2 } from 'components/atoms/typography.styles';

export const WrapperForCollageBackground = styled.div`
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

  @media screen and (min-width: 1400px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const FooterContainer = styled.div`
  padding: 80px 40px 30px;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    padding: 80px 140px 24px 130px;
    max-width: 1080px;
  }
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
    padding: 80px 230px 120px 130px;
    margin: 0;
    max-width: none;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: auto 480px;
  }
`;

export const FooterHeader = styled(H2)`
  grid-area: header;
  @media screen and (min-width: 1200px) {
    padding-bottom: 72px;
  }
`;
