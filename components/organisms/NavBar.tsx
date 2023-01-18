import styled from 'styled-components';

import MobileNavBar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const NavbarContainer = styled.div`
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
