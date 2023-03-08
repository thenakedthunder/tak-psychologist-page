import styled from 'styled-components';
import Image from 'next/image';

import NavBar from 'components/NavBar/organisms/NavBar';
import { Green010, Grey010 } from 'components/styling/colors';
import HeroImage from '@/public/assets/article-header-image.png';

const TopStripe = styled.div`
  background-color: ${Green010};
  height: 156px;

  @media screen and (min-width: 768px) {
    height: 320px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  top: -76px;

  @media screen and (min-width: 768px) {
    top: -240px;
  }
`;

const MainContainer = styled.div`
  background-color: ${Grey010};
  padding: 0 20px;
`;

const Blog = () => (
  <>
    <TopStripe>
      <NavBar backgroundColor={Green010} />
    </TopStripe>
    <MainContainer>
      <ImageWrapper><Image src={HeroImage} /></ImageWrapper>
    </MainContainer>
  </>
);

export default Blog;
