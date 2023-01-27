import Link from 'next/link';

import { VscArrowRight } from 'react-icons/vsc';

import { LargeParagraph, SmallParagraph } from 'components/atoms/typography.styles';
import StyledLink from 'components/atoms/StyledLink.styles';
import {
  Black050, Green100, Green050,
} from 'components/styling/colors';
import { WhatICanHelpYouWithItemData } from 'components/WhatICanHelpYouWith/content/whatICanHelpYouWithItems';
import {
  WhatICanHelpYouWithItemContainer,
  WhatICanHelpYouWithIconContainer,
  LightGreySquare,
  IconContainer,
  TitleContainer,
  StyledDefaultParagraph,
  LinkContainer,
  ArrowIconContainer,
} from './WhatICanHelpYouWithUnit.styles';

type WhatICanHelpYouWithItemProps = {
  item: WhatICanHelpYouWithItemData;
  index: number;
}

const WhatICanHelpYouWithUnit = ({ item, index }: WhatICanHelpYouWithItemProps) => (
  <WhatICanHelpYouWithItemContainer>
    <WhatICanHelpYouWithIconContainer key={index}>
      <LightGreySquare />
      <IconContainer left={item.leftPositioning} bottom={item.bottomPositioning}>
        <item.icon size={50} color={Green100} />
      </IconContainer>
    </WhatICanHelpYouWithIconContainer>
    <TitleContainer>
      <LargeParagraph color={Green100}>
        {item.title}
      </LargeParagraph>
    </TitleContainer>
    <StyledDefaultParagraph color={Black050}>
      {item.description}
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
        <Link href="/" passHref>
          <StyledLink>
            <VscArrowRight size={10} color={Green050} />
          </StyledLink>
        </Link>
      </ArrowIconContainer>
    </LinkContainer>
  </WhatICanHelpYouWithItemContainer>
);

export default WhatICanHelpYouWithUnit;
