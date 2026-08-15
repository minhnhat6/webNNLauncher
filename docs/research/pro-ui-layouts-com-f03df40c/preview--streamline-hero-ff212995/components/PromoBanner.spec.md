# PromoBanner Specification

## Overview
- **Target file:** `src/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/PromoBanner.tsx`
- **Screenshot:** `docs/design-references/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/original-desktop-1440.png`
- **Interaction model:** time-driven animation + hover

## DOM Structure
Anchor to `https://pro.ui-layouts.com` → banner div → two absolute gradient layers + centered paragraph/picture + ArrowUpRightIcon.

## Computed Styles (exact values from getComputedStyle)

### Container
- height: 44px; display:flex; align-items:center; justify-content:center
- padding: 0 16px; position:relative; overflow:hidden; cursor:pointer
- color: rgb(248,250,252); background-color: oklch(0.985 0 0)
- font: 500 16px/24px Poppins at desktop; 12px/16px mobile; 14px/20px from 640px
- transition: 0.3s cubic-bezier(0.4,0,0.2,1)

### Copy row
- display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:4px
- Rocket: 24px square, margin-right:4px
- Arrow: 20px square, margin-left:4px; transition:transform 0.2s ease-out

### Gradient layers
- position:absolute; inset:0; background-size:200% 100%
- mask: linear vertical fade intersected with top radial fade
- layer 1 animation: movingBanner 16s linear infinite reverse; mix-blend-mode:difference
- layer 2 animation: movingBanner 20s linear infinite; mix-blend-mode:color-dodge

## States & Behaviors
- Group hover: `UI-Layouts Pro` text-decoration none → underline.
- Group hover: arrow transform none → translate(2px,-2px), 0.2s ease-out.
- Gradient keyframe: background-position `0 0` → `200% 0`, continuously.

## Per-State Content
- N/A; content does not change.

## Assets
- Rocket: `/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/images/rocket.webp`
- Arrow: `ArrowUpRightIcon` from the shared icon module.

## Text Content (verbatim)
- `Ship faster with UI-Layouts Pro – 50+ Tailwind & React components for production-ready UIs`

## Responsive Behavior
- **Desktop (1440px):** full text, 16px type.
- **Tablet (768px):** full text, 16px type.
- **Mobile (390px):** hide the tail beginning `– 50+`; 12px type.
- **Breakpoints:** font 14px at 640px; full text and 16px at 768px.

