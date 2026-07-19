import fs from "node:fs";
import path from "node:path";

const IMAGE_DIR = path.join(process.cwd(), "public", "images");

/**
 * Inlines a brand marketing SVG from public/images at build time.
 * Inlining (vs <img src>) lets the SVG text render in the site's loaded
 * webfont — as an external image it would fall back to a system font.
 * The `.brand-svg text` rule in globals.css applies the brand typeface.
 */
export default function BrandSvg({
  name,
  label,
  className = "",
}: {
  name: "hero" | "features" | "whats-inside" | "plan-calm" | "focus-kit";
  label: string;
  className?: string;
}) {
  let svg = fs.readFileSync(path.join(IMAGE_DIR, `${name}.svg`), "utf8");
  // Drop fixed pixel size so the viewBox + CSS control scaling.
  svg = svg.replace(
    /^<svg /,
    `<svg class="brand-svg block h-auto w-full" role="img" aria-label="${label}" `
  );
  svg = svg.replace(/ width="1080" height="1080"/, "");
  return <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />;
}
