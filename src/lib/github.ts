export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Contributions {
  total: number;
  days: ContributionDay[];
}

export interface ContributionSummary {
  longestStreak: number;
  bestDay: ContributionDay | null;
  activeDays: number;
}

/** Derived, real numbers from the calendar: longest daily streak and busiest day. */
export function summarizeContributions(days: ContributionDay[]): ContributionSummary {
  let longestStreak = 0;
  let run = 0;
  let bestDay: ContributionDay | null = null;
  let activeDays = 0;

  for (const day of days) {
    if (day.count > 0) {
      run += 1;
      activeDays += 1;
      longestStreak = Math.max(longestStreak, run);
      if (!bestDay || day.count > bestDay.count) bestDay = day;
    } else {
      run = 0;
    }
  }

  return { longestStreak, bestDay, activeDays };
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
