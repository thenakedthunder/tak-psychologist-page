import { StaticImageData } from 'next/image';

import articles from 'components/Blog/content/articles';
import { Green100 } from 'components/styling/colors';
import ListedArticle from 'components/Blog/molecules/ListedArticle';
import { OtherArticlesContainer as Container, ContentContainer, Header } from 'components/Blog/organisms/OtherArticles.styles';

export interface ArticleProps {
  image: StaticImageData,
  title: string,
  shortDescription: string,
}

const OtherArticles = () => (
  <Container>
    <ContentContainer>
      <Header textColor={Green100}>További bejegyzések</Header>
      {articles.map((item, index) => <ListedArticle key={index} item={item} />)}
    </ContentContainer>
  </Container>
);

export default OtherArticles;
