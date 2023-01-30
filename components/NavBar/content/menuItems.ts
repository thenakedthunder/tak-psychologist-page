interface MenuItem {
  title: string;
  link: string;
}

export const menuItemsDesktop: MenuItem[] = [
  { title: 'Magamról', link: '/rolam' },
  { title: 'Amiben segíteni tudok', link: '/' },
  { title: 'Árak', link: '/' },
  { title: 'Friss hírek', link: '/' },
  { title: 'GYIK', link: '/' },
];

export const menuItemsMobile: MenuItem[] = [
  { title: 'Magamról', link: '/rolam' },
  { title: 'Amiben segíteni tudok', link: '/' },
  { title: 'Árak', link: '/' },
  { title: 'Friss hírek', link: '/' },
  { title: 'Gyakran Ismételt Kérdések', link: '/' },
];
