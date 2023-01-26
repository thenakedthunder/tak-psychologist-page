import { useState } from 'react';
import styled from 'styled-components';

import LogoAndNameMobile from 'components/NavBar/molecules/LogoAndNameMobile';
import { Grey010, Green050 } from 'components/styling/colors';
import MobileNavbarRight from 'components/NavBar/molecules/MobileNavbarRight';
import MobileMenu from './MobileMenu';

const MobileNavbarContainer = styled.div`
  box-sizing: border-box;
  height: 84px;
  background-color: ${Grey010};
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  color: ${Green050};
`;

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MobileNavbarContainer>
        <LogoAndNameMobile />
        <MobileNavbarRight isMenuOpen={isMenuOpen} toggleIsMenuOpen={toggleIsMenuOpen} />
      </MobileNavbarContainer>
      {isMenuOpen
        && (
          <MobileMenu />
        )}
    </>
  );
};

export default MobileNavBar;
