import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import { H2 } from 'components/atoms/typography.styles';
import { Green100 } from 'components/styling/colors';
import Social from 'components/AboutMe/molecules/Social';
import PictureOnShapes from 'components/AboutMe/molecules/PictureOnShapes';
import Prose from 'components/AboutMe/organisms/Prose';
import {
  biographyContent, education, mission, publicationsAndMemberships,
} from 'components/AboutMe/content/aboutMeContent';
import List from 'components/AboutMe/organisms/List';

const MainContainer = styled.div`
  padding: 40px 55px 40px 40px;
  
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: auto auto;

  }
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

const TopLeftContainer = styled.div`
  padding-right: 
`;

const ContentTop = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: auto 510px;
    column-gap: 120px;
  }
`;

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <div>
          <ContentTop>
            <HeaderContainer>
              <H2 color={Green100}>Rólam</H2>
              <Social />
            </HeaderContainer>
            <PictureOnShapes />
            <TopLeftContainer>
              <Prose content={biographyContent} />
              <List content={education} />
            </TopLeftContainer>
          </ContentTop>
          <Prose content={mission} />
          <List content={publicationsAndMemberships} />
        </div>
      </MainContainer>
    </>
  );
}
