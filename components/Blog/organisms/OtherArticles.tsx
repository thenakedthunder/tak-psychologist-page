import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

import { DefaultParagraph, H3 } from 'components/atoms/typography.styles';
import articles from 'components/Blog/content/articles';
import { Green050 } from 'components/styling/colors';
import PsychoLink from 'components/atoms/PsychoLink';

export interface ArticleProps {
  image: StaticImageData,
  title: string,
  shortDescription: string,
}

const ArticleContainer = styled.div`
  display: grid;
  row-gap: 8px;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const ReadOnLink = styled.div`
  padding: 8px 0 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 4px;

  svg {
    position: relative;
    bottom: 4px;
  }
`;

const OtherArticles = () => (
  <>
    {articles.map((item) => (
      <ArticleContainer>
        <ImageWrapper>
          <Image src={item.image} width={295} height={165} />
        </ImageWrapper>
        <H3 color={Green050}>{item.title}</H3>
        <DefaultParagraph color={Green050}>
          {item.shortDescription}
        </DefaultParagraph>
        <ReadOnLink>
          <PsychoLink href="">
            <DefaultParagraph color={Green050}>Tovább</DefaultParagraph>
          </PsychoLink>
          <IoChevronDownCircleOutline size={28} color={Green050} />
        </ReadOnLink>
      </ArticleContainer>
    ))}
  </>
);

export default OtherArticles;
