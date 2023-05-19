import Image from 'next/legacy/image';

import ProfileImage from 'public/assets/rolam.png';
import {
  CollageContainer,
  LargerSquare,
  SmallerSquare,
  ImageContainer,
} from 'components/AboutMe/molecules/PictureOnShapesMobile.styles';

const PictureOnShapesMobile = () => (
  <CollageContainer>
    <LargerSquare>
      <SmallerSquare />
      <ImageContainer>
        <Image src={ProfileImage} objectFit="contain" alt="profile" />
      </ImageContainer>
    </LargerSquare>
  </CollageContainer>
);

export default PictureOnShapesMobile;
