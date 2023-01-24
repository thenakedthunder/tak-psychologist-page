import styled from 'styled-components';
import Link from 'next/link';

import { VscArrowRight } from 'react-icons/vsc';

import { DefaultParagraph, LargeParagraph, SmallParagraph } from 'components/atoms/typography.styles';
import StyledLink from 'components/atoms/StyledLink.styles';
import {
  Black050, Green100, Grey010, Green050,
} from 'components/styling/colors';
import { whatICanHelpYouWithItems } from 'contents/whatICanHelpYouWithItems';
import PrimaryCTAButton from './PrimaryCTAButton';

const WhatICanHelpYouWithItemContainer = styled.div`
  padding-bottom: 45px;
`;

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

const StyledDefaultParagraph = styled(DefaultParagraph)`
  padding-right: 15px;
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
  bottom: 1px;
  right: 0px;
`;

const ButtonContainer = styled.div`
  padding-top: 10px;
`;

const WhatICanHelpYouWithUnit = () => (
  <>
    {whatICanHelpYouWithItems.map((item, index) => (
      <WhatICanHelpYouWithItemContainer>
        <WhatICanHelpYouWithIconContainer key={index}>
          <LightGreySquare />
          <IconContainer left={item.leftPositioning} bottom={item.bottomPositioning}>
            <item.icon size={36} color={Green100} />
          </IconContainer>
        </WhatICanHelpYouWithIconContainer>
        <TitleContainer>
          <LargeParagraph color={Green100}>
            { item.title }
          </LargeParagraph>
        </TitleContainer>
        <StyledDefaultParagraph color={Black050}>
          { item.description }
        </StyledDefaultParagraph>
        <LinkContainer>
          <SmallParagraph color={Green050}>
            <Link href="/" passHref>
              <StyledLink>
                Tudjon meg többet
              </StyledLink>
            </Link>
          </SmallParagraph>
          <ArrowIconContainer>
            <VscArrowRight size={10} color={Green050} />
          </ArrowIconContainer>
        </LinkContainer>
      </WhatICanHelpYouWithItemContainer>
    ))}
    <ButtonContainer>
      <PrimaryCTAButton
        text="Árlista megtekintése"
        color={Grey010}
        backgroundColor={Green050}
      />
    </ButtonContainer>
  </>
);

export default WhatICanHelpYouWithUnit;
