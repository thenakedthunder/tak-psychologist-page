import styled from 'styled-components';

import {
  DefaultParagraph, H2, LargeParagraph, SmallParagraph,
} from 'components/atoms/typography.styles';
import {
  Green010, Green050, Green100, Grey010,
} from 'components/styling/colors';
import NavBar from 'components/NavBar/organisms/NavBar';
import ImageSlider from 'components/Contact/molecules/ImageSlider';

const MainContainer = styled.div`
  padding: 40px;
  background-color: ${Grey010};
`;

const Header = styled(H2)`
  padding-bottom: 30px;
`;

const SubHeader = styled(LargeParagraph)`
  padding-bottom: 20px;
`;

const BulletedInfo = styled.div`
  padding: 30px 0 40px;
  display: grid;
  grid-template-columns: 16px auto;
  row-gap: 30px;
  column-gap: 16px;
`;

const BulletPoint = styled.div`
  width: 16px;
  height: 16px;

  background-color: ${Green010};
  border-radius: 50%;
`;

const Contact = () => (
  <>
    <NavBar />
    <MainContainer>
      <Header color={Green100}>
        Elérhetőségek
      </Header>
      <SubHeader color={Green050}>
        Bejelentkezési információk
      </SubHeader>
      <DefaultParagraph color={Green050}>
        Lórum ipse azonban nem kurrog házatot. A kérülő sütköző delmetelőket az érsejk nem a turat
        által komszerű fázásokkal megegyezően rugosodták fel tatás között.
      </DefaultParagraph>
      <BulletedInfo>
        <BulletPoint />
        <SmallParagraph color={Green050}>
          A rányos golság zetlete esetenként répiákkal is csibolt. „a fónához rányos hősi
          posztásukat” a szalt donziságoknak önállóan, más fogalás gödése nélkül kellett
          csinasodniuk. A koma és a tezelősség hősi posztás csak érsejk és öszvényök között volt
          fackás, a szalt mazatok tatás között nem tűnhettek.
        </SmallParagraph>
        <BulletPoint />
        <SmallParagraph color={Green050}>
          Ennek az a borosa, hogy a koma közös matkát saltol a koli és a csendő között, mivel a
          küleledés repegeteli a minset azzal, hogy pecélre hunkad panságot. A győző „lácska” a
          rotmásak számára rabolyogta, hogy orolják a csapósakat, így a remuncban hatásosan
          színézett a venítő bardasara.
        </SmallParagraph>
      </BulletedInfo>
      <SubHeader color={Green050}>
        A konzultációk helyszíne
      </SubHeader>
      <ImageSlider />
    </MainContainer>
  </>
);

export default Contact;
