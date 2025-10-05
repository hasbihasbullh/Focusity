"use client";
import { useState, useEffect } from "react";
import { Github } from "lucide-react";

import Link from "next/link";

interface GitHubButtonProps {
  repoUrl?: string;
  showStars?: boolean;
}

export default function GitHubButton({ 
  repoUrl = "https://github.com/hasbihasbullh/Focusity",
  showStars = true 
}: GitHubButtonProps) {
  const [starCount, setStarCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const extractRepoInfo = (url: string) => {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      return `${match[1]}/${match[2]}`;
    }
    return null;
  };

  const repoFullName = extractRepoInfo(repoUrl);

  useEffect(() => {
    if (!showStars || !repoFullName) {
      setIsLoading(false);
      return;
    }

    const fetchGitHubStars = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`https://api.github.com/repos/${repoFullName}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setStarCount(data.stargazers_count || 0);
      } catch (err) {
        console.error('Failed to fetch GitHub stars:', err);
        setError('Failed to load stars');
        setStarCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubStars();
  }, [repoFullName, showStars]);

  const formatStarCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <Link
      href={repoUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 bg-gray-800 text-white px-3 py-1.5 rounded-md hover:bg-gray-700 transition duration-200 group text-xs"
    >
      <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
      
      <span className="font-medium">Star On GitHub</span>

      {showStars && (
        <span className="bg-gray-700 px-1.5 py-0.5 rounded text-xs font-semibold group-hover:bg-gray-600 transition duration-200 min-w-[2rem] text-center">
          {isLoading ? (
            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          ) : error ? (
            "—"
          ) : (
            formatStarCount(starCount)
          )}
        </span>
      )}
    </Link>
  );
}