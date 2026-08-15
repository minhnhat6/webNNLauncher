# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/mobile-menu-open.png`
- **Interaction model:** hover + click-driven mobile drawer

## DOM Structure
Header → left desktop nav (brand, Blocks, Templates, Pricing) or mobile menu trigger; right nav (X icon, Login). Mobile trigger controls overlay → dialog sheet → brand/close row + three links.

## Computed Styles (exact values from getComputedStyle)

### Header
- width:100%; height:64px; padding:8px 16px
- display:flex; align-items:center; justify-content:space-between
- color:rgb(2,8,23); background:white

### Desktop navigation
- display:flex; align-items:center; gap:8px; font:500 14px/20px Poppins
- brand wrapper: 44px tall; logo glyph 36px wide × 40px high; `pro` badge
- nav link: display:flex; align-items:center; gap:4px; padding:8px; border-radius:6px
- nav icons: 20px square

### Right navigation
- display:flex; align-items:center; gap:8px
- X link: 44×40px, border:1px solid oklch(0.922 0 0), border-radius:8px; icon 18px
- Login: 66.156×40px, padding:8px 16px, white on rgb(51,76,236), border-radius:8px

### Mobile trigger
- display:flex below 768px; width:48px; height:40px; padding:8px; gap:4px; border-radius:8px

### Drawer
- overlay: position:fixed; inset:0; z-index:50; background:oklab(0 0 0/.4)
- outer sheet at 390px: position:fixed; left/top/bottom:8px; width:288px; height:828px; z-index:50
- inner: height:100%; padding:8px; background:white; border:1px solid oklch(.922 0 0); border-radius:16px
- top row: height:44px; display:flex; align-items:center; justify-content:space-between
- links: width:270px; height:40px; padding:8px; gap:4px; border-radius:6px

## States & Behaviors
- Desktop link hover: color rgb(2,8,23) → #1761ff; 0.2s cubic-bezier(.4,0,.2,1).
- Mobile trigger click: overlay fade-in and sheet `translateX(-100%)` → `0`, 0.5s cubic-bezier(.32,.72,0,1).
- Close button, Escape, and overlay click close drawer.
- Active mobile Blocks link is #1761ff; others rgb(2,8,23).

## Per-State Content
- Closed: page visible; no overlay or dialog.
- Open: logo/close row and Blocks, Templates, Pricing links.

## Assets
- Use exact `BrandLogoIcon`, `ComponentIcon`, `PanelsIcon`, `WalletIcon`, `XBrandIcon`, `MenuIcon`, `CloseIcon` from shared icons.

## Text Content (verbatim)
- `pro`, `Blocks`, `Templates`, `Pricing`, `Login`, dialog aria label `Navigation menu`.

## Responsive Behavior
- **Desktop (1440px):** desktop left nav visible; no menu trigger.
- **Tablet (768px):** same desktop navigation.
- **Mobile (390px):** menu trigger replaces left nav; right X/Login remain.
- **Breakpoint:** 768px.

