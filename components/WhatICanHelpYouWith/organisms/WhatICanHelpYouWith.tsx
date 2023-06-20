import { KeyTextField } from '@prismicio/client';
import { IndexPageV2DocumentDataServiceGroupItem } from 'prismicio-types';

import Top from 'components/WhatICanHelpYouWith/molecules/Top';
import Bottom from 'components/WhatICanHelpYouWith/organisms/Bottom';

import {
  Blue010,
} from 'components/styling/colors';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import {
  Container,
} from 'components/WhatICanHelpYouWith/organisms/WhatICanHelpYouWith.styles';
import getColorWithOpacity from 'components/styling/StylingUtility';

interface WhatICanHelpYouWithProps {
  contentHeader: KeyTextField;
  priceListButtonText: KeyTextField;
  serviceGroups: IndexPageV2DocumentDataServiceGroupItem[];
}

const WhatICanHelpYouWith = ({
  contentHeader, priceListButtonText, serviceGroups,
}: WhatICanHelpYouWithProps) => (
  <BackgroundWrapper backgroundColor={getColorWithOpacity(Blue010, '50')}>
    <Container>
      <Top
        contentHeader={contentHeader}
        priceListButtonText={priceListButtonText}
      />
      <Bottom
        serviceGroups={serviceGroups}
        priceListButtonText={priceListButtonText}
      />
    </Container>
  </BackgroundWrapper>
);

export default WhatICanHelpYouWith;
