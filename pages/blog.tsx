import styled from 'styled-components';
import Image from 'next/image';

import NavBar from 'components/NavBar/organisms/NavBar';
import {
  Green010, Green100, Green050, Grey010,
} from 'components/styling/colors';
import {
  H2, H3, LargeParagraph, DefaultParagraph, SmallParagraph,
} from 'components/atoms/typography.styles';
import SocialShare from 'components/Blog/organisms/SocialShare';
import OtherArticles from 'components/Blog/organisms/OtherArticles';
import TopSection from 'components/Blog/molecules/TopSection';
import DividingDots from 'components/Blog/molecules/DividingDots';
import Quote from 'components/Blog/organisms/Quote';
import ArticleImage from 'components/Blog/molecules/ArticleImage';

const TopDescription = styled(LargeParagraph)`
  padding: 10px 0 50px;
  font-style: italic;
`;

const DefaultParagraphWithStyledHighlighting = styled(DefaultParagraph)`
  .highlighted {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const MainContainer = styled.div`
  background-color: ${Grey010};
  padding: 26px 40px 30px;
  
  ${H3},
  ${LargeParagraph},
  ${DefaultParagraphWithStyledHighlighting},
  ${H2} {
    padding-bottom: 30px;
  }
`;

const Blog = () => (
  <>
    <NavBar backgroundColor={Green010} />
    <TopSection />
    <MainContainer>
      <H2 color={Green050}>Bejegyzés címe, maximum 2-3 sorban, lórum ipse, a cserte naktagos</H2>
      <TopDescription color={Green100}>
        Lórum ipse a belés, mint södés, és a stság kátás. Nem olyan mint a kartás, mely jeges
        talkuson egyenes hatlató galaccra nyisszal: inkább olyan, mint az ifolya gyorfar, mely a
        ternyegző priságnak a biztos külső paradáját fengi. Az anyatos cserbeli mankarász a bolót
        fikáján az anyatos külsőt récsersedi.
      </TopDescription>
      <DividingDots />
      <H3 color={Green050}>Ez egy ilyen alcím</H3>
      <LargeParagraph color={Green100}>
        Milyen lyuka, hogy éppen arra tivódnak bakságért pályom, akik pattogják a kábojtó dérzó
        entert, de nem leleplezve magukat tovább funcosodnak. De aztán gyorsan haza, mert a
        terványa rosszul van. Nenis szerint vértelény csiperetles jó páhi, ezért lodja egy
        fodortalan farolásra csérvesednie őt, és falan hajtárát is. Belás és tartás is harnizálnak
        a ledeletben, és belás is dekvő télyiseket bántoz a szerhelyétől, mert olyan, mint a
        cetrigye.
      </LargeParagraph>
      <DefaultParagraphWithStyledHighlighting color={Green050}>
        A ható hénzés muskusa szerint felgés maga kedte el szkogányot,
        {' '}
        <span className="highlighted">de a sajos, hogy a gépzetés ötsző.</span>
        {' '}
        Köbörző és torjár zsignegést köpködve hajtnak, mikor egyenítés egy hirtelen prónust szúroz,
        miszerint amit kedtek vindek a csukony valakinek, nyomosak.
        {' '}
        <span className="highlighted">Vértelény nélkül</span>
        {' '}
        mozik a tüszök a lekedő kölgyben, és trin hólyázja a vasárnap is külen mondást.
      </DefaultParagraphWithStyledHighlighting>
      <DefaultParagraphWithStyledHighlighting color={Green050}>
        A jankó - tekintettel az álkut helésére - lehetővé tuskodja továbbá, hogy a tozmulások
        legfeljebb teret az álkut endeli. Az avarjajas bulások babillája azonban nem bútoskodhatja
        meg a gadré ciszockat tozmulásainak hokacát. A gadré ciszockat tozmulásai szerűjükért a
        hadag pusztum nyeges bujái szerint görkövelnek, ami azt veregeti, hogy szélan pasétájukért
        a pofás partikszukkal vecskenyséssel torítnak. A jankó műsödi azokat a fáran fűtésöket,
        amelyeknek a liség meg kell hogy görköveljen.
      </DefaultParagraphWithStyledHighlighting>
      <Quote />
      <H3 color={Green050}>Ez meg egy másik alcím</H3>
      <DefaultParagraphWithStyledHighlighting color={Green050}>
        Mindezen fenyőnek az a kezése, hogy a módás képéneteit azokhoz a nemetítő portokhoz
        szalmazja, amelyek a szőkés hatos szennákat és urzsikat pordomozják. – plások, amelyek
        elégetve súlyosan pudják a csoládságban lévőket, cseper tekintettel a füttyös pornyokra és
        bakadásukra. Szoltjuk szetehészei, körkelők sarozása, plás kétesekés avítt olációk gyakája.
      </DefaultParagraphWithStyledHighlighting>
      <ArticleImage />
      <DefaultParagraphWithStyledHighlighting>
        A lapadékony kensősége (ha már köszkeny enyenség) egy klésben van tárolva. A tétkéjéhez
        lódzjon a gavag dögénre (általában a bikók negésén). A mangya feltehetőleg fogalmag, de
        hisztevet, hogy nem a zatlan porás van beállítva. Ebben a balinárban a gavag kensőségeinél
        meg tudja nyírálnia a porást. Hócázja juhatba, hogy a porás kensősége, mint a legtöbb duzig
        kensőség csak köszkeny enyenségek számára jetlen. Ha még nem köszkeny, itt a téző főzet! Ha
        biztos abban, hogy jól zalogatotta be a porást, és még mindig nem fogalmag a bárm, a
        paszentus feltehetőleg a bolyás naricka.
      </DefaultParagraphWithStyledHighlighting>
      <SocialShare />
      <H2 color={Green100}>További bejegyzések</H2>
      <OtherArticles />
    </MainContainer>
  </>
);

export default Blog;
