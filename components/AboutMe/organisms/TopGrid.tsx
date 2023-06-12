import styled from 'styled-components';

import { biographyContent, education } from 'components/AboutMe/content/aboutMeContent';
import HeaderWithSocialLinks from 'components/molecules/HeaderWithSocialLinks';
import PictureOnShapesDesktop from 'components/AboutMe/molecules/PictureOnShapesDesktop';
import PictureOnShapesMobile from 'components/AboutMe/molecules/PictureOnShapesMobile';
import List from 'components/AboutMe/organisms/List';
import Prose from 'components/AboutMe/organisms/Prose';

const GridContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-areas: 
    "header header header ."
    "content . image image"
    "content . . .";
    
    grid-template-columns: 40% 120px 100px auto;
    grid-template-rows: auto; 
  }
`;

const Life = styled.div`
  grid-area: content;
  padding-top: 30px;

  @media screen and (min-width: 1200px) {
    padding-top: 72px;
  }
`;

const StyledList = styled.div`
  grid-area: list;
  padding-top: 60px;
`;

const TopGrid = () => (
  <GridContainer>
    <HeaderWithSocialLinks title="Rólam" breakPoint={576} />
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
