import styled from 'styled-components';

import { Green010, Green100 } from 'components/styling/colors';

export const CollageContainer = styled.div`
  margin: 30px -40px 26px 0;
  grid-area: collage;
  display: grid;
  justify-items: end;

  @media screen and (min-width: 576px) {
    margin-bottom: 56px;
  }

  @media screen and (min-width: 768px) {
    margin: 30px auto 90px;
    justify-items: start;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const LargerSquare = styled.div`
  height: 246px;
  width: 246px;
  background-color: ${Green100};

  @media screen and (min-width: 576px) {
    height: 320px;
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
    position: relative;
    left: 100px;
  }
`;

export const SmallerSquare = styled.div`
  height: 148px;
  width: 148px;
  background-color: ${Green010};
  position: relative;
  top: 124px;
  left: 98px;
  
  @media screen and (min-width: 576px) {
    height: 256px;
    width: 256px;
    top: 120px;
    left: 64px;
  }

  @media screen and (min-width: 768px) {
    top: 235px;
    left: 145px;
  }
`;

export const ImageContainer = styled.div`
  width: 272px;
  height: 160px;
  position: relative;
  right: 90px;
  bottom: 113px;

  @media screen and (min-width: 576px) {
    width: 400px;
    right: 218px;
    bottom: 220px;
  }

  @media screen and (min-width: 768px) {
    right: 100px;
    bottom: 140px;
  }
`;
