import { ListType } from 'components/AboutMe/types/aboutMeContentTypes';
import HeaderWithSocialLinks from 'components/molecules/HeaderWithSocialLinks';
import PictureOnShapesDesktop from 'components/AboutMe/molecules/PictureOnShapesDesktop';
import PictureOnShapesMobile from 'components/AboutMe/molecules/PictureOnShapesMobile';
import List from 'components/AboutMe/organisms/List';
import Prose from 'components/AboutMe/organisms/Prose';
import { GridContainer, Life, StyledList } from 'components/AboutMe/organisms/TopGrid.styles';

import { ImageField, KeyTextField } from '@prismicio/client';
import { SocialLinkSlice, TextWithHeadingAndHighlightedParagraphsSlice } from 'prismicio-types';

interface Props {
  title: KeyTextField;
  lifewayContent: TextWithHeadingAndHighlightedParagraphsSlice;
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
