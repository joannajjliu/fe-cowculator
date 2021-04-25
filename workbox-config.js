module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{png,jpg,html,json}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js'
};