import styled from 'styled-components';
import { IoIosRose, IoIosMenu } from 'react-icons/io';

import { Grey010 } from 'components/styling/colors';
import { DefaultParagraph } from 'components/atoms/typography.styles';

const NavBarMobile = styled.div`
    box-sizing: border-box;
    height: 84px;
    background-color: ${Grey010};
    display: grid;
    grid-template-columns: 1fr 1fr; 
    padding: 20px;
`;

const InnerNavBarMobileDiv = styled.div`
    padding: 8px;
`;

const MobileLeftDiv = styled.div`
    background-color: ${Grey010};
    display: grid;
    grid-template-columns: 36px 1fr; 
`;

const LogoDiv = styled.div`
    padding: 8px 8px 8px 0;
`;

const NameParagraph = styled(DefaultParagraph)`
    font-weight: 700;
`;

const MobileRightDiv = styled.div`
    justify-self: end;
    padding: 8px 0;
`;

const NavBar = () => (
  <InnerNavBarMobileDiv>
    <NavBarMobile>
      <MobileLeftDiv>
        <LogoDiv><IoIosRose size={28} /></LogoDiv>
        <div>
          <div>
            <NameParagraph>Hont-Gáspár Anita</NameParagraph>
          </div>
          <div>
            <DefaultParagraph>Pszichológus</DefaultParagraph>
          </div>
        </div>
      </MobileLeftDiv>
      <MobileRightDiv>
        <IoIosMenu size={28} />
      </MobileRightDiv>
    </NavBarMobile>
  </InnerNavBarMobileDiv>
);

export default NavBar;
