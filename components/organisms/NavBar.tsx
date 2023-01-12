import React from 'react';

import MobileNavBar from './MobileNavbar';
import { useViewport } from './ViewportProvider';

const NavBar = () => {
  const width = useViewport();
  const breakpoint = 720;

  return (width !== undefined && width < breakpoint) ? <MobileNavBar /> : <div>KAKI</div>;
};

export default NavBar;
