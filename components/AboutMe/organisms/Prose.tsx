import styled from 'styled-components';

import { H3, LargeParagraph, DefaultParagraph } from 'components/atoms/typography.styles';
import { Green050, Green100 } from 'components/styling/colors';
import { ProseItemType } from 'components/AboutMe/content/aboutMeContent';
import { asText } from '@prismicio/client';

const ProseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

interface ProseProbs {
  content: ProseItemType;
}

const Prose = ({ content }: ProseProbs) => (
  <ProseContainer>
    <H3 textColor={Green050}>{content.header}</H3>
    <LargeParagraph textColor={Green100}>
      {asText(content.highlightedItems)}
    </LargeParagraph>
    {content.defaultTextItems?.map((defaultTextItem, index) => (
      <DefaultParagraph textColor={Green100} key={index}>
        {asText(defaultTextItem.simple_paragraph)}
      </DefaultParagraph>
    ))}
  </ProseContainer>
);

export default Prose;
