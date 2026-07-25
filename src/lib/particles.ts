// Lightweight canvas particle network. Performance-first (spec 05, 09):
// - Skips on mobile (<768px) and prefers-reduced-motion.
// - Caps particle count, pauses when tab hidden / offscreen.
// - Uses only device-pixel-aware 2D canvas; no heavy libs.

type P = { x: number; y: number; vx: number; vy: number }

export function initParticleNetwork(canvasId: string) {
	const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null
	if (!canvas) return

	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
	const isMobile = window.matchMedia("(max-width: 767px)").matches
	if (reduced || isMobile) return

	const ctx = canvas.getContext("2d", { alpha: true })
	if (!ctx) return

	const COLOR = "59,130,246" // accent
	let width = 0
	let height = 0
	let dpr = Math.min(window.devicePixelRatio || 1, 2)
	let particles: P[] = []
	let raf = 0
	let running = true
	const mouse = { x: -9999, y: -9999 }

	const LINK_DIST = 130

	function resize() {
		const rect = canvas!.getBoundingClientRect()
		width = rect.width
		height = rect.height
		dpr = Math.min(window.devicePixelRatio || 1, 2)
		canvas!.width = Math.floor(width * dpr)
		canvas!.height = Math.floor(height * dpr)
		ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

		// Density scaled to area, hard-capped for performance.
		const count = Math.min(70, Math.floor((width * height) / 16000))
		particles = Array.from({ length: count }, () => ({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - 0.5) * 0.35,
			vy: (Math.random() - 0.5) * 0.35,
		}))
	}

	function step() {
		if (!running) return
		ctx!.clearRect(0, 0, width, height)

		for (const p of particles) {
			p.x += p.vx
			p.y += p.vy
			if (p.x < 0 || p.x > width) p.vx *= -1
			if (p.y < 0 || p.y > height) p.vy *= -1
		}

		// Links
		for (let i = 0; i < particles.length; i++) {
			const a = particles[i]
			for (let j = i + 1; j < particles.length; j++) {
				const b = particles[j]
				const dx = a.x - b.x
				const dy = a.y - b.y
				const dist = Math.hypot(dx, dy)
				if (dist < LINK_DIST) {
					const alpha = (1 - dist / LINK_DIST) * 0.35
					ctx!.strokeStyle = `rgba(${COLOR},${alpha})`
					ctx!.lineWidth = 1
					ctx!.beginPath()
					ctx!.moveTo(a.x, a.y)
					ctx!.lineTo(b.x, b.y)
					ctx!.stroke()
				}
			}

			// Subtle mouse links
			const mdx = a.x - mouse.x
			const mdy = a.y - mouse.y
			const mdist = Math.hypot(mdx, mdy)
			if (mdist < LINK_DIST * 1.4) {
				const alpha = (1 - mdist / (LINK_DIST * 1.4)) * 0.4
				ctx!.strokeStyle = `rgba(${COLOR},${alpha})`
				ctx!.beginPath()
				ctx!.moveTo(a.x, a.y)
				ctx!.lineTo(mouse.x, mouse.y)
				ctx!.stroke()
			}
		}

		// Nodes
		ctx!.fillStyle = `rgba(${COLOR},0.55)`
		for (const p of particles) {
			ctx!.beginPath()
			ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
			ctx!.fill()
		}

		raf = requestAnimationFrame(step)
	}

	function start() {
		if (raf) cancelAnimationFrame(raf)
		running = true
		step()
	}
	function stop() {
		running = false
		if (raf) cancelAnimationFrame(raf)
	}

	resize()
	start()

	window.addEventListener("resize", () => {
		resize()
	})
	window.addEventListener(
		"pointermove",
		(e) => {
			const rect = canvas!.getBoundingClientRect()
			mouse.x = e.clientX - rect.left
			mouse.y = e.clientY - rect.top
		},
		{ passive: true },
	)
	window.addEventListener("pointerout", () => {
		mouse.x = -9999
		mouse.y = -9999
	})
	document.addEventListener("visibilitychange", () => {
		if (document.hidden) stop()
		else start()
	})

	// Pause when hero scrolled out of view.
	if ("IntersectionObserver" in window) {
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) start()
				else stop()
			},
			{ threshold: 0 },
		)
		io.observe(canvas)
	}
}
