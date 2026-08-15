# Artifact Manifest

## Original assets recovered

- `cpu-architecture.svg` — exact inline target SVG extracted from rendered DOM.
- `images/rocket.webp` — target emoji artwork.
- `images/doordash.png`, `eventbrite.png`, `smeg.png`, `surveymonkey.png`, `netflix.png`, `zapier.png` — exact marquee logos.
- `fonts/poppins-400-latin.woff2`, `poppins-500-latin.woff2`, `poppins-600-latin.woff2` — exact used Latin font subsets.
- `seo/favicon.ico`, `seo/apple-touch-icon.png` — exact site metadata assets.

## Missing original assets

- `favicon-16x16.png` returned HTTP 404 from the source. No substitute was fabricated; `favicon.ico` is available.

## Generated fallback material

- None. Atlas Cloud was not used.

## Acquisition

- Assets were enumerated with Playwright from the live DOM and downloaded in batches of four by `scripts/download-assets-pro-ui-layouts-com-f03df40c-preview--streamline-hero-ff212995.mjs`.

