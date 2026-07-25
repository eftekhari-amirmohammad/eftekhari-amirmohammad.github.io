// UI string dictionary + i18n helpers (spec 03: EN default, DE secondary).
export const languages = { en: "English", de: "Deutsch" } as const
export type Lang = keyof typeof languages
export const defaultLang: Lang = "en"

export const ui = {
	en: {
		"nav.home": "Home",
		"nav.about": "About",
		"nav.skills": "Skills",
		"nav.projects": "Projects",
		"nav.journey": "Journey",
		"nav.contact": "Contact",
		"nav.menu": "Menu",
		"theme.toggle": "Toggle theme",

		"hero.eyebrow": "Future Fachinformatiker",
		"hero.lead":
			"IT enthusiast focused on Linux, infrastructure, networking, automation and modern technologies \u2014 building real projects and learning continuously.",
		"hero.cta.projects": "View Projects",
		"hero.cta.contact": "Contact",

		"about.title": "About",
		"about.kicker": "Who I am",
		"about.p1":
			"I\u2019m Amir, an IT enthusiast preparing for an Ausbildung as a Fachinformatiker in Germany. What draws me to IT is understanding how systems actually work \u2014 from Linux and networks to servers and automation.",
		"about.p2":
			"I learn by building. Instead of only collecting tutorials, I create small real projects, document them, and improve continuously. My goal is simple: to become the strongest, most prepared junior candidate a company can invest in.",

		"focus.title": "Technical Focus",
		"focus.kicker": "Where my interest lives",

		"skills.title": "Skills",
		"skills.kicker": "Technologies I use & explore",

		"projects.title": "Featured Projects",
		"projects.kicker": "What I build & learn",
		"projects.viewCode": "View code",
		"projects.comingSoon": "Coming soon",

		"journey.title": "Learning Journey",
		"journey.kicker": "How I got here",
		"journey.current": "Currently learning",

		"certs.title": "Certificates",
		"certs.kicker": "Official learning",
		"certs.empty": "Certificates are being added \u2014 projects remain the main proof.",

		"github.title": "On GitHub",
		"github.kicker": "Real code, in the open",
		"github.desc":
			"My repositories hold my projects and experiments \u2014 the place where the work actually lives.",
		"github.cta": "Visit GitHub",

		"contact.title": "Contact",
		"contact.kicker": "Let\u2019s talk",
		"contact.desc": "You can reach me on these platforms:",
		"contact.email": "Send an email",

		"footer.built": "Built with Astro, TypeScript & Tailwind.",
		"footer.rights": "All rights reserved.",
		"footer.impressum": "Impressum",
		"footer.privacy": "Privacy",
	},
	de: {
		"nav.home": "Start",
		"nav.about": "\u00dcber mich",
		"nav.skills": "F\u00e4higkeiten",
		"nav.projects": "Projekte",
		"nav.journey": "Werdegang",
		"nav.contact": "Kontakt",
		"nav.menu": "Men\u00fc",
		"theme.toggle": "Thema wechseln",

		"hero.eyebrow": "K\u00fcnftiger Fachinformatiker",
		"hero.lead":
			"IT-Begeisterter mit Fokus auf Linux, Infrastruktur, Netzwerke, Automatisierung und moderne Technologien \u2014 ich baue echte Projekte und lerne kontinuierlich.",
		"hero.cta.projects": "Projekte ansehen",
		"hero.cta.contact": "Kontakt",

		"about.title": "\u00dcber mich",
		"about.kicker": "Wer ich bin",
		"about.p1":
			"Ich bin Amir, IT-Begeisterter und bereite mich auf eine Ausbildung als Fachinformatiker in Deutschland vor. Mich fasziniert, zu verstehen, wie Systeme wirklich funktionieren \u2014 von Linux und Netzwerken bis zu Servern und Automatisierung.",
		"about.p2":
			"Ich lerne, indem ich baue. Statt nur Tutorials zu sammeln, erstelle ich kleine echte Projekte, dokumentiere sie und verbessere sie kontinuierlich. Mein Ziel ist einfach: der st\u00e4rkste und am besten vorbereitete Junior-Kandidat zu sein, in den ein Unternehmen investieren kann.",

		"focus.title": "Technischer Fokus",
		"focus.kicker": "Wo mein Interesse liegt",

		"skills.title": "F\u00e4higkeiten",
		"skills.kicker": "Technologien, die ich nutze & erkunde",

		"projects.title": "Ausgew\u00e4hlte Projekte",
		"projects.kicker": "Was ich baue & lerne",
		"projects.viewCode": "Code ansehen",
		"projects.comingSoon": "Demn\u00e4chst",

		"journey.title": "Werdegang",
		"journey.kicker": "Wie ich hierher kam",
		"journey.current": "Gerade dabei",

		"certs.title": "Zertifikate",
		"certs.kicker": "Offizielles Lernen",
		"certs.empty": "Zertifikate werden erg\u00e4nzt \u2014 Projekte bleiben der Hauptnachweis.",

		"github.title": "Auf GitHub",
		"github.kicker": "Echter Code, \u00f6ffentlich",
		"github.desc":
			"In meinen Repositories liegen meine Projekte und Experimente \u2014 dort, wo die Arbeit wirklich stattfindet.",
		"github.cta": "GitHub besuchen",

		"contact.title": "Kontakt",
		"contact.kicker": "Sprechen wir",
		"contact.desc": "Sie k\u00f6nnen mich \u00fcber diese Plattformen erreichen:",
		"contact.email": "E-Mail senden",

		"footer.built": "Gebaut mit Astro, TypeScript & Tailwind.",
		"footer.rights": "Alle Rechte vorbehalten.",
		"footer.impressum": "Impressum",
		"footer.privacy": "Datenschutz",
	},
} as const

export type UIKey = keyof (typeof ui)[typeof defaultLang]
