# Streamline Hero Page Topology

## Page shell

- Root: white, `position:relative`, `min-height:100vh`, Poppins, foreground `rgb(2,8,23)`, overflow-x hidden.
- Inner page gutter: 16px below 640px, 40px from 640px upward.
- All page sections are flow content except the desktop CPU field and the mobile drawer overlay.

## Ordered sections

1. **PromoBanner** — 44px-high flow section. Time-driven animated backgrounds; hover-driven link details.
2. **SiteHeader** — 64px-high flow header. Static/hover-driven desktop state and click-driven mobile drawer.
3. **HeroContent** — left content inside the hero main area. Load-time entrance motion; CTA hover states.
4. **CpuArchitecture** — visual sibling of HeroContent inside the hero main area. Time-driven. Absolute on tablet/desktop, normal flow on mobile.
5. **LogoMarquee** — flow section beneath hero. Time-driven horizontal marquee with fixed progressive edge masks.

## Layering and dependencies

- Hero main is `position:relative; overflow:hidden`; HeroContent is relative z-index 10, CPU is behind/right with masked overflow and a negative-z hatched layer.
- Mobile drawer overlay and sheet are fixed at z-index 50 and cover all page sections.
- Promo gradients are absolute behind banner text.
- Logo edge masks are absolute over the marquee contents.

## Assembly dimensions

- Desktop: banner 44px + header 64px + hero 704px + marquee 140.703px.
- Tablet: banner 44px + header 64px + hero 548px + marquee 140.703px.
- Mobile: banner 44px + header 64px + hero 589px + marquee 103.047px.

