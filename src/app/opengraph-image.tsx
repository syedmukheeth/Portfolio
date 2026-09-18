import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/data";

export const alt = `${PROFILE.name} | ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = { bg: "#0b0b0c", fg: "#ededee", muted: "#9a9aa1", line: "#232327", accent: "#c4e86f" };

type Font = { name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" };

/** Fetches a Google Font subset containing only the glyphs in `text`. */
async function loadFont(name: string, weight: 400 | 600, text: string): Promise<Font | null> {
  try {
    const family = `${name.replace(/ /g, "+")}:wght@${weight}`;
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? { name, data: await res.arrayBuffer(), weight, style: "normal" } : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const subtitle = `${PROFILE.role} · Founder of SAMPeer Studio`;
  const [regular, semibold, portrait] = await Promise.all([
    loadFont("Geist", 400, PROFILE.availability + subtitle),
    loadFont("Geist", 600, PROFILE.name),
    readFile(join(process.cwd(), "public/images/portrait.jpg")).catch(() => null),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 72px",
          background: COLORS.bg,
          color: COLORS.fg,
          fontFamily: regular ? "Geist" : undefined,
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 12,
              padding: "8px 18px",
              border: `1px solid ${COLORS.line}`,
              borderRadius: 999,
              fontSize: 22,
              color: COLORS.muted,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 6, background: COLORS.accent }} />
            {PROFILE.availability}
          </div>
          <div style={{ marginTop: 36, fontSize: 76, fontWeight: 600, lineHeight: 1.02, letterSpacing: -3 }}>
            {PROFILE.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: COLORS.muted }}>{subtitle}</div>
        </div>
        {portrait && (
          // eslint-disable-next-line @next/next/no-img-element -- rendered by Satori, not the browser
          <img
            src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
            width={336}
            height={420}
            alt=""
            style={{ borderRadius: 20, border: `1px solid ${COLORS.line}`, objectFit: "cover" }}
          />
        )}
      </div>
    ),
    {
      ...size,
      fonts: [regular, semibold].filter((f): f is Font => f !== null),
    },
  );
}
