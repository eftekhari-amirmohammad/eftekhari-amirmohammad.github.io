// Build-time GitHub integration: pulls public repos and turns them into
// Project cards. Runs during `astro build`, so it is fast and SEO-friendly.
// If the network/API is unavailable (e.g. offline local build), it gracefully
// falls back to the curated list in @data/projects so the build never breaks.
import { githubUsername } from "@data/site"
import { projects as fallbackProjects, type Project } from "@data/projects"
import type { IconName } from "@lib/icons"

type Repo = {
	name: string
	description: string | null
	html_url: string
	homepage: string | null
	language: string | null
	topics?: string[]
	fork: boolean
	archived: boolean
	stargazers_count: number
	pushed_at: string
	default_branch: string
}

const languageIcon: Record<string, IconName> = {
	Python: "code-2",
	Java: "code-2",
	JavaScript: "code-2",
	TypeScript: "code-2",
	Go: "code-2",
	Rust: "code-2",
	C: "code-2",
	"C++": "code-2",
	"C#": "code-2",
	HTML: "code-2",
	CSS: "code-2",
	Shell: "terminal",
	PowerShell: "terminal",
	Dockerfile: "server",
	HCL: "server",
}

function iconFor(repo: Repo): string {
	if (repo.language && languageIcon[repo.language]) return languageIcon[repo.language]
	return "github"
}

function prettyName(name: string): string {
	return name
		.replace(/[-_]+/g, " ")
		.replace(/\b\w/g, (c) => c.toUpperCase())
		.trim()
}

// Turn a raw markdown line into clean plain text for a card title/description.
function stripMd(line: string): string {
	return line
		.replace(/`([^`]+)`/g, "$1")
		.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
		.replace(/[*_>#]+/g, "")
		.replace(/\s+/g, " ")
		.trim()
}

const API_BASE = "https://api.github.com/users/"
const RAW_BASE = "https://raw.githubusercontent.com/"

// For repos with no GitHub "description", fall back to the README:
// first "# H1" becomes the title, first real paragraph becomes the text.
async function readmeMeta(
	repo: string,
	branch: string,
): Promise<{ title?: string; desc?: string }> {
	try {
		const url = RAW_BASE + githubUsername + "/" + repo + "/" + branch + "/README.md"
		const res = await fetch(url, { headers: { "User-Agent": "portfolio-build" } })
		if (!res.ok) return {}
		const md = await res.text()
		const lines = md.split(/\r?\n/)
		let title: string | undefined
		let desc: string | undefined
		for (const raw of lines) {
			const line = raw.trim()
			if (!line) continue
			if (!title && line.startsWith("# ")) {
				title = stripMd(line)
				continue
			}
			if (title && !desc) {
				if (line.startsWith("#")) continue
				if (line.startsWith("!") || line.startsWith("[!")) continue
				if (line.startsWith("<")) continue
				if (line.startsWith("---") || line.startsWith("===")) continue
				if (line.startsWith("|")) continue
				desc = stripMd(line)
				if (desc.length > 160) desc = desc.slice(0, 157).trim() + "\u2026"
				break
			}
		}
		return { title, desc }
	} catch {
		return {}
	}
}

export async function getProjects(): Promise<Project[]> {
	try {
		const endpoint = API_BASE + githubUsername + "/repos?per_page=100&sort=pushed"
		const res = await fetch(endpoint, {
			headers: {
				Accept: "application/vnd.github+json",
				"User-Agent": "portfolio-build",
			},
		})
		if (!res.ok) return fallbackProjects
		const repos = (await res.json()) as Repo[]
		if (!Array.isArray(repos)) return fallbackProjects

		const user = githubUsername.toLowerCase()
		const visible = repos
			.filter((r) => !r.fork && !r.archived)
			// Hide the special profile-readme repo and the .github repo.
			.filter((r) => r.name.toLowerCase() !== user && r.name.toLowerCase() !== ".github")
			.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())

		if (visible.length === 0) return fallbackProjects

		const generic = "A project on GitHub \u2014 open the repository to explore the code."

		return await Promise.all(
			visible.map(async (r) => {
				let title = prettyName(r.name)
				let desc: string | undefined = r.description ?? undefined
				// Enrich from README only when the GitHub description is empty.
				if (!r.description) {
					const meta = await readmeMeta(r.name, r.default_branch || "main")
					if (meta.title) title = meta.title
					if (meta.desc) desc = meta.desc
				}
				const category = r.language ?? "Repository"
				const finalDesc = desc ?? generic
				return {
					slug: r.name,
					title,
					category: { en: category, de: category },
					description: { en: finalDesc, de: finalDesc },
					tech: (r.topics ?? []).slice(0, 5),
					github: r.html_url,
					demo: r.homepage || undefined,
					rating: 3,
					status: "live",
					icon: iconFor(r),
				} as Project
			}),
		)
	} catch {
		return fallbackProjects
	}
}
