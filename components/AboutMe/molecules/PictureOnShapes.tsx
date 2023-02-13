import styled from 'styled-components';
import Image from 'next/image';

import { Green100, Green010 } from 'components/styling/colors';
import ProfileImage from '@/public/assets/about-me.png';

const GeometryContainer = styled.div`
  height: 325px;
  width: 100%;
  position: relative;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    height: 650px;
  }
  
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const LargeGreenSquare = styled.div`
  background-color: ${Green100};
  height: 250px;
  width: 250px;
  position: absolute;
  right: -40px;

  @media screen and (min-width: 576px) {
    position: relative;
    left: 50px;
    margin: auto;
  }
  
  @media screen and (min-width: 768px) {
    left: 40px;
    height: 510px;
    width: 510px;
    margin-right: 0;
  }
`;

const SmallGreenSquare = styled.div`
  background-color: ${Green010};
  height: 150px;
  width: 150px;
  position: absolute;
  z-index: 1;
  right: -40px;
  bottom: 0;
  
  @media screen and (min-width: 576px) {
    position: relative;
    left: 101px;
    bottom: 75px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    height: 305px;
    width: 305px;
    bottom: 157px;
    margin-right: 61px;
  }
`;

const ProfileImageContainer = styled.div`
    width: 240px;
    height: 156px;
    position: absolute;
    bottom: 16px;
    z-index: 2;
    left: -50px;

    @media screen and (min-width: 768px) {
      width: 480px;
      height: 312px;
      left: -100px;
      bottom: 24px;
    }
`;

const ProfileImageSized = styled(Image)`
  width: 240px;
  height: 156px;
   
  /* @media screen and (min-width: 650px) {
    width: 480px;
    height: 312px;
  } */
`;

const PictureOnShapes = () => (
  <GeometryContainer>
    <LargeGreenSquare>
      <ProfileImageContainer>
        <ProfileImageSized src={ProfileImage} />
      </ProfileImageContainer>
    </LargeGreenSquare>
    <SmallGreenSquare />
  </GeometryContainer>
);

export default PictureOnShapes;
