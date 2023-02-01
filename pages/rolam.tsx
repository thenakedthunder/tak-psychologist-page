import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import { H2 } from 'components/atoms/typography.styles';
import { Green100 } from 'components/styling/colors';
import SocialContainer from 'components/AboutMe/molecules/Social';
import PictureOnShapes from 'components/AboutMe/molecules/PictureOnShapes';

const MainContainer = styled.div`
  padding: 40px;
`;

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <H2 color={Green100}>Rólam</H2>
        <PictureOnShapes />
        <SocialContainer />
      </MainContainer>
    </>
  );
}
