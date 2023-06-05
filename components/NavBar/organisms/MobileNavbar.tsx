import { useState } from 'react';
import styled from 'styled-components';

import LogoAndNameMobile from 'components/NavBar/molecules/LogoAndNameMobile';
import { Green010, Grey010 } from 'components/styling/colors';
import MobileNavbarRight from 'components/NavBar/molecules/MobileNavbarRight';
import MobileMenu from 'components/NavBar/organisms/MobileMenu';
import { NavBarProps } from 'components/NavBar/organisms/NavBar';
import MobileNavbarOutsideClickWrapper from 'components/NavBar/organisms/OutsideClickWrapper';

const MobileNavbarContainer = styled.div<NavBarProps & { isMenuOpen: boolean }>`
  box-sizing: border-box;
  height: 84px;
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: ${(props: NavBarProps) => (props.colorScheme === 'light' ? Grey010 : Green010)};
  position: ${({ isMenuOpen }) => (isMenuOpen ? 'fixed' : 'static')};
  width: 100%;
`;

const MobileNavBar = ({ colorScheme }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MobileNavbarOutsideClickWrapper closeMenu={() => setIsMenuOpen(false)}>
      <>
        <MobileNavbarContainer colorScheme={colorScheme} isMenuOpen={isMenuOpen}>
          <LogoAndNameMobile
            onClicked={() => setIsMenuOpen(false)}
            colorScheme={colorScheme}
          />
          <MobileNavbarRight isMenuOpen={isMenuOpen} toggleIsMenuOpen={toggleIsMenuOpen} />
        </MobileNavbarContainer>
        {isMenuOpen
          && (
            <MobileMenu colorScheme={colorScheme} onMenuItemClicked={toggleIsMenuOpen} />
          )}
      </>
    </MobileNavbarOutsideClickWrapper>
  );
};

export default MobileNavBar;
