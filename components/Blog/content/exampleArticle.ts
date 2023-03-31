import { StaticImageData } from 'next/image';

import HeroImage from '@/public/assets/article-header-image.png';
import ExampleImage from '@/public/assets/balos-lagoon.jpg';

interface TextContentBlock {
  type: 'heading' | 'paragraph' | 'largeParagraph' | 'quote';
  content: string;
}

interface ImageContentBlock {
  type: 'image';
  content: StaticImageData;
  caption: string;
}

export type ContentBlock = TextContentBlock | ImageContentBlock;

interface ContentType {
  articleTitle: string;
  heroImage: StaticImageData;
  topDescription: string;
  blocks: ContentBlock[];
}

const content: ContentType = {
  articleTitle: 'Bejegyzés címe, maximum 2-3 sorban, lórum ipse, a cserte naktagos',
  heroImage: HeroImage,
  topDescription: 'Lórum ipse a belés, mint södés, és a stság kátás. Nem olyan mint a kartás, mely jeges talkuson egyenes hatlató galaccra nyisszal: inkább olyan, mint az ifolya gyorfar, mely a ternyegző priságnak a biztos külső paradáját fengi. Az anyatos cserbeli mankarász a bolót fikáján az anyatos külsőt récsersedi.',
  blocks: [
    {
      type: 'heading',
      content: 'Ez egy ilyen alcím',
    },
    {
      type: 'largeParagraph',
      content: 'Milyen lyuka, hogy éppen arra tivódnak bakságért pályom, akik pattogják a kábojtó dérzó entert, de nem leleplezve magukat tovább funcosodnak. De aztán gyorsan haza, mert a terványa rosszul van. Nenis szerint vértelény csiperetles jó páhi, ezért lodja egy fodortalan farolásra csérvesednie őt, és falan hajtárát is. Belás és tartás is harnizálnak a ledeletben, és belás is dekvő télyiseket bántoz a szerhelyétől, mert olyan, mint a cetrigye.',
    },
    {
      type: 'paragraph',
      content: 'A ható hénzés muskusa szerint felgés maga kedte el szkogányot, <span class="highlighted">de a sajos, hogy a gépzetés ötsző.</span> Köbörző és torjár zsignegést köpködve hajtnak, mikor egyenítés egy hirtelen prónust szúroz, miszerint amit kedtek vindek a csukony valakinek, nyomosak. <span class="highlighted">Vértelény nélkül</span> mozik a tüszök a lekedő kölgyben, és trin hólyázja a vasárnap is külen mondást.',
    },
    {
      type: 'paragraph',
      content: 'A jankó - tekintettel az álkut helésére - lehetővé tuskodja továbbá, hogy a tozmulások legfeljebb teret az álkut endeli. Az avarjajas bulások babillája azonban nem bútoskodhatja meg a gadré ciszockat tozmulásainak hokacát. A gadré ciszockat tozmulásai szerűjükért a hadag pusztum nyeges bujái szerint görkövelnek, ami azt veregeti, hogy szélan pasétájukért a pofás partikszukkal vecskenyséssel torítnak. A jankó műsödi azokat a fáran fűtésöket, amelyeknek a liség meg kell hogy görköveljen.',
    },
    {
      type: 'quote',
      content: 'Ezek közül is szesít a fárzat pont, amely a kozás árosában lévő erderek a százások árosába hitemcselékének marbámait, költjét párzja, illetve a tetető pont, amely a locsmány százások hullásának bujáit idegeli meg.',
    },
    {
      type: 'heading',
      content: 'Ez meg egy másik alcím',
    },
    {
      type: 'paragraph',
      content: 'Mindezen fenyőnek az a kezése, hogy a módás képéneteit azokhoz a nemetítő portokhoz szalmazja, amelyek a szőkés hatos szennákat és urzsikat pordomozják. – plások, amelyek elégetve súlyosan pudják a csoládságban lévőket, cseper tekintettel a füttyös pornyokra és bakadásukra. Szoltjuk szetehészei, körkelők sarozása, plás kétesekés avítt olációk gyakája.',
    },
    {
      type: 'image',
      content: ExampleImage,
      caption: '<span class="bold">A balosi lagúna.</span> A fényképet Radványi Zsófia készítette.',
    },
    {
      type: 'paragraph',
      content: 'A lapadékony kensősége (ha már köszkeny enyenség) egy klésben van tárolva. A tétkéjéhez lódzjon a gavag dögénre (általában a bikók negésén). A mangya feltehetőleg fogalmag, de hisztevet, hogy nem a zatlan porás van beállítva. Ebben a balinárban a gavag kensőségeinél meg tudja nyírálnia a porást. Hócázja juhatba, hogy a porás kensősége, mint a legtöbb duzig kensőség csak köszkeny enyenségek számára jetlen. Ha még nem köszkeny, itt a téző főzet! Ha biztos abban, hogy jól zalogatotta be a porást, és még mindig nem fogalmag a bárm, a paszentus feltehetőleg a bolyás naricka.',
    },
  ],
};

export default content;
