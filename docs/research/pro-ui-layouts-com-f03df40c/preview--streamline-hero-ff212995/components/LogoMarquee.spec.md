# LogoMarquee Specification

## Overview
- **Target file:** `src/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/LogoMarquee.tsx`
- **Screenshot:** `docs/design-references/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/original-desktop-1440.png`
- **Interaction model:** time-driven marquee

## DOM Structure
Section → overflow track with four duplicate logo groups × six items → left and right progressive-blur overlays, eight strips each.

## Computed Styles (exact values from getComputedStyle)

### Section
- desktop/tablet: height:140.703px; padding:20px 16px; position:relative; overflow:hidden
- mobile: height:103.047px; padding:20px 16px

### Marquee track
- display:flex; flex-direction:row; overflow:hidden; gap:16px; padding:8px
- desktop width:1318px; height:100.703px; mobile width:316px; height:63.047px
- custom property `--duration:20s`; hover animation remains running

### Group and logo item
- each group display:flex; flex-shrink:0; align-items:center; justify-content:space-around
- desktop group width:1328px; height:84.703px
- item padding-inline:32px
- image width:144px from 768px, 80px below; height:auto

### Progressive blur overlays
- position:absolute; top:0; bottom:0; width:200px; pointer-events:none; overflow:hidden
- left at 0; right at 0; each contains 8 full-cover strips
- strip backdrop-filter increments 0px through 7px
- masks are adjacent 11.1111% linear-gradient bands, oriented 90deg left and 270deg right

## States & Behaviors
- Each group animation: translateX(0) → translateX(calc(-100% - 16px)), 20s linear infinite.
- Four groups ensure continuous coverage at all three tested widths.
- Hover: animation-play-state remains running.

## Per-State Content
- N/A; repeated groups contain identical content.

## Assets
- `/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/images/{doordash,eventbrite,smeg,surveymonkey,netflix,zapier}.png`

## Text Content (verbatim)
- All six source image alt attributes are `booking`.

## Responsive Behavior
- **Desktop (1440px):** 144px logo width, 140.703px section.
- **Tablet (768px):** 144px logo width, 140.703px section.
- **Mobile (390px):** 80px logo width, 103.047px section.
- **Breakpoint:** 768px.

