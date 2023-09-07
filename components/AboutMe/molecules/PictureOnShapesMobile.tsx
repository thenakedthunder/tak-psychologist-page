import Image from 'next/legacy/image';

import {
  CollageContainer,
  LargerCircle,
  SmallerCircle,
  ImageContainer,
} from 'components/AboutMe/molecules/PictureOnShapesMobile.styles';

import { ImageField } from '@prismicio/client';

interface Props {
  picture: ImageField<never>;
}

const PictureOnShapesMobile = ({ picture }: Props) => (
  <CollageContainer>
    <LargerCircle>
      <SmallerCircle />
      <ImageContainer>
        <Image src={picture.url ?? ''} layout="fill" objectFit="cover" alt="profile" />
      </ImageContainer>
    </LargerCircle>
  </CollageContainer>
);

export default PictureOnShapesMobile;
