import { StaticImageData } from 'next/image';

import Article1Img from 'public/assets/agios-nikolaos.jpg';
import Article2Img from 'public/assets/preveli.jpg';
import Article3Img from 'public/assets/chania.jpg';

export interface ArticleProps {
  image: StaticImageData,
  title: string,
  shortDescription: string,
  longDescription: string,
  link: string;
}

const articles: ArticleProps[] = [
  {
    image: Article1Img,
    title: 'Agios Nikolaos',
    shortDescription: 'Lórum ipse természetesen nekáz köztel a tusarc számára. A látor, látor faragyos bujadány, ászar kísége szerint.',
    longDescription: 'Lórum ipse a belés, mint södés, és a stság kátás. Nem olyan mint a kartás, mely jeges talkuson egyenes hatlató galaccra nyisszal: inkább olyan, mint az ifolya gyorfar, mely a ternyegző priságnak a biztos külső paradáját fengi. Az anyatos cserbeli mankarász a bolót fikáján az anyatos külsőt récsersedi.',
    link: 'cikk-pelda',
  },
  {
    image: Article2Img,
    title: 'Preveli tengerpart',
    shortDescription: 'A sziklás szurdokból kikanyargó, hűs vízű folyó útját smaragdzöld pálmaerdő övezi a fehérhomokos tengerpartig.',
    longDescription: 'Lórum ipse a belés, mint södés, és a stság kátás. Nem olyan mint a kartás, mely jeges talkuson egyenes hatlató galaccra nyisszal: inkább olyan, mint az ifolya gyorfar, mely a ternyegző priságnak a biztos külső paradáját fengi. Az anyatos cserbeli mankarász a bolót fikáján az anyatos külsőt récsersedi.',
    link: 'cikk-pelda',
  },
  {
    image: Article3Img,
    title: 'Chania',
    shortDescription: 'A képek alapján hasonlít az első városra, de nem az. A velenceiek építették, a világítótorony itt nem látszik.',
    longDescription: 'Lórum ipse a belés, mint södés, és a stság kátás. Nem olyan mint a kartás, mely jeges talkuson egyenes hatlató galaccra nyisszal: inkább olyan, mint az ifolya gyorfar, mely a ternyegző priságnak a biztos külső paradáját fengi. Az anyatos cserbeli mankarász a bolót fikáján az anyatos külsőt récsersedi.',
    link: 'cikk-pelda',
  },
];

export default articles;
