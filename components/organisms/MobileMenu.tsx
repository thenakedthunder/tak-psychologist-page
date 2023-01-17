import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import StyledLink from 'components/atoms/StyledLink.styles';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import PrimaryCTAButton from 'components/molecules/PrimaryCTAButton';
import { Green050, Grey010 } from 'components/styling/colors';

const MobileMenuContainer = styled.div`
    background-color: ${Grey010};
    padding: 30px 40px 40px;
    display: grid;
    grid-template-rows: repeat(5, 1fr) 92px;
    row-gap: 20px;
    color: ${Green050};
`;

const MobileMenuItem = styled(DefaultParagraph)`
    font-size: 20px;
`;

const ContactButtonDiv = styled.div`
    padding-top: 30px;
`;

const MobileMenu = () => (
  <MobileMenuContainer>
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
    <ContactButtonDiv>
      <PrimaryCTAButton
        text="Kapcsolat"
        color={Grey010}
        backgroundColor={Green050}
      />
    </ContactButtonDiv>
  </MobileMenuContainer>
);

export default MobileMenu;
