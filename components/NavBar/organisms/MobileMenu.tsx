import styled from 'styled-components';
import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from 'react-icons/io5';
import AnimateHeight, { Height } from 'react-animate-height';
import { useState } from 'react';

import PsychoLink from 'components/atoms/PsychoLink';
import { DefaultParagraph, SmallParagraph } from 'components/atoms/typography.styles';
import { Green010, Green050, Green100, Grey010 } from 'components/styling/colors';
import { MenuItemWithSubItems, isLinkType, menuItemsMobile } from 'components/NavBar/content/menuItems';
import { NavBarProps } from 'components/NavBar/organisms/NavBar';
import ContactMenuButtonMobile from 'components/NavBar/molecules/ContactMenuButtonMobile';
import { LinkType } from 'types/LinkType';
import DividerLine from 'components/atoms/DividerLine';

const MobileMenuContainer = styled.div`
    background-color: ${(props: NavBarProps) => props.backgroundColor ?? Grey010};
    padding: 30px 40px 40px;
    display: grid;
    row-gap: 20px;
    position: fixed;
    top: 83px;
    width: 100%;
`;

const MobileMenuItem = styled(DefaultParagraph)`
    font-size: 20px;
    
    @media screen and (min-width: 576px) {
      margin: auto;
    }
    `;

const SubItem = styled(DefaultParagraph)`
  font-size: 20px;
  padding-left: 8px; 
`;

const MenuItemWithSubItemsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 28px;
  justify-content: space-between;
`;

export const OpenToggle = styled.div`
  cursor: pointer;
`;

// const LinkWrapper = styled.span`
//   // needed because of the click handler
// `;

type MobileMenuProps = NavBarProps & {
  onMenuItemClicked: () => void;
}

const MobileMenu = ({ backgroundColor, onMenuItemClicked }: MobileMenuProps) => {
  const [height, setHeight] = useState<Height>(0);
  const toggleIsOpen = () => setHeight(height === 0 ? 'auto' : 0);

  return (
    <MobileMenuContainer backgroundColor={backgroundColor}>
      {menuItemsMobile.map((item, index) => {
        if (isLinkType(item)) {
          return (
            <MobileMenuItem key={index} textColor={Green050} onClick={onMenuItemClicked}>
              <PsychoLink href={(item as LinkType).linkHref}>
                {(item as LinkType).linkText}
              </PsychoLink>
            </MobileMenuItem>
          );
        } else {
            return (
              <MenuItemWithSubItemsContainer>
                <MobileMenuItem textColor={Green050}>
                  {(item as MenuItemWithSubItems).name}
                </MobileMenuItem>
                <IoChevronDownCircleOutline />
                <OpenToggle
                  onClick={toggleIsOpen}
                  onKeyPress={toggleIsOpen}
                  role="button"
                  tabIndex={0}
                  aria-expanded={height !== 0}
                  aria-controls="example-panel"
                >
                  {height !== 0
                    ? <IoChevronUpCircleOutline size={28} />
                    : <IoChevronDownCircleOutline size={28} />}
                </OpenToggle>
              <MenuItemWithSubItemsContainer />
            ); 
          }
              <ContactMenuButtonMobile onMenuItemClicked={onMenuItemClicked} />
            </MobileMenuContainer>
})});
      export default MobileMenu;
