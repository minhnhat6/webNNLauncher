# Visual QA

## Reference pairs

- Desktop: `original-desktop-1440.png` ↔ `clone-desktop-1440-final.png`
- Tablet: `original-tablet-768.png` ↔ `clone-tablet-768-final.png`
- Mobile: `original-mobile-390.png` ↔ `clone-mobile-390-final.png`
- Mobile drawer: `mobile-menu-open.png` ↔ `clone-mobile-menu-open-final.png`

## Geometry verification

- Desktop body `1430×1000`; header `1350×64`; hero `1350×704`; heading `576×180` at `72/90`; CPU source box `1408×704` (skewed bounds `1557.64×704`); marquee `1350×140.703`.
- Tablet header `678×64`; hero `678×548`; heading `512×120` at `48/60`; CPU source box `998×704` (skewed bounds `1147.64×704`); marquee `678×140.703`.
- Mobile body `380×844`; header `348×64`; hero `348×589`; heading `348×75` at `30/37.5`; CPU source box `348×174` (skewed bounds `384.985×174`); marquee `348×103.047`.
- Mobile drawer `288×828` at `(8,8)`; close control `48×44` at `(239,17)`; first link `270×40` at `(17,69)`.

## Behavior verification

- Drawer opens from the mobile trigger and closes with Escape, close control, and overlay click.
- Promo hover underlines `UI-Layouts Pro` and moves the arrow to `translate(2px,-2px)`.
- Watch Demo hover scales the play icon to 1.1.
- Logo groups continue translating while hovered.
- CPU path draw, moving dots, and chip text gradient animate from the exact extracted SVG.

## Remaining differences

- Continuous marquee and CPU animation phases vary between screenshots because they are time-driven; timing, paths, and durations match the source.
- The source's missing `favicon-16x16.png` returned 404; the exact source `favicon.ico` and Apple touch icon are used instead.

