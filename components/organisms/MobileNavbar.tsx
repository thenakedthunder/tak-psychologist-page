import { IoIosMenu } from 'react-icons/io';

import LogoAndName from 'components/molecules/LogoAndName';
import MobileRightDiv from 'components/atoms/MobileRightDiv';

const MobileNavBar = () => (
  <>
    <LogoAndName />
    <MobileRightDiv>
      <IoIosMenu size={28} />
    </MobileRightDiv>
  </>
);

export default MobileNavBar;
