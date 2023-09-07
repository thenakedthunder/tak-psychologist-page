import styled from 'styled-components';
import { SliceZone } from '@prismicio/client';

import PsychoLink from 'components/atoms/PsychoLink';
import SocialItem from 'components/AboutMe/atoms/SocialItem';
import { SocialLinkSlice } from 'prismicio-types';

interface Props {
  breakPoint: number;
}

const Container = styled.div`
  display: none;

  // breakpoint is to ensure the title besides the element fits on smaller screens
  @media screen and (min-width: ${({ breakPoint }: Props) => breakPoint}px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: auto;
    padding-top: 8px;
    column-gap: 28px;
  }
`;

interface SocialProps extends Props {
  socialMediaItems?: SocialLinkSlice[];
}

const Social = ({ breakPoint, socialMediaItems }: SocialProps) => (
  <Container breakPoint={breakPoint}>
    {socialMediaItems?.map((item, index) => (
      <PsychoLink
        key={index}
        href={item.primary.link_reference ?? ''}
        openOnNewTab
      >
        <SocialItem linkText={item.primary.link_text ?? ''} />
      </PsychoLink>
    ))}
  </Container>
);

export default Social;
