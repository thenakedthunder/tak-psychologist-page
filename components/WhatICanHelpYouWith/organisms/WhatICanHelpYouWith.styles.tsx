import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    padding: 70px 130px 185px;
  }
`;

export const LowerContainer = styled.div`
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 64px;
    padding-top: 64px;
  }
  
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    padding-top: 85px;
  }
`;

export const MobileCTAContainer = styled.div`
  padding-top: 10px;
  
  @media screen and (min-width: 576px) {
    width: 496px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
