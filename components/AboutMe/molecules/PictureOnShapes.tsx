import styled from 'styled-components';
import Image from 'next/image';

import { Green100, Green010 } from 'components/styling/colors';
import ProfileImage from '@/public/assets/about-me.png';

const GeometryContainer = styled.div`
  height: 325px;
  width: 100%;
  position: relative;
  margin-top: 30px;

  @media screen and (min-width: 650px) {
    height: 650px;
  }
  
  @media screen and (min-width: 1200px) {
    grid-row: 1 / span 2;
    grid-column: 2;
    position: relative;
    /* top: -96px; */
  }
`;

const LargeGreenSquare = styled.div`
  background-color: ${Green100};
  height: 250px;
  width: 250px;
  position: absolute;
  right: -55px;

  @media screen and (min-width: 650px) {
    height: 510px;
    width: 510px;
  }
`;

const SmallGreenSquare = styled.div`
  background-color: ${Green010};
  height: 150px;
  width: 150px;
  position: absolute;
  z-index: 1;
  right: -55px;
  bottom: 0;

  @media screen and (min-width: 650px) {
    height: 305px;
    width: 305px;
  }
`;

const ProfileImageContainer = styled.div`
    width: 240px;
    height: 156px;
    position: absolute;
    bottom: 5px;
    z-index: 2;
    left: -50px;

    @media screen and (min-width: 650px) {
      width: 480px;
      height: 312px;
      left: -100px;
      bottom: 9px;
    }
`;

const ProfileImageSized = styled(Image)`
  width: 240px;
  height: 156px;
   
  @media screen and (min-width: 650px) {
    width: 480px;
    height: 312px;
  }
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
