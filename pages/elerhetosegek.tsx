import styled from 'styled-components';
// @ts-ignore
// eslint-disable-next-line import/extensions
import { createClient } from 'prismicio.ts';
import { SliceZone } from '@prismicio/client';

import { Grey010 } from 'components/styling/colors';
import HeaderWithSocialLinks from 'components/molecules/HeaderWithSocialLinks';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';

import {
  BulletPointsSlice,
  ContactPageDocument,
  ContactPageDocumentDataSlicesSlice,
  DefaultParagraphSlice,
  SocialLinkSlice,
} from 'prismicio-types';
import ContactContent from 'components/Contact/organisms/ContactContent';

const ContactMainContainer = styled.div`
  padding: 40px;
  background-color: ${Grey010};
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 1400px) {
    padding: 80px 130px;
  }
`;

interface ContactProps {
  page: ContactPageDocument
}

const destructureSlicesFromCMS = (slices: SliceZone<ContactPageDocumentDataSlicesSlice>) => ({
  socialMediaItems: slices.filter((slice) => slice.slice_type === 'social_link') as SliceZone<SocialLinkSlice>,
  reservationInfoItems: slices.filter((slice) => slice.slice_type !== 'social_link') as (DefaultParagraphSlice | BulletPointsSlice)[],
});

const Contact = ({ page }: ContactProps) => {
  const { socialMediaItems, reservationInfoItems } = destructureSlicesFromCMS(page.data.slices);

  return (
    <BackgroundWrapper backgroundColor={Grey010}>
      <ContactMainContainer>
        <HeaderWithSocialLinks
          title={page.data.page_title ?? ''}
          breakPoint={576}
          socialMediaItems={socialMediaItems}
        />
        <ContactContent
          data={page.data}
          reservationInfoItems={reservationInfoItems}
        />
      </ContactMainContainer>
    </BackgroundWrapper>
  );
};

export async function getStaticProps() {
  const client = createClient();
  const page = await client.getByUID('contact_page', 'contact-page');

  return {
    props: { page },
  };
}

export default Contact;
