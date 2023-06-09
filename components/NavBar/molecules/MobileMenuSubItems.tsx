import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';

import PsychoLink from 'components/atoms/PsychoLink';
import { Green050 } from 'components/styling/colors';
import MobileMenuItemParagraph from 'components/NavBar/atoms/MobileMenuItemParagraph';
import { MenuItemWithSubItems } from 'components/NavBar/content/menuItems';

const MenuItemsContainer = styled(AnimateHeight)`
  div {
    padding: 12px 0 12px 24px;
    display: grid;
    row-gap: 8px;
  }
`;

interface SubMenuItemProps {
  height: number | 'auto',
  item: MenuItemWithSubItems,
  onMenuItemClicked: () => void,
}

const SubMenuItems = ({ height, item, onMenuItemClicked }: SubMenuItemProps) => (
  <MenuItemsContainer
    duration={500}
    height={height}
  >
    {item.subItems.map((subItem, subItemIndex) => (
      <MobileMenuItemParagraph
        key={subItemIndex}
        textColor={Green050}
        onClick={onMenuItemClicked}
      >
        <PsychoLink href={subItem.linkHref}>
          {subItem.linkText}
        </PsychoLink>
      </MobileMenuItemParagraph>
    ))}
  </MenuItemsContainer>
);

export default SubMenuItems;
