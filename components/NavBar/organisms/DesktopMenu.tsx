import styled from 'styled-components';

import { IoChevronDownCircleOutline } from 'react-icons/io5';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import PsychoLink from 'components/atoms/PsychoLink';
import { MenuItemWithSubItems, isLinkType, menuItemsDesktop } from 'components/NavBar/content/menuItems';
import { LinkType } from 'types/LinkType';
import { useState } from 'react';
import DesktopMenuItemWithSubItems from '../molecules/DesktopMenuItemWithSubItems';
import DesktopMenuItem from '../atoms/DesktopMenuItem';

const DesktopMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  height: 28px;
`;

const DesktopMenu = () => {
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
    <DesktopMenuContainer>
      {menuItemsDesktop.map((item, index) => {
        if (isLinkType(item)) {
          return (
            <PsychoLink href={(item as LinkType).linkHref} key={index}>
              <DesktopMenuItem
                textColor={Green050}
              >
                {(item as LinkType).linkText}
              </DesktopMenuItem>
            </PsychoLink>
          );
        }

        return (
          <DesktopMenuItemWithSubItems
            item={item as MenuItemWithSubItems}
            isOpen={index === openSubMenuIndex}
            onClicked={() => handleSubMenuOpenAndClose(index)}
          />
        );
      })}
    </DesktopMenuContainer>
  );
};

export default DesktopMenu;
