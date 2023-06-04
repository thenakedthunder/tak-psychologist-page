import styled from 'styled-components';

import { H2, DefaultParagraph } from 'components/atoms/typography.styles';
import {
  Green010, Green100, Green050, Black100,
} from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';

const HeroContainer = styled.div`
  background-color: ${Green010};
  padding: 40px 40px 75px;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 80px 130px;
  }
`;

const QuoteText = styled(H2)`
  font-size: 26px;
  font-style: italic;

  .highlighted {
    color: ${Black100};
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
  <BackgroundWrapper backgroundColor={Green010}>
    <HeroContainer>
      <QuoteText textColor={Green050}>
        A lélek éppúgy lehet beteg, mint a test.
        <span className="highlighted">
          {' '}
          Csakhogy a lélek nem tűri oly bambán a szenvedést,
          {' '}
        </span>
        mint a test; a test nem támogatja a lelket, mint ahogy a lélek
        támogatja a testet.
      </QuoteText>
      <QuoteAuthor textColor={Green100}>
        — Honoré de Balzac
      </QuoteAuthor>
    </HeroContainer>
  </BackgroundWrapper>
);

export default Hero;
