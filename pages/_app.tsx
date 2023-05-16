import Link from 'next/link';
import { useRouter } from 'next/router.js';

import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import Footer from 'components/Footer/Footer';
import { repositoryName } from '../prismicio.js';

import '../styles/globals.css';

export default function App(this: any, { Component, pageProps }: any) {
  const router = useRouter();
  return (
    <PrismicProvider
      internalLinkComponent={({ ...props }) => (
        <Link {...props} />
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
        {!router.pathname.includes('gyik') && <Footer /> }
      </PrismicPreview>
    </PrismicProvider>
  );
}
