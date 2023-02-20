import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import { H2 } from 'components/atoms/typography.styles';
import { Green010, Green100 } from 'components/styling/colors';
import Collage from 'components/FAQ/molecules/Collage';
import QAndASection from 'components/FAQ/organisms/QAndASection';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';

const MainContainer = styled.div`
  padding: 40px;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-areas:
    ". header"
    "collage ."
    "collage content";
    grid-template-columns: 520px auto;
    column-gap: 120px;
    max-width: 1440px;
  }

  @media screen and (min-width: 1400px) {
    padding: 80px 130px;
    margin: 0 auto;
  }
`;

const Header = styled(H2)`
  grid-area: header;
`;

export default function FAQ() {
  return (
    <>
      <NavBar />
      <BackgroundWrapper color={Green010}>
        <MainContainer>
          <Header color={Green100}>
            Gyakran Ismételt Kérdések
          </Header>
          <Collage />
          <QAndASection />
        </MainContainer>
      </BackgroundWrapper>
    </>
  );
}
