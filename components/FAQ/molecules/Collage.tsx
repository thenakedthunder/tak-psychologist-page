import Image from 'next/legacy/image';

import {
  CollageContainer,
  LargerCircle,
  SmallerCircle,
  ImageContainer,
} from 'components/FAQ/molecules/Collage.styles';

import { ImageField } from '@prismicio/client';

interface Props {
  faqImage: ImageField<never>;
}

const Collage = ({ faqImage }: Props) => (
  <CollageContainer>
    <LargerCircle>
      <SmallerCircle />
      <ImageContainer>
        <Image src={faqImage.url ?? ''} layout="fill" objectFit="cover" alt="faq" />
      </ImageContainer>
    </LargerCircle>
  </CollageContainer>
);

export default Collage;
