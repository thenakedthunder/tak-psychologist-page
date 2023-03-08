import { useState } from 'react';
import styled from 'styled-components';

import LogoAndNameMobile from 'components/NavBar/molecules/LogoAndNameMobile';
import { Grey010, Green050 } from 'components/styling/colors';
import MobileNavbarRight from 'components/NavBar/molecules/MobileNavbarRight';
import MobileMenu from 'components/NavBar/organisms/MobileMenu';
import { NavBarProps } from './NavBar';

const MobileNavbarContainer = styled.div`
  box-sizing: border-box;
  height: 84px;
  background-color: ${Grey010};
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: ${(props: NavBarProps) => props.backgroundColor ?? Grey010};
`;

const MobileNavBar = ({ backgroundColor }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MobileNavbarContainer backgroundColor={backgroundColor}>
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
