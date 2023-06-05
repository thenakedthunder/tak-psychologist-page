import styled from 'styled-components';

import PsychoLink from 'components/atoms/PsychoLink';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Green010, Green050, Grey010 } from 'components/styling/colors';
import { menuItemsMobile } from 'components/NavBar/content/menuItems';
import { NavBarProps } from 'components/NavBar/organisms/NavBar';
import ContactMenuButtonMobile from 'components/NavBar/molecules/ContactMenuButtonMobile';

const MobileMenuContainer = styled.div`
    background-color: ${(props: NavBarProps) => (props.colorScheme === 'light' ? Grey010 : Green010)};
    padding: 30px 40px 40px;
    display: grid;
    grid-template-rows: repeat(5, 1fr) 92px;
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

const LinkWrapper = styled.span`
`;

type MobileMenuProps = NavBarProps & {
  onMenuItemClicked: () => void;
}

const MobileMenu = ({ colorScheme, onMenuItemClicked }: MobileMenuProps) => (
  <MobileMenuContainer colorScheme={colorScheme}>
    {menuItemsMobile.map((item, index) => (
      <MobileMenuItem key={index} textColor={Green050}>
        <LinkWrapper onClick={onMenuItemClicked}>
          <PsychoLink href={item.linkHref}>
            {item.linkText}
          </PsychoLink>
        </LinkWrapper>
      </MobileMenuItem>
    ))}
    <ContactMenuButtonMobile onMenuItemClicked={onMenuItemClicked} />
  </MobileMenuContainer>
);

export default MobileMenu;
