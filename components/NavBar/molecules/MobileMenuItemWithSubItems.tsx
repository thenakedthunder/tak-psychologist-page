import { Height } from 'react-animate-height';
import { IoChevronUpCircleOutline, IoChevronDownCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

import { Green050, Green100 } from 'components/styling/colors';
import MobileMenuItemParagraph from 'components/NavBar/atoms/MobileMenuItemParagraph';
import { MenuItemWithSubItems } from 'components/NavBar/content/menuItems';
import SubMenuItems from 'components/NavBar/molecules/MobileMenuSubItems';

const MenuItemWithSubItemsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 28px;
  justify-content: space-between;
`;

export const OpenToggle = styled.div`
  cursor: pointer;
`;

interface MenuItemWithSubItemsProps {
  item: MenuItemWithSubItems;
  onMenuItemClicked: () => void;
  isOpen: boolean;
  onClicked: () => void;
}

const MobileMenuItemWithSubItems = ({
  item, onMenuItemClicked, isOpen, onClicked,
}: MenuItemWithSubItemsProps) => {
  const height: Height = isOpen ? 'auto' : 0;

  return (
    <MenuItemWithSubItemsContainer onClick={onClicked}>
      <MobileMenuItemParagraph textColor={Green050}>
        {item.name}
      </MobileMenuItemParagraph>
      <OpenToggle
        role="button"
        tabIndex={0}
        aria-expanded={height !== 0}
        aria-controls="example-panel"
      >
        {height !== 0
          ? <IoChevronUpCircleOutline size={28} color={Green100} />
          : <IoChevronDownCircleOutline size={28} color={Green100} />}
      </OpenToggle>
      <SubMenuItems
        height={height}
        item={item}
        onMenuItemClicked={onMenuItemClicked}
      />
    </MenuItemWithSubItemsContainer>
  );
};

export default MobileMenuItemWithSubItems;
