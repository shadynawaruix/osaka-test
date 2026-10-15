import {ui, defaultLang} from './ui';

export function urlHasLanguageCode(url: URL): boolean
{
    const [, lang] = url.pathname.split('/');
    return (lang in ui)
}

export function getLangFromUrl(url: URL)
{
    const [, lang] = url.pathname.split('/');
    if (lang in ui)
        return lang as keyof typeof ui;

    return defaultLang;
}

export function setLangInUrl(url: URL, lang: string)
{
    const split = url.pathname.split("/");
    if (split[1] == "ja" || split[1] == "en")
        split[1] = lang;

    url.pathname = split.join("/");
    return url;
}

export function useTranslations(lang: string)
{
    return function t(key: keyof typeof ui[typeof defaultLang])
    {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
