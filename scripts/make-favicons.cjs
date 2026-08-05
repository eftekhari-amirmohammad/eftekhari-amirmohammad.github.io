// Generates the favicon package from public/favicon.svg using sharp.
// Run: node scripts/make-favicons.cjs
const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const pub = path.join(__dirname, "..", "public")
const roundedSvg = fs.readFileSync(path.join(pub, "favicon.svg"))

// Full-bleed variant (no rounded corners) for Apple touch icon + Android,
// because those platforms apply their own mask/shape.
const fullBleedSvg = Buffer.from(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">' +
		'<rect width="64" height="64" fill="#3B82F6"/>' +
		'<g fill="none" stroke="#FFFFFF" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round">' +
		'<path d="M10.5 47 L19.5 17 L28.5 47"/>' +
		'<path d="M14 37 H25"/>' +
		'<path d="M53.5 17 H38.5 V47 H53.5"/>' +
		'<path d="M38.5 32 H49.5"/>' +
		"</g></svg>",
)

function render(svg, size) {
	return sharp(svg, { density: 1024 })
		.resize(size, size, { fit: "contain" })
		.png({ compressionLevel: 9 })
		.toBuffer()
}

// Minimal ICO container that embeds PNG images (supported by all modern browsers).
function buildIco(buffers, sizes) {
	const count = buffers.length
	const header = Buffer.alloc(6)
	header.writeUInt16LE(0, 0) // reserved
	header.writeUInt16LE(1, 2) // type: icon
	header.writeUInt16LE(count, 4)

	const entries = []
	let offset = 6 + count * 16
	for (let i = 0; i < count; i++) {
		const e = Buffer.alloc(16)
		const s = sizes[i] >= 256 ? 0 : sizes[i]
		e.writeUInt8(s, 0) // width
		e.writeUInt8(s, 1) // height
		e.writeUInt8(0, 2) // palette count
		e.writeUInt8(0, 3) // reserved
		e.writeUInt16LE(1, 4) // color planes
		e.writeUInt16LE(32, 6) // bits per pixel
		e.writeUInt32LE(buffers[i].length, 8)
		e.writeUInt32LE(offset, 12)
		offset += buffers[i].length
		entries.push(e)
	}
	return Buffer.concat([header].concat(entries).concat(buffers))
}

async function main() {
	// Standard PNG fallbacks (rounded tile, matches the SVG)
	for (const size of [16, 32]) {
		const buf = await render(roundedSvg, size)
		fs.writeFileSync(path.join(pub, "favicon-" + size + "x" + size + ".png"), buf)
	}

	// favicon.ico with 16 / 32 / 48 px frames
	const icoSizes = [16, 32, 48]
	const icoBufs = []
	for (const size of icoSizes) {
		icoBufs.push(await render(roundedSvg, size))
	}
	fs.writeFileSync(path.join(pub, "favicon.ico"), buildIco(icoBufs, icoSizes))

	// Apple touch icon (full-bleed, iOS applies its own rounding)
	fs.writeFileSync(
		path.join(pub, "apple-touch-icon.png"),
		await render(fullBleedSvg, 180),
	)

	// Android / PWA manifest icons
	fs.writeFileSync(
		path.join(pub, "android-chrome-192x192.png"),
		await render(fullBleedSvg, 192),
	)
	fs.writeFileSync(
		path.join(pub, "android-chrome-512x512.png"),
		await render(fullBleedSvg, 512),
	)

	console.log("favicon package generated")
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
