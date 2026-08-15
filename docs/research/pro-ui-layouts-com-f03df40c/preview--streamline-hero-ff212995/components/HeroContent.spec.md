# HeroContent Specification

## Overview
- **Target file:** `src/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/HeroContent.tsx`
- **Screenshot:** `docs/design-references/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/original-desktop-1440.png`
- **Interaction model:** load-time entrance + hover

## DOM Structure
Content column → h1 with gradient span → paragraph → CTA row → metrics row containing five stars/rating and users icon/count.

## Computed Styles (exact values from getComputedStyle)

### Content column
- position:relative; z-index:10; width:576px; max-width:576px at 1280+
- max-width:512px from 768–1279px
- desktop height:384px; mobile width:348px; mobile height:279px

### Heading
- desktop: 600 72px/90px Poppins; letter-spacing:0; margin-bottom:24px; height:180px
- tablet: 600 48px/60px; margin-bottom:24px; height:120px
- mobile: 600 30px/37.5px; margin-bottom:8px; height:75px
- highlight: gradient from red-500 to orange-600, background-clip:text, transparent fill

### Paragraph
- 400 16px/16px Poppins; desktop width:576px; height:48px; margin-bottom:32px
- tablet width:307.188px (60%); height:80px; margin-bottom:32px
- mobile width:313.188px (90%); height:80px; margin-bottom:16px

### CTA row and buttons
- row display:flex; align-items:center; gap:8px; height:48px; margin-bottom:32px desktop/tablet, 16px mobile
- buttons height:48px; padding:8px 16px; border-radius:8px; font:400 18px/28px
- primary desktop/mobile width:134.406px; white on oklch(.546 .245 262.881)
- secondary mobile width:177.5px; transparent, black; display:flex; gap:8px; play icon 24px

### Metrics
- display:flex; align-items:center; gap:32px; font:400 14px/20px; color:rgb(75,85,99)
- each metric display:flex; align-items:center; gap:8px
- stars display:flex; star size:16px; color:yellow-500
- users icon 20px; color:blue-500

## States & Behaviors
- Load: heading, paragraph, CTA row, metrics fade/translate upward in a stagger, ending opacity 1 and transform none.
- Primary hover: background unchanged; 0.15s cubic-bezier(.4,0,.2,1).
- Secondary hover: play icon transform `none` → `scale(1.1)`; 0.15s.
- Clicks are decorative and cause no navigation or state mutation.

## Per-State Content
- N/A; no alternate content state.

## Assets
- `PlayIcon`, `StarIcon`, `UsersIcon` from shared icons; no raster assets.

## Text Content (verbatim)
- `Build Amazing Products Faster`
- `Streamline your development process with our powerful tools and intuitive interface. Get from idea to launch in record time with AI-powered assistance.`
- `Get Started`, `Watch Demo`, `4.9/5 rating`, `50k+ users`

## Responsive Behavior
- **Desktop (1440px):** 576px column; 72px title.
- **Tablet (768px):** 512px column; 48px title; paragraph 60%.
- **Mobile (390px):** full 348px column; 30px title; paragraph 90%; smaller margins.
- **Breakpoints:** 640px typography/margins, 768px width, 1024px 60px title/80% paragraph, 1280px 72px title/100% paragraph.

