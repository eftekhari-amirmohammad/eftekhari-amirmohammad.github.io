// Projects are the strongest proof (spec 08). Only real projects are marked
// "live"; flagship future projects are honest "coming-soon" cards.
import type { Lang } from "@i18n/ui"

export type Project = {
	slug: string
	title: string
	category: Record<Lang, string>
	description: Record<Lang, string>
	tech: string[]
	github?: string
	demo?: string
	image?: string
	/** internal priority from spec 08 §18 */
	rating: 3 | 4 | 5
	status: "live" | "coming-soon"
	icon: string
}

export const projects: Project[] = [
	{
		slug: "homelab",
		title: "Personal Infrastructure HomeLab",
		category: {
			en: "Infrastructure / System Integration",
			de: "Infrastruktur / Systemintegration",
		},
		description: {
			en: "A self-hosted lab exploring Linux servers, virtualization, networking, Docker services and monitoring \u2014 hands-on system integration.",
			de: "Ein selbst gehostetes Labor f\u00fcr Linux-Server, Virtualisierung, Netzwerke, Docker-Dienste und Monitoring \u2014 praktische Systemintegration.",
		},
		tech: ["Linux", "Docker", "Networking", "Virtualization", "Monitoring"],
		rating: 5,
		status: "coming-soon",
		icon: "server",
	},
	{
		slug: "n8n-automation",
		title: "Automation Workflow with n8n",
		category: { en: "Automation / AI Workflow", de: "Automatisierung / KI-Workflow" },
		description: {
			en: "A workflow that connects APIs and triggers to automate a repetitive task \u2014 demonstrating modern automation and workflow thinking.",
			de: "Ein Workflow, der APIs und Trigger verbindet, um eine wiederkehrende Aufgabe zu automatisieren \u2014 modernes Automatisierungsdenken.",
		},
		tech: ["n8n", "APIs", "Automation"],
		rating: 4,
		status: "coming-soon",
		icon: "workflow",
	},
	{
		slug: "password-generator",
		title: "Secure Password Generator",
		category: { en: "Programming / Security Utility", de: "Programmierung / Sicherheits-Tool" },
		description: {
			en: "A Python application to practice program structure, user input handling and secure random password generation.",
			de: "Eine Python-Anwendung, um Programmstruktur, Eingabeverarbeitung und sichere Passwortgenerierung zu \u00fcben.",
		},
		tech: ["Python"],
		github: "https://github.com/eftekhari-amirmohammad",
		rating: 3,
		status: "live",
		icon: "key-round",
	},
	{
		slug: "tippspeed",
		title: "TippSpeed",
		category: { en: "Java Application", de: "Java-Anwendung" },
		description: {
			en: "A Java project demonstrating application logic, program organization and user interaction.",
			de: "Ein Java-Projekt, das Anwendungslogik, Programmorganisation und Benutzerinteraktion demonstriert.",
		},
		tech: ["Java"],
		github: "https://github.com/eftekhari-amirmohammad",
		rating: 3,
		status: "live",
		icon: "keyboard",
	},
]
