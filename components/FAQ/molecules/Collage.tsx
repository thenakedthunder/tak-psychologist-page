import Image from 'next/image';

import FaqImage from 'public/assets/gyik.png';
import {
  CollageContainer,
  LargerSquare,
  SmallerSquare,
  ImageContainer,
} from 'components/FAQ/molecules/Collage.styles';

const Collage = () => (
  <CollageContainer>
    <LargerSquare>
      <SmallerSquare />
      <ImageContainer>
        <Image src={FaqImage} objectFit="contain" />
      </ImageContainer>
    </LargerSquare>
  </CollageContainer>
);

export default Collage;
