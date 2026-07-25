import { site, socials } from "@data/site"
import type { Lang } from "@i18n/ui"

export type SeoInput = {
	lang: Lang
	title?: string
	description?: string
	path?: string
}

const descriptions: Record<Lang, string> = {
	en: "Amirmohammad Eftekhari \u2014 future Fachinformatiker. IT portfolio focused on Linux, networking, infrastructure and automation.",
	de: "Amirmohammad Eftekhari \u2014 k\u00fcnftiger Fachinformatiker. IT-Portfolio mit Fokus auf Linux, Netzwerke, Infrastruktur und Automatisierung.",
}

export function buildSeo({ lang, title, description, path = "/" }: SeoInput) {
	const baseTitle =
		"Amirmohammad Eftekhari | IT Portfolio | Linux, Networking & System Integration"
	const canonical = new URL(path, site.url).href
	return {
		title: title ? `${title} | ${site.name}` : baseTitle,
		description: description ?? descriptions[lang],
		canonical,
		ogImage: new URL("/images/og/og-image.jpg", site.url).href,
		locale: lang === "de" ? "de_DE" : "en_US",
	}
}

/** schema.org Person + WebSite structured data (spec 09 §12). */
export function personSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: site.fullName,
		alternateName: site.name,
		url: site.url,
		email: `mailto:${site.email}`,
		jobTitle: "Future Fachinformatiker",
		knowsAbout: [
			"Linux",
			"Networking",
			"System Integration",
			"Infrastructure",
			"Automation",
			"Docker",
		],
		sameAs: [socials.github.url, socials.linkedin.url, socials.xing.url],
	}
}

export function websiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: `${site.name} \u2014 IT Portfolio`,
		url: site.url,
	}
}
