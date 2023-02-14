import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import Prose from 'components/AboutMe/organisms/Prose';
import {
  mission, publicationsAndMemberships,
} from 'components/AboutMe/content/aboutMeContent';
import List from 'components/AboutMe/organisms/List';
import TopGrid from 'components/AboutMe/organisms/TopGrid';

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

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <TopGrid />
        <Prose content={mission} />
        <List content={publicationsAndMemberships} />
      </MainContainer>
    </>
  );
}
