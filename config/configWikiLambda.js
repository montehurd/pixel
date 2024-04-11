const BASE_URL = process.env.PIXEL_MW_SERVER;
const utils = require( '../utils' );
const {
	VIEWPORT_PHONE,
	VIEWPORT_TABLET,
	VIEWPORT_DESKTOP,
	VIEWPORT_DESKTOP_WIDE,
	VIEWPORT_DESKTOP_WIDEST
} = require( '../viewports' );

const scenarios = [
	{
		label: 'Special:CreateZObject (#vector-2022)',
		path: '/wiki/Special:CreateZObject',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Special:EvaluateFunctionCall (#vector-2022)',
		path: '/wiki/Special:EvaluateFunctionCall',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z1 (#vector-2022)',
		path: '/wiki/Z1',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z104 (#vector-2022)',
		path: '/wiki/Z104',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z204 (#vector-2022)',
		path: '/wiki/Z204',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z500 (#vector-2022)',
		path: '/wiki/Z500',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z600 (#vector-2022)',
		path: '/wiki/Z600',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z801 (#vector-2022)',
		path: '/wiki/Z801',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z901 (#vector-2022)',
		path: '/wiki/Z901',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z1001 (#vector-2022)',
		path: '/wiki/Z1001',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	},
	{
		label: 'Z8010 (#vector-2022)',
		path: '/wiki/Z8010',
		selectors: ['viewport'],
		misMatchThreshold: 0.04
	}
].map( ( test ) => {
	return {
		url: `${BASE_URL}${test.path}`,
		...test
	};
} );

module.exports = {
	id: 'MediaWiki',
	viewports: [
		VIEWPORT_PHONE,
		VIEWPORT_TABLET,
		VIEWPORT_DESKTOP,
		VIEWPORT_DESKTOP_WIDE,
		VIEWPORT_DESKTOP_WIDEST
	],
	onBeforeScript: 'puppet/onBefore.js',
	onReadyScript: 'puppet/onReady.js',
	scenarios,
	paths: utils.makePaths( 'wikilambda' ),
	report: [],
	engine: 'puppeteer',
	engineOptions: {
		headless: 'new',
		args: [
			'--no-sandbox'
		]
	},
	asyncCaptureLimit: 10,
	asyncCompareLimit: 50,
	debug: false,
	debugWindow: false
};
