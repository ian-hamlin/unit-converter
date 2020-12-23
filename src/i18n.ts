import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      App_Title: "Unit Converter",
      App_SubTitle: "Convert values from one unit of measure to another.",
      UnitGroup_Length: "Length",
      UnitGroup_Temp: "Temp",
      UnitGroup_Time: "Time",
      UnitGroup_Volume: "Volume",
      UnitGroup_Weight: "Weight",
      UnitGroup_Angle: "Angle",
      UnitGroup_Area: "Area",
      UnitGroup_Speed: "Speed",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
