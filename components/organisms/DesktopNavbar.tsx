import React from 'react';
import styled from 'styled-components';

import LogoAndNameDesktop from 'components/molecules/LogoAndNameDesktop';
import {
  Grey010, Grey100, Black050,
} from 'components/styling/colors';
import PrimaryCTAButton from 'components/molecules/PrimaryCTAButton';
import DesktopMenu from './DesktopMenu';

const ContainerDiv = styled.div`
  padding: 40px 130px;
  display: grid;
  grid-template-columns: auto auto 150px;
  background-color: ${Grey010};
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
    <DesktopMenu />
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
