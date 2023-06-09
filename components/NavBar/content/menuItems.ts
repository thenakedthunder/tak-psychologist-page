import { LinkType } from 'types/LinkType';

export interface MenuItemWithSubItems {
  name: string;
  subItems: LinkType[];
}

export const isLinkType = (obj: any) => 'linkHref' in obj && 'linkText' in obj;

export const menuItemsDesktop: LinkType[] = [
  { linkText: 'Magamról', linkHref: '/rolam' },
  { linkText: 'Amiben segíteni tudok', linkHref: '/' },
  { linkText: 'Árak', linkHref: '/arak' },
  { linkText: 'Friss hírek', linkHref: '/blog' },
  { linkText: 'GYIK', linkHref: '/gyik' },
];

export const menuItemsMobile: (LinkType | MenuItemWithSubItems)[] = [
  {
    name: 'Magamról',
    subItems: [
      { linkText: 'Életút', linkHref: '/rolam/eletut' },
      { linkText: 'Képzések', linkHref: '/rolam/kepzesek' },
      { linkText: 'Misszió', linkHref: '/rolam/misszió' },
      { linkText: 'Publikációk és tagságok', linkHref: '/rolam/publikaciok-es-tagsagok' },
    ],
  },
  {
    name: 'Amiben segíteni tudok',
    subItems: [
      { linkText: 'Egyéni konzultáció', linkHref: '/amiben-segiteni-tudok/egyeni-konzultacio' },
      { linkText: 'Csoportok', linkHref: '/amiben-segiteni-tudok/csoportok' },
      { linkText: 'Művészetterápia', linkHref: '/amiben-segiteni-tudok/muveszetterapia' },
      { linkText: 'Szervezetfejlesztés, tréning', linkHref: '/amiben-segiteni-tudok/szervezetfejlesztes-trening' },
    ],
  },
  { linkText: 'Árak', linkHref: '/arak' },
  {
    name: 'Friss hírek',
    subItems: [
      { linkText: 'Blog', linkHref: '/friss-hirek/blog' },
      { linkText: 'Új események, csoportok', linkHref: '/friss-hirek/uj-esemenyek-es-csoportok' },
    ],
  },
  { linkText: 'Gyakran Ismételt Kérdések', linkHref: '/gyik' },
];
