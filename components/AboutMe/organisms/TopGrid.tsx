import styled from 'styled-components';

import { biographyContent, education } from 'components/AboutMe/content/aboutMeContent';
import Header from 'components/AboutMe/molecules/Header';
import PictureOnShapesDesktop from 'components/AboutMe/molecules/PictureOnShapesDesktop';
import PictureOnShapesMobile from 'components/AboutMe/molecules/PictureOnShapesMobile';
import List from 'components/AboutMe/organisms/List';
import Prose from 'components/AboutMe/organisms/Prose';

const GridContainer = styled.div`
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

const StyledList = styled.div`
  grid-area: list;
`;

const Life = styled.div`
  grid-area: life;
`;

const TopGrid = () => (
  <GridContainer>
    <Header />
    <PictureOnShapesMobile />
    <PictureOnShapesDesktop />
    <Life>
      <Prose content={biographyContent} />
    </Life>
    <StyledList>
      <List content={education} />
    </StyledList>
  </GridContainer>
);

export default TopGrid;
