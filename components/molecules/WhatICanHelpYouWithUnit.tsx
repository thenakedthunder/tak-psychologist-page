import styled from 'styled-components';

import {
  Black050, Green100, Grey010, Green050,
} from 'components/styling/colors';
import { VscArrowRight } from 'react-icons/vsc';
import { DefaultParagraph, LargeParagraph, SmallParagraph } from 'components/atoms/typography.styles';
import { whatICanHelpYouWithItems } from 'contents/whatICanHelpYouWithItems';

const WhatICanHelpYouWithIconContainer = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
`;

const LightGreySquare = styled.div`
  height: 24px;
  width: 24px;
  background-color: ${Grey010};
  position: absolute;
  bottom: 0px;
  left: 0;
`;

type PositionedContainer = {
  left?: string;
  bottom?: string;
};

const IconContainer = styled.div<PositionedContainer>`
  position: absolute;
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
`;

const TitleContainer = styled.div`
  padding: 16px 0;
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 4px;
  padding-top: 22px;
  width: 124px;
  position: relative;
`;

const ArrowIconContainer = styled.div`
  position: absolute;
  bottom: 12px;
  right: 0px;
`;

const WhatICanHelpYouWithUnit = () => (
  <div>
    {whatICanHelpYouWithItems.map((item, index) => (
      <>
        <WhatICanHelpYouWithIconContainer key={index}>
          <LightGreySquare />
          <IconContainer left={item.leftPositioning} bottom={item.bottomPositioning}>
            <item.icon size={36} />
          </IconContainer>
        </WhatICanHelpYouWithIconContainer>
        <TitleContainer>
          <LargeParagraph color={Green100}>
            { item.title }
          </LargeParagraph>
        </TitleContainer>
        <DefaultParagraph color={Black050}>
          { item.description }
        </DefaultParagraph>
        <LinkContainer>
          <SmallParagraph color={Green050}>
            Tudjon meg többet
          </SmallParagraph>
          <ArrowIconContainer>
            <VscArrowRight size={10} color={Green050} />
          </ArrowIconContainer>
        </LinkContainer>
      </>
    ))}
  </div>
);

export default WhatICanHelpYouWithUnit;
