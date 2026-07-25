// Certificates support the story; they never dominate (spec 07 §15).
// Empty by default — renders a professional "coming soon" state (spec 04 §17).
import type { Lang } from "@i18n/ui"

export type Certificate = {
	title: string
	issuer: string
	year?: string
	/** Optional image, e.g. "/images/certificates/goethe-b1.webp" (put files in public/images/certificates/). */
	image?: string
	description?: Record<Lang, string>
}

// TODO(amir): add real certificates. Example:
// {
// 	title: "Goethe-Zertifikat B1",
// 	issuer: "Goethe-Institut",
// 	year: "2026",
// 	image: "/images/certificates/goethe-b1.webp",
// 	description: { en: "German language certificate.", de: "Deutsches Sprachzertifikat." },
// },
export const certificates: Certificate[] = []
