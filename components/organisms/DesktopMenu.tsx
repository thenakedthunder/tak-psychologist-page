import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { IoChevronDownCircleOutline } from 'react-icons/io5';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import StyledLink from 'components/atoms/StyledLink.styles';

const DesktopMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
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
    cursor: pointer;
`;

const DesktopMenu = () => (
  <DesktopMenuContainer>
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
  </DesktopMenuContainer>
);

export default DesktopMenu;
