
const fs = require('fs');
const path = require('path');
const assert = require('assert').strict;

const newJsonFilePath = process.env.NEW_JSON_FILE_PATH;
const oldJsFilePath = process.env.OLD_JS_FILE_PATH;

process.env.CONFIG_JSON_PATH = newJsonFilePath;
const configLoader = require('./configLoader');


// Check if the required environment variables are set
if (!oldJsFilePath || !newJsonFilePath) {
  console.error('Please provide the OLD_JS_FILE_PATH and JSON_FILE_PATH environment variables.');
  process.exit(1);
}

// console.log(oldJsFilePath)
// console.log(newJsonFilePath)

// Set the environment variable for the JSON file path
process.env.CONFIG_JSON_PATH = newJsonFilePath;

// Load the old JavaScript file and execute it
const oldConfig = require(oldJsFilePath);

// Load the JSON file using configLoader
const newConfig = configLoader;

// console.log("================")
// console.log('newConfig:', JSON.stringify(newConfig, null, 2));
// console.log("================")
// console.log('oldConfig:', JSON.stringify(oldConfig, null, 2));
// console.log("================")

try {
  console.log(`\n\nTesting:\n\t${oldJsFilePath}\n\t${newJsonFilePath}`);
  assert.deepStrictEqual(newConfig, oldConfig);
  console.log(`\x1b[32mPassed\x1b[0m`);
} catch (error) {
  console.error(`\x1b[31mFailed:\x1b[0m`, error.message);
  process.exit(1);
}