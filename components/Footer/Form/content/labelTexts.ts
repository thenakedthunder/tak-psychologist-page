interface LabelTextsType {
  nameInputPlaceHolder: string,
  nameInputError: string,

  emailInputPlaceHolder: string,
  emailInputError: string,

  phoneNumberPlaceHolder: string,
  serviceSelectionPlaceHolder: string,

  messagePlaceHolder: string,
  messageError: string,

  checkboxStatement: string,
  checkBoxUncheckedError: string,
}

const labelTexts: LabelTextsType = {
  nameInputPlaceHolder: 'Teljes név',
  nameInputError: 'Kérem, adja meg, hogy szólíthatom! (Legalább 3 karakter)',

  emailInputPlaceHolder: 'Email cím',
  emailInputError: 'Kérem adjon meg valós e-mail címet!',

  phoneNumberPlaceHolder: 'Telefonszám',
  serviceSelectionPlaceHolder: 'Szolgáltatás kiválasztása',

  messagePlaceHolder: 'Üzenet, maximum 300 karakterben',
  messageError: 'Kérem, írja le, hogy miben segíthetek! (Legalább 3 karakterben)',

  checkboxStatement: 'Elismerem, hogy Radványi Balázs a legnagyobb király, és mindenben igaza van. Ha korábban nem értettem volna vele egyet valamiben, akkor ott én tévedtem.',
  checkBoxUncheckedError: 'Kérem egyezzen bele a fenti nyilatkozattételbe!',
};

export default labelTexts;
