import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import {
  Green010, Green100, Green050, Grey010,
} from 'components/styling/colors';
import {
  H2, H3, LargeParagraph, DefaultParagraph,
} from 'components/atoms/typography.styles';
import SocialShare from 'components/Blog/organisms/SocialShare';
import OtherArticles from 'components/Blog/organisms/OtherArticles';
import TopSection from 'components/Blog/molecules/TopSection';
import DividingDots from 'components/Blog/molecules/DividingDots';
import content from 'components/Blog/content/exampleArticle';
import ArticleContent from 'components/Blog/templates/ArticleContent';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';

const TopDescription = styled(LargeParagraph)`
  padding-bottom: 50px !important;
  font-style: italic;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 120%;
    font-weight: 400;
    padding-bottom: 55px !important;
  }
`;

const MainTitle = styled(H2)`
  padding-bottom: 20px !important;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 57.6px;
    padding-bottom: 40px !important;
  }
`;

const MainContainer = styled.div`
  background-color: ${Grey010};
  padding: 30px 40px;
  max-width: 860px;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    padding: 60px 40px;
  }

  ${H3},
  ${LargeParagraph},
  ${DefaultParagraph},
  ${H2} {
    padding-bottom: 30px;
  }

`;

const SocialShareOnlyOnDesktopWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const BottomSocialShareWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 15px;
  }
`;

const Blog = () => (
  <>
    <NavBar backgroundColor={Green010} />
    <TopSection heroImage={content.heroImage} />
    <BackgroundWrapper color={Grey010}>
      <MainContainer>
        <MainTitle color={Green050}>{content.articleTitle}</MainTitle>
        <TopDescription color={Green100}>
          {content.topDescription}
        </TopDescription>
        <SocialShareOnlyOnDesktopWrapper>
          <SocialShare />
        </SocialShareOnlyOnDesktopWrapper>
        <DividingDots />
        <ArticleContent blocks={content.blocks} />
        <DividingDots />
        <BottomSocialShareWrapper>
          <SocialShare />
        </BottomSocialShareWrapper>
        <H2 color={Green100}>További bejegyzések</H2>
        <OtherArticles />
      </MainContainer>
    </BackgroundWrapper>
  </>
);

export default Blog;
