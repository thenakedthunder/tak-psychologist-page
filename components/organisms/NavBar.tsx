import React from 'react';
import styled from 'styled-components';

import { Grey010 } from 'components/styling/colors';
import MobileNavBar from './MobileNavbar';

const NavBarMobile = styled.div`
    box-sizing: border-box;
    height: 84px;
    background-color: ${Grey010};
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr; 
`;

const NavBar = () => (
  <NavBarMobile>
    <MobileNavBar />
  </NavBarMobile>
);

export default NavBar;
