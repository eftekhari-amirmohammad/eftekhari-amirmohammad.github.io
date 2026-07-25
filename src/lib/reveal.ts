// Scroll reveal via IntersectionObserver. Respects reduced motion and
// degrades gracefully (content visible if JS/observer unavailable).
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

function initReveal() {
	const nodes = document.querySelectorAll<HTMLElement>(".reveal")
	if (prefersReduced || !("IntersectionObserver" in window)) {
		nodes.forEach((n) => n.classList.add("is-visible"))
		return
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const el = entry.target as HTMLElement
					const delay = el.dataset.revealDelay
					if (delay) el.style.transitionDelay = `${delay}ms`
					el.classList.add("is-visible")
					observer.unobserve(el)
				}
			})
		},
		{ rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
	)

	nodes.forEach((n) => observer.observe(n))
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initReveal)
} else {
	initReveal()
}
