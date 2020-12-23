import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      App_Title: "Unit Converter",
      App_SubTitle: "Convert values from one unit of measure to another.",
      Header_Conversions:"Conversions",
      Convert_Value:"Value",
      Convert_From:"From",
      Convert_To:"To",
      UnitGroup_Angle:"angle",
      UnitGroup_Area:"area",
      UnitGroup_Length:"length",
      UnitGroup_Speed:"speed",
      UnitGroup_Temp:"temp",
      UnitGroup_Time:"time",
      UnitGroup_Volume:"volume",
      UnitGroup_Weight:"weight",
      Units_Angle_Degrees:"Degrees",
      Units_Angle_Radians:"Radians",
      Units_Area_Acre:"Acre",
      Units_Area_SqCentimeter:"SqCm",
      Units_Area_SqFeet:"SqFt",
      Units_Area_SqInch:"SqIn",
      Units_Area_SqMeter:"SqM",
      Units_Area_SqMile:"SqMi",
      Units_Area_SqMilimeter:"SqMm",
      Units_Area_SqYard:"SqYd",
      Units_Length_Centimeters:"Centimetres",
      Units_Length_Feet:"Feet",
      Units_Length_Inches:"Inches",
      Units_Length_Kilometers:"Kilometres",
      Units_Length_Meters:"Metres",
      Units_Length_Miles:"Miles",
      Units_Length_Millimeters:"Millimetres",
      Units_Length_Yards:"Yards",
      Units_Speed_KilometerPerHour:"Km/H",
      Units_Speed_MilesPerHour:"MPH",
      Units_Temp_Celsius:"Celsius",
      Units_Temp_Fahrenheit:"Fahrenheit",
      Units_Temp_Kelvin:"Kelvin",
      Units_Time_Days:"Days",
      Units_Time_Hours:"Hours",
      Units_Time_Milliseconds:"Milliseconds",
      Units_Time_Minutes:"Minutes",
      Units_Time_Seconds:"Seconds",
      Units_Time_Years:"Years",
      Units_Volume_Cups:"Cups",
      Units_Volume_Gallons:"Gallons (US)",
      Units_Volume_Imperial_Gallons:"Gallons (UK)",
      Units_Volume_Imperial_Ounces:"Ounces (UK)",
      Units_Volume_Imperial_Pints:"Pints (UK)",
      Units_Volume_Liters:"Litres",
      Units_Volume_Ounces:"Ounces (US)",
      Units_Volume_Quarts:"Quarts",
      Units_Weight_Grams:"Grammes",
      Units_Weight_ImperialTons:"Tons (UK)",
      Units_Weight_Kilograms:"Kilogrammes",
      Units_Weight_MetricTons:"MTons",
      Units_Weight_Ounces:"Ounces",
      Units_Weight_Pounds:"Pounds",
      Units_Weight_Tons:"Tons (US)"
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
