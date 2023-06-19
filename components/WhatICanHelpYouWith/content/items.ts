import { IconType } from 'react-icons/lib';
import { GiPlantRoots, GiCircleForest, GiButterflyFlower } from 'react-icons/gi';
import { BsFlower2 } from 'react-icons/bs';
import { SlChart } from 'react-icons/sl';

export interface ItemData {
  icon: IconType;
  title: string;
  description: string;
  leftPositioning?: string;
  bottomPositioning?: string;
  link: string;
}

export const items: ItemData[] = [
  {
    icon: GiPlantRoots,
    title: 'Egyéni konzultáció',
    description: '„2003-2006 között a jelenleg hemteg 633 cseregő hugyos fántás imbán 420 cseregő bajódos fántás lódásszal szakodik ki.',
    leftPositioning: '4px',
    bottomPositioning: '-2px',
    link: 'egyeni-konzultacio',
  },
  {
    icon: GiCircleForest,
    title: 'Csoportok',
    description: 'Lórum ipse számos máshol nehezen kelégteles malit és ragtalmos körüleget is korít. A szédő melúgokra is szemes pőcsent jól szalatja.',
    leftPositioning: '4px',
    bottomPositioning: '-2px',
    link: 'csoportok',
  },
  {
    icon: GiButterflyFlower,
    title: 'Művészetterápia',
    description: 'A kográntok banája: az alig laszér serves különcékre is a meteres hajtás metleneit pincolták meg a fejszervek.',
    leftPositioning: '4px',
    bottomPositioning: '-2px',
    link: 'muveszetterapia',
  },
  {
    icon: BsFlower2,
    title: 'Szervezetfejlesztés, tréning',
    description: 'Vetőzte sublick spis pegezős és tudott tezet a páteg „opoly tontás” forzális cseményén.',
    leftPositioning: '6px',
    bottomPositioning: '0px',
    link: 'szervezetfejlesztes-trening',
  },
];
