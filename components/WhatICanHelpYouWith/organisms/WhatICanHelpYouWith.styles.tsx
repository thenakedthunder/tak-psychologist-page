import styled from 'styled-components';
import { Blue010 } from 'components/styling/colors';

export const Container = styled.div`
  background-color: ${Blue010};
  padding: 40px;

  @media screen and (min-width: 992px) {
    padding: 80px 130px 185px;
  }
`;

export const LowerContainer = styled.div`
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    padding-top: 75px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;

export const MobileCTAContainer = styled.div`
  padding-top: 30px;
  
  @media screen and (min-width: 576px) {
    padding-top: 10px;
    width: 496px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
