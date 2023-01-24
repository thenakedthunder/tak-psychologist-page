import styled from 'styled-components';

import { Blue010 } from 'components/styling/colors';
import WhatICanHelpYouWithUnit from 'components/molecules/WhatICanHelpYouWithUnit';

const Container = styled.div`
  background-color: ${Blue010};
  padding: 40px;
`;

const WhatICanHelpYouWith = () => (
  <Container>
    <div>
      <WhatICanHelpYouWithUnit />
    </div>
  </Container>
);

export default WhatICanHelpYouWith;
