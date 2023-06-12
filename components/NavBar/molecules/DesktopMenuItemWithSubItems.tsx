import styled from 'styled-components';
import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from 'react-icons/io5';
import { Height } from 'react-animate-height';

import { MenuItemWithSubItems } from 'components/NavBar/content/menuItems';
import { Green050, Green100 } from 'components/styling/colors';
import DesktopMenuItem from '../atoms/DesktopMenuItem';
import SubMenuItems from './DesktopMenuSubItems';

const MenuItemWithSubItemsContainer = styled.div`
  cursor: pointer;
`;

const ChevronContainer = styled.span`
  height: 62px;
  position: relative;
  top: 8px;
  padding-left: 8px;
  cursor: pointer;
`;

interface DesktopMenuItemWithSubItemsProps {
  item: MenuItemWithSubItems;
  isOpen: boolean;
  onClicked: () => void;
}

const DesktopMenuItemWithSubItems = ({
  item, isOpen, onClicked,
}: DesktopMenuItemWithSubItemsProps) => {
  const height: Height = isOpen ? 'auto' : 0;

  return (
    <div>
      <MenuItemWithSubItemsContainer onClick={onClicked}>
        <DesktopMenuItem
          textColor={Green050}
        >
          {item.name}
          <ChevronContainer>
            {height === 0
              ? <IoChevronDownCircleOutline size={28} color={Green100} />
              : <IoChevronUpCircleOutline size={28} color={Green100} />}
          </ChevronContainer>
        </DesktopMenuItem>
      </MenuItemWithSubItemsContainer>
      <SubMenuItems
        height={height}
        item={item}
      />
    </div>
  );
};

export default DesktopMenuItemWithSubItems;
