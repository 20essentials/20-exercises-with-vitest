/*
  pnpm test 1     # Runs all tests in folder 1
  pnpm test 2     # Runs all tests in folder 2
  pnpm test 20    # Runs all tests in folder 20
*/

import { spawn } from "node:child_process";
import path from "node:path";

const arg = process.argv[2];

if (!arg || isNaN(arg)) {
  console.error("Please provide the test folder number. Example: pnpm test 1");
  process.exit(1);
}

// Usamos ruta absoluta de la carpeta del test
const testDir = path.resolve(arg);

const child = spawn("npx", ["vitest", "watch", "--dir", testDir], {
  stdio: "inherit",
  shell: true
});

child.on("exit", (code) => process.exit(code));
