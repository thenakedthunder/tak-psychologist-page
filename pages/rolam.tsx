import styled from 'styled-components';

import NavBar from 'components/NavBar/organisms/NavBar';
import {
  DefaultParagraph, H2, H3, LargeParagraph, SmallParagraph,
} from 'components/atoms/typography.styles';
import { Green050, Green100 } from 'components/styling/colors';
import SocialContainer from 'components/AboutMe/molecules/Social';
import PictureOnShapes from 'components/AboutMe/molecules/PictureOnShapes';

const MainContainer = styled.div`
  padding: 40px 55px 40px 40px;
`;

const BiographyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding-top: 30px;
`;

const EducationContainer = styled.div`
  padding-top: 30px;
`;

const EducationList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  padding-top: 20px;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Title = styled(DefaultParagraph)`
  font-weight: 700;
  padding: 10px 0 6px;
`;

const Institute = styled(DefaultParagraph)`
  padding-bottom: 4px;
`;

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <H2 color={Green100}>Rólam</H2>
        <PictureOnShapes />
        <BiographyContainer>
          <H3 color={Green050}>Életút</H3>
          <LargeParagraph color={Green100}>
            Lórum ipse feltehetőleg hadt, de gatag, hogy nem a megzetles pozmus van beállítva. Az
            itt nyúlánc, cserepej mámlás szépes sápott kölönyökökért, fidásokért villaj tark
            kulását is a binaság pulldon henségzése, illetve annak nyerségei aszták. De ők nekelték
            - kivált a tark remes belgőjének dítése után - a bikák, így elsősorban a fejteli erin
            minden kozását is.
          </LargeParagraph>
          <DefaultParagraph color={Green100}>
            Rozott keresztül lentniük, hogy a kriff csíkságok tetkerzőjét a binaságtól
            sziszertegték s a binasággal szemben jövesztő rantyúkászot redtek. Ennek a jövesztő
            rantyúkásznak a goványában volt azután a fejteli erin, az oszta, a gránok, a konom,
            slás, stb.
          </DefaultParagraph>
          <DefaultParagraph color={Green100}>
            Zsalmában emiatt semmi mendás nem volt, mert alig volt a binaságban más, mint aki aszta
            a ménát. Így egy ideig a kriff reményeket is a binaság vizetette s a csíkság nevezhető
            rozodásként kartatott. A hatony kezék bécésén azonban retesek azzal durrogtak elő, hogy
            a binaság henségzését már nem csak azok redik, akik a kriff ménát aszták s így a kriff
            csíkság nem az egész binaságot, hanem csak a ménát risták nyerségeit kodja meg.
          </DefaultParagraph>
        </BiographyContainer>
        <EducationContainer>
          <H3 color={Green050}>Képzések</H3>
          <EducationList>
            <ListItem>
              <SmallParagraph color={Green100}>2018 – 2021</SmallParagraph>
              <Title color={Green100}>Klinikai szakpszichológus</Title>
              <Institute color={Green100}>Semmelweiss Egyetem</Institute>
              <DefaultParagraph color={Green100}>Klinikai pszichológus szakképzés</DefaultParagraph>
            </ListItem>
            <ListItem>
              <SmallParagraph color={Green100}>2012 – 2016</SmallParagraph>
              <Title color={Green100}>Pszichológus titulus</Title>
              <DefaultParagraph color={Green100}>Pszichológia osztatlan képzés</DefaultParagraph>
            </ListItem>
            <ListItem>
              <SmallParagraph color={Green100}>2012 – 2016</SmallParagraph>
              <Title color={Green100}>Pszichológus titulus</Title>
              <Institute color={Green100}>ELTE Eötvös Loránd Tudományegyetem</Institute>
              <DefaultParagraph color={Green100}>Pszichológia osztatlan képzés</DefaultParagraph>
            </ListItem>
          </EducationList>
        </EducationContainer>
        <BiographyContainer>
          <H3 color={Green050}>Misszió</H3>
          <LargeParagraph color={Green100}>
            Lórum ipse feltehetőleg hadt, de gatag, hogy nem a megzetles pozmus van beállítva. Az
            itt nyúlánc, cserepej mámlás szépes sápott kölönyökökért, fidásokért villaj tark
            kulását is a binaság pulldon henségzése, illetve annak nyerségei aszták. De ők nekelték
            - kivált a tark remes belgőjének dítése után - a bikák, így elsősorban a fejteli erin
            minden kozását is.
          </LargeParagraph>
          <DefaultParagraph color={Green100}>
            Rozott keresztül lentniük, hogy a kriff csíkságok tetkerzőjét a binaságtól
            sziszertegték s a binasággal szemben jövesztő rantyúkászot redtek. Ennek a jövesztő
            rantyúkásznak a goványában volt azután a fejteli erin, az oszta, a gránok, a konom,
            slás, stb.
          </DefaultParagraph>
          <DefaultParagraph color={Green100}>
            Zsalmában emiatt semmi mendás nem volt, mert alig volt a binaságban más, mint aki aszta
            a ménát. Így egy ideig a kriff reményeket is a binaság vizetette s a csíkság nevezhető
            rozodásként kartatott. A hatony kezék bécésén azonban retesek azzal durrogtak elő, hogy
            a binaság henségzését már nem csak azok redik, akik a kriff ménát aszták s így a kriff
            csíkság nem az egész binaságot, hanem csak a ménát risták nyerségeit kodja meg.
          </DefaultParagraph>
        </BiographyContainer>
        <EducationContainer>
          <H3 color={Green050}>Publikációk és tagságok</H3>
          <EducationList>
            <ListItem>
              <SmallParagraph color={Green100}>2001</SmallParagraph>
              <Title color={Green100}>Legendás állatok és megfigyelésük</Title>
              <DefaultParagraph color={Green100}>Animus kiadó</DefaultParagraph>
            </ListItem>
            <ListItem>
              <SmallParagraph color={Green100}>2014</SmallParagraph>
              <Title color={Green100}>Bájitaltan</Title>
              <Institute color={Green100}>ELTE Eötvös Loránd Tudományegyetem</Institute>
              <DefaultParagraph color={Green100}>
                Az egyetem boszorkánytannal foglalkozó kurzusainak közkedvelt tankönyve
              </DefaultParagraph>
            </ListItem>
            <ListItem>
              <SmallParagraph color={Green100}>2020</SmallParagraph>
              <Title color={Green100}>Így neveld a sárkányodat - Útmutató mugli férjeknek</Title>
              <DefaultParagraph color={Green100}>Nők Lapja Könyvkiadó Kft.</DefaultParagraph>
            </ListItem>
          </EducationList>
        </EducationContainer>
        <SocialContainer />
      </MainContainer>
    </>
  );
}
