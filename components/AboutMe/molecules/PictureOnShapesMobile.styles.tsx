// import styled from 'styled-components';
// import Image from 'next/image';

// import { Green100, Green010 } from 'components/styling/colors';

// export const Container = styled.div`
//   height: 325px;
//   width: 100%;
//   position: relative;
//   margin-top: 30px;

//   @media screen and (min-width: 768px) {
//     height: 650px;
//   }

//   @media screen and (min-width: 1200px) {
//     display: none;
//   }
// `;

// export const LargeGreenSquare = styled.div`
//   background-color: ${Green100};
//   height: 250px;
//   width: 250px;
//   position: absolute;
//   right: -40px;

//   @media screen and (min-width: 576px) {
//     position: relative;
//     left: 50px;
//     margin: auto;
//   }

//   @media screen and (min-width: 768px) {
//     left: 40px;
//     height: 510px;
//     width: 510px;
//     margin-right: 0;
//   }
// `;

// export const SmallGreenSquare = styled.div`
//   background-color: ${Green010};
//   height: 150px;
//   width: 150px;
//   position: absolute;
//   z-index: 1;
//   right: -40px;
//   bottom: 0;

//   @media screen and (min-width: 576px) {
//     position: relative;
//     left: 101px;
//     bottom: 75px;
//     margin: auto;
//   }

//   @media screen and (min-width: 768px) {
//     height: 305px;
//     width: 305px;
//     bottom: 157px;
//     margin-right: 61px;
//   }
// `;

// export const ProfileImageContainer = styled.div`
//   width: 240px;
//   height: 156px;
//   position: absolute;
//   bottom: 16px;
//   z-index: 2;
//   left: -50px;

//   @media screen and (min-width: 768px) {
//     width: 480px;
//     height: 312px;
//     left: -100px;
//     bottom: 24px;
//   }
// `;

// export const ProfileImageSized = styled(Image)`
//   width: 240px;
//   height: 156px;
// `;

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
    justify-items: center;
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
    height: 510px;
    width: 510px;
    position: relative;
    left: 89px;
  }

  @media screen and (min-width: 1400px) {
    position: relative;
    left: -90px;
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
    height: 360px;
    width: 360px;
    top: 240px;
    left: 151px;
  }

  /* @media screen and (min-width: 768px) {
    height: 305px;
    width: 305px;
    top: 255px;
    left: 205px;
  } */
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
    right: 178px;
    bottom: 220px;
    width: 500px;
  }
  
  @media screen and (min-width: 1200px) {
    left: 80px;
    bottom: 206px;
    width: 640px;
  }
  
  @media screen and (min-width: 1400px) {
    left: 170px;
  }
`;
