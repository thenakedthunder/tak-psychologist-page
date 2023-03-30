import styled from 'styled-components';

import { DefaultParagraph, H3 } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import ReadOnLink from 'components/Blog/molecules/ReadOnLink';
import { ArticleProps } from 'components/Blog/organisms/OtherArticles';

const Container = styled.div`
  margin: 0 auto;
  max-width: 295px;
  text-align: left;
  align-self: center;

  @media screen and (min-width: 768px) {    
    max-width: 100%;
  }
`;

const ArticleTitle = styled(H3)`
  padding-bottom: 8px;
`;

const ArticleDescription = styled(DefaultParagraph)`
  padding-bottom: 25px;
`;

interface Props {
  data: ArticleProps;
}

const ArticleData = ({ data }: Props) => (
  <Container>
    <ArticleTitle color={Green050}>{data.title}</ArticleTitle>
    <ArticleDescription color={Green050}>
      {data.shortDescription}
    </ArticleDescription>
    <ReadOnLink />
  </Container>
);

export default ArticleData;
