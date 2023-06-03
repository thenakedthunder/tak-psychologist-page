import Image from 'next/legacy/image';

import ProfileImage from 'public/assets/rolam.png';
import {
  CollageContainer,
  LargerCircle,
  SmallerSquare,
  ImageContainer,
} from 'components/AboutMe/molecules/PictureOnShapesMobile.styles';

const PictureOnShapesMobile = () => (
  <CollageContainer>
    <LargerCircle>
      <SmallerSquare />
      <ImageContainer>
        <Image src={ProfileImage} layout="fill" objectFit="cover" alt="profile" />
      </ImageContainer>
    </LargerCircle>
  </CollageContainer>
);

export default PictureOnShapesMobile;
