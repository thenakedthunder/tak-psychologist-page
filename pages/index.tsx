import WhatICanHelpYouWith from 'components/WhatICanHelpYouWith/organisms/WhatICanHelpYouWith';
import NavBar from 'components/NavBar/organisms/NavBar';
import Hero from 'components/organisms/Hero';
import { Grey010 } from 'components/styling/colors';
import { Document } from 'components/Home/organisms/Document';

export default function Home() {
  return (
    <Document>
      <>
        <NavBar backgroundColor={Grey010} />
        <Hero />
        <WhatICanHelpYouWith />
      </>
    </Document>
  );
}
