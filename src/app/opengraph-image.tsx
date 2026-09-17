import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/data";

export const alt = `${PROFILE.name} | ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Font = { name: string; data: ArrayBuffer; weight: 400; style: "normal" };

/** Fetches a Google Font subset containing only the glyphs in `text`. */
async function loadFont(name: string, text: string): Promise<Font | null> {
  try {
    const family = name.replace(/ /g, "+");
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? { name, data: await res.arrayBuffer(), weight: 400, style: "normal" } : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const title = PROFILE.name;
  const subtitle = `${PROFILE.role} · ${PROFILE.focus}`;
  const [sans, serif] = await Promise.all([
    loadFont("Inter", PROFILE.availability + subtitle),
    loadFont("Instrument Serif", title),
  ]);
  const line = "1px dashed #333";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0f0e0e",
          color: "#fafafa",
          fontFamily: sans ? "Inter" : undefined,
        }}
      >
        <div
          style={{
            margin: "0 150px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 56px",
            borderLeft: line,
            borderRight: line,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#a1a1a1" }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#22c55e" }} />
            {PROFILE.availability}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 84,
              lineHeight: 1,
              letterSpacing: -2,
              fontFamily: serif ? "Instrument Serif" : undefined,
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#a1a1a1" }}>{subtitle}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [sans, serif].filter((f): f is Font => f !== null),
    },
  );
}
