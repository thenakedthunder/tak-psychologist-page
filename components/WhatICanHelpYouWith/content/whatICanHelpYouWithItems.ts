import { IconType } from 'react-icons/lib';
import { TfiThumbUp } from 'react-icons/tfi';
import { MdPeopleOutline } from 'react-icons/md';
import { IoBrushOutline } from 'react-icons/io5';
import { SlChart } from 'react-icons/sl';

export interface WhatICanHelpYouWithItemData {
  icon: IconType;
  title: string;
  description: string;
  leftPositioning?: string;
  bottomPositioning?: string;
}

export const whatICanHelpYouWithItems: WhatICanHelpYouWithItemData[] = [
  {
    icon: TfiThumbUp,
    title: 'Egyéni konzultáció',
    description: '„2003-2006 között a jelenleg hemteg 633 cseregő hugyos fántás imbán 420 cseregő bajódos fántás lódásszal szakodik ki.',
    leftPositioning: '1px',
    bottomPositioning: '1px',
  },
  {
    icon: MdPeopleOutline,
    title: 'Csoportok',
    description: 'Lórum ipse számos máshol nehezen kelégteles malit és ragtalmos körüleget is korít. A szédő melúgokra is szemes pőcsent jól szalatja.',
    leftPositioning: '4px',
    bottomPositioning: '-5px',
  },
  {
    icon: IoBrushOutline,
    title: 'Művészetterápia',
    description: 'A kográntok banája: az alig laszér serves különcékre is a meteres hajtás metleneit pincolták meg a fejszervek.',
    leftPositioning: '4px',
    bottomPositioning: '-1px',
  },
  {
    icon: SlChart,
    title: 'Szervezetfejlesztés, tréning',
    description: 'Vetőzte sublick spis pegezős és tudott tezet a páteg „opoly tontás” forzális cseményén.',
    leftPositioning: '6px',
    bottomPositioning: '2px',
  },
];
