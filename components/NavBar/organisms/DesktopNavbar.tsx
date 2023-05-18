import styled from 'styled-components';

import LogoAndNameDesktop from 'components/NavBar/molecules/LogoAndNameDesktop';
import { Grey100, Black050 } from 'components/styling/colors';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import DesktopMenu from 'components/NavBar/organisms/DesktopMenu';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { NavBarProps } from 'components/NavBar/organisms/NavBar';
import PsychoLink from 'components/atoms/PsychoLink';
import { useState } from 'react';

const ContainerDiv = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: auto auto 150px;
  max-width: 1440px;

  @media screen and (min-width: 1400px) {
    padding: 40px 130px;
    margin: 0 auto;
  }
`;

const LogoAndNameDesktopWrapper = styled.div`
  display: grid;
  align-items: center;
  position: relative;
  top: 1px;
`;

const ContactButtonDiv = styled.div`
  width: 150px;
`;

const isHexadecimal = (str: string) => /^[0-9a-fA-F]+$/.test(str);

const getColorWithOpacity = (color: string, opacity: string) => {
  if (color.length !== 7 || !color.startsWith('#') || !isHexadecimal(color.slice(1))) {
    throw new Error('color should be given as a hex value, starting with the "#" character!');
  }

  if (opacity.length !== 2 || Number.isNaN(Number(opacity))) {
    throw new Error('opacity should be given as a 2-digit number, without the "%" character!');
  }

  return color + opacity;
};

const DesktopNavbar = ({ backgroundColor }: NavBarProps) => {
  const [chevronPosition, changeChevronPosition] = useState(1);

  const setChevronToPosition = (newPosition: number) => {
    changeChevronPosition(newPosition);
  };

  return (
    <BackgroundWrapper color={backgroundColor}>
      <ContainerDiv>
        <LogoAndNameDesktopWrapper onClick={(e) => setChevronToPosition(1)}>
          <LogoAndNameDesktop />
        </LogoAndNameDesktopWrapper>
        <DesktopMenu
          chevronIndex={chevronPosition}
          changeChevronIndex={changeChevronPosition}
        />
        <ContactButtonDiv onClick={(e) => setChevronToPosition(-1)}>
          <PsychoLink href="/elerhetosegek">
            <PrimaryCTAButton
              text="Kapcsolat"
              textColor={Black050}
              backgroundColor={getColorWithOpacity(Grey100, '20')}
            />
          </PsychoLink>
        </ContactButtonDiv>
      </ContainerDiv>
    </BackgroundWrapper>
  );
};

export default DesktopNavbar;
