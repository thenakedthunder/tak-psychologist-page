import styled from 'styled-components';

import { Blue010, Green010 } from 'components/styling/colors';

export const CollageContainer = styled.div`
  margin: 30px -40px 74px 0;
  grid-area: collage;
  display: grid;
  justify-items: end;

  @media screen and (min-width: 576px) {
    margin-bottom: 56px;
  }

  @media screen and (min-width: 768px) {
    margin: 30px auto 115px;
    justify-items: start;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const LargerCircle = styled.div`
  height: 246px;
  width: 246px;
  border-radius: 50%;
  background-color: ${Blue010};

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
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background-color: ${Green010};
  position: relative;
  top: 140px;
  left: 66px;

  @media screen and (min-width: 576px) {
    height: 256px;
    width: 256px;
    top: 120px;
    left: 64px;
  }

  @media screen and (min-width: 768px) {
    height: 280px;
    width: 280px;
    top: 235px;
    left: 120px;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  right: 50px;
  bottom: 120px;

  @media screen and (min-width: 576px) {
    height: 270px;
    width: 270px;
    right: 64px;
    bottom: 220px;
  }

  @media screen and (min-width: 768px) {
    height: 340px;
    width: 340px;
    right: 100px;
    bottom: 240px;
  }
`;
