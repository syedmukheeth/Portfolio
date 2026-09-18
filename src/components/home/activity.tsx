import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROFILE } from "@/lib/data";
import { getContributions, summarizeContributions, type ContributionDay } from "@/lib/github";
import { cn } from "@/lib/utils";

const CELL = 11;
const GAP = 3;

const LEVEL_CLASS = [
  "bg-fg/[0.07]",
  "bg-accent-text/30",
  "bg-accent-text/55",
  "bg-accent-text/80",
  "bg-accent-text",
];

const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
const format = (iso: string, opts: Intl.DateTimeFormatOptions) =>
  toDate(iso).toLocaleDateString("en-US", { ...opts, timeZone: "UTC" });

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
    if (!firstOfMonth || i > weeks.length - 2) return;
    const prev = labels.at(-1);
    if (prev && i - prev.week < 3) return;
    labels.push({ week: i, label: format(firstOfMonth.date, { month: "short" }) });
  });
  return labels;
}

const describe = (day: ContributionDay) =>
  `${day.count} contribution${day.count === 1 ? "" : "s"} on ${format(day.date, { month: "short", day: "numeric" })}`;

export async function Activity() {
  const data = await getContributions(PROFILE.github);
  if (!data) return null;

  const { longestStreak, bestDay } = summarizeContributions(data.days);
  const weeks = toWeeks(data.days);
  const width = weeks.length * (CELL + GAP) - GAP;

  const stats = [
    { label: "Contributions this year", value: data.total.toLocaleString("en-US") },
    { label: "Longest daily streak", value: `${longestStreak} days` },
    ...(bestDay
      ? [{ label: `Busiest day, ${format(bestDay.date, { month: "short", day: "numeric" })}`, value: `${bestDay.count}` }]
      : []),
  ];

  return (
    <section id="github" aria-labelledby="github-title" className="reveal py-16 md:py-20">
      <Container>
        <SectionHeading
          id="github"
          title="GitHub activity"
          action={
            <a
              href={`https://github.com/${PROFILE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-mono text-sm text-muted hover:text-fg"
            >
              @{PROFILE.github}
            </a>
          }
        />

        <dl className="mb-10 grid gap-6 sm:grid-cols-3">
          {stats.map(({ label, value }) => (
            <div key={label}>
              <dd className="text-3xl font-semibold tracking-tight tabular-nums">{value}</dd>
              <dt className="mt-1 text-sm text-muted">{label}</dt>
            </div>
          ))}
        </dl>

        <div className="no-scrollbar -mx-5 flex flex-row-reverse overflow-x-auto px-5 sm:mx-0 sm:px-0 md:justify-end">
          <div role="img" aria-label={`${data.total} GitHub contributions in the last year`} className="shrink-0" style={{ width }}>
            <div aria-hidden className="relative mb-2 h-4 font-mono text-[10px] text-muted">
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
                      className={cn("rounded-[3px]", day ? LEVEL_CLASS[day.level] : "bg-transparent")}
                      style={{ width: CELL, height: CELL }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div aria-hidden className="mt-4 flex items-center justify-end gap-1 text-xs text-muted">
              Less
              {LEVEL_CLASS.map((cls) => (
                <span key={cls} className={cn("size-2.5 rounded-[3px]", cls)} />
              ))}
              More
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
