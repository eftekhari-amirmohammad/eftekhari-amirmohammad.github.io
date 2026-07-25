// Skills = technology familiarity, shown as cards (no percentages, spec 03 §7).
// A skill can be a plain name or an object with a small note (e.g. "a little bit").
export type Skill = string | { name: string; note?: string }

export type SkillGroup = {
	category: { en: string; de: string }
	icon: string
	skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
	{
		category: { en: "Operating Systems", de: "Betriebssysteme" },
		icon: "terminal",
		skills: ["Linux", "Ubuntu", "Windows Server"],
	},
	{
		category: { en: "Programming", de: "Programmierung" },
		icon: "code-2",
		skills: ["Python", "Java"],
	},
	{
		category: { en: "Infrastructure", de: "Infrastruktur" },
		icon: "network",
		skills: [{ name: "Docker", note: "🌱 a little bit" }, "Git", "Networking", "Virtualization"],
	},
	{
		category: { en: "Tools", de: "Werkzeuge" },
		icon: "wrench",
		skills: ["Notion", "Claude", "ChatGPT", "n8n"],
	},
]
