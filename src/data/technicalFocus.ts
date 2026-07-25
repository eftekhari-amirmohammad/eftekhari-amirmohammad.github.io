// Technical Focus = core identity, distinct from Skills (spec 03 §6).
// Presented as cards, never progress bars.
import type { Lang } from "@i18n/ui"

export type FocusArea = {
	icon: string
	title: Record<Lang, string>
	description: Record<Lang, string>
	items: string[]
}

export const technicalFocus: FocusArea[] = [
	{
		icon: "server",
		title: { en: "Infrastructure", de: "Infrastruktur" },
		description: {
			en: "Linux systems, servers, networking and virtualization \u2014 the foundation of system integration.",
			de: "Linux-Systeme, Server, Netzwerke und Virtualisierung \u2014 das Fundament der Systemintegration.",
		},
		items: ["Linux", "Servers", "Networking", "Virtualization"],
	},
	{
		icon: "workflow",
		title: { en: "Automation", de: "Automatisierung" },
		description: {
			en: "Building workflows and scripts that remove repetitive work, supported by modern AI tooling.",
			de: "Workflows und Skripte, die wiederkehrende Arbeit entfernen \u2014 unterst\u00fctzt durch moderne KI-Werkzeuge.",
		},
		items: ["n8n", "Scripting", "AI tools"],
	},
	{
		icon: "code-2",
		title: { en: "Development", de: "Entwicklung" },
		description: {
			en: "Writing clean, understandable code to turn ideas into working applications.",
			de: "Sauberer, verst\u00e4ndlicher Code, um Ideen in funktionierende Anwendungen zu verwandeln.",
		},
		items: ["Python", "Java"],
	},
]
