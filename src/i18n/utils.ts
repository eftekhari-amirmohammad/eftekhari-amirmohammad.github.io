import { ui, defaultLang, type Lang, type UIKey } from "./ui"

/** Extract the active language from a URL pathname. */
export function getLangFromUrl(url: URL): Lang {
	const [, seg] = url.pathname.split("/")
	if (seg === "de") return "de"
	return defaultLang
}

/** Returns a translator bound to a language, falling back to English. */
export function useTranslations(lang: Lang) {
	return function t(key: UIKey): string {
		return ui[lang][key] ?? ui[defaultLang][key]
	}
}

/** Build a locale-aware path. English is unprefixed; German uses /de. */
export function localizePath(path: string, lang: Lang): string {
	const clean = path.startsWith("/") ? path : `/${path}`
	if (lang === defaultLang) return clean === "/" ? "/" : clean
	return clean === "/" ? "/de" : `/de${clean}`
}

/** Given the current URL, return the path to switch to the other language. */
export function alternateLangPath(url: URL, target: Lang): string {
	const rest = url.pathname.replace(/^\/de/, "") || "/"
	return localizePath(rest, target)
}
