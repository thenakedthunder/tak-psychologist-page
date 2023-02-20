import styled from 'styled-components';

import { Green100, Grey010 } from 'components/styling/colors';

export const CollageContainer = styled.div`
  margin: 30px 0 30px -40px;
  grid-area: collage;
`;

export const LargerSquare = styled.div`
  height: 246px;
  width: 246px;
  background-color: ${Grey010};

  @media screen and (min-width: 1200px) {
    height: 510px;
    width: 510px;
  }

  @media screen and (min-width: 1400px) {
    position: relative;
    left: -90px;
  }
`;

export const SmallerSquare = styled.div`
  height: 148px;
  width: 148px;
  background-color: ${Green100};
  position: relative;
  top: 124px;
  
  @media screen and (min-width: 1200px) {
    height: 305px;
    width: 305px;
    top: 255px;
  }
`;

export const ImageContainer = styled.div`
  width: 272px;
  height: 160px;
  position: relative;
  left: 64px;
  bottom: 113px;

  @media screen and (min-width: 1200px) {
    width: 480px;
    height: 312px;
    left: 80px;
    bottom: 206px;    
  }
  
  @media screen and (min-width: 1400px) {
    left: 170px;
  }
`;
