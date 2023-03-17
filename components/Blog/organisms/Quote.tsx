import styled from 'styled-components';

import { LargeParagraph } from 'components/atoms/typography.styles';
import Collage from 'components/Blog/molecules/Collage';
import { Green100 } from 'components/styling/colors';

const QuoteContainer = styled.div`
  background: rgba(186, 228, 214, 0.5);
  padding: 30px;
  /* display: grid;
  grid-template-columns: 40px auto;
  column-gap: 30px; */
  border-radius: 20px;
  margin: 10px 0 50px;
`;

const QuoteText = styled(LargeParagraph)`
  font-weight: 700;
  padding: 0 !important;
  font-style: italic;
`;

interface Props {
  content: string;
}

const Quote = ({ content }: Props) => (
  <QuoteContainer>
    <Collage />
    <QuoteText color={Green100}>
      {content}
    </QuoteText>
  </QuoteContainer>
);

export default Quote;
