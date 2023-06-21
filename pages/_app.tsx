import Link from 'next/link';
import { useRouter } from 'next/router.js';

import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import Footer from 'components/Footer/Footer';

import '../styles/globals.css';
import NavBar from 'components/NavBar/organisms/NavBar';

// @ts-ignore
// eslint-disable-next-line import/extensions
import { createClient, repositoryName } from 'prismicio.ts';
import { FooterDocument } from 'prismicio-types';
import { useState, useEffect } from 'react';

export default function App(this: any, { Component, pageProps }: any) {
  const router = useRouter();

  const [footer, setFooter] = useState<FooterDocument<string> | null>(null);

  useEffect(() => {
    const client = createClient();

    client.getByUID('footer', 'footer').then((res: FooterDocument<string>) => {
      setFooter(res as FooterDocument<string>);
    });
  }, []);

  console.log('SZOPÓROLLER', footer);

  return (
    <PrismicProvider
      internalLinkComponent={({ ...props }) => (
        <Link {...props} />
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <NavBar
          colorScheme={router.pathname.includes('blog') ? 'dark' : 'light'}
        />
        <Component {...pageProps} />
        {!router.pathname.includes('gyik') && footer && <Footer footerContentFromCMS={footer.data} /> }
      </PrismicPreview>
    </PrismicProvider>
  );
}
