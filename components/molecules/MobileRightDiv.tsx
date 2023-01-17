import React from 'react';
import styled from 'styled-components';

import { IoIosMenu } from 'react-icons/io';
import { VscClose } from 'react-icons/vsc';

interface MobileRightDivProps {
  isMenuOpen: boolean;
  toggleIsMenuOpen: () => void;
}

const MobileRightDivContainer = styled.div`
  justify-self: end;
  padding: 8px 0;
  &:hover {
    cursor: pointer;
  }
`;

const MobileRightDiv = ({ isMenuOpen, toggleIsMenuOpen }: MobileRightDivProps) => (
  <MobileRightDivContainer>
    {isMenuOpen
      ? <VscClose size={28} onClick={toggleIsMenuOpen} />
      : <IoIosMenu size={28} onClick={toggleIsMenuOpen} />}
  </MobileRightDivContainer>
);

export default MobileRightDiv;
