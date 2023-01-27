import { VscArrowRight } from 'react-icons/vsc';

import { LargeParagraph, SmallParagraph } from 'components/atoms/typography.styles';
import PsychoLink from 'components/atoms/PsychoLink';
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
        <PsychoLink>
          Tudjon meg többet
        </PsychoLink>
      </SmallParagraph>
      <ArrowIconContainer>
        <PsychoLink>
          <VscArrowRight size={10} color={Green050} />
        </PsychoLink>
      </ArrowIconContainer>
    </LinkContainer>
  </WhatICanHelpYouWithItemContainer>
);

export default WhatICanHelpYouWithUnit;
