import styled from 'styled-components';
import Image from 'next/image';

import { Green010 } from 'components/styling/colors';
import HeroImage from '@/public/assets/article-header-image.png';

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

const TopSection = () => (
  <SectionContainer>
    <BackgroundStripe />
    <ImageWrapper>
      <Image src={HeroImage} />
    </ImageWrapper>
  </SectionContainer>
);

export default TopSection;
