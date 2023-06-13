import { IndexPageV2DocumentDataServiceGroupItem } from 'prismicio-types';
import { KeyTextField } from '@prismicio/client';

import { LowerContainer, MobileCTAContainer } from 'components/WhatICanHelpYouWith/organisms/WhatICanHelpYouWith.styles';
import { items } from 'components/WhatICanHelpYouWith/content/items';
import Unit from 'components/WhatICanHelpYouWith/molecules/Unit';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import PsychoLink from 'components/atoms/PsychoLink';
import { Grey010, Green100 } from 'components/styling/colors';

interface BottomProps {
  serviceGroups: IndexPageV2DocumentDataServiceGroupItem[];
  priceListButtonText: KeyTextField;
}

const getServiceGroupByLink = (
  serviceGroups: IndexPageV2DocumentDataServiceGroupItem[],
  subLink: string,
) => serviceGroups.find((item) => item.sublink === subLink);

const Bottom = ({ serviceGroups, priceListButtonText }: BottomProps) => (
  <LowerContainer>
    {items.map(
      (item, index) => {
        const serviceGroup = getServiceGroupByLink(serviceGroups, item.subLink);

        return (
          <Unit
            key={index}
            item={item}
            title={serviceGroup?.service_name ?? ''}
            description={serviceGroup?.service_description ?? ''}
            linkText={serviceGroup?.lean_more_button_text ?? ''}
          />
        );
      },
    )}
    <MobileCTAContainer>
      <PsychoLink href="google.com">
        <PrimaryCTAButton
          text={priceListButtonText ?? 'Árlista megtekintése'}
          textColor={Grey010}
          backgroundColor={Green100}
        />
      </PsychoLink>
    </MobileCTAContainer>
  </LowerContainer>
);

export default Bottom;
