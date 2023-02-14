import ProfileImage from '@/public/assets/about-me.png';
import {
  Container,
  LargeGreenSquare,
  ProfileImageContainer,
  ProfileImageSized,
  SmallGreenSquare,
} from 'components/AboutMe/molecules/PictureOnShapesMobile.styles';

const PictureOnShapesMobile = () => (
  <Container>
    <LargeGreenSquare>
      <ProfileImageContainer>
        <ProfileImageSized src={ProfileImage} />
      </ProfileImageContainer>
    </LargeGreenSquare>
    <SmallGreenSquare />
  </Container>
);

export default PictureOnShapesMobile;
