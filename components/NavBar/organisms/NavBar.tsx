import styled from 'styled-components';

import MobileNavBar from 'components/NavBar/organisms/MobileNavbar';
import DesktopNavbar from 'components/NavBar/organisms/DesktopNavbar';

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 13;

  .navbar-desktop { display: none;  }
  .navbar-mobile  { display: block; }

  @media screen and (min-width: 1200px) {
    .navbar-desktop { display: block; }
    .navbar-mobile  { display: none;  }
  }
`;

const NavBar = () => (
  <NavbarContainer>
    <div className="navbar-mobile"><MobileNavBar /></div>
    <div className="navbar-desktop"><DesktopNavbar /></div>
  </NavbarContainer>
);

export default NavBar;
