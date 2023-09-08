import styled from 'styled-components';
import Image from 'next/legacy/image';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Green100 } from 'components/styling/colors';

import { ImageField, KeyTextField } from '@prismicio/client';

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

interface Props {
  name: KeyTextField;
  title: KeyTextField;
  profile: ImageField<never>;
}

const SignatureWithProfile = ({ name, title, profile }: Props) => (
  <SignatureContainer>
    <ProfilePictureContainer>
      <Image src={profile.url ?? ''} width={80} height={80} alt="avatar" />
    </ProfilePictureContainer>
    <DefaultParagraph textColor={Green100}>
      {name}
      <br />
      {title}
    </DefaultParagraph>
  </SignatureContainer>
);

export default SignatureWithProfile;
