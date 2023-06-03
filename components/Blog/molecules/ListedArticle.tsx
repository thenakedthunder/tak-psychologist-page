import styled from 'styled-components';
import Image from 'next/legacy/image';

import { ArticleProps } from 'components/Blog/organisms/OtherArticles';
import ArticleData from 'components/Blog/molecules/ArticleData';

const ArticleContainer = styled.div`
  display: grid;
  row-gap: 8px;
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 295px auto;
    column-gap: 23px;
    padding-top: 20px;
  }
`;

interface Props {
  item: ArticleProps;
}

const ListedArticle = ({ item }: Props) => (
  <ArticleContainer>
    <div>
      <Image src={item.image} width={295} height={165} alt={item.shortDescription} />
    </div>
    <ArticleData data={item} />
  </ArticleContainer>
);

export default ListedArticle;
