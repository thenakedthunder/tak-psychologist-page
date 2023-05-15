import Link from 'next/link';
import { useRouter } from 'next/router.js';


import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio.js';

import '../styles/globals.css';
import Footer from 'components/Footer/Footer';

export default function App(this: any, { Component, pageProps }: any) {
  const router = useRouter();
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
        {!router.pathname.includes('gyik') && <Footer /> }
      </PrismicPreview>
    </PrismicProvider>
  );
}
