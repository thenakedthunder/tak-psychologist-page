import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { IoChevronDownCircleOutline } from 'react-icons/io5';

import LogoAndNameDesktop from 'components/molecules/LogoAndNameDesktop';
import {
  Green050, Grey010, Grey100, Black050,
} from 'components/styling/colors';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import StyledLink from 'components/atoms/StyledLink.styles';
import PrimaryCTAButton from 'components/molecules/PrimaryCTAButton';

const ContainerDiv = styled.div`
  padding: 40px 130px;
  display: grid;
  grid-template-columns: auto auto 150px;
  background-color: ${Grey010};
`;

const DesktopMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  /* column-gap: min(36px); */
  height: 28px;
`;

const DesktopMenuItem = styled(DefaultParagraph)`
  height: 62px;
  line-height: 62px;
  align-self: center;
`;

const ChevronContainer = styled.span`
  height: 62px;
  position: relative;
  top: 8px;
  padding-left: 8px;
`;

const ContactButtonDiv = styled.div`
  width: 150px;
`;

const isHexadecimal = (str: string) => {
  const regExp = /^[0-9a-fA-F]+$/;

  if (regExp.test(str)) {
    return true;
  }

  return false;
};

const getColorWithOpacity = (color: string, opacity: string) => {
  if (color.length !== 7 || !color.startsWith('#') || !isHexadecimal(color.slice(1))) {
    throw new Error('color should be given as a hex value, starting with the "#" character!');
  }

  if (opacity.length !== 2 || Number.isNaN(Number(opacity))) {
    throw new Error('opacity should be given as a 2-digit number, without the "%" character!');
  }

  return color + opacity;
};

const DesktopNavbar = () => (
  <ContainerDiv>
    <LogoAndNameDesktop />
    <DesktopMenu>
      <DesktopMenuItem color={Green050}>
        <Link href="/" passHref>
          <StyledLink>
            Magamról
          </StyledLink>
        </Link>
      </DesktopMenuItem>
      <DesktopMenuItem color={Green050}>
        <Link href="/" passHref>
          <StyledLink>
            Amiben segíteni tudok
          </StyledLink>
        </Link>
        <ChevronContainer>
          <IoChevronDownCircleOutline size={28} />
        </ChevronContainer>
      </DesktopMenuItem>
      <DesktopMenuItem color={Green050}>
        <Link href="/" passHref>
          <StyledLink>
            Árak
          </StyledLink>
        </Link>
      </DesktopMenuItem>
      <DesktopMenuItem color={Green050}>
        <Link href="/" passHref>
          <StyledLink>
            Friss hírek
          </StyledLink>
        </Link>
      </DesktopMenuItem>
      <DesktopMenuItem color={Green050}>
        <Link href="/" passHref>
          <StyledLink>
            GYIK
          </StyledLink>
        </Link>
      </DesktopMenuItem>
    </DesktopMenu>
    <ContactButtonDiv>
      <PrimaryCTAButton
        text="Kapcsolat"
        color={Black050}
        backgroundColor={getColorWithOpacity(Grey100, '20')}
      />
    </ContactButtonDiv>
  </ContainerDiv>
);

export default DesktopNavbar;
