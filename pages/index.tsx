import WhatICanHelpYouWith from 'components/WhatICanHelpYouWith/organisms/WhatICanHelpYouWith';
import Hero from 'components/organisms/Hero';
import { Document } from 'components/Home/organisms/Document';

export default function Home() {
  return (
    <Document>
      <>
        <Hero />
        <WhatICanHelpYouWith />
      </>
    </Document>
  );
}
