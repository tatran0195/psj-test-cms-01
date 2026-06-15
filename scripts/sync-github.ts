import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const repoUrl = process.argv[2] || "https://github.com/tatran0195/psj-test-cms-01.git";
const branchName = process.argv[3] || "v5.2.0";
const tmpDir = path.resolve(process.cwd(), "./tmp");

console.log(`Syncing branch ${branchName} from ${repoUrl}...`);

if (fs.existsSync(tmpDir) && !fs.existsSync(path.join(tmpDir, '.git'))) {
  console.log(`Directory ${tmpDir} exists but is not a git repository. Removing it to clone fresh...`);
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

if (!fs.existsSync(tmpDir)) {
  console.log(`Cloning into ${tmpDir}...`);
  execSync(`git clone -b ${branchName} --single-branch ${repoUrl} ${tmpDir}`, { stdio: 'inherit' });
} else {
  console.log(`Pulling latest changes in ${tmpDir}...`);
  execSync(`git fetch --all`, { cwd: tmpDir, stdio: 'inherit' });
  execSync(`git checkout ${branchName}`, { cwd: tmpDir, stdio: 'inherit' });
  execSync(`git pull`, { cwd: tmpDir, stdio: 'inherit' });
}

console.log(`Running import-git.ts for branch ${branchName}...`);
execSync(`npx tsx scripts/import-git.ts ${tmpDir} ${branchName}`, { stdio: 'inherit' });

console.log("✅ Sync complete!");
