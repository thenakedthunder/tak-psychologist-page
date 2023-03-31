import { ArticleProps } from 'components/Blog/organisms/OtherArticles';

import Article1Img from 'public/assets/agios-nikolaos.jpg';
import Article2Img from 'public/assets/preveli.jpg';
import Article3Img from 'public/assets/chania.jpg';

const articles: ArticleProps[] = [
  {
    image: Article1Img,
    title: 'Agios Nikolaos',
    shortDescription: 'Lórum ipse természetesen nekáz köztel a tusarc számára. A látor, látor faragyos bujadány, ászar kísége szerint.',
  },
  {
    image: Article2Img,
    title: 'Preveli tengerpart',
    shortDescription: 'A sziklás szurdokból kikanyargó, hűs vízű folyó útját smaragdzöld pálmaerdő övezi a fehérhomokos tengerpartig.',
  },
  {
    image: Article3Img,
    title: 'Chania',
    shortDescription: 'A képek alapján hasonlít az első városra, de nem az. A velenceiek építették, a világítótorony itt nem látszik.',
  },
];

export default articles;
