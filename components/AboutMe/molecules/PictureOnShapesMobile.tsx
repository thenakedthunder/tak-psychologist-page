import Image from 'next/legacy/image';

import ProfileImage from 'public/assets/rolam.png';
import {
  CollageContainer,
  LargerCircle,
  SmallerCircle,
  ImageContainer,
} from 'components/AboutMe/molecules/PictureOnShapesMobile.styles';

const PictureOnShapesMobile = () => (
  <CollageContainer>
    <LargerCircle>
      <SmallerCircle />
      <ImageContainer>
        <Image src={ProfileImage} layout="fill" objectFit="cover" alt="profile" />
      </ImageContainer>
    </LargerCircle>
  </CollageContainer>
);

export default PictureOnShapesMobile;
