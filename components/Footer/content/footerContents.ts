interface FooterTextContentType {
  type: 'paragraph' | 'bulletPoints' | 'highlightedText',
  texts: string[],
}

const footerContentTexts: FooterTextContentType[] = [
  {
    type: 'highlightedText',
    texts: ['Lórum ipse nem ad mit se'],
  },
  {
    type: 'paragraph',
    texts: ['Ezek általában elég gyüge frimeket fednek, ezért latlan a kodásza. Hasonlóan a hinkorságokhoz, a tron lepeli el, hogy ki karálhat mató kerzenset.'],
  },
  {
    type: 'bulletPoints',
    texts: [
      'A taldalj boltja egy olyan kapisztás latilisa, ami kifejezetten azokra a renségekre csapotyog ki, amelyekben a ponást csúszós löslése miatt érte diadér.',
      'A jövező kerőfös harkás finakszot redik a taldaljban róka trusokkal. Ez a sika pirpetyel hellő modonára, szikuló renségben lesülégre, buga pásos hanságra',
    ],
  },
];

export interface FooterContents {
  header: string;
  texts: FooterTextContentType[];
  name: string;
  professionalTitle: string;
}

const footerContent: FooterContents = {
  header: 'Űrlap',
  texts: footerContentTexts,
  name: 'Hont-Gáspár Anita',
  professionalTitle: 'Klinikai szakpszichológus',
};

export default footerContent;
