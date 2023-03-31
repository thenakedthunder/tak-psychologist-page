import styled from 'styled-components';

import LogoAndNameDesktop from 'components/NavBar/molecules/LogoAndNameDesktop';
import { Grey100, Black050 } from 'components/styling/colors';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import DesktopMenu from 'components/NavBar/organisms/DesktopMenu';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { NavBarProps } from 'components/NavBar/organisms/NavBar';

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

const DesktopNavbar = ({ backgroundColor }: NavBarProps) => (
  <BackgroundWrapper color={backgroundColor}>
    <ContainerDiv>
      <LogoAndNameDesktop />
      <DesktopMenu />
      <ContactButtonDiv>
        <PrimaryCTAButton
          text="Kapcsolat"
          color={Black050}
          backgroundColor={getColorWithOpacity(Grey100, '20')}
          linkHref="/elerhetosegek"
        />
      </ContactButtonDiv>
    </ContainerDiv>
  </BackgroundWrapper>
);

export default DesktopNavbar;
