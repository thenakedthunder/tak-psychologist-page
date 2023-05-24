export interface ServiceItem {
  name: string;
  price: string;
}
interface PriceListContentType {
  categoryName: string,
  services: ServiceItem[]
}

const priceListContent: PriceListContentType[] = [
  {
    categoryName: 'Rontás',
    services: [
      {
        name: 'Rontás levétele',
        price: '16.000.-Ft',
      },
      {
        name: 'Rontás felvitele egy kiválasztott személyre',
        price: '12.000.-Ft',
      },
      {
        name: 'Rontás kiválasztása (tanácsadás) és felvitele',
        price: '20.000.-Ft',
      },
      {
        name: 'Rontás cseréje',
        price: '25.000.-Ft',
      },
    ],
  },
  {
    categoryName: 'Sötét varázslatok és kivédésük',
    services: [
      {
        name: 'Baklava kebabra!',
        price: '24.000.-Ft',
      },
      {
        name: 'Ekszörszájzbúk!',
        price: '12.000.-Ft',
      },
    ],
  },
  {
    categoryName: 'Ezotéria',
    services: [
      {
        name: 'Ezokapu kinyitása (percdíj)',
        price: '480.-Ft +ÁFA',
      },
      {
        name: 'Horoszkóp és aszcendens-tanácsadás 1 alkalom (50 perc)',
        price: '15.000.-Ft',
      },
      {
        name: 'Grabovoj-számsorok készítése/számsor (osztva Bősárkány és környéke)',
        price: '5.000.-Ft',
      },
    ],
  },
];

export default priceListContent;
