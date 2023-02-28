import styled from 'styled-components';

import {
  DefaultParagraph, H2, LargeParagraph, SmallParagraph,
} from 'components/atoms/typography.styles';
import {
  Green010, Green050, Green100, Grey010,
} from 'components/styling/colors';
import NavBar from 'components/NavBar/organisms/NavBar';
import ImageSlider from 'components/Contact/molecules/ImageSlider';
import PsychoLink from 'components/atoms/PsychoLink';

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

const Location = styled.div`
  padding: 20px 0;

  a {
    text-decoration: underline
  }
`;

const BolderText = styled(SmallParagraph)`
  font-weight: 700;
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
      <Location>
        <BolderText color={Green050}>Szervezet neve</BolderText>
        <SmallParagraph color={Green050}>
          1114 Budapest, Bartók Béla út 12/2, 4em. 13.
        </SmallParagraph>
        <SmallParagraph color={Green050}>
          <PsychoLink href="https://www.google.com/maps/place/Budapest,+Bart%C3%B3k+B%C3%A9la+%C3%BAt+12-em.+13,+1111/@47.4822872,19.0529605,17z/data=!4m5!3m4!1s0x4741dc4d9518da53:0x6bccd46420204e21!8m2!3d47.4822872!4d19.0529605">
            Mutasd térképen
          </PsychoLink>
        </SmallParagraph>
      </Location>
      <Location>
        <BolderText color={Green050}>Elérhetőség</BolderText>
        <SmallParagraph color={Green050}>
          <PsychoLink href="mailto:Rendelo@mail.hu">
            Rendelo@mail.hu
          </PsychoLink>
        </SmallParagraph>
        <SmallParagraph color={Green050}>
          (+36) 30 123 4567
        </SmallParagraph>
      </Location>
    </MainContainer>
  </>
);

export default Contact;
