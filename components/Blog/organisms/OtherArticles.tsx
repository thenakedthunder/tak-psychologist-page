import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import { DefaultParagraph, H3 } from 'components/atoms/typography.styles';
import articles from 'components/Blog/content/articles';
import { Green050 } from 'components/styling/colors';
import ReadOnLink from 'components/Blog/molecules/ReadOnLink';

export interface ArticleProps {
  image: StaticImageData,
  title: string,
  shortDescription: string,
}

const ArticleContainer = styled.div`
  display: grid;
  row-gap: 8px;

  ${H3},
  ${DefaultParagraph} {
    padding-bottom: 0px !important;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const OtherArticles = () => (
  <>
    {articles.map((item, index) => (
      <ArticleContainer key={index}>
        <ImageWrapper>
          <Image src={item.image} width={295} height={165} />
        </ImageWrapper>
        <H3 color={Green050}>{item.title}</H3>
        <DefaultParagraph color={Green050}>
          {item.shortDescription}
        </DefaultParagraph>
        <ReadOnLink />
      </ArticleContainer>
    ))}
  </>
);

export default OtherArticles;
