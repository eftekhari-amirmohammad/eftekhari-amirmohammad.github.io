// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

// https://astro.build
export default defineConfig({
	site: "https://amireftekhari.dev",
	trailingSlash: "ignore",
	integrations: [
		tailwind({ applyBaseStyles: false }),
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: { en: "en", de: "de" },
			},
		}),
	],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "de"],
		routing: { prefixDefaultLocale: false },
	},
	build: { inlineStylesheets: "auto" },
	vite: {
		build: { cssCodeSplit: true },
	},
})
