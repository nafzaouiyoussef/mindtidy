import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "MindTidy — The ADHD-Friendly Planner That Finally Sticks";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F7F3EC",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              backgroundColor: "#8FA98F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F7F3EC",
              fontSize: 56,
              fontWeight: 700,
            }}
          >
            ✓
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#3E4A45" }}>
            MindTidy
          </div>
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            color: "#3E4A45",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          Your brain has enough tabs open.
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#5C6B64",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          The calm, printable planner made for ADHD adults.
        </div>
        <div
          style={{
            marginTop: 44,
            backgroundColor: "#D9A48F",
            color: "#FFFFFF",
            borderRadius: 999,
            padding: "16px 40px",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          Instant digital download
        </div>
      </div>
    ),
    { ...size }
  );
}
