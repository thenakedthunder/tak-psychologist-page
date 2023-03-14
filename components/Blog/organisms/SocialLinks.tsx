import styled from 'styled-components';

import socialMediaItems from 'components/AboutMe/content/socialMedia';
import PsychoLink from 'components/atoms/PsychoLink';
import SocialItem from 'components/AboutMe/atoms/SocialItem';

const Container = styled.div`
  padding-top: 8px;
  display: grid;
  row-gap: 4px;

  // no idea why it doesn't look right without this here
  svg {
    position: relative;
    bottom: 1px;
  }
`;

const SocialLinks = () => (
  <Container>
    {socialMediaItems.map((item, index) => (
      <PsychoLink key={index} href={item.linkHref}>
        <SocialItem linkText={item.linkText} />
      </PsychoLink>
    ))}
  </Container>
);

export default SocialLinks;
