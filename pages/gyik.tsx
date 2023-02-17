import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import { H2 } from 'components/atoms/typography.styles';
import { Green010, Green100 } from 'components/styling/colors';
import Collage from 'components/FAQ/molecules/Collage';
import QAndASection from 'components/FAQ/organisms/QAndASection';

const MainContainer = styled.div`
  padding: 40px;
  background-color: ${Green010};
`;

export default function FAQ() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <H2 color={Green100}>
          Gyakran Ismételt Kérdések
        </H2>
        <Collage />
        <QAndASection />
      </MainContainer>
    </>
  );
}
