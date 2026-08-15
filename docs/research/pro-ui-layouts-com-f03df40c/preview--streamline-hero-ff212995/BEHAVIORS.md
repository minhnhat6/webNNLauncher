# Streamline Hero Behaviors

## Interaction model summary

- The page is one viewport-tall composition and has no scroll-driven state, sticky state, scroll snapping, or smooth-scroll library.
- Promo banner: time-driven animated gradient; link and arrow hover affordances.
- Header: hover-driven desktop links plus a click-driven mobile drawer below 768px.
- Hero content: load-time staggered entrance animation and hover-driven CTA details. Demo buttons do not navigate or mutate state.
- CPU visual: time-driven SVG path-drawing and eight independently timed moving gradient dots.
- Logo marquee: time-driven 20-second linear loop. Hover does not pause it.

## Scroll sweep

- `scrollY` remained `0`; document content fits the viewport at 1440×1000, 768×900, and 390×844.
- Header computed styles do not change with attempted scrolling.
- No `IntersectionObserver`, `scroll-snap-*`, `.lenis`, or `.locomotive-scroll` behavior was observed.

## Promo banner

- Two full-cover gradient layers animate background position from `0 0` to `200% 0`.
- Layer 1 duration: `16s`, linear, infinite, reverse; layer 2: `20s`, linear, infinite.
- Whole banner transition: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`.
- On group hover, `UI-Layouts Pro` underlines; arrow transforms by `translate(2px,-2px)` over `0.2s ease-out`.
- The long copy tail is hidden below 768px.

## Header and mobile drawer

- Desktop navigation is visible from 768px; mobile menu trigger is visible below 768px.
- Desktop nav links transition color/background/border/fill/stroke for `0.2s cubic-bezier(0.4,0,0.2,1)` and become blue `#1761ff` on hover.
- Clicking the mobile menu trigger opens a fixed black 40%-opacity overlay and a left sheet.
- Sheet outer box at 390px: `left/top/bottom:8px`, width `288px`, height `828px`, z-index `50`.
- Enter animation: `slideFromLeft`, `0.5s cubic-bezier(.32,.72,0,1)`; overlay fades in.
- Sheet links are `270×40px`, padding `8px`, gap `4px`; Blocks is active blue `#1761ff`.
- Escape, overlay click, or close button closes the sheet.

## Hero content

- Initial elements are animated into their final `opacity:1; transform:none` state with staggered fade/translate-y motion.
- Primary CTA background remains blue `oklch(0.546 0.245 262.881)` on hover; its transition is `0.15s cubic-bezier(0.4,0,0.2,1)`.
- Watch Demo remains transparent; its play icon scales to `110%` on group hover.
- Clicking either CTA produced no URL, dialog, or page state change.

## CPU architecture visual

- Connection paths draw once in `1s`, spline `cubic-bezier(.25,.1,.5,1)`, then freeze.
- Moving dots share `cubic-bezier(.75,-.01,0,.99)` and repeat forever.
- Durations/delays: line 1 `5s/1s`; 2 `2s/6s`; 3 `6s/4s`; 4 `3s/3s`; 5 `4s/9s`; 6 `7s/3s`; 7 `4s/4s`; 8 `3s/3s`.
- The visual is an absolutely positioned, masked `704px`-high field at tablet/desktop and becomes a normal-flow `174px` field on mobile.

## Logo marquee

- Four identical six-logo groups translate left by one group width plus `16px` gap.
- Animation is `20s linear infinite`; hover leaves `animation-play-state: running`.
- Eight layered blur strips on each side create a progressive 0–7px edge fade.

## Responsive sweep

- 1440px: 40px page gutters; desktop nav; 72px hero title; 160px hero vertical padding; 704px main; 144px logos.
- 768px: 40px gutters; desktop nav; 48px title; 96px hero vertical padding; 548px main; 144px logos.
- 390px: 16px gutters; mobile menu; 30px title; 64px top/bottom main padding; CPU joins normal flow; 80px logos.
- Major navigation/layout breakpoint: 768px. Supporting typography breakpoints: 640px, 1024px, and 1280px.

