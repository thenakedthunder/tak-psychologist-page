import styled from 'styled-components';
import { PrismicRichText } from '@prismicio/react';

import { H2, DefaultParagraph } from 'components/atoms/typography.styles';
import {
  Green100, Green050, Grey100, Green010,
} from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { IndexPageV2DocumentDataHeroItem } from 'prismicio-types';

const HeroContainer = styled.div`
  background-color: ${Grey100};
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

  strong {
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

interface HeroProps {
  content: IndexPageV2DocumentDataHeroItem[];
}

const Hero = ({ content }: HeroProps) => (
  <BackgroundWrapper backgroundColor={Green100}>
    <HeroContainer>
      <QuoteText textColor={Green010}>
        <PrismicRichText field={content[0].quote_text} />
      </QuoteText>
      <QuoteAuthor textColor={Grey100}>
        {content[0].quote_author}
      </QuoteAuthor>
    </HeroContainer>
  </BackgroundWrapper>
);

export default Hero;
