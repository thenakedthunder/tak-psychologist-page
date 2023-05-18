import Image from 'next/legacy/image';

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
        <Image src={FaqImage} objectFit="contain" alt="faq" />
      </ImageContainer>
    </LargerSquare>
  </CollageContainer>
);

export default Collage;
