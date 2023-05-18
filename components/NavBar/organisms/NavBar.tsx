import styled from 'styled-components';

import MobileNavBar from 'components/NavBar/organisms/MobileNavbar';
import DesktopNavbar from 'components/NavBar/organisms/DesktopNavbar';
import { useEffect, useState } from 'react';

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 13;
`;

export interface NavBarProps {
  backgroundColor: string;
}

const NavBar = ({ backgroundColor }: NavBarProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    if (typeof window !== undefined) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavbarContainer>
      {isMobile
        ? <MobileNavBar backgroundColor={backgroundColor} />
        : <DesktopNavbar backgroundColor={backgroundColor} />}
    </NavbarContainer>
  );
};

export default NavBar;
