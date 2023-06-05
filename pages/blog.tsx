import { Green100, Green050 } from 'components/styling/colors';
import SocialShare from 'components/Blog/organisms/SocialShare';
import OtherArticles from 'components/Blog/organisms/OtherArticles';
import TopSection from 'components/Blog/molecules/TopSection';
import DividingDots from 'components/Blog/molecules/DividingDots';
import content from 'components/Blog/content/exampleArticle';
import ArticleContent from 'components/Blog/templates/ArticleContent';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import {
  BlogMainContentContainer as Container,
  MainTitle,
  TopDescription,
  SocialShareOnlyOnDesktopWrapper,
  BottomSocialShareWrapper,
} from 'components/Blog/styling/Blog.styles';

const Blog = () => (
  <>
    <TopSection heroImage={content.heroImage} />
    <BackgroundWrapper>
      <Container>
        <MainTitle textColor={Green050}>{content.articleTitle}</MainTitle>
        <TopDescription textColor={Green100}>
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
      </Container>
      <OtherArticles />
    </BackgroundWrapper>
  </>
);

export default Blog;
