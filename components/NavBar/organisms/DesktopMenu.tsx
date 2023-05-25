import styled from 'styled-components';

import { IoChevronDownCircleOutline } from 'react-icons/io5';

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

const ChevronContainer = styled.span`
  height: 62px;
  position: relative;
  top: 8px;
  padding-left: 8px;
  cursor: pointer;
`;

interface DesktopMenuProps {
  chevronIndex: number;
  changeChevronIndex: (newIndex: number) => void;
}

const DesktopMenu = ({ chevronIndex, changeChevronIndex }: DesktopMenuProps) => (
  <DesktopMenuContainer>
    {menuItemsDesktop.map((item, index) => (
      <PsychoLink href={item.linkHref} key={index}>
        <DesktopMenuItem
          textColor={Green050}
          onClick={(e) => changeChevronIndex(index)}
        >
          <>
            {item.linkText}
            {(index === chevronIndex)
              && (
                <ChevronContainer>
                  <IoChevronDownCircleOutline size={28} />
                </ChevronContainer>
              )}
          </>
        </DesktopMenuItem>
      </PsychoLink>
    ))}
  </DesktopMenuContainer>
);

export default DesktopMenu;
