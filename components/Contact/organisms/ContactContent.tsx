import styled from 'styled-components';

import ReservationInfo from 'components/Contact/organisms/ReservationInfo';
import RightSide from 'components/Contact/organisms/RightSide';

import {
  BulletPointsSlice,
  ContactPageDocumentData,
  DefaultParagraphSlice,
  Simplify,
} from 'prismicio-types';

const ContentContainer = styled.div`
padding-top: 30px;

@media screen and (min-width: 1200px) {
    padding-top: 72px;
    display: grid;
    grid-template-columns: 1fr 580px;
    column-gap: 220px;
  }
`;

interface Props {
  data: Simplify<ContactPageDocumentData>;
  reservationInfoItems: (DefaultParagraphSlice | BulletPointsSlice)[];
}

const ContactContent = ({ data, reservationInfoItems }: Props) => (
  <ContentContainer>
    <ReservationInfo
      heading={data.left_text_heading ?? ''}
      content={reservationInfoItems}
    />
    <RightSide
      subHeader={data.right_subheading ?? ''}
      images={data.pics}
      locationDetails={{
        organisationName: data.organization_name ?? '',
        address: data.and_the_address ?? '',
        mapLink: {
          linkHref: data.maplink[0]?.link ?? '',
          linkText: data.maplink[0]?.link_text ?? '',
        },
      }}
      contactDetails={{
        contactHeading: data.contect_header ?? '',
        emailLink: {
          linkHref: `mailto:${data.email}`,
          linkText: data.email ?? '',
        },
        phone: data.phone ?? '',
      }}
    />
  </ContentContainer>
);

export default ContactContent;
