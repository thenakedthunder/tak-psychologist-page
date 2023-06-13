import { StaticImageData } from 'next/image';

import articles from 'components/Blog/content/articles';
import { Green100 } from 'components/styling/colors';
import OtherArticlesListedArticle from 'components/Blog/molecules/OtherArticlesListedArticle';
import { OtherArticlesContainer as Container, ContentContainer, Header } from 'components/Blog/organisms/OtherArticles.styles';

const OtherArticles = () => (
  <Container>
    <ContentContainer>
      <Header textColor={Green100}>További bejegyzések</Header>
      {articles.map((item, index) => <OtherArticlesListedArticle key={index} item={item} />)}
    </ContentContainer>
  </Container>
);

export default OtherArticles;
