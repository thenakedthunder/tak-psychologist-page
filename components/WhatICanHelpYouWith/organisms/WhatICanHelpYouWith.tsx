import {
  Green050, Grey010,
} from 'components/styling/colors';

import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import { whatICanHelpYouWithItems } from 'components/WhatICanHelpYouWith/content/whatICanHelpYouWithItems';
import WhatICanHelpYouWithUnit from 'components/WhatICanHelpYouWith/molecules/WhatICanHelpYouWithUnit';
import Top from '../molecules/Top';

import {
  Container,
  LowerContainer,
  MobileCTAContainer,
} from './WhatICanHelpYouWith.styles';

const WhatICanHelpYouWith = () => (
  <Container>
    <Top />
    <LowerContainer>
      {whatICanHelpYouWithItems.map(
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
