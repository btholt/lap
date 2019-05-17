/* eslint-disable no-console */

const { mark, end } = require(".");
const { execSync } = require("child_process");
const assert = require("assert");

mark("sleep 1");
execSync("sleep 1");
mark("sleep 2");
execSync("sleep 2");
mark("sleep 1");
execSync("sleep 1");
const times = end();

assert(times[0].tag === "sleep 1", "checking first tag name");
assert(times[1].tag === "sleep 2", "checking second tag name");
assert(times[2].tag === "sleep 1", "checking third tag name");

console.info("passed tag name assertions");

assert(Math.abs(times[0].ms - 1000) < 50, "checking first timing");
assert(Math.abs(times[1].ms - 2000) < 50, "checking second timing");
assert(Math.abs(times[0].ms - 1000) < 50, "checking third timing");

console.info("passed timing assertions");
