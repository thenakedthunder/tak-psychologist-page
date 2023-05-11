import styled from 'styled-components';
import Image from 'next/image';

import AvatarImage from 'public/assets/signature-profile.png';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Green100 } from 'components/styling/colors';

const SignatureContainer = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  column-gap: 20px;
  padding-top: 60px;
  align-items: center;
`;

const ProfilePictureContainer = styled.div`
  height: 80px;
  width: 80px;
`;

const SignatureWithProfile = () => (
  <SignatureContainer>
    <ProfilePictureContainer>
      <Image src={AvatarImage} />
    </ProfilePictureContainer>
    <DefaultParagraph color={Green100}>
      Hont Gáspár Anita
      <br />
      Klinikai szakpszichológus
    </DefaultParagraph>
  </SignatureContainer>
);

export default SignatureWithProfile;
