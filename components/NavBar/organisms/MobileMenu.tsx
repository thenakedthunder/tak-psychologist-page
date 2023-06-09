import styled from 'styled-components';
import { useState } from 'react';

import {
  Green010, Grey010,
} from 'components/styling/colors';
import { MenuItemWithSubItems, isLinkType, menuItemsMobile } from 'components/NavBar/content/menuItems';
import { NavBarProps } from 'components/NavBar/organisms/NavBar';
import ContactMenuButtonMobile from 'components/NavBar/molecules/ContactMenuButtonMobile';
import { LinkType } from 'types/LinkType';
import MobileMenuItem from 'components/NavBar/molecules/MobileMenuItem';
import MobileMenuItemWithSubItems from 'components/NavBar/molecules/MobileMenuItemWithSubItems';

const MobileMenuContainer = styled.div`
  background-color: ${(props: NavBarProps) => (props.colorScheme === 'light' ? Grey010 : Green010)};
  padding: 30px 40px 40px;
  display: grid;
  row-gap: 20px;
  position: fixed;
  top: 83px;
  width: 100%;
`;

type MobileMenuProps = NavBarProps & {
  onMenuItemClicked: () => void;
}

const MobileMenu = ({ colorScheme, onMenuItemClicked }: MobileMenuProps) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(-1);
  const closeOpenSubmenu = () => setOpenSubMenuIndex(-1);

  const handleSubMenuOpenAndClose = (indexOfItemClicked: number) => {
    if (indexOfItemClicked === openSubMenuIndex) {
      closeOpenSubmenu();
    } else {
      setOpenSubMenuIndex(indexOfItemClicked);
    }
  };

  return (
    <MobileMenuContainer colorScheme={colorScheme}>
      {menuItemsMobile.map((item, index) => {
        if (isLinkType(item)) {
          return (
            <MobileMenuItem
              item={item as LinkType}
              key={index}
              onMenuItemClicked={onMenuItemClicked}
            />
          );
        }

        return (
          <MobileMenuItemWithSubItems
            item={item as MenuItemWithSubItems}
            onMenuItemClicked={onMenuItemClicked}
            isOpen={index === openSubMenuIndex}
            onClicked={() => handleSubMenuOpenAndClose(index)}
          />
        );
      })}
      <ContactMenuButtonMobile onMenuItemClicked={onMenuItemClicked} />
    </MobileMenuContainer>
  );
};

export default MobileMenu;
