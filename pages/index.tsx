import WhatICanHelpYouWith from 'components/WhatICanHelpYouWith/organisms/WhatICanHelpYouWith';
import Hero from 'components/organisms/Hero';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

import { AllDocumentTypes } from 'prismicio-types.js';
// @ts-ignore
// eslint-disable-next-line import/extensions
import { createClient } from '../prismicio.ts';

interface HomeProps {
  page: AllDocumentTypes
}

export default function Home({ page }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero content={page.data.hero} />
        <WhatICanHelpYouWith
          contentHeader={page.data.content_header}
          priceListButtonText={page.data.pricelist_button_text}
          serviceGroups={page.data.service_group}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID('index_page_v2', 'index');

  // Pass the homepage as prop to our page.
  return {
    props: { page },
  };
}
