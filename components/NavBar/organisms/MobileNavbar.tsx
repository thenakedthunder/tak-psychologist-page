import { useState } from 'react';
import styled from 'styled-components';

import LogoAndNameMobile from 'components/NavBar/molecules/LogoAndNameMobile';
import { Grey010 } from 'components/styling/colors';
import MobileNavbarRight from 'components/NavBar/molecules/MobileNavbarRight';
import MobileMenu from 'components/NavBar/organisms/MobileMenu';
import { NavBarProps } from 'components/NavBar/organisms/NavBar';

const MobileNavbarContainer = styled.div<NavBarProps & { isMenuOpen: boolean }>`
  box-sizing: border-box;
  height: 84px;
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: ${(props: NavBarProps) => props.backgroundColor ?? Grey010};
  position: ${({ isMenuOpen }) => (isMenuOpen ? 'fixed' : 'static')};
  width: 100%;
`;

const MobileNavBar = ({ backgroundColor }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MobileNavbarContainer backgroundColor={backgroundColor} isMenuOpen={isMenuOpen}>
        <LogoAndNameMobile />
        <MobileNavbarRight isMenuOpen={isMenuOpen} toggleIsMenuOpen={toggleIsMenuOpen} />
      </MobileNavbarContainer>
      {isMenuOpen
        && (
          <MobileMenu backgroundColor={backgroundColor} />
        )}
    </>
  );
};

export default MobileNavBar;
