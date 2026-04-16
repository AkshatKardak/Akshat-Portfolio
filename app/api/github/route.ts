import { NextResponse } from "next/server";
import { personal } from "@/lib/data";

export const revalidate = 3600; // Cache for 1 hour

type GitHubRepo = {
  stargazers_count: number;
  fork: boolean;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
};

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

export async function GET() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  // Optional: add GITHUB_TOKEN env var to avoid rate limits
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${personal.githubUsername}`, { headers }),
      fetch(
        `https://api.github.com/users/${personal.githubUsername}/repos?per_page=100&sort=updated`,
        { headers }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API error");
    }

    const user: GitHubUser = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    const ownRepos = repos.filter((r) => !r.fork);
    const totalStars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0);

    return NextResponse.json({
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      topRepos: ownRepos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)
        .map((r) => ({
          name: r.name,
          description: r.description,
          url: r.html_url,
          stars: r.stargazers_count,
          language: r.language,
          updatedAt: r.updated_at,
        })),
    });
  } catch {
    // Return sensible fallback so the UI never breaks
    return NextResponse.json(
      {
        publicRepos: 15,
        followers: 0,
        following: 0,
        totalStars: 0,
        topRepos: [],
        error: "Could not fetch GitHub data",
      },
      { status: 200 } // Still 200 so client doesn't throw
    );
  }
}