import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/data";

export const alt = `${PROFILE.name} | ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadSerif(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Instrument+Serif&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const title = PROFILE.name;
  const serif = await loadSerif(title);
  const line = "1px dashed #333";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0f0e0e", color: "#fafafa" }}>
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
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: -2,
              fontFamily: serif ? "Instrument Serif" : undefined,
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 24, fontSize: 32, color: "#a1a1a1" }}>
            {`${PROFILE.role} · ${PROFILE.focus}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: serif ? [{ name: "Instrument Serif", data: serif, weight: 400, style: "normal" }] : undefined,
    },
  );
}
