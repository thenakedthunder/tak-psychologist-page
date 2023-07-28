import styled from 'styled-components';

import PsychoLink from 'components/atoms/PsychoLink';
import { SmallParagraph, BoldSmallParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';
import { LinkType } from 'types/LinkType';

const Location = styled.div`
  padding: 16px 0 20px;

  a {
    text-decoration: underline
  }
`;

export interface LocationDetailsContent {
  organisationName: string;
  address: string;
  mapLink: LinkType;
}

interface Props {
  details: LocationDetailsContent
}

const LocationDetails = ({ details }: Props) => (
  <Location>
    <BoldSmallParagraph textColor={Green050}>{details.organisationName}</BoldSmallParagraph>
    <SmallParagraph textColor={Green050}>
      {details.address}
    </SmallParagraph>
    <SmallParagraph textColor={Green050}>
      <PsychoLink href={details.mapLink.linkHref} openOnNewTab>
        {details.mapLink.linkText}
      </PsychoLink>
    </SmallParagraph>
  </Location>
);

export default LocationDetails;
