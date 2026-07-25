import type { Config } from "tailwindcss"

export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
	darkMode: ["class", '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				// Backgrounds
				bg: {
					DEFAULT: "#0A0A0A",
					900: "#0A0A0A",
					800: "#111111",
					700: "#151515",
				},
				// Surfaces (cards, sections)
				surface: {
					DEFAULT: "#181818",
					100: "#181818",
					200: "#202020",
					300: "#242424",
				},
				// Text
				ink: {
					DEFAULT: "#F5F5F5",
					secondary: "#A1A1AA",
					muted: "#71717A",
				},
				// Accent (single accent per spec 02)
				accent: {
					DEFAULT: "#3B82F6",
					hover: "#60A5FA",
					soft: "rgba(59,130,246,0.12)",
				},
				hairline: "rgba(255,255,255,0.10)",
			},
			fontFamily: {
				sans: [
					"Geist Sans",
					"Inter",
					"system-ui",
					"-apple-system",
					"Segoe UI",
					"sans-serif",
				],
				mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "monospace"],
			},
			borderRadius: {
				xl: "16px",
				"2xl": "20px",
				"3xl": "24px",
			},
			maxWidth: {
				content: "1200px",
				wide: "1280px",
			},
			spacing: {
				section: "160px",
				"section-mobile": "80px",
			},
			keyframes: {
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(16px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				"fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
				"fade-in": "fade-in 0.8s ease-out both",
			},
			transitionTimingFunction: {
				premium: "cubic-bezier(0.22,1,0.36,1)",
			},
		},
	},
	plugins: [],
} satisfies Config
