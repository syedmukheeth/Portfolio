import { Section } from "@/components/ui/section";
import { PROFILE } from "@/lib/data";
import { getContributions, type ContributionDay } from "@/lib/github";
import { cn } from "@/lib/utils";

const CELL = 11;
const GAP = 3;

const LEVEL_CLASS = ["bg-fg/[0.06]", "bg-fg/20", "bg-fg/40", "bg-fg/65", "bg-fg/90"];

const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

function toWeeks(days: ContributionDay[]) {
  const padded: (ContributionDay | null)[] = [...Array(toDate(days[0].date).getUTCDay()).fill(null), ...days];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
  return weeks;
}

function monthLabels(weeks: (ContributionDay | null)[][]) {
  const labels: { week: number; label: string }[] = [];
  weeks.forEach((week, i) => {
    const firstOfMonth = week.find((d) => d && toDate(d.date).getUTCDate() <= 7);
    if (!firstOfMonth) return;
    const prev = labels.at(-1);
    if (prev && i - prev.week < 3) return;
    if (i > weeks.length - 2) return;
    labels.push({
      week: i,
      label: toDate(firstOfMonth.date).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }),
    });
  });
  return labels;
}

function describe(day: ContributionDay) {
  const date = toDate(day.date).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  return `${day.count} contribution${day.count === 1 ? "" : "s"} on ${date}`;
}

export async function GitHubActivity() {
  const data = await getContributions(PROFILE.github);
  if (!data) return null;

  const weeks = toWeeks(data.days);
  const width = weeks.length * (CELL + GAP) - GAP;

  return (
    <Section id="github" title="GitHub Activity">
      <div className="no-scrollbar flex flex-row-reverse overflow-x-auto px-4 sm:px-6 md:justify-center">
        <div
          role="img"
          aria-label={`${data.total} GitHub contributions in the last year`}
          className="shrink-0"
          style={{ width }}
        >
          <div aria-hidden className="relative mb-1.5 h-4 font-mono text-[10px] text-muted">
            {monthLabels(weeks).map(({ week, label }) => (
              <span key={week} className="absolute" style={{ left: week * (CELL + GAP) }}>
                {label}
              </span>
            ))}
          </div>
          <div aria-hidden className="flex" style={{ gap: GAP }}>
            {weeks.map((week, w) => (
              <div key={w} className="flex flex-col" style={{ gap: GAP }}>
                {week.map((day, d) => (
                  <span
                    key={d}
                    title={day ? describe(day) : undefined}
                    className={cn("rounded-[2px]", day ? LEVEL_CLASS[day.level] : "bg-transparent")}
                    style={{ width: CELL, height: CELL }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 px-4 text-xs text-muted sm:px-6">
        <a
          href={`https://github.com/${PROFILE.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-fg"
        >
          <span className="font-medium text-fg">{data.total.toLocaleString("en-US")}</span> contributions in the last
          year
        </a>
        <div aria-hidden className="flex items-center gap-1">
          Less
          {LEVEL_CLASS.map((cls) => (
            <span key={cls} className={cn("size-2.5 rounded-[2px]", cls)} />
          ))}
          More
        </div>
      </div>
    </Section>
  );
}
