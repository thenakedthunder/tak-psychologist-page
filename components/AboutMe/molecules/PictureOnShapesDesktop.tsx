import styled from 'styled-components';
import Image from 'next/legacy/image';

import ProfileImage from 'public/assets/rolam.png';

export const MainContainer = styled.div`
  display: none;
  
  @media screen and (min-width: 1200px) {
    display: block;
    background-image: none;
    margin: 0;
    grid-area: image;
    display: flex;
    align-items: center;
  }
`;

export const ProfileImageContainer = styled.div`
  width: 280px;
  position: relative;
  
  @media screen and (min-width: 1200px) {
    width: 90%; 
    bottom: 8vh;
    right: -10%;
  }
  
  @media screen and (min-width: 1400px) {
    left: 0;
    width: 100%;
    bottom: 13vh;
    padding-left: 28px;
  }
`;

const PictureOnShapesDesktop = () => (
  <MainContainer>
    <ProfileImageContainer>
      <Image src={ProfileImage} objectFit="contain" alt="profile" />
    </ProfileImageContainer>
  </MainContainer>
);

export default PictureOnShapesDesktop;
