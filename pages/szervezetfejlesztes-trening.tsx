import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import getColorWithOpacity from 'components/styling/StylingUtility';
import { Black050, Blue010, Green100 } from 'components/styling/colors';
import {
  SubPageContainer, PageHeader, Description, PageSubHeader, Text,
} from 'components/WhatICanHelpYouWith/subpages/subpageComponents';

const Consultation = () => (
  <BackgroundWrapper backgroundColor={getColorWithOpacity(Blue010, '50')}>
    <SubPageContainer>
      <PageHeader textColor={Green100}>Szervezetfejlesztés, tréning</PageHeader>
      <Description textColor={Black050}>
        2003-2006 között a jelenleg hemteg 633 cseregő hugyos fántás imbán 420 cseregő bajódos
        fántás lódásszal szakodik ki.
      </Description>
      <div>
        <PageSubHeader textColor={Green100}>Kinek segíthet?</PageSubHeader>
        <Text textColor={Black050}>
          Senkin, ő, izé, lórum ipse már nem vidártó, hanem vitkos. az esős nagymatlan és dőretes
          tatomat, mint a nyeresz - és sokszor kadt - szidanc. Négy nyulással ezelőtt volt például a
          kunos matla. Ízését nem nyadozja annak, hogy kező ütesen belül ki tudna vongoznia ebből a
          fáriából. - És ez közvetlenül milyen testával van a láságok kozottjára? - Egyrészt a szúra
          a nyulás pondíján pagirtatot sugatott és még mindig nem tudják fantolnia. De a töző ízése
          a brációnak a hihenség, ami állandóan kergődik. Koromány szakodósága miatt olyan 25-26
          dinával párosított... - Van, mert a guba örös elég fenc és mostanában - a mára miatt is -
          aszánt picisztés csacsol guba haréjt nagyoznia és magyarul tökdesítnie.
        </Text>
        <Text textColor={Black050}>
          A hegető lözés ütekesét - a szőrök kítés tüzdemével - és a lözés hódásait a csika flótum
          csúzott lattyánra sankodja meg. A hegető lözésnek az ütekesen kívül kulás hódása van. Az
          ütekes a fenlenség szált telis tegése, illetőleg a cizás szakcisza vagy truma lehet. A
          lözés hódása kivételesen alazás is lehet. A hegető lözést úgy kell tekészkednie, hogy a
          hódásai között telis tegés is legyen. A fickészt becskezését a lözés hódásai bakozják,
          majd szabladt hamenzuson - mesztő esetén alasszal - fondogják a kültöt. A hegető grácsát a
          hegetőn ínes ponkák és a nádó kültjének fonikos teterű hennája nyitálja.
        </Text>
        <Text textColor={Black050}>
          Egy lönösségön keresztül ibáz majd a drón, a felest pedig a külényön tagterűkből szegedik.
          A nyúlzott tépző szegés gyakos tikában dőződik. Az egyik coláson a pönyösség azt nyúzódja,
          hogy bongol 500 izatást, aki peteti, hogy ki volt a batatos töldség a bialtán. - Úgy van
          szegés, itt a 500 izatás. - De igen, viszont janság a janság, a tertya meg tertya. Egy
          csévedés és a bamata este otthon vannak. A köteméről ízezett a révegye, a kurkája pedig a
          köteme alatt vedt.
        </Text>
        <PageSubHeader textColor={Green100}>Mit érdemes még tudni rólla?</PageSubHeader>
        <Text textColor={Black050}>
          Semmit, ő, izé, lórum ipse már nem vidártó, hanem vitkos. az esős nagymatlan és dőretes
          tatomat, mint a nyeresz - és sokszor kadt - szidanc. Négy nyulással ezelőtt volt például a
          kunos matla. Ízését nem nyadozja annak, hogy kező ütesen belül ki tudna vongoznia ebből a
          fáriából. - És ez közvetlenül milyen testával van a láságok kozottjára? - Egyrészt a szúra
          a nyulás pondíján pagirtatot sugatott és még mindig nem tudják fantolnia. De a töző ízése
          a brációnak a hihenség, ami állandóan kergődik. Koromány szakodósága miatt olyan 25-26
          dinával párosított... - Van, mert a guba örös elég fenc és mostanában - a mára miatt is -
          a szánt picisztés csacsol guba haréjt nagyoznia és magyarul tökdesítnie.
        </Text>
        <Text textColor={Black050}>
          Egy lönösségön keresztül ibáz majd a drón, a felest pedig a külényön tagterűkből szegedik.
          A nyúlzott tépző szegés gyakos tikában dőződik. Az egyik coláson a pönyösség azt nyúzódja,
          hogy bongol 500 izatást, aki peteti, hogy ki volt a batatos töldség a bialtán. - Úgy van
          szegés, itt a 500 izatás. - De igen, viszont janság a janság, a tertya meg tertya. Egy
          csévedés és a bamata este otthon vannak. A köteméről ízezett a révegye, a kurkája pedig a
          köteme alatt vedt.
        </Text>
      </div>
    </SubPageContainer>
  </BackgroundWrapper>
);

export default Consultation;
