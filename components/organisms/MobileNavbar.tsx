import { useState } from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';
import { VscClose } from 'react-icons/vsc';

import LogoAndName from 'components/molecules/LogoAndName';
import { Grey010, Green050 } from 'components/styling/colors';
import { DefaultParagraph } from 'components/atoms/typography.styles';

const NavBarMobile = styled.div`
  box-sizing: border-box;
  height: 84px;
  background-color: ${Grey010};
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${Green050};
`;

const MobileRightDiv = styled.div`
  justify-self: end;
  padding: 8px 0;
  &:hover {
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  background-color: ${Grey010};
  padding: 30px 40px 40px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 20px;
  color: ${Green050};
`;

const MobileMenuItem = styled(DefaultParagraph)`
  font-size: 20px;
`;

const StyledLink = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <>
      <NavBarMobile>
        <LogoAndName />
        <MobileRightDiv>
          {isMenuOpen
            ? <VscClose size={28} onClick={toggleIsMenuOpen} />
            : <IoIosMenu size={28} onClick={toggleIsMenuOpen} />}
        </MobileRightDiv>
      </NavBarMobile>
      {isMenuOpen
        && (
          <MobileMenu>
            <MobileMenuItem>
              <Link href="/" passHref>
                <StyledLink>
                  Magamról
                </StyledLink>
              </Link>
            </MobileMenuItem>
            <MobileMenuItem>
              <Link href="/" passHref>
                <StyledLink>
                  Amiben segíteni tudok
                </StyledLink>
              </Link>
            </MobileMenuItem>
            <MobileMenuItem>
              <Link href="/" passHref>
                <StyledLink>
                  Árak
                </StyledLink>
              </Link>
            </MobileMenuItem>
            <MobileMenuItem>
              <Link href="/" passHref>
                <StyledLink>
                  Friss hírek
                </StyledLink>
              </Link>
            </MobileMenuItem>
            <MobileMenuItem>
              <Link href="/" passHref>
                <StyledLink>
                  Gyakran Ismételt Kérdések
                </StyledLink>
              </Link>
            </MobileMenuItem>
          </MobileMenu>
        )}
    </>
  );
};

export default MobileNavBar;
