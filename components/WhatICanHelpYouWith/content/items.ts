import { IconType } from 'react-icons/lib';
import { GiPlantRoots, GiCircleForest, GiButterflyFlower } from 'react-icons/gi';
import { BsFlower2 } from 'react-icons/bs';

export interface ItemData {
  icon: IconType;
  leftPositioning?: string;
  bottomPositioning?: string;
}

export const items: ItemData[] = [
  {
    icon: GiPlantRoots,
    leftPositioning: '4px',
    bottomPositioning: '-2px',
  },
  {
    icon: GiCircleForest,
    leftPositioning: '1px',
    bottomPositioning: '1px',
  },
  {
    icon: GiButterflyFlower,
    leftPositioning: '4px',
    bottomPositioning: '-2px',
  },
  {
    icon: BsFlower2,
    leftPositioning: '6px',
    bottomPositioning: '0px',
  },
];
