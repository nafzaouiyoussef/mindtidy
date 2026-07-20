import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "MindTidy — ADHD Planner Printable + Digital Stickers Bundle";
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
          backgroundColor: "#FBF7F0",
          fontFamily: "serif",
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
              backgroundColor: "#3E7C6F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBF7F0",
              fontSize: 56,
              fontWeight: 700,
            }}
          >
            ✓
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#33302B" }}>
            MindTidy
          </div>
        </div>
        <div
          style={{
            fontSize: 46,
            fontWeight: 700,
            color: "#33302B",
            textAlign: "center",
            maxWidth: 950,
            lineHeight: 1.25,
          }}
        >
          A planner built for how ADHD brains actually work.
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 27,
            color: "#5C574E",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          21-page undated planner · 63 digital stickers · GoodNotes sticker
          book · installation guide
        </div>
        <div
          style={{
            marginTop: 44,
            backgroundColor: "#E4664B",
            color: "#FFFFFF",
            borderRadius: 999,
            padding: "16px 40px",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          Instant download · print or iPad
        </div>
      </div>
    ),
    { ...size }
  );
}
