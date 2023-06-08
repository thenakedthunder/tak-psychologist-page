import {
  Blue010, Green100, Grey010,
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
import PsychoLink from 'components/atoms/PsychoLink';

import { KeyTextField } from '@prismicio/client';
import { IndexPageV2DocumentDataServiceGroupItem } from 'prismicio-types';

interface WhatICanHelpYouWithProps {
  contentHeader: KeyTextField;
  priceListButtonText: KeyTextField;
  serviceGroups: IndexPageV2DocumentDataServiceGroupItem[];
}

const WhatICanHelpYouWith = ({
  contentHeader, priceListButtonText, serviceGroups,
}: WhatICanHelpYouWithProps) => (
  <BackgroundWrapper backgroundColor={Blue010}>
    <Container>
      <Top contentHeader={contentHeader} priceListButtonText={priceListButtonText} />
      <LowerContainer>
        {items.map(
          (item, index) => (
            <Unit
              key={index}
              item={item}
              title={serviceGroups[index].service_name ?? ''}
              description={serviceGroups[index].service_description ?? ''}
              linkText={serviceGroups[index].lean_more_button_text ?? ''}
            />
          ),
        )}
      </LowerContainer>
      <MobileCTAContainer>
        <PsychoLink href="/arak">
          <PrimaryCTAButton
            text={priceListButtonText ?? 'Árlista megtekintése'}
            textColor={Grey010}
            backgroundColor={Green100}
          />
        </PsychoLink>
      </MobileCTAContainer>
    </Container>
  </BackgroundWrapper>
);

export default WhatICanHelpYouWith;
