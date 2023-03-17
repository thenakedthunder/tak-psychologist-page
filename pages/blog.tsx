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

const TopDescription = styled(LargeParagraph)`
  padding-bottom: 50px !important;
  font-style: italic;
`;

const MainTitle = styled(H2)`
  padding-bottom: 20px !important; 
`;

const MainContainer = styled.div`
  background-color: ${Grey010};
  padding: 26px 40px 30px;
  
  ${H3},
  ${LargeParagraph},
  ${DefaultParagraph},
  ${H2} {
    padding-bottom: 30px;
  }
`;

const Blog = () => (
  <>
    <NavBar backgroundColor={Green010} />
    <TopSection heroImage={content.heroImage} />
    <MainContainer>
      <MainTitle color={Green050}>{content.articleTitle}</MainTitle>
      <TopDescription color={Green100}>
        {content.topDescription}
      </TopDescription>
      <DividingDots />
      <ArticleContent blocks={content.blocks} />
      <DividingDots />
      <SocialShare />
      <H2 color={Green100}>További bejegyzések</H2>
      <OtherArticles />
    </MainContainer>
  </>
);

export default Blog;
