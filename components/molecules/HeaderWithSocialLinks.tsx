import styled from 'styled-components';
import { KeyTextField } from '@prismicio/client';

import { H2 } from 'components/atoms/typography.styles';
import { Green100 } from 'components/styling/colors';
import Social from 'components/AboutMe/molecules/Social';
import { SocialLinkSlice } from 'prismicio-types';

const HeaderContainer = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

interface Props {
  title: KeyTextField;
  breakPoint: number;
  socialMediaItems?: SocialLinkSlice[];
}

const HeaderWithSocialLinks = ({ title, breakPoint, socialMediaItems }: Props) => (
  <HeaderContainer>
    <H2 textColor={Green100}>{title}</H2>
    <Social breakPoint={breakPoint} socialMediaItems={socialMediaItems} />
  </HeaderContainer>
);

export default HeaderWithSocialLinks;
