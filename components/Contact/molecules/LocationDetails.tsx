import styled from 'styled-components';

import PsychoLink from 'components/atoms/PsychoLink';
import { SmallParagraph, BoldSmallParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import { footerInfoContent } from 'components/Contact/content/contactContent';

const Location = styled.div`
  padding: 16px 0 20px;

  a {
    text-decoration: underline
  }
`;

const LocationDetails = () => (
  <Location>
    <BoldSmallParagraph color={Green050}>Szervezet neve</BoldSmallParagraph>
    <SmallParagraph color={Green050}>
      {footerInfoContent.address}
    </SmallParagraph>
    <SmallParagraph color={Green050}>
      <PsychoLink href="https://www.google.com/maps/place/Budapest,+Bart%C3%B3k+B%C3%A9la+%C3%BAt+12-em.+13,+1111/@47.4822872,19.0529605,17z/data=!4m5!3m4!1s0x4741dc4d9518da53:0x6bccd46420204e21!8m2!3d47.4822872!4d19.0529605">
        Mutasd térképen
      </PsychoLink>
    </SmallParagraph>
  </Location>
);

export default LocationDetails;
