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
import ProfileImage from '@/public/assets/about-me.png';
import Image from 'next/image';

const MainContainer = styled.div`
  padding: 40px;
  max-width: 1440px;

  @media screen and (min-width: 1200px) {
    background-image: url('/assets/box-profile.svg');
    background-repeat: no-repeat;
    background-size: 45%;
    background-position-x: 100%;
    background-position-y: 32px;
  }

  @media screen and (min-width: 1400px) {
    padding: 80px 130px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }
`;

const HeaderContainer = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 
  }
`;

const GridStuffContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-areas: 
    "header header header ."
    "life . image image"
    "list . . .";
    
    grid-template-columns: 40% 120px 100px auto;
    grid-template-rows: auto; 
  }
`;
const Life = styled.div`
  grid-area: life;
`;

const StyledList = styled.div`
  grid-area: list;
`;

const ProfileImageWrapper = styled.div`
  display: none;
  
  @media screen and (min-width: 1200px) {
    display: block;
    background-image: none;
    padding: 0 0 320px;
    margin: 0;
    grid-area: image;
    display: flex;
    align-items: center;
  }
`;

const ProfileImageContainer = styled.div`
  width: 280px;
  position: relative;
  
  @media screen and (min-width: 1200px) {
    width: 90%; 
    bottom: -16px;
    right: -10%;
  }
  
  @media screen and (min-width: 1400px) {
    left: 0;
    width: 100%;
    bottom: -16px;
    padding-left: 28px;
  }
`;

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <GridStuffContainer>
          <HeaderContainer>
            <H2 color={Green100}>Rólam</H2>
            <Social />
          </HeaderContainer>
          <PictureOnShapes />
          <ProfileImageWrapper>
            <ProfileImageContainer>
              <Image src={ProfileImage} objectFit="contain" />
            </ProfileImageContainer>
          </ProfileImageWrapper>
          <Life>
            <Prose content={biographyContent} />
          </Life>
          <StyledList>
            <List content={education} />
          </StyledList>
        </GridStuffContainer>
        <Prose content={mission} />
        <List content={publicationsAndMemberships} />
      </MainContainer>
    </>
  );
}
