import { VscArrowRight } from 'react-icons/vsc';

import { LargeParagraph, SmallParagraph } from 'components/atoms/typography.styles';
import PsychoLink from 'components/atoms/PsychoLink';
import {
  Black050, Green100, Green050,
} from 'components/styling/colors';
import { ItemData } from 'components/WhatICanHelpYouWith/content/items';
import {
  ItemContainer,
  OuterIconContainer,
  LightGreySquare,
  IconContainer,
  TitleContainer,
  StyledDefaultParagraph,
  LinkContainer,
  ArrowIconContainer,
} from 'components/WhatICanHelpYouWith/molecules/Unit.styles';

type WhatICanHelpYouWithItemProps = {
  item: ItemData;
}

const Unit = ({ item }: WhatICanHelpYouWithItemProps) => {
  const ItemIcon = item.icon;

  return (
    <ItemContainer>
      <OuterIconContainer>
        <LightGreySquare />
        <IconContainer left={item.leftPositioning} bottom={item.bottomPositioning}>
          <ItemIcon size={50} color={Green100} />
        </IconContainer>
      </OuterIconContainer>
      <TitleContainer>
        <LargeParagraph textColor={Green100}>
          {item.title}
        </LargeParagraph>
      </TitleContainer>
      <StyledDefaultParagraph textColor={Black050}>
        {item.description}
      </StyledDefaultParagraph>
      <LinkContainer>
        <SmallParagraph textColor={Green050}>
          <PsychoLink href="/">
            Tudjon meg többet
          </PsychoLink>
        </SmallParagraph>
        <ArrowIconContainer>
          <PsychoLink href="/">
            <VscArrowRight size={10} color={Green050} />
          </PsychoLink>
        </ArrowIconContainer>
      </LinkContainer>
    </ItemContainer>
  );
};

export default Unit;
