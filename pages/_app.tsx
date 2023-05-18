import Link from 'next/link';
import { useRouter } from 'next/router.js';


import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio.js';

import '../styles/globals.css';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/organisms/NavBar';
import { Green010, Grey010 } from 'components/styling/colors';

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
        {<NavBar 
          backgroundColor={router.pathname.includes('blog') ? Green010 : Grey010 } 
        />}
        <Component {...pageProps} />
        {!router.pathname.includes('gyik') && <Footer /> }
      </PrismicPreview>
    </PrismicProvider>
  );
}
