import { getEnv } from "astro/env/runtime";
import { execSync } from "node:child_process";


export const commitHash = (): string => {
  const commit_hash = getEnv("COMMIT_HASH")
  if (commit_hash) {
    return commit_hash
  }

  return execSync("git rev-parse --short HEAD")
    .toString()
    .trim();
}

export const commitDate = (): string => {
  // expecting format yyyy-mm-dd
  const commit_date = getEnv("COMMIT_DATE")
  if (commit_date) {
    const d = new Date(commit_date);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
  }

  return execSync('git show -s --format="%cd" --date=format:"%b %d, %Y" $(git rev-parse --short HEAD)')
    .toString()
    .trim();
}
