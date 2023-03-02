import styled from 'styled-components';

import PsychoLink from 'components/atoms/PsychoLink';
import SocialItem from 'components/AboutMe/atoms/SocialItem';
import socialMediaItems from 'components/AboutMe/content/socialMedia';

interface Props {
  breakPoint: number;
}

const Container = styled.div`
  display: none;

  @media screen and (min-width: ${({ breakPoint }: Props) => breakPoint}px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: auto;
    padding-top: 8px;
    column-gap: 28px;
  }
`;

const Social = ({ breakPoint }: Props) => (
  <Container breakPoint={breakPoint}>
    {socialMediaItems.map((item, index) => (
      <PsychoLink key={index} href={item.linkHref}>
        <SocialItem linkText={item.linkText} />
      </PsychoLink>
    ))}
  </Container>
);

export default Social;
