import styled from 'styled-components';

import { Green050 } from 'components/styling/colors';
import { footerInfoContent } from 'components/Contact/content/contactContent';
import { BoldSmallParagraph, SmallParagraph } from 'components/atoms/typography.styles';
import PsychoLink from 'components/atoms/PsychoLink';
import { LinkType } from 'types/LinkType';

const Container = styled.div`
  a {
    text-decoration: underline
  }
`;

export interface ContactDetailsContent {
  contactHeading: string;
  emailLink: LinkType;
  phone: string;
}

interface Props {
  details: ContactDetailsContent
}

const ContactDetails = ({ details }: Props) => (
  <Container>
    <BoldSmallParagraph textColor={Green050}>Elérhetőség</BoldSmallParagraph>
    <SmallParagraph textColor={Green050}>
      <PsychoLink href={details.emailLink.linkHref}>
        {details.emailLink.linkText}
      </PsychoLink>
    </SmallParagraph>
    <SmallParagraph textColor={Green050}>
      {footerInfoContent.phone}
    </SmallParagraph>
  </Container>
);

export default ContactDetails;
