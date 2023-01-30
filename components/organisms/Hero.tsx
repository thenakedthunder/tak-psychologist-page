import styled from 'styled-components';

import { H2, DefaultParagraph } from 'components/atoms/typography.styles';
import {
  Green010, Green100, Green050, Grey100,
} from 'components/styling/colors';

const HeroContainer = styled.div`
  background-color: ${Green100};
  padding: 40px 40px 75px;

  @media screen and (min-width: 768px) {
    padding: 80px 130px;
  }
`;

const QuoteText = styled(H2)`
  font-size: 26px;
  font-style: italic;

  .highlighted {
    color: ${Green050};
  }
  
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
`;

const QuoteAuthor = styled(DefaultParagraph)`
  margin-top: 30px;
  font-weight: 700;
`;

const Hero = () => (
  <HeroContainer>
    <QuoteText color={Green010}>
      A lélek éppúgy lehet beteg, mint a test.
      <span className="highlighted">
        {' '}
        Csakhogy a lélek nem tűri oly bambán a szenvedést,
        {' '}
      </span>
      mint a test; a test nem támogatja a lelket, mint ahogy a lélek
      támogatja a testet.
    </QuoteText>
    <QuoteAuthor color={Grey100}>
      — Honoré de Balzac
    </QuoteAuthor>
  </HeroContainer>
);

export default Hero;
