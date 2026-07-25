// Learning Journey timeline (spec 03 §9) — shows growth, key for a junior.
// `status: "current"` marks the stage you're actively learning/doing (green badge).
// This is the offline fallback; see src/lib/journey.ts to later source it from a GitHub repo.
import type { Lang } from "@i18n/ui"

export type TimelineItem = {
	icon: string
	title: Record<Lang, string>
	description: Record<Lang, string>
	status?: "done" | "current"
}

export const timeline: TimelineItem[] = [
	{
		icon: "sprout",
		title: { en: "IT Foundation", de: "IT-Grundlagen" },
		description: {
			en: "Built the fundamentals of how computers, files and systems work.",
			de: "Grundlagen dar\u00fcber aufgebaut, wie Computer, Dateien und Systeme funktionieren.",
		},
		status: "done",
	},
	{
		icon: "code-2",
		title: { en: "Programming", de: "Programmierung" },
		description: {
			en: "Learned to build applications with Python and Java.",
			de: "Gelernt, Anwendungen mit Python und Java zu entwickeln.",
		},
		status: "done",
	},
	{
		icon: "terminal",
		title: { en: "Linux & Networking", de: "Linux & Netzwerke" },
		description: {
			en: "Moved into Linux administration and core networking concepts.",
			de: "\u00dcbergang zur Linux-Administration und zentralen Netzwerkkonzepten.",
		},
		status: "done",
	},
	{
		icon: "workflow",
		title: { en: "Automation", de: "Automatisierung" },
		description: {
			en: "Started automating tasks with n8n, scripting and AI tooling.",
			de: "Begonnen, Aufgaben mit n8n, Skripten und KI-Werkzeugen zu automatisieren.",
		},
		status: "done",
	},
	{
		icon: "server",
		title: { en: "HomeLab", de: "HomeLab" },
		description: {
			en: "Building a personal infrastructure lab to learn system integration by doing.",
			de: "Aufbau eines pers\u00f6nlichen Infrastruktur-Labors, um Systemintegration praktisch zu lernen.",
		},
		status: "current",
	},
	{
		icon: "target",
		title: { en: "Fachinformatiker Goal", de: "Ziel Fachinformatiker" },
		description: {
			en: "Preparing for an Ausbildung as Fachinformatiker in Germany.",
			de: "Vorbereitung auf eine Ausbildung als Fachinformatiker in Deutschland.",
		},
	},
]
