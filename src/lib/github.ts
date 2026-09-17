export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Contributions {
  total: number;
  days: ContributionDay[];
}

/** Last-year contribution calendar, cached for a day. Returns null on any failure so the UI can hide. */
export async function getContributions(username: string): Promise<Contributions | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;

    const data = (await res.json()) as {
      total?: { lastYear?: number };
      contributions?: ContributionDay[];
    };
    const days = data.contributions;
    if (!Array.isArray(days) || days.length === 0) return null;

    const total = data.total?.lastYear ?? days.reduce((sum, d) => sum + d.count, 0);
    return { total, days };
  } catch {
    return null;
  }
}
