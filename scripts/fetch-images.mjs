// Mirrors the curated Pexels stock images referenced in images.json into public/img.
import fs from "node:fs/promises";

const manifest = JSON.parse(await fs.readFile(process.argv[2] ?? "images.json", "utf8"));

const WIDTH = 1600;

async function main() {
  await fs.mkdir("public/img", { recursive: true });
  const entries = Object.entries(manifest);
  let ok = 0;
  const failed = [];
  for (const [name, id] of entries) {
    const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${WIDTH}`;
    try {
      const r = await fetch(url, { headers: { "User-Agent": "mcai-build/1.0" } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length < 5000) throw new Error(`suspiciously small (${buf.length}B)`);
      await fs.writeFile(`public/img/${name}.jpg`, buf);
      ok += 1;
      console.log(`ok   ${name}.jpg  ${(buf.length / 1024).toFixed(0)}KB  (pexels ${id})`);
    } catch (e) {
      failed.push(`${name} (${id}): ${e.message}`);
      console.log(`FAIL ${name} (${id}): ${e.message}`);
    }
  }
  console.log(`\n${ok}/${entries.length} images downloaded`);
  if (failed.length) {
    console.log("failures:\n" + failed.join("\n"));
  }
}

main();
