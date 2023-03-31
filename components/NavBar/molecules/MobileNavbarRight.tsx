import styled from 'styled-components';

import { IoIosMenu } from 'react-icons/io';
import { VscClose } from 'react-icons/vsc';
import { Green050 } from 'components/styling/colors';

interface MobileRightDivProps {
  isMenuOpen: boolean;
  toggleIsMenuOpen: () => void;
}

const MobileRightDivContainer = styled.div`
  justify-self: end;
  padding: 8px 0;
  cursor: pointer;
`;

const MobileNavbarRight = ({ isMenuOpen, toggleIsMenuOpen }: MobileRightDivProps) => (
  <MobileRightDivContainer>
    {isMenuOpen
      ? <VscClose size={28} onClick={toggleIsMenuOpen} color={Green050} />
      : <IoIosMenu size={28} onClick={toggleIsMenuOpen} color={Green050} />}
  </MobileRightDivContainer>
);

export default MobileNavbarRight;
