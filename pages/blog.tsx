import styled from 'styled-components';
import Image from 'next/image';

import NavBar from 'components/NavBar/organisms/NavBar';
import {
  Green010, Green100, Green050, Grey010,
} from 'components/styling/colors';
import HeroImage from '@/public/assets/article-header-image.png';
import {
  H2, H3, LargeParagraph, DefaultParagraph,
} from 'components/atoms/typography.styles';

const TopSection = styled.div`
  position: relative;
`;

const BackgroundStripe = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${Green010};
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageWrapper = styled.div`
  padding: 0px 20px;
`;

const TopDescription = styled(LargeParagraph)`
  padding: 20px 0 50px;
  font-style: italic;
`;

const Divider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 16px);
  column-gap: 20px;
  justify-content: center;
`;

const DividerDot = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${Green010};
  border-radius: 50%;
`;

const SubTitle = styled(H3)`
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

  ${Divider}, ${SubTitle}, ${LargeParagraph}, ${DefaultParagraphWithStyledHighlighting} {
    padding-bottom: 30px;
  }
`;

const QuoteContainer = styled.div`
  background: rgba(186, 228, 214, 0.5);
  padding: 30px;
  /* display: grid;
  grid-template-columns: 40px auto;
  column-gap: 30px; */
  border-radius: 20px;
`;

const CollageElement = styled.div`
  padding: 10px 24px 0 0;
  position: relative;
  float: left;
`;

const LargerSquare = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${Green100};
`;

const SmallerSquare = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${Green010};
  position: absolute;
  top: 30px;
  left: 20px;
`;

const QuoteText = styled(LargeParagraph)`
  font-weight: 700;
  padding: 0 !important;
  font-style: italic;
  text-align: justify;
`;

const Blog = () => (
  <>
    <NavBar backgroundColor={Green010} />
    <TopSection>
      <BackgroundStripe />
      <ImageWrapper>
        <Image src={HeroImage} />
      </ImageWrapper>
    </TopSection>
    <MainContainer>
      <H2 color={Green050}>Bejegyzés címe, maximum 2-3 sorban, lórum ipse, a cserte naktagos</H2>
      <TopDescription color={Green100}>
        Lórum ipse a belés, mint södés, és a stság kátás. Nem olyan mint a kartás, mely jeges
        talkuson egyenes hatlató galaccra nyisszal: inkább olyan, mint az ifolya gyorfar, mely a
        ternyegző priságnak a biztos külső paradáját fengi. Az anyatos cserbeli mankarász a bolót
        fikáján az anyatos külsőt récsersedi.
      </TopDescription>
      <Divider>
        <DividerDot />
        <DividerDot />
        <DividerDot />
      </Divider>
      <SubTitle color={Green050}>Ez egy ilyen alcím</SubTitle>
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
      <QuoteContainer>
        <CollageElement>
          <LargerSquare />
          <SmallerSquare />
        </CollageElement>
        <QuoteText>
          Ezek közül is szesít a fárzat pont, amely a kozás árosában lévő erderek a százások
          árosába hitemcselékének marbámait, költjét párzja, illetve a tetető pont, amely a
          locsmány százások hullásának bujáit idegeli meg.
        </QuoteText>
      </QuoteContainer>
    </MainContainer>
  </>
);

export default Blog;
