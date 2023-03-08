import styled from 'styled-components';

import { Green050 } from 'components/styling/colors';
import { footerInfoContent } from 'components/Contact/content/contactContent';
import { BoldSmallParagraph, SmallParagraph } from 'components/atoms/typography.styles';
import PsychoLink from 'components/atoms/PsychoLink';

const Container = styled.div`
  a {
    text-decoration: underline
  }
`;

const ContactDetails = () => (
  <Container>
    <BoldSmallParagraph color={Green050}>Elérhetőség</BoldSmallParagraph>
    <SmallParagraph color={Green050}>
      <PsychoLink href="mailto:Rendelo@mail.hu">
        {footerInfoContent.email}
      </PsychoLink>
    </SmallParagraph>
    <SmallParagraph color={Green050}>
      {footerInfoContent.phone}
    </SmallParagraph>
  </Container>
);

export default ContactDetails;