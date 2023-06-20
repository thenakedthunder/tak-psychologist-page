import styled from 'styled-components';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import PsychoLink from 'components/atoms/PsychoLink';
import { menuItemsDesktop } from 'components/NavBar/content/menuItems';

const DesktopMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  height: 28px;
`;

const DesktopMenuItem = styled(DefaultParagraph)`
  height: 62px;
  line-height: 62px;
  align-self: center;
`;

const DesktopMenu = () => (
  <DesktopMenuContainer>
    {menuItemsDesktop.map((item, index) => (
      <PsychoLink href={item.linkHref} key={index}>
        <DesktopMenuItem
          textColor={Green050}
        >
          {item.linkText}
        </DesktopMenuItem>
      </PsychoLink>
    ))}
  </DesktopMenuContainer>
);

export default DesktopMenu;
