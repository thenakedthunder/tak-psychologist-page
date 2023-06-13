import styled from 'styled-components';
import { StaticImageData } from 'next/image';

import articles from 'components/Blog/content/articles';
import ArticleListItem from 'components/Blog/molecules/ArticleListItem';
import { OtherArticlesContainer, ContentContainer } from 'components/Blog/organisms/OtherArticles.styles';

const ContentContainerStyled = styled(ContentContainer)`
  padding: 30px 40px;
  background-attachment: fixed;
`;

const Container = styled(OtherArticlesContainer)`
  background-position-y: 50%;
  background-attachment: fixed;
`;

export interface ArticleProps {
  image: StaticImageData,
  title: string,
  shortDescription: string,
}

const BlogArticles = () => (
  <Container>
    <ContentContainerStyled>
      {articles.map((item, index) => <ArticleListItem key={index} item={item} />)}
    </ContentContainerStyled>
  </Container>
);

export default BlogArticles;
