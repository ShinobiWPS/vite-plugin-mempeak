export default function memPeak() {
	let peak = 0n

	const sample = () => {
		// optional: run node with --expose-gc to reduce sampling noise
		;(global).gc?.()
		const { heapUsed } = process.memoryUsage()
		if (BigInt(heapUsed) > peak) peak = BigInt(heapUsed)
	}

	return {
		name: 'mempeak',
		apply: 'build',
		buildStart() {
			sample()
			const mb = Number(peak) / 1024 / 1024
			console.log(`[mempeak] V8 heap peak: ${mb.toFixed(1)} MB`)
		},
		transform() {
			sample()
		}, // runs a lot during build
		transformIndexHtml() {
			sample()
		},

		closeBundle() {
			sample()
			const mb = Number(peak) / 1024 / 1024
			console.log(`[mempeak] V8 heap peak: ${mb.toFixed(1)} MB`)
			console.log(`close bundle`)
		},
	}
}
