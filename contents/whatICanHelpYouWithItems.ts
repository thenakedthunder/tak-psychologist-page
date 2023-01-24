import WhatICanHelpYouWith from 'components/organisms/WhatICanHelpYouWith';
import { IconType } from 'react-icons/lib';
import { TfiThumbUp } from 'react-icons/tfi';
import { MdPeopleOutline } from 'react-icons/md';
import { IoBrushOutline } from 'react-icons/io5';
import { SlChart } from 'react-icons/sl';


export interface WhatICanHelpYouWithItemData {
  icon: IconType;
  title: string;
  description: string;
}

export const whatICanHelpYouWithItems: WhatICanHelpYouWithItemData[] = [
  {
    icon: TfiThumbUp,
    title: "Egyéni konzultáció",
    description: "„2003-2006 között a jelenleg hemteg 633 cseregő hugyos fántás imbán 420 cseregő bajódos fántás lódásszal szakodik ki."
  },
  {
    icon: MdPeopleOutline,
    title: "Csoportok",
    description: "Lórum ipse számos máshol nehezen kelégteles malit és ragtalmos körüleget is korít. A szédő melúgokra is szemes pőcsent jól szalatja."
  },
  {
    icon: IoBrushOutline,
    title: "Művészetterápia",
    description: "a kográntok banája: az alig laszér serves különcékre is a meteres hajtás metleneit pincolták meg a fejszervek."
  },
  {
    icon: SlChart,
    title: "Szervezetfejlesztés, tréning",
    description: " vetőzte sublick spis pegezős és tudott tezet a páteg „opoly tontás” forzális cseményén."
  },
]
