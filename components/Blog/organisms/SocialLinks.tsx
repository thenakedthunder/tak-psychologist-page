import styled from 'styled-components';

import socialMediaItems from 'components/AboutMe/content/socialMedia';
import PsychoLink from 'components/atoms/PsychoLink';
import SocialItem from 'components/AboutMe/atoms/SocialItem';
import Social from 'components/AboutMe/molecules/Social';

const LinksOnMobile = styled.div`
  padding-top: 8px;
  display: grid;
  row-gap: 4px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  // no idea why it doesn't look right without this here
  svg {
    position: relative;
    bottom: 1px;
  }
`;

const SocialLinks = () => (
  <>
    <LinksOnMobile>
      {socialMediaItems.map((item, index) => (
        <PsychoLink key={index} href={item.linkHref}>
          <SocialItem linkText={item.linkText} />
        </PsychoLink>
      ))}
    </LinksOnMobile>
    <Social breakPoint={768} />
  </>
);

export default SocialLinks;
