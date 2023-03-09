import styled from 'styled-components';
import Image from 'next/image';

import NavBar from 'components/NavBar/organisms/NavBar';
import { Green010, Green050, Grey010 } from 'components/styling/colors';
import HeroImage from '@/public/assets/article-header-image.png';
import { H2 } from 'components/atoms/typography.styles';

const MainContainer = styled.div`
  background-color: ${Grey010};
  padding: 26px 40px 30px;
`;

const TopSection = styled.div`
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

const Blog = () => (
  <>
    <NavBar backgroundColor={Green010} />
    <TopSection>
      <BackgroundStripe />
      <ImageWrapper>
        <Image src={HeroImage} />
      </ImageWrapper>
    </TopSection>
    <MainContainer>
      <H2 color={Green050}>Bejegyzés címe, maximum 2-3 sorban, lorem ipsum dolor sitamet</H2>
    </MainContainer>
  </>
);

export default Blog;
