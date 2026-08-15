# CpuArchitecture Specification

## Overview
- **Target file:** `src/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/CpuArchitecture.tsx`
- **Screenshot:** `docs/design-references/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/original-desktop-1440.png`
- **Interaction model:** time-driven SVG animation

## DOM Structure
Masked visual wrapper → exact extracted CPU SVG image → absolute hatched background layer.

## Computed Styles (exact values from getComputedStyle)

### Wrapper
- mobile: position:relative; width:348px; height:174px; margin-top:8px; overflow:hidden; transform:skewX(-12deg)
- tablet: position:absolute; top:0; right:-320px; width:998px; height:704px; margin-top:0
- desktop 1440: right:-288px; actual width:1408px; height:704px; transformed bounds x195.18 width1557.64
- mask-image: radial fade centered into the visual; desktop focus toward 100% horizontal

### SVG
- width:100%; height:100%; color:oklch(.87 0 0) / neutral-300
- viewBox `0 0 200 100`; preserveAspectRatio default meet

### Hatched layer
- position:absolute; inset:0; z-index:-10
- repeating-linear-gradient(135deg,#d6d6d6 0 1px,transparent 1px 16px)
- radial mask centered `35% 50%`

## States & Behaviors
- Paths draw stroke-dashoffset 100 → 0 in 1s and freeze.
- Eight dots animate on exact offset paths with cubic-bezier(.75,-.01,0,.99), infinite.
- Durations/delays: 1 `5s/1s`; 2 `2s/6s`; 3 `6s/4s`; 4 `3s/3s`; 5 `4s/9s`; 6 `7s/3s`; 7 `4s/4s`; 8 `3s/3s`.
- Center `UI-Layouts` text gradient cycles continuously over 5s.

## Per-State Content
- N/A; animation is continuous and non-interactive.

## Assets
- Exact source SVG: `/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/cpu-architecture.svg`.
- The component must use the exact asset, not redraw or approximate it.

## Text Content (verbatim)
- SVG chip label: `UI-Layouts`.

## Responsive Behavior
- **Desktop (1440px):** absolute right field, height 704px, right -288px.
- **Tablet (768px):** absolute right field, height 704px, right -320px.
- **Mobile (390px):** normal-flow 348×174px after content.
- **Breakpoints:** absolute layout begins at 768px; right offsets change at 1280px and 1536px.

