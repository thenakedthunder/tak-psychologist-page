import React from 'react';

import MobileNavBar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { useViewport } from './ViewportProvider';

const NavBar = () => {
  const width = useViewport();
  const breakpoint = 1200;

  return (width !== undefined && width < breakpoint) ? <MobileNavBar /> : <DesktopNavbar />;
};

export default NavBar;
