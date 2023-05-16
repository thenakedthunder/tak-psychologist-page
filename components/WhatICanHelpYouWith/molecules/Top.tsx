import styled from 'styled-components';

import { H2 } from 'components/atoms/typography.styles';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import { Green050, Green100, Grey010 } from 'components/styling/colors';
import PsychoLink from 'components/atoms/PsychoLink';

const TopContainer = styled.div`  
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 230px;
    align-items: center;
  }
`;

const DesktopCTAContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

const Top = () => (
  <TopContainer>
    <H2 color={Green100}>Amiben segíteni tudok</H2>
    <DesktopCTAContainer>
      <PsychoLink href="">
        <PrimaryCTAButton
          text="Árlista megtekintése"
          color={Grey010}
          backgroundColor={Green050}
        />
      </PsychoLink>
    </DesktopCTAContainer>
  </TopContainer>
);

export default Top;
