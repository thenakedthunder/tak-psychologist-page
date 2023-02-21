export interface ProseItemType {
  header: string;
  highlightedItems?: string[];
  defaultTextItems?: string[];
}

export interface ListItemType {
  date: string;
  title: string;
  otherDetails?: string[];
}

export interface ListType {
  header: string;
  items: ListItemType[];
}

export const biographyContent: ProseItemType = {
  header: 'Életút',
  highlightedItems: [
    'Lórum ipse feltehetőleg hadt, de gatag, hogy nem a megzetles pozmus van beállítva. Az itt nyúlánc, cserepej mámlás szépes sápott kölönyökökért, fidásokért villaj tark kulását is a binaság pulldon henségzése, illetve annak nyerségei aszták. De ők nekelték - kivált a tark remes belgőjének dítése után - a bikák, így elsősorban a fejteli erin minden kozását is.',
  ],
  defaultTextItems: [
    'Rozott keresztül lentniük, hogy a kriff csíkságok tetkerzőjét a binaságtól sziszertegték s a binasággal szemben jövesztő rantyúkászot redtek. Ennek a jövesztő rantyúkásznak a goványában volt azután a fejteli erin, az oszta, a gránok, a konom, slás, stb.',
    'Zsalmában emiatt semmi mendás nem volt, mert alig volt a binaságban más, mint aki aszta a ménát. Így egy ideig a kriff reményeket is a binaság vizetette s a csíkság nevezhető rozodásként kartatott. A hatony kezék bécésén azonban retesek azzal durrogtak elő, hogy a binaság henségzését már nem csak azok redik, akik a kriff ménát aszták s így a kriff csíkság nem az egész binaságot, hanem csak a ménát risták nyerségeit kodja meg.',
  ],
};

export const mission: ProseItemType = {
  header: 'Misszió',
  highlightedItems: [
    'Lórum ipse feltehetőleg hadt, de gatag, hogy nem a megzetles pozmus van beállítva. Az itt nyúlánc, cserepej mámlás szépes sápott kölönyökökért, fidásokért villaj tark kulását is a binaság pulldon henségzése, illetve annak nyerségei aszták. De ők nekelték - kivált a tark remes belgőjének dítése után - a bikák, így elsősorban a fejteli erin minden kozását is.',
  ],
};

export const education: ListType = {
  header: 'Képzések',
  items: [
    {
      date: '2018 – 2021',
      title: 'Klinikai szakpszichológus',
      otherDetails: [
        'Semmelweiss Egyetem',
        'Klinikai pszichológus szakképzés',
      ],
    },
    {
      date: '2012 – 2016',
      title: 'Pszichológus titulus',
      otherDetails: [
        'Pszichológia osztatlan képzés',
      ],
    },
    {
      date: '2012 – 2016',
      title: 'Pszichológus titulus',
      otherDetails: [
        'ELTE Eötvös Loránd Tudományegyetem',
        'Pszichológia osztatlan képzés',
      ],
    },
  ],
};

export const publicationsAndMemberships = {
  header: 'Publikációk és tagságok',
  items: [
    {
      date: '2001',
      title: 'Legendás állatok és megfigyelésük',
      otherDetails: [
        'Roquefort kiadó',
      ],
    },
    {
      date: '2014',
      title: 'Bájitaltan',
      otherDetails: [
        'ELTE Eötvös Loránd Tudományegyetem',
        'Az egyetem boszorkánytannal foglalkozó kurzusainak közkedvelt tankönyve',
      ],
    },
    {
      date: '2020',
      title: 'Így neveld a sárkányodat - Útmutató mugli férjeknek',
      otherDetails: [
        'Nők Lapja Könyvkiadó Kft.',
      ],
    },
  ],
};
