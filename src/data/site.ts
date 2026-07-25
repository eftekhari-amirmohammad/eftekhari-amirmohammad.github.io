// Single source of truth for identity + links (spec 03, 09, 14).
export const site = {
	name: "Amirmohammad Eftekhari",
	fullName: "Amirmohammad Eftekhari",
	initials: "AE",
	title: "Future Fachinformatiker",
	domain: "amireftekhari.dev",
	url: "https://amireftekhari.dev",
	email: "eftekhariamirmohammad2005@gmail.com",
	location: "Germany-bound \u00b7 IT & Infrastructure",
} as const

// GitHub account the Projects section (and optional Journey) pull from.
export const githubUsername = "eftekhari-amirmohammad"

export const socials = {
	github: {
		label: "GitHub",
		handle: "eftekhari-amirmohammad",
		url: "https://github.com/eftekhari-amirmohammad",
		icon: "github",
	},
	linkedin: {
		label: "LinkedIn",
		handle: "amirmohammad-eftekhari",
		url: "https://www.linkedin.com/in/amirmohammad-eftekhari-6b0ba5344",
		icon: "linkedin",
	},
	xing: {
		label: "Xing",
		handle: "Amirmohammad_Eftekhari",
		url: "https://www.xing.com/profile/Amirmohammad_Eftekhari",
		icon: "xing",
	},
	email: {
		label: "Email",
		handle: "eftekhariamirmohammad2005@gmail.com",
		url: "mailto:eftekhariamirmohammad2005@gmail.com",
		icon: "mail",
	},
} as const

export type SocialKey = keyof typeof socials
