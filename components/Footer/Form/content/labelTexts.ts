interface Input {
  placeholder: string,
  error: string,
}

interface LabelTextsType {
  name: Input;
  email: Input;
  phoneNumber: Input;
  serviceSelection: Input;
  message: Input,

  checkboxStatement: string,
  checkBoxUncheckedError: string,
}

const labelTexts: LabelTextsType = {
  name: {
    placeholder: 'Teljes név',
    error: 'Kérem, adja meg, hogy szólíthatom! (Legalább 3 karakter)',
  },
  email: {
    placeholder: 'Email cím',
    error: 'Kérem adjon meg valós e-mail címet!',
  },
  phoneNumber: {
    placeholder: 'Telefonszám',
    error: '',
  },
  serviceSelection: {
    placeholder: 'Szolgáltatás kiválasztása',
    error: '',
  },
  message: {
    placeholder: 'Üzenet, maximum 300 karakterben',
    error: 'Kérem, írja le, hogy miben segíthetek! (Legalább 3 karakterben)',
  },

  checkboxStatement: 'Elismerem, hogy Radványi Balázs a legnagyobb király, és mindenben igaza van. Ha korábban nem értettem volna vele egyet valamiben, akkor ott én tévedtem.',
  checkBoxUncheckedError: 'Kérem egyezzen bele a fenti nyilatkozattételbe!',
};

export default labelTexts;
