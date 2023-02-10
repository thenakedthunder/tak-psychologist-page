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
  padding: 40px;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: auto auto;
    padding: 80px 130px;
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

/* import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import { H2 } from 'components/atoms/typography.styles';
import { Green100 } from 'components/styling/colors';
import Social from 'components/AboutMe/molecules/Social';
import ProfileImage from '@/public/assets/about-me.png';
import Prose from 'components/AboutMe/organisms/Prose';
import {
  biographyContent, education, mission, publicationsAndMemberships,
} from 'components/AboutMe/content/aboutMeContent';
import List from 'components/AboutMe/organisms/List';
import Image from 'next/image';

const MainContainer = styled.div`
  padding: 40px;
  max-width: 1440px;
  @media screen and (min-width: 1200px) {
    background-image: url('/assets/box-profile.svg');
    background-repeat: no-repeat;
    background-size: 45%;
    background-position-x: 100%;
    background-position-y: 55px;
  }

  @media screen and (min-width: 1400px) {
    padding: 80px 130px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }
`;

const GridStuffContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-areas: 
    "header header . ."
    "life . image image"
    "list . . .";
    
    grid-template-columns: 40% 120px 100px auto;
    grid-template-rows: auto; 
    /* column-gap: 120px;
    row-gap: 60px; 

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

const Life = styled.div`
  grid-area: life;
`;

const StyledList = styled.div`
  grid-area: list;
`;

const ProfileImageWrapper = styled.div`
    background-image: url(/assets/box-profile.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 100%;
    background-position-y: 0px;

    padding: 80px 0 0;
    margin: 30px -40px 0 0;
    
    @media screen and (min-width: 992px) {
      margin: 30px -40px 0;
    }
    
    @media screen and (min-width: 1200px) {
      background-image: none;
      padding: 0 0 320px;
      margin: 0;
      grid-area: image;

    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1441px) {
  }

`;

const ProfileImageContainer = styled.div`
  width: 280px;
  position: relative;
  bottom: 68px;
  
  @media screen and (min-width: 576px) {
    right: 0;
  }

  @media screen and (min-width: 768px) {
    margin-left: 25%;    
  }

  @media screen and (min-width: 992px) {
    margin-left: 40%;   
    width: 480px;
    bottom: -16px;
  }
  
  @media screen and (min-width: 1200px) {
    margin-left: 0;
    margin-bottom: 50px;
    width: 480px; 
    bottom: -40px;
  }
  
  @media screen and (min-width: 1400px) {
    bottom: -112px;
    width: 80%;
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
          <ProfileImageWrapper>
            <ProfileImageContainer>
              <Image src={ProfileImage} objectFit="contain"/>
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
} */
