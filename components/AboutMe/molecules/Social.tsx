import styled from 'styled-components';

import PsychoLink from 'components/atoms/PsychoLink';
import socialMediaItems from 'components/AboutMe/content/socialMedia';
import SocialItem from 'components/AboutMe/atoms/SocialItem';

const Container = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: auto;
    padding-top: 8px;
    column-gap: 28px;
  }
`;

const Social = () => (
  <Container>
    {socialMediaItems.map((item, index) => (
      <PsychoLink key={index} href={item.linkHref}>
        <SocialItem linkText={item.linkText} />
      </PsychoLink>
    ))}
  </Container>
);

export default Social;
