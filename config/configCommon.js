module.exports = {
	id: 'MediaWiki',
	asyncCaptureLimit: 1,
	asyncCompareLimit: 25,
	engine: 'puppeteer',
	engineOptions: {
		headless: false,
		slowMo: 100,
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--disable-dev-shm-usage',
			'--disable-gpu',
			'--disable-gpu-sandbox'
		]
	},
	debug: false,
	debugWindow: false,
	delay: 1000
};
