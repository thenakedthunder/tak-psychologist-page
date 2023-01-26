import styled from 'styled-components';

import { H2 } from 'components/atoms/typography.styles';
import {
  Blue010, Green050, Green100, Grey010,
} from 'components/styling/colors';
import WhatICanHelpYouWithUnit from 'components/WhatICanHelpYouWith/molecules/WhatICanHelpYouWithUnit';
import { whatICanHelpYouWithItems } from 'components/WhatICanHelpYouWith/content/whatICanHelpYouWithItems';
import PrimaryCTAButton from '../../atoms/PrimaryCTAButton';

const Container = styled.div`
  background-color: ${Blue010};
  padding: 40px;

  @media screen and (min-width: 992px) {
    padding: 80px 130px;
  }
`;

const TopContainer = styled.div`  
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 230px;
    align-items: center;
  }
`;

const HeadingStyled = styled(H2)`
`;

const DesktopCTAContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

const LowerContainer = styled.div`
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    padding-top: 75px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;

const MobileCTAContainer = styled.div`
  padding-top: 40px;
  
  @media screen and (min-width: 576px) {
    width: 496px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const WhatICanHelpYouWith = () => (
  <Container>
    <TopContainer>
      <HeadingStyled color={Green100}>Amiben segíteni tudok</HeadingStyled>
      <DesktopCTAContainer>
        <PrimaryCTAButton
          text="Árlista megtekintése"
          color={Grey010}
          backgroundColor={Green050}
        />
      </DesktopCTAContainer>
    </TopContainer>
    <LowerContainer>
      {whatICanHelpYouWithItems.map(
        (item, index) => <WhatICanHelpYouWithUnit item={item} index={index} />,
      )}
    </LowerContainer>
    <MobileCTAContainer>
      <PrimaryCTAButton
        text="Árlista megtekintése"
        color={Grey010}
        backgroundColor={Green050}
      />
    </MobileCTAContainer>
  </Container>
);

export default WhatICanHelpYouWith;
