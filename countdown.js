//
// Collect the time from argv
//
const parseArgs = require("minimist");
const { time } = parseArgs(process.argv);
const { stdout: log } = require("single-line-log");

if (!time) {
  throw new Error("--time is required");
}

if (!parseInt(time)) {
  throw new Error("--time must be a number");
}

const count = parseInt(time);
let message = "";

for (let i = 0; i < count; i++) {
  message += "*";
}

log(message);

setTimeout(() => {
  log("overwrites line");
}, 2000);

//
// Print starts in-line
//

//
// Run a timer and remove stars
//
