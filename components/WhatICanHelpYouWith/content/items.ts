import { IconType } from 'react-icons/lib';
import { TfiThumbUp } from 'react-icons/tfi';
import { MdPeopleOutline } from 'react-icons/md';
import { IoBrushOutline } from 'react-icons/io5';
import { SlChart } from 'react-icons/sl';

export interface ItemData {
  icon: IconType;
  leftPositioning?: string;
  bottomPositioning?: string;
}

export const items: ItemData[] = [
  {
    icon: TfiThumbUp,
    leftPositioning: '1px',
    bottomPositioning: '1px',
  },
  {
    icon: MdPeopleOutline,
    leftPositioning: '4px',
    bottomPositioning: '-5px',
  },
  {
    icon: IoBrushOutline,
    leftPositioning: '4px',
    bottomPositioning: '-1px',
  },
  {
    icon: SlChart,
    leftPositioning: '6px',
    bottomPositioning: '2px',
  },
];
