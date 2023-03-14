import styled from 'styled-components';

import { LargeParagraph } from 'components/atoms/typography.styles';
import Collage from 'components/Blog/molecules/Collage';

const QuoteContainer = styled.div`
  background: rgba(186, 228, 214, 0.5);
  padding: 30px;
  /* display: grid;
  grid-template-columns: 40px auto;
  column-gap: 30px; */
  border-radius: 20px;
  margin-bottom: 30px;
`;

const QuoteText = styled(LargeParagraph)`
  font-weight: 700;
  padding: 0 !important;
  font-style: italic;
`;

const Quote = () => (
  <QuoteContainer>
    <Collage />
    <QuoteText>
      Ezek közül is szesít a fárzat pont, amely a kozás árosában lévő erderek a százások
      árosába hitemcselékének marbámait, költjét párzja, illetve a tetető pont, amely a
      locsmány százások hullásának bujáit idegeli meg.
    </QuoteText>
  </QuoteContainer>
);

export default Quote;
