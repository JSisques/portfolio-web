import { ui, defaultLocale, type Locale, type UiKey } from './ui';

export function useTranslations(lang: Locale) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLocale][key];
  };
}

export function otherLocale(lang: Locale): Locale {
  return lang === 'es' ? 'en' : 'es';
}

export function localizedPath(lang: Locale, path = '/'): string {
  if (lang === defaultLocale) return path;
  return `/${lang}${path === '/' ? '' : path}`;
}
