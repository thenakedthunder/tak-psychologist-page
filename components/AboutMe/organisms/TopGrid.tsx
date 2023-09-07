import styled from 'styled-components';

import { ListType, ProseItemType } from 'components/AboutMe/content/aboutMeContent';
import HeaderWithSocialLinks from 'components/molecules/HeaderWithSocialLinks';
import PictureOnShapesDesktop from 'components/AboutMe/molecules/PictureOnShapesDesktop';
import PictureOnShapesMobile from 'components/AboutMe/molecules/PictureOnShapesMobile';
import List from 'components/AboutMe/organisms/List';
import Prose from 'components/AboutMe/organisms/Prose';
import { ImageField, KeyTextField, SliceZone } from '@prismicio/client';
import { SocialLinkSlice } from 'prismicio-types';

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

const Life = styled.div`
  grid-area: life;
  padding-top: 30px;

  @media screen and (min-width: 1200px) {
    padding-top: 72px;
  }
`;

const StyledList = styled.div`
  grid-area: list;
  padding-top: 60px;
`;

interface Props {
  title: KeyTextField;
  lifewayContent: ProseItemType;
  education: ListType;
  socialLinks: SocialLinkSlice[];
  image: ImageField<never>;
}

const TopGrid = ({
  title,
  lifewayContent,
  education,
  socialLinks,
  image,
}: Props) => (
  <GridContainer>
    <HeaderWithSocialLinks title={title} breakPoint={576} socialMediaItems={socialLinks} />
    <PictureOnShapesMobile picture={image} />
    <PictureOnShapesDesktop picture={image} />
    <Life>
      <Prose content={lifewayContent} />
    </Life>
    <StyledList>
      <List content={education} />
    </StyledList>
  </GridContainer>
);

export default TopGrid;
