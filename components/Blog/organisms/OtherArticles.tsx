import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import articles from 'components/Blog/content/articles';
import ArticleData from 'components/Blog/molecules/ArticleData';

export interface ArticleProps {
  image: StaticImageData,
  title: string,
  shortDescription: string,
}

const Container = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
`;

const ArticleContainer = styled.div`
  display: grid;
  row-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 295px auto;
    column-gap: 23px;
    padding-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const OtherArticles = () => (
  <Container>
    {articles.map((item, index) => (
      <ArticleContainer key={index}>
        <ImageWrapper>
          <Image src={item.image} width={295} height={165} />
        </ImageWrapper>
        <ArticleData data={item} />
      </ArticleContainer>
    ))}
  </Container>
);

export default OtherArticles;
