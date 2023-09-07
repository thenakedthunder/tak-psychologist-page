import styled from 'styled-components';
import Image from 'next/legacy/image';

import { ImageField } from '@prismicio/client';

export const MainContainer = styled.div`
  display: none;
  
  @media screen and (min-width: 1200px) {
    display: block;
    margin: 0;
    grid-area: image;
    display: flex;
    align-items: center;
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  
  @media screen and (min-width: 1200px) {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    bottom: 100px;
    left: 105px;
  }
  
  @media screen and (min-width: 1400px) {
    width: 400px;
    height: 400px;
    left: 160px;
    bottom: 14vh;
  }
`;

interface Props {
  picture: ImageField<never>;
}

const PictureOnShapesDesktop = ({ picture }: Props) => (
  <MainContainer>
    <ProfileImageContainer>
      <Image src={picture.url ?? ''} layout="fill" objectFit="cover" alt="profile" />
    </ProfileImageContainer>
  </MainContainer>
);

export default PictureOnShapesDesktop;
