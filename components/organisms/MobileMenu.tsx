import React from 'react';
import { VscClose } from 'react-icons/vsc';

import LogoAndName from 'components/molecules/LogoAndName';
import MobileRightDiv from 'components/atoms/MobileRightDiv';

const MobileMenu = () => (
  <div>
    <LogoAndName />
    <MobileRightDiv>
      <VscClose />
    </MobileRightDiv>
  </div>
);

export default MobileMenu;
