// Learning Journey source. By default it uses the local timeline in
// @data/timeline. When you create your GitHub "learning journey" repo, set
// JOURNEY_REPO to its name and add a journey.json at the repo root; the site
// will then pull the journey from there at build time (with the local list as
// a safe fallback).
//
// journey.json format (array of items):
// [
//   {
//     "icon": "sprout",
//     "title": { "en": "IT Foundation", "de": "IT-Grundlagen" },
//     "description": { "en": "...", "de": "..." },
//     "status": "done"        // or "current" for the stage you're on now
//   }
// ]
import { timeline, type TimelineItem } from "@data/timeline"
import { githubUsername } from "@data/site"

// Leave empty until the repo exists (e.g. "learning-journey").
const JOURNEY_REPO = ""
const BRANCH = "main"
const RAW_BASE = "https://raw.githubusercontent.com/"

export async function getJourney(): Promise<TimelineItem[]> {
	if (!JOURNEY_REPO) return timeline
	try {
		const url = RAW_BASE + githubUsername + "/" + JOURNEY_REPO + "/" + BRANCH + "/journey.json"
		const res = await fetch(url, { headers: { "User-Agent": "portfolio-build" } })
		if (!res.ok) return timeline
		const data = (await res.json()) as unknown
		if (!Array.isArray(data) || data.length === 0) return timeline
		return data as TimelineItem[]
	} catch {
		return timeline
	}
}
