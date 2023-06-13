import styled from 'styled-components';

import articles from 'components/Blog/content/articles';
import ArticleListItem from 'components/Blog/molecules/ArticleListItem';
import { ContentContainer, ArticlesContainer } from 'components/Blog/organisms/Articles.styles';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';

const BlogArticles = styled(ArticlesContainer)`
  background-position-y: 50%;
  background-attachment: fixed;
`;

const ContentContainerStyled = styled(ContentContainer)`
  padding: 30px 40px;
  background-attachment: fixed;

  @media screen and (min-width: 768px) {
    padding: 60px 40px 0;
  }
`;

const Blog = () => (
  <BackgroundWrapper>
    <BlogArticles>
      <ContentContainerStyled>
        {articles.map((item, index) => <ArticleListItem key={index} item={item} />)}
      </ContentContainerStyled>
    </BlogArticles>
  </BackgroundWrapper>
);

export default Blog;
