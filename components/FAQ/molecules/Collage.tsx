import Image from 'next/legacy/image';

import FaqImage from 'public/assets/gyik.png';
import {
  CollageContainer,
  LargerCircle,
  SmallerCircle,
  ImageContainer,
} from 'components/FAQ/molecules/Collage.styles';

const Collage = () => (
  <CollageContainer>
    <LargerCircle>
      <SmallerCircle />
      <ImageContainer>
        <Image src={FaqImage} layout="fill" objectFit="cover" alt="faq" />
      </ImageContainer>
    </LargerCircle>
  </CollageContainer>
);

export default Collage;
