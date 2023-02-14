import styled from 'styled-components';

import { H3, LargeParagraph, DefaultParagraph } from 'components/atoms/typography.styles';
import { Green050, Green100 } from 'components/styling/colors';
import { ProseItemType } from 'components/AboutMe/content/aboutMeContent';

const ProseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }`;

interface ProseProbs {
  content: ProseItemType;
}

const Prose = ({ content }: ProseProbs) => (
  <ProseContainer>
    <H3 color={Green050}>{content.header}</H3>
    {content.highlightedItems?.map((item, index) => (
      <LargeParagraph color={Green100} key={index}>
        {item}
      </LargeParagraph>
    ))}
    {content.defaultTextItems?.map((item, index) => (
      <DefaultParagraph color={Green100} key={index}>
        {item}
      </DefaultParagraph>
    ))}
  </ProseContainer>
);

export default Prose;