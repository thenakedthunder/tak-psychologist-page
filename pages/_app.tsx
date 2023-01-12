import React from 'react';
import Link from 'next/link';

import ViewportProvider from 'components/organisms/ViewportProvider';

import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio.js';

export default function App({ Component, pageProps }: any) {
  return (
    <ViewportProvider>
      <PrismicProvider
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href}>
            <a {...props} />
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </ViewportProvider>
  );
}
