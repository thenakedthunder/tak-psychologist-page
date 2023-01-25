import styled from 'styled-components';

import { Blue010, Green050, Grey010 } from 'components/styling/colors';
import WhatICanHelpYouWithUnit from 'components/molecules/WhatICanHelpYouWithUnit';
import { whatICanHelpYouWithItems } from 'contents/whatICanHelpYouWithItems';
import PrimaryCTAButton from '../molecules/PrimaryCTAButton';

const Container = styled.div`
  background-color: ${Blue010};
  padding: 40px;
`;

const ButtonContainer = styled.div`
  padding-top: 40px;
`;

const WhatICanHelpYouWith = () => (
  <Container>
    {whatICanHelpYouWithItems.map(
      (item, index) => <WhatICanHelpYouWithUnit item={item} index={index} />,
    )}
    <ButtonContainer>
      <PrimaryCTAButton
        text="Árlista megtekintése"
        color={Grey010}
        backgroundColor={Green050}
      />
    </ButtonContainer>
  </Container>
);

export default WhatICanHelpYouWith;
