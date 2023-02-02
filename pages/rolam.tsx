import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import {
  DefaultParagraph, H2, H3, LargeParagraph, SmallParagraph,
} from 'components/atoms/typography.styles';
import { Green050, Green100 } from 'components/styling/colors';
import SocialContainer from 'components/AboutMe/molecules/Social';
import PictureOnShapes from 'components/AboutMe/molecules/PictureOnShapes';
import Prose from 'components/AboutMe/organisms/Prose';
import {
  biographyContent, education, mission, publicationsAndMemberships,
} from 'components/AboutMe/content/aboutMeContent';
import List from 'components/AboutMe/organisms/List';

const MainContainer = styled.div`
  padding: 40px 55px 40px 40px;
`;

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <H2 color={Green100}>Rólam</H2>
        <PictureOnShapes />
        <Prose content={biographyContent} />
        <List content={education} />
        <Prose content={mission} />
        <List content={publicationsAndMemberships} />
        <SocialContainer />
      </MainContainer>
    </>
  );
}
