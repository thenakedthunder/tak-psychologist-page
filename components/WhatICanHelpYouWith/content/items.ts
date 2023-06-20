import { IconType } from 'react-icons/lib';
import { GiPlantRoots, GiCircleForest, GiButterflyFlower } from 'react-icons/gi';
import { BsFlower2 } from 'react-icons/bs';

export interface ItemData {
  icon: IconType;
  leftPositioning?: string;
  bottomPositioning?: string;
  subLink: string;

}

export const items: ItemData[] = [
  {
    icon: GiPlantRoots,
    leftPositioning: '4px',
    bottomPositioning: '-2px',
    subLink: 'egyeni-konzultacio',

  },
  {
    icon: GiCircleForest,
    leftPositioning: '4px',
    bottomPositioning: '-2px',
    subLink: 'csoportok',
  },
  {
    icon: GiButterflyFlower,
    leftPositioning: '4px',
    bottomPositioning: '-2px',
    subLink: 'muveszetterapia',
  },
  {
    icon: BsFlower2,
    leftPositioning: '6px',
    bottomPositioning: '0px',
    subLink: 'szervezetfejlesztes-trening',
  },
];
