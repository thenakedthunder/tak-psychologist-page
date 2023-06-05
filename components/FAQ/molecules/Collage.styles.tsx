import styled from 'styled-components';

import { Blue010, Grey010 } from 'components/styling/colors';

export const CollageContainer = styled.div`
  margin: 30px 0 30px -40px;
  grid-area: collage;
`;

export const LargerCircle = styled.div`
  height: 246px;
  width: 246px;
  background-color: ${Grey010};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }

  @media screen and (min-width: 1200px) {
    height: 510px;
    width: 510px;
  }

  @media screen and (min-width: 1400px) {
    position: relative;
    left: -90px;
  }
`;

export const SmallerCircle = styled.div`
  height: 180px;
  width: 180px;
  background-color: ${Blue010};
  position: relative;
  top: 94px;
  border-radius: 50%;
  
  @media screen and (min-width: 768px) {
    height: 240px;
    width: 240px;
    top: 190px;
  }

  @media screen and (min-width: 1200px) {
    height: 360px;
    width: 360px;
    top: 255px;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  left: 84px;
  bottom: 170px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    left: 130px;
    bottom: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 400px;
    left: 159px;
    bottom: 305px;
  }
  
  @media screen and (min-width: 1400px) {
    left: 170px;
  }
`;
