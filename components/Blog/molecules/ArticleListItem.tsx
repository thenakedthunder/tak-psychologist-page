import styled from 'styled-components';
import Image from 'next/legacy/image';

import { ArticleProps } from 'components/Blog/content/articles';
import { H3, DefaultParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import ReadOnLink from 'components/Blog/molecules/ReadOnLink';

const ArticleContainer = styled.div`
  display: grid;
  row-gap: 8px;
  text-align: left;
`;

const ArticleTitle = styled(H3)`
  padding-bottom: 8px;
`;

const ArticleDescription = styled(DefaultParagraph)`
  padding-bottom: 10px;
`;

const ReadOnLinkWrapper = styled.div`
  padding: 8px 0;

  @media screen and (min-width: 768px) {
    padding: 12px 0 32px;
  }
`;

interface Props {
  item: ArticleProps;
}

const ListedArticle = ({ item }: Props) => (
  <ArticleContainer>
    <ArticleTitle textColor={Green050}>{item.title}</ArticleTitle>
    <ArticleDescription textColor={Green050}>
      {item.longDescription}
    </ArticleDescription>
    <div>
      <Image src={item.image} objectFit="fill" alt={item.shortDescription} />
    </div>
    <ReadOnLinkWrapper>
      <ReadOnLink href={item.link} />
    </ReadOnLinkWrapper>
  </ArticleContainer>
);

export default ListedArticle;
