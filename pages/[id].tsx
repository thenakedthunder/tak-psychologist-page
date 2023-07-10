import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import getServices from 'services/prismic/getServices';
import { asText } from '@prismicio/client';

import { ServiceSubpageDocument } from 'prismicio-types.js';

import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import getColorWithOpacity from 'components/styling/StylingUtility';
import { Black050, Blue010, Green100 } from 'components/styling/colors';
import {
  SubPageContainer, PageHeader, Description, PageSubHeader, Text,
} from 'components/WhatICanHelpYouWith/subpages/subpageComponents';
// @ts-ignore
// eslint-disable-next-line import/extensions
import { createClient } from 'prismicio.ts';

type PageParams = {
  id: string;
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult<PageParams>> => {
  const services = await getServices();

  return {
    paths: services.map((service: ServiceSubpageDocument<string>) => ({
      params: { id: service.uid },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params = { id: '' },
}: GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<PageProps>> => {
  const client = createClient();
  const page = await client.getByUID('service_subpage', params.id);

  return { props: { page } };
};

type PageProps = { page: ServiceSubpageDocument<string> }

const Page = ({ page }: PageProps) => (
  <BackgroundWrapper backgroundColor={getColorWithOpacity(Blue010, '50')}>
    <SubPageContainer>
      <PageHeader textColor={Green100}>{page.data.page_title}</PageHeader>
      <Description textColor={Black050}>
        {page.data.highlighted_text}
      </Description>
      <div>
        {/* TODO: factor out maybe? */}
        {page.data.slices.map(
          (item, index) => (
            <>
              <PageSubHeader key={index} textColor={Green100}>
                {item.primary.heading}
              </PageSubHeader>
              {item.items.map(
                (subItem, subIndex) => (
                  <Text key={subIndex} textColor={Black050}>
                    {asText(subItem.text_paragraph)}
                  </Text>
                ),
              )}
            </>
          ),
        )}
      </div>
    </SubPageContainer>
  </BackgroundWrapper>
);

export default Page;
