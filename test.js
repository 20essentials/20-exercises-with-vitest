/*
  pnpm test 1     # Runs all tests in folder 1
  pnpm test 2     # Runs all tests in folder 2
  pnpm test 20    # Runs all tests in folder 20
*/

import { spawn } from "node:child_process";

const arg = process.argv[2];

if (!arg || isNaN(arg)) {
  console.error("Please provide the test number. Example: pnpm test 1");
  process.exit(1);
}

const testPath = `${arg}/**/*.test.js`;

const child = spawn("npx", ["vitest", "run", testPath], {
  stdio: "inherit"
});

child.on("exit", (code) => process.exit(code));
