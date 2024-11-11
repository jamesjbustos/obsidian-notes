#!/usr/bin/env node
const inquirer = require("inquirer");
const { execSync } = require("child_process");

async function main() {
  // Get list of modified and untracked files using git
  const files = execSync("git status --short", { encoding: "utf-8" })
    .split("\n")
    .filter(line => line.trim() !== "")
    .map(line => ({
      name: line.slice(3),  // Display the file path
      value: line.slice(3)  // The path to use in git add
    }));

  if (files.length === 0) {
    console.log("No changes detected.");
    process.exit(0);
  }

  // Prompt user to select files
  const answers = await inquirer.prompt([
    {
      type: "checkbox",
      message: "Select files to sync",
      name: "selectedFiles",
      choices: files,
      validate(answer) {
        if (answer.length === 0) {
          return "You must choose at least one file.";
        }
        return true;
      }
    }
  ]);

  // Attempt to add each selected file individually to avoid issues with spaces
  const selectedFiles = answers.selectedFiles;
  try {
    selectedFiles.forEach(file => {
      execSync(`git add "${file}"`, { stdio: "inherit" });
    });
  } catch (error) {
    console.error("Error adding files:", error);
    process.exit(1);
  }

  // Run the sync command
  console.log("Running quartz sync...");
  execSync("npx quartz sync", { stdio: "inherit" });
}

main().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});
