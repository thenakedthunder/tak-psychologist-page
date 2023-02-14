import styled from 'styled-components';

import { H2 } from 'components/atoms/typography.styles';
import { Green100 } from 'components/styling/colors';
import Social from 'components/AboutMe/molecules/Social';

const HeaderContainer = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

const Header = () => (
  <HeaderContainer>
    <H2 color={Green100}>Rólam</H2>
    <Social />
  </HeaderContainer>
);

export default Header;
