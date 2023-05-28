import { ILangObject } from '../models/translation.model';

const en: ILangObject = {
  title: 'Welcom!',
  subtitle: 'to a playground/IDE for graphQL requests',
  text: 'Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results.',
};

const by: ILangObject = {
  title: 'Вітаем!',
  subtitle: 'на пляцоўцы/IDE для запытаў graphQL',
  text: 'Адпраўце запыт GraphQL на ваш API і атрымайце менавіта тое, што вам трэба, не больш і не менш. Запыты GraphQL заўсёды вяртаюць прадказальныя вынікі.',
};

const translations = {
  en,
  by,
};

export const getTranslation = (key: string, locale = 'en') => {
  const currTranslation = translations[locale as keyof typeof translations]
    ? translations[locale as keyof typeof translations]
    : en;
  const translated = currTranslation[key] ? currTranslation[key] : en[key] ? en[key] : key;

  return translated;
};
