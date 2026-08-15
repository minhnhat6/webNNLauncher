import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve(
  "public/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995",
);

const assets = [
  ["images/rocket.webp", "https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"],
  ["images/doordash.png", "https://pro-section.ui-layouts.com/doordash.png"],
  ["images/eventbrite.png", "https://pro-section.ui-layouts.com/eventbrite.png"],
  ["images/smeg.png", "https://pro-section.ui-layouts.com/smeg.png"],
  ["images/surveymonkey.png", "https://pro-section.ui-layouts.com/surveymonkey.png"],
  ["images/netflix.png", "https://pro-section.ui-layouts.com/netflix.png"],
  ["images/zapier.png", "https://pro-section.ui-layouts.com/zapier.png"],
  ["fonts/poppins-400-latin.woff2", "https://pro.ui-layouts.com/_next/static/media/eafabf029ad39a43-s.p.woff2"],
  ["fonts/poppins-500-latin.woff2", "https://pro.ui-layouts.com/_next/static/media/8888a3826f4a3af4-s.p.woff2"],
  ["fonts/poppins-600-latin.woff2", "https://pro.ui-layouts.com/_next/static/media/0484562807a97172-s.p.woff2"],
  ["seo/favicon-16x16.png", "https://pro.ui-layouts.com/favicon-16x16.png"],
  ["seo/favicon.ico", "https://pro.ui-layouts.com/favicon.ico"],
  ["seo/apple-touch-icon.png", "https://pro.ui-layouts.com/apple-touch-icon.png"],
];

async function download([relativePath, url]) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { relativePath, url, error: `${response.status} ${response.statusText}` };
    }

    const bytes = Buffer.from(await response.arrayBuffer());
    const destination = path.join(outputRoot, relativePath);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, bytes);
    return { relativePath, url, bytes: bytes.length, contentType: response.headers.get("content-type") };
  } catch (error) {
    return { relativePath, url, error: error instanceof Error ? error.message : String(error) };
  }
}

const results = [];
for (let index = 0; index < assets.length; index += 4) {
  results.push(...(await Promise.all(assets.slice(index, index + 4).map(download))));
}

console.log(JSON.stringify(results, null, 2));
