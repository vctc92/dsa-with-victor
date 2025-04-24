import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const problem = process.argv[2];

if (!problem) {
  console.error(
    "❌ Please specify a problem. Example: npm run problem two-sum"
  );
  process.exit(1);
}

const problemsDir = path.join(__dirname, "..", "problems", problem);
const inputFile = path.join(problemsDir, "input.txt");
const outputFile = path.join(problemsDir, "output.txt");
const solutionFile = path.join(problemsDir, "index.js");
const explanationFile = path.join(problemsDir, "explanation.md");

const checkFile = (filePath, name) => {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ ${name} is missing in problems/${problem}/`);
    process.exit(1);
  }
};

checkFile(problemsDir, "Problem folder");
checkFile(solutionFile, "index.js");
checkFile(inputFile, "input.txt");

try {
  console.log(`\n🚀 Running Problem: ${problem}\n`);

  const input = fs.readFileSync(inputFile, "utf-8").trim();
  const command = `node ${solutionFile}`;

  console.log("📥 Input:");
  console.log("--------");
  console.log(input);
  console.log("--------\n");

  const output = execSync(command, { input, encoding: "utf-8" }).trim();

  console.log("📤 Output:");
  console.log("---------");
  console.log(output);
  console.log("---------\n");

  fs.writeFileSync(outputFile, output, "utf-8");
  console.log(`✅ Output written to: ${outputFile}`);
} catch (error) {
  console.error("❌ Error running the solution:");
  console.error(error.message);
  process.exit(1);
}
