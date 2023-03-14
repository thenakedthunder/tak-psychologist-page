import styled from 'styled-components';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import socialMediaItems from 'components/AboutMe/content/socialMedia';
import PsychoLink from 'components/atoms/PsychoLink';
import SocialItem from 'components/AboutMe/atoms/SocialItem';

const Container = styled.div`
  padding-bottom: 30px;
`;

const SocialLinks = styled.div`
  padding-top: 8px;
  display: grid;
  row-gap: 4px;

  // no idea why it doesn't look right without this here
  svg {
    position: relative;
    bottom: 1px;
  }
`;

const SocialShare = () => (
  <Container>
    <DefaultParagraph className="bold" color={Green050}>
      Tetszik amit olvasol? Oszd meg!
    </DefaultParagraph>
    <SocialLinks>
      {socialMediaItems.map((item, index) => (
        <PsychoLink key={index} href={item.linkHref}>
          <SocialItem linkText={item.linkText} />
        </PsychoLink>
      ))}
    </SocialLinks>
  </Container>
);

export default SocialShare;
