import React, { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};
const Card: React.FC<{ repo: Repo; owner: string }> = ({ repo, owner }) => {
  const og = `https://opengraph.githubassets.com/1/${owner}/${repo.name}`;
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer" className="block">
      <div className="border rounded-lg overflow-hidden bg-white/5 hover:scale-[1.01] transition z-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={og} alt={repo.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{repo.name}</h3>
          <p className="text-sm mt-2 text-muted-foreground min-h-[36px]">{repo.description ?? "No description"}</p>
          <div className="flex items-center gap-3 text-xs mt-3 text-muted-foreground">
            <span>{repo.language ?? "—"}</span>
            <span>★ {repo.stargazers_count}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC<{ defaultUsername?: string }> = ({ defaultUsername = "Tkr-Karan" }) => {
  const owner = defaultUsername;
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const repoNames = [
    "Todo-Trello-Application",
    "blogform",
    "tester_view",
    "BookMyShowClone",
    "BMS_server",
    "ticket-booking",
    "tic-tac-toe",
    "Weather_App",
    "visions-hub",
  ];

  const fetchRepos = async (user: string) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=200`);
      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
      const data: Repo[] = await res.json();
      const byName = new Map(data.map((r) => [r.name, r]));
      const ordered: Repo[] = repoNames.map((name, idx) => {
        const found = byName.get(name);
        if (found) return found;
        return {
          id: -1000 - idx,
          name,
          html_url: `https://github.com/${user}/${name}`,
          description: "(Not found or private)",
          language: null,
          stargazers_count: 0,
        } as Repo;
      });
      setRepos(ordered);
    } catch (e: any) {
      setError(e.message ?? "Failed to load repos");
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (defaultUsername) fetchRepos(defaultUsername);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultUsername]);

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-sm text-muted-foreground mt-1">Selected projects from {defaultUsername}.</p>
        </div>

        <div className="flex gap-3 mb-6 items-center">
          <div className="text-sm text-muted-foreground">Showing repos for <strong>{defaultUsername}</strong></div>
          <span className="text-sm text-muted-foreground ml-4">Unauthenticated requests are rate-limited.</span>
        </div>

        {error && <div className="text-red-400 mb-4">{error}</div>}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((r) => (
              <Card key={r.id} repo={r} owner={owner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
