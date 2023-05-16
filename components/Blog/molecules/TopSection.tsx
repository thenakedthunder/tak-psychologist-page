import styled from 'styled-components';
import Image, { StaticImageData } from 'next/legacy/image';

import { Green010, Grey010 } from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';

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

  @media screen and (min-width: 768px) {
    height: 178px;
  }
`;

const ImageWrapper = styled.div`
  padding: 0px 20px;
  background-color: ${Grey010};

  @media screen and (min-width: 768px) {
    padding: 20px 40px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1400px) {
    padding: 0;
    width: 1180px;
    margin: 0 auto;
  }
`;

interface Props {
  heroImage: StaticImageData
}

const TopSection = ({ heroImage }: Props) => (
  <SectionContainer>
    <BackgroundStripe />
    <BackgroundWrapper>
      <ImageWrapper>
        <Image src={heroImage} layout="responsive" alt="hero" />
      </ImageWrapper>
    </BackgroundWrapper>
  </SectionContainer>
);

export default TopSection;
