import styled from 'styled-components';

import LogoAndNameDesktop from 'components/NavBar/molecules/LogoAndNameDesktop';
import {
  Black050, Blue010, Blue050, Green010, Grey010,
} from 'components/styling/colors';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import DesktopMenu from 'components/NavBar/organisms/DesktopMenu';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { NavBarProps } from 'components/NavBar/organisms/NavBar';
import PsychoLink from 'components/atoms/PsychoLink';
import { useState } from 'react';
import getColorWithOpacity from 'components/styling/StylingUtility';

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

const DesktopNavbar = ({ colorScheme }: NavBarProps) => {
  const [chevronPosition, changeChevronPosition] = useState(1);

  const setChevronToPosition = (newPosition: number) => {
    changeChevronPosition(newPosition);
  };

  return (
    <BackgroundWrapper backgroundColor={colorScheme === 'light' ? Grey010 : Green010}>
      <ContainerDiv>
        <LogoAndNameDesktopWrapper onClick={(e) => setChevronToPosition(1)}>
          <LogoAndNameDesktop colorScheme={colorScheme} />
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
              backgroundColor={colorScheme === 'light' ? getColorWithOpacity(Blue010, '50') : Blue050}
            />
          </PsychoLink>
        </ContactButtonDiv>
      </ContainerDiv>
    </BackgroundWrapper>
  );
};

export default DesktopNavbar;
