import styled from 'styled-components';
// @ts-ignore
// eslint-disable-next-line import/extensions
import { createClient } from 'prismicio.ts';

import Prose from 'components/AboutMe/organisms/Prose';
import List from 'components/AboutMe/organisms/List';
import TopGrid from 'components/AboutMe/organisms/TopGrid';
import { Grey010 } from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';

import {
  AboutMePageDocument,
  AboutMePageDocumentDataSlicesSlice,
  ListingSlice,
  SocialLinkSlice,
  TextWithHeadingAndHighlightedParagraphsSlice,
} from 'prismicio-types';
import { SliceZone } from '@prismicio/client';

const AboutMeMainContainer = styled.div`
  padding: 40px;
  max-width: 1440px;
  background-color: ${Grey010};

  @media screen and (min-width: 1200px) {
    background-image: url('/assets/box-profile.svg');
    background-repeat: no-repeat;
    background-size: 45%;
    background-position-x: 100%;
    background-position-y: 32px;
  }

  @media screen and (min-width: 1400px) {
    padding: 80px 130px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }
`;

const PaddingWrapper = styled.div`
  padding-top: 60px;
`;

interface AboutMeProps {
  page: AboutMePageDocument
}

export default function AboutMe({ page }: AboutMeProps) {
  const destructureSlicesFromCMS = (slices: SliceZone<AboutMePageDocumentDataSlicesSlice>) => ({
    paragraphs: slices.filter((slice) => slice.slice_type === 'text_with_heading_and_highlighted_paragraphs') as TextWithHeadingAndHighlightedParagraphsSlice[],
    socialLinks: slices.filter((slice) => slice.slice_type === 'social_link') as SocialLinkSlice [],
    listings: slices.filter((slice) => slice.slice_type === 'listing') as ListingSlice[],
  });

  const destructureParagraphs = (
    paragraphSlices: TextWithHeadingAndHighlightedParagraphsSlice[],
  ) => {
    const biographyContent = paragraphSlices.filter((slice) => slice.primary.type === 'lifeway');
    const mission = paragraphSlices.filter((slice) => slice.primary.type === 'mission');

    if (biographyContent.length > 1 || mission.length > 1) {
      throw new Error('found more than one biography or mission block!');
    }

    return { biographyContent: biographyContent[0], mission: mission[0] };
  };

  const destuctureListings = (
    listingSlices: ListingSlice[],
  ) => {
    const educationListings = listingSlices.filter((listing) => listing.primary.listing_type === 'education').map((item) => ({ ...item.primary, otherDetails: item.items }));
    const publicationsAndMembershipsListings = listingSlices.filter((listing) => listing.primary.listing_type === 'publications and memberships').map((item) => ({ ...item.primary, otherDetails: item.items }));

    return {
      education: educationListings,
      publicationsAndMemberships: publicationsAndMembershipsListings,
    };
  };

  const { paragraphs, socialLinks, listings } = destructureSlicesFromCMS(page.data.slices);
  const { biographyContent, mission } = destructureParagraphs(paragraphs);
  const { education, publicationsAndMemberships } = destuctureListings(listings);

  return (
    <BackgroundWrapper>
      <AboutMeMainContainer>
        <TopGrid
          title={page.data.page_title}
          lifewayContent={biographyContent}
          education={{
            header: page.data.education_title,
            items: education,
          }}
          socialLinks={socialLinks}
          image={page.data.profile_image}
        />
        <PaddingWrapper>
          <Prose content={mission} />
        </PaddingWrapper>
        <PaddingWrapper>
          <List content={{
            header: page.data.publications_and_memberships_title,
            items: publicationsAndMemberships,
          }}
          />
        </PaddingWrapper>
      </AboutMeMainContainer>
    </BackgroundWrapper>
  );
}

export async function getStaticProps() {
  const client = createClient();
  const page = await client.getByUID('about_me_page', 'about-me');

  return {
    props: { page },
  };
}
