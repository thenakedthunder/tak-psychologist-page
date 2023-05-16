import ProfileImage from 'public/assets/rolam.png';
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
        <ProfileImageSized src={ProfileImage} alt="profile" />
      </ProfileImageContainer>
    </LargeGreenSquare>
    <SmallGreenSquare />
  </Container>
);

export default PictureOnShapesMobile;
