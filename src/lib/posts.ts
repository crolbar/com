import type { MarkdownInstance } from "astro";

export type Post = MarkdownInstance<{
  title: string;
  description: string;
  publicationDate: string;
  tags: string[];
  finished: boolean;
}>;

export function parseDate(date: string): Date {
  const parts = date.split("-").map(Number);

  if (parts.length != 3) {
    throw Error("invalid publication date: did not provide dd-mm-yyyy?")
  }

  if (parts[0] < 0 || parts[0] > 31) {
    throw Error("invalid publication date: dd not valid")
  }


  if (parts[0] < 0 || parts[0] > 31) {
    throw Error("invalid publication date: dd not valid")
  }

  if (parts[1] < 1 || parts[1] > 12) {
    throw Error("invalid publication date: mm not valid")
  }

  return new Date(parts[2], parts[1] - 1, parts[0]);
}

export function getPostsSorted(): Post[] {
  return Object.values(import.meta.glob<Post>("../pages/posts/*.md", { eager: true })).sort((a, b) => {
    const aDate = parseDate(a.frontmatter.publicationDate);
    const bDate = parseDate(b.frontmatter.publicationDate);

    if (aDate > bDate) {
      return -1
    }
    if (aDate < bDate) {
      return 1
    }

    return 0
  });
}

export function getLatestThreePosts(): Post[] {
  return getPostsSorted().slice(0, 3);
}

export function getDaysAgoSince(d: Date): string {
  const diff = Date.now() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${days} days ago`
}
