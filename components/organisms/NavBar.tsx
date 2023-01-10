import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';

import { Grey010 } from 'components/styling/colors';
import LogoAndName from 'components/molecules/LogoAndName';

const NavBarMobile = styled.div`
    box-sizing: border-box;
    height: 84px;
    background-color: ${Grey010};
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr; 
`;

const MobileRightDiv = styled.div`
    justify-self: end;
    padding: 8px 0;
`;

const NavBar = () => (
  <NavBarMobile>
    <LogoAndName />
    <MobileRightDiv>
      <IoIosMenu size={28} />
    </MobileRightDiv>
  </NavBarMobile>
);

export default NavBar;
