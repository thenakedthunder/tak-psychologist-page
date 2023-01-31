import styled from 'styled-components';

import PsychoLink from 'components/atoms/PsychoLink';
import socialMediaItems from 'components/AboutMe/content/socialMedia';
import SocialItem from 'components/AboutMe/atoms/SocialItem';

const Container = styled.div`
  padding-top: 30px;

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: auto;
    padding-top: 30px;
  }
`;

const SocialContainer = () => (
  <Container>
    {socialMediaItems.map((item, index) => (
      <PsychoLink href={item.linkHref}>
        <SocialItem key={index} linkText={item.linkText} />
      </PsychoLink>
    ))}
  </Container>
);

export default SocialContainer;
