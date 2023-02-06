import styled from 'styled-components';

import { Green050, Green100 } from 'components/styling/colors';
import { H3, LargeParagraph, DefaultParagraph } from 'components/atoms/typography.styles';
import { ProseItemType } from '../content/aboutMeContent';

const ProseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding-top: 60px;
`;

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
