import { StaticImageData } from 'next/image';

import articles from 'components/Blog/content/articles';
import { Green100 } from 'components/styling/colors';
import ListedArticle from 'components/Blog/molecules/ListedArticle';
import { MainContainerWithBackGround, ContentContainer, Header } from 'components/Blog/organisms/OtherArticles.styles';

export interface ArticleProps {
  image: StaticImageData,
  title: string,
  shortDescription: string,
}

const OtherArticles = () => (
  <MainContainerWithBackGround>
    <ContentContainer>
      <Header color={Green100}>További bejegyzések</Header>
      {articles.map((item, index) => <ListedArticle key={index} item={item} />)}
    </ContentContainer>
  </MainContainerWithBackGround>
);

export default OtherArticles;
