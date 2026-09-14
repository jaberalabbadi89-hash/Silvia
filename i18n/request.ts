import { getRequestConfig } from 'next-intl/server';
import ca from '../messages/ca.json';
import en from '../messages/en.json';
import es from '../messages/es.json';

const localeMessages = { ca, en, es };

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale =
    requestedLocale && requestedLocale in localeMessages
      ? (requestedLocale as keyof typeof localeMessages)
      : 'en';

  return {
    locale,
    messages: { ...en, ...localeMessages[locale] }
  };
});
