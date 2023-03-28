import NavBar from 'components/NavBar/organisms/NavBar';
import {
  Green010, Green100, Green050, Grey010,
} from 'components/styling/colors';
import SocialShare from 'components/Blog/organisms/SocialShare';
import OtherArticles from 'components/Blog/organisms/OtherArticles';
import TopSection from 'components/Blog/molecules/TopSection';
import DividingDots from 'components/Blog/molecules/DividingDots';
import content from 'components/Blog/content/exampleArticle';
import ArticleContent from 'components/Blog/templates/ArticleContent';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import {
  MainContainer,
  MainTitle,
  TopDescription,
  SocialShareOnlyOnDesktopWrapper,
  BottomSocialShareWrapper,
} from 'components/Blog/styling/Blog.styles';

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
      </MainContainer>
      <OtherArticles />
    </BackgroundWrapper>
  </>
);

export default Blog;
