// Downloads the latin woff2 files for Inter and Source Serif 4 into public/fonts
// so the site never depends on a third-party font CDN at build or run time.
import fs from "node:fs/promises";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

const wants = [
  { family: "Inter", out: "inter", weights: [400, 500, 600, 700] },
  { family: "Source Serif 4", out: "serif4", weights: [400, 600, 700] },
  { family: "Source Serif 4", out: "serif4-italic", weights: [400], italic: true },
];

async function css(family, weights, italic) {
  const fam = family.replace(/ /g, "+");
  const ital = italic ? "1," : "0,";
  const w = weights.map((x) => `${ital}${x}`).join(";");
  const url = `https://fonts.googleapis.com/css2?family=${fam}:ital,wght@${w}&display=swap`;
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`css ${r.status} for ${family}`);
  return r.text();
}

async function main() {
  await fs.mkdir("public/fonts", { recursive: true });
  for (const want of wants) {
    const text = await css(want.family, want.weights, !!want.italic);
    const blocks = text.split("@font-face").slice(1);
    for (const b of blocks) {
      const weight = Number((b.match(/font-weight:\s*(\d+)/) ?? [])[1] ?? 0);
      const url = (b.match(/src:\s*url\((https:[^)]+\.woff2)\)/) ?? [])[1];
      const range = (b.match(/unicode-range:\s*([^;]+);/) ?? [])[1] ?? "";
      if (!weight || !url) continue;
      if (!/U\+0000-00FF/.test(range)) continue; // latin only
      if (!want.weights.includes(weight)) continue;
      const dest = `public/fonts/${want.out}-${weight}.woff2`;
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(dest, buf);
      console.log(`${dest}  ${buf.length} bytes`);
    }
  }
}

main().catch((e) => {
  console.error("font fetch failed:", e.message);
  process.exit(1);
});
