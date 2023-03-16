import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import { Green010 } from 'components/styling/colors';

const SectionContainer = styled.div`
  position: relative;
`;

const BackgroundStripe = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${Green010};
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageWrapper = styled.div`
  padding: 0px 20px;
`;

interface Props {
  heroImage: StaticImageData
}

const TopSection = ({ heroImage }: Props) => (
  <SectionContainer>
    <BackgroundStripe />
    <ImageWrapper>
      <Image src={heroImage} />
    </ImageWrapper>
  </SectionContainer>
);

export default TopSection;
