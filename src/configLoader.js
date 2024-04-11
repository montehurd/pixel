const fs = require('fs');
const path = require('path');
const BASE_URL = process.env.PIXEL_MW_SERVER;
const utils = require('../utils');
const {
  VIEWPORT_PHONE,
  VIEWPORT_TABLET,
  VIEWPORT_DESKTOP,
  VIEWPORT_DESKTOP_WIDE,
  VIEWPORT_DESKTOP_WIDEST
} = require('../viewports');

// Get the JSON file path from the environment variable
const jsonFilePath = process.env.CONFIG_JSON_PATH;

// Load the JSON data from the specified file
const configData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Extract the viewports, scenarios, and other configuration options from the JSON data
const { viewports, scenarios, skins, misMatchThreshold, ...otherOptions } = configData;

const mappedScenarios = scenarios.map(test => {
  const { label, path, viewports: testViewports = [], delay = 0, hashtags = [], ...otherTestOptions } = test;
  const scenario = {
    label,
    path,
    selectors: ['viewport'],
    url: `${BASE_URL}${path}`,
    misMatchThreshold: misMatchThreshold || 0.04,
    ...otherTestOptions
  };

  // if (hashtags && hashtags.length > 0) {
  if (hashtags && hashtags.length > 0) {
    scenario.hashtags = hashtags;
  }

  if (testViewports.length > 0) {
    scenario.viewports = testViewports.map(viewport => {
      switch (viewport) {
        case 'phone':
          return VIEWPORT_PHONE;
        case 'tablet':
          return VIEWPORT_TABLET;
        case 'desktop':
          return VIEWPORT_DESKTOP;
        case 'desktop-wide':
          return VIEWPORT_DESKTOP_WIDE;
        case 'desktop-widest':
          return VIEWPORT_DESKTOP_WIDEST;
        default:
          throw new Error(`Unknown viewport: ${viewport}`);
      }
    });
  }

  if (delay !== 0) {
    scenario.delay = delay;
  }

  return scenario;
});

const generatedScenarios = skins ? utils.makeScenariosForSkins(mappedScenarios, skins) : mappedScenarios;

// Generate the output object
const output = {
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
  scenarios: generatedScenarios,
  paths: utils.makePaths(path.parse(jsonFilePath).name.replace('config', '').toLowerCase()),
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
  debugWindow: false,
  ...otherOptions
};

// Remove the scenarioOptions property
delete output.scenarioOptions;

// Export the output object
module.exports = output;