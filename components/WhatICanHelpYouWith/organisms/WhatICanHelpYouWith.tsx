import {
  Blue010, Green050, Grey010,
} from 'components/styling/colors';

import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import { items } from 'components/WhatICanHelpYouWith/content/items';
import Unit from 'components/WhatICanHelpYouWith/molecules/Unit';
import Top from 'components/WhatICanHelpYouWith/molecules/Top';

import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import {
  Container,
  LowerContainer,
  MobileCTAContainer,
} from 'components/WhatICanHelpYouWith/organisms/WhatICanHelpYouWith.styles';
import Form from 'components/Form/Form';

const WhatICanHelpYouWith = () => (
  <>
    <BackgroundWrapper color={Blue010}>
      <Container>
        <Top />
        <LowerContainer>
          {items.map(
            (item, index) => <Unit item={item} key={index} />,
          )}
        </LowerContainer>
        <MobileCTAContainer>
          <PrimaryCTAButton
            text="Árlista megtekintése"
            color={Grey010}
            backgroundColor={Green050}
            linkHref=""
          />
        </MobileCTAContainer>
      </Container>
    </BackgroundWrapper>
    <Form />
  </>
);

export default WhatICanHelpYouWith;
