import {
  Green050, Grey010,
} from 'components/styling/colors';

import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import { items } from 'components/WhatICanHelpYouWith/content/items';
import WhatICanHelpYouWithUnit from 'components/WhatICanHelpYouWith/molecules/WhatICanHelpYouWithUnit';
import Top from 'components/WhatICanHelpYouWith/molecules/Top';

import {
  Container,
  LowerContainer,
  MobileCTAContainer,
} from './WhatICanHelpYouWith.styles';

const WhatICanHelpYouWith = () => (
  <Container>
    <Top />
    <LowerContainer>
      {items.map(
        (item, index) => <WhatICanHelpYouWithUnit item={item} key={index} />,
      )}
    </LowerContainer>
    <MobileCTAContainer>
      <PrimaryCTAButton
        text="Árlista megtekintése"
        color={Grey010}
        backgroundColor={Green050}
      />
    </MobileCTAContainer>
  </Container>
);

export default WhatICanHelpYouWith;
