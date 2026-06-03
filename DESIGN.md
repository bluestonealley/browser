---
name: arc
description: The browser that works the way you do
colors:
  amber: "#F59E0B"
  blue: "#5057ff"
  white: "#ffffff"
  ink: "#090201"
  surface-light: "#f0f1ff"
  muted-text: "#766e6a"
  border: "#d3d3d3"
  danger: "#f25e6b"
  success: "#00110c"
  warning: "#fffcec"
typography:
  display:
    fontFamily: "Marlin, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 6.25rem)"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "Marlin, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Marlin, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Marlin Soft SQ, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Marlin Soft SQ, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  tight: "8px"
  medium: "16px"
  wide: "24px"
  vast: "48px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  navbar:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    height: "auto"
---

# Design System: arc

## 1. Overview

**Creative North Star: "The Clean Studio"**

A light-themed browser interface that feels like a well-organized workspace — clean, focused, and unobtrusive. The white background and compact 4px grid create breathing room without wasted space. Amber accents (`#F59E0B`) punctuate interactivity: buttons, links, focus rings, and hover states. Typography is a two-tier sans-serif system — **Marlin** for bold, compact headings and **Marlin Soft SQ** for readable body text. Motion is purposeful: spring physics for hover feedback, scroll-driven transitions for content reveals, all via **Framer Motion**.

This system explicitly rejects: glassmorphism, backdrop-blur on navigation, monospace body text, cool indigo accents, and the SaaS-cream/beige background default.

**Key Characteristics:**
- 4px base grid. Every dimension is a multiple of 4.
- Solid white backgrounds — no blur, no transparency on the navbar
- Single accent color (`#F59E0B`) used sparingly for interactivity only
- Two-tier Marlin type family — no font mixing beyond the defined stack
- Mobile-first responsive with `@media (min-width: ...)` breakpoints
- Spring-based hover interactions; scroll-driven content reveals
- Floating centered navbar (`max-width: 48rem`, `top-5`, rounded), snaps to full width on mobile

## 2. Colors

A restrained warm palette built around a single amber accent with a blue secondary accent. The background is pure white; surfaces use a cool-tinted light grey (`#f0f1ff`) for card/panel contrast. The amber accent is the sole active color — it never appears as a decorative background, only on interactive elements.

### Primary

- **Amber** (`#F59E0B`): The primary accent color. Used for button backgrounds, link hover states, focus rings, the navbar hover pill indicator, and the CTA section background. Never used decoratively — its rarity is the point.
- **Blue** (`#5057ff`): Secondary accent color. Used for the navbar hover pill when hovering the logo or Login button. Previously the original accent before the switch to amber.

### Neutral

- **White** (`#ffffff`): Page background, popover backgrounds, navbar background, input backgrounds.
- **Ink** (`#090201`): All body text, headings, and icon colors at rest. Maximum contrast against white (13.9:1).
- **Surface Light** (`#f0f1ff`): Card backgrounds, panel surfaces, table row backgrounds, muted/hover backgrounds, badge backgrounds. A cool-tinted light grey — the only non-warm neutral.
- **Muted Text** (`#766e6a`): Captions, placeholders, secondary information, unselected feature descriptions.
- **Border** (`#d3d3d3`): Card borders, table borders, input borders, dividers. Low-contrast by design.

### Semantic

- **Danger** (`#f25e6b`): Error states, destructive action buttons, validation messages.
- **Success** (`#00110c`): Confirmation states, positive trends, success badges. Near-black green.
- **Warning** (`#fffcec`): Caution states, pending indicators. Light cream.

### Named Rules

**The Single Accent Rule.** `#F59E0B` is the primary accent color. `#5057ff` is the secondary accent for the logo and Login navbar hovers. Together they cover no more than ~10% of any given screen. Their rarity is what makes them read as intentional.

**The No-Warm-Background Rule.** Despite the amber accent, backgrounds stay pure white (`#ffffff`) or cool-tinted (`#f0f1ff`). No cream, beige, sand, or parchment tones anywhere.

## 3. Typography

**Display Font:** Marlin (sans-serif)
**Body Font:** Marlin Soft SQ (sans-serif)
**Label/Mono Font:** Space Mono (monospace)

**Character:** A deliberate two-tier sans-serif system. Marlin is compact and technical — tight letter-spacing, heavy weight — used exclusively for headings. Marlin Soft SQ is its softer sibling, slightly wider and lighter, carrying all body text. Together they read as one family with a clear hierarchy split. Space Mono is reserved for the logo wordmark ("Browser") and any code-like display.

### Hierarchy

- **Display** (`Marlin, 700, clamp(2.5rem, 8vw, 6.25rem), 1.2`): Hero headings only. Used for "The browser that works the way you do."
- **Headline** (`Marlin, 700, clamp(2rem, 5vw, 4rem), 1.2`): Section titles — "Built for how you work", "Find Your Perfect Plan", "Frequently asked", "Ready to browse differently?"
- **Title** (`Marlin, 700, clamp(1.25rem, 3vw, 2.25rem), 1.2`): Feature names within sections — "Ambient Spaces", "Omnibar Actions", "Canvas Split-View", pricing tier names.
- **Body** (`Marlin Soft SQ, 400, 0.875rem (14px), 1.5`): All descriptive text, feature descriptions, FAQ answers, pricing descriptions, footer links. Max line length 65–75ch.
- **Label** (`Marlin Soft SQ, 500, 0.75rem (12px), 1.5`): Small print, footnote text, pricing period ("/month"), badge labels.

### Named Rules

**The Flat Hierarchy Rule.** Never use more than 3-4 font sizes per screen. Hierarchy comes from weight (700 vs 400) and color (ink vs muted), not from proliferating sizes.

**The No-Mono-Body Rule.** Space Mono is the logo font only. Body text, descriptions, and captions use Marlin Soft SQ. Monospace body text reads as "computery" and is forbidden.

## 4. Elevation

This system uses shadows as the primary depth cue — a four-tier elevation vocabulary. Surfaces are flat at rest; shadows appear only as a response to elevation (cards, floating elements, overlays). No tonal layering or blur-based depth.

### Shadow Vocabulary

- **Subtle** (`0 2px 2px rgba(0,0,0,0.1)`): Micro-interactions, subtle hover states on inline elements.
- **Raised** (`0px 2px 8px 0px rgba(0,0,0,0.25)`): Cards, buttons, interactive elements at rest. The default component shadow.
- **Floating** (`0 7px 15px rgba(0,0,0,0.2)`): Dropdowns, popovers, modals, the floating navbar. Elements that sit above the page layer.
- **Overlay** (multi-layered shadow): Full-screen overlays, top-level dialogs. The highest elevation tier.

### Z-Index Scale

`0, 1, 2, 3, 98, 99, 100` — fixed scale. No arbitrary values like 999.

### Named Rules

**The Flat-At-Rest Rule.** Surfaces have no shadow by default. Shadows appear only when an element is elevated (card, button, navbar, modal). A surface without elevation has no shadow.

**The No-Blur-Depth Rule.** Depth is conveyed through shadows — never through backdrop-blur, backdrop-filter, or transparency. The floating navbar uses a solid white background, not glassmorphism.

## 5. Components

### Navigation (FloatingHeader)

A sticky centered navbar that floats at the top of the viewport. Solid white background (`#ffffff`), no border, no blur — intentionally clean.

- **Shape:** Rounded-lg (12px), centered at `max-width: 48rem`, offset `top-5` from viewport top.
- **Background:** Solid white.
- **Hover pill:** A spring-animated `motion.div` sits behind all nav content. By default it covers the entire `<nav>` making the whole navbar amber. On hover it shrinks to just the hovered element. Spring config: `stiffness: 500, damping: 40`.
- **Pill colors:** Features/Pricing/About use amber (`bg-primary`). Logo and Login use blue (`bg-blue`, `#5057ff`).
- **Text colors:** When the pill covers the full navbar (no hover), all text is white. When the pill shrinks to a hovered item, that item's text is white and the rest turn black (`#090201`).
- **Nav Items:** Logo (left), Features/Pricing/About (center), Login (right).
- **Logo:** `/logo-tran.png` (public/)
- **Mobile:** Navigation collapses into a Radix Sheet (slide-in panel from the left) on screens below `lg` breakpoint.
- **Shadow:** Floating elevation tier.

### Buttons

Two button variants used across the site:

- **Primary** (amber `#F59E0B` background, white text, 8px radius, 8px 16px padding): The main CTA. Used for "Download", "Get Started", "Download free". Hover darkens slightly via opacity.
- **Ghost** (transparent background, ink text, 1px `#d3d3d3` border, 8px radius): Secondary actions — "Learn More", "Login", "Sign In". Hover shifts border to amber.

Both support a ripple click effect via the `RippleButton` wrapper.

### Cards / Pricing Tiers

- **Corner Style:** 8px radius.
- **Background:** Blue (`--color-blue`, `#5057ff`) for pricing tier cards. Surface Light (`#f0f1ff`) for other cards.
- **Text on Pricing Cards:** White (`text-primary-foreground`) — tier names, prices, feature items. White at 70% for descriptions and "/month" labels.
- **Shadow:** Raised elevation — applies on hover for pricing cards.
- **Border:** None.
- **Internal Padding:** 16px (cards), 32px (pricing tiers).
- **Popular Badge:** Full-pill shape, amber background, white text, positioned at `-top-3` centered.
- **Get Started Button:** Borderless. Popular tier uses amber bg + white text. Non-popular uses white bg + black text.

### Inputs / Fields

- **Style:** 1px solid `#d3d3d3` border, white background, 8px radius, 8px 12px padding.
- **Focus:** Border shifts to amber (`#F59E0B`). No glow — a clean border shift only.
- **Disabled / Error:** Uses muted foreground color; error state uses danger red (`#f25e6b`).

### Hero Section

- **Layout:** Full-width with scroll-driven perspective animation (ContainerScroll: rotateX 20° → 0°, scale 1.05 → 1).
- **Card Aspect Ratio:** The browser preview card uses `aspect-[1126/678]` matching the exact image dimensions — no fixed height, no cropping, no zoom distortion.
- **Background:** Interactive PixelTrail with GooeyFilter SVG — amber dots follow mouse movement.
- **Heading:** Display type scale, Marlin. "The browser that" is on the first line. "works the way you" morphs through ["want", "love", "like", "do"] via GooeyText (SVG threshold blur filter). The second line is shifted left (`-ml-[4ch]`) for visual balance. The morphing word has `ml-[0.5ch]` spacing from "you". The heading uses `text-blue`.

### Features Section

- **Layout:** Two-column: sticky left panel (25%) + scrollable right images (75%).
- **Scroll Behavior:** Uses `useScroll` from Framer Motion. Left text highlights active feature with amber accent bar. Active feature names are blue (`text-blue`), descriptions use `text-foreground/80`. Inactive features have muted text.
- **Section Heading:** "Built for how you work" is blue (`text-blue`).

## 6. Do's and Don'ts

### Do:

- **Do** use `#F59E0B` (`--color-primary`) for all primary interactive elements — buttons, links, focus rings, hover indicators. Use `#5057ff` (`--color-blue`) for the secondary accent (logo/Login navbar hovers).
- **Do** use solid white (`#ffffff`) as the primary page background.
- **Do** use Marlin for headings and Marlin Soft SQ for body text. Never swap them.
- **Do** follow the 4px grid for every margin, padding, and gap.
- **Do** use the defined shadow tokens (Subtle → Raised → Floating → Overlay) for elevation — never invent new shadows.
- **Do** use Framer Motion: spring physics for interactive states, scroll-driven for content reveals.
- **Do** keep the floating navbar centered (`max-width: 48rem`), solid white, no border, no blur.
- **Do** respect `prefers-reduced-motion` — disable all animations when set.

### Don't:

- **Don't** introduce colors outside the defined palette.
- **Don't** use Space Mono for body text. It is the logo font only.
- **Don't** use backdrop-blur, glassmorphism, or transparency on the navbar — it stays solid `bg-background`.
- **Don't** add a border to the floating navbar.
- **Don't** use arbitrary spacing — every dimension is a multiple of 4px.
- **Don't** use arbitrary border-radius beyond the defined scale: 4px, 8px, 12px, full-pill.
- **Don't** use gradient text (`background-clip: text` with gradient).
- **Don't** use side-stripe borders (border-left/right > 1px as accent).
- **Don't** use numbered section markers ("01 / 02 / 03") as default scaffolding.
- **Don't** use tiny uppercase tracked eyebrows ("ABOUT", "PROCESS") above every section heading.
- **Don't** duplicate identical card grids with icon + heading + text patterns.
- **Don't** use cream, beige, sand, or warm-tinted backgrounds. Page backgrounds are white; surfaces are cool-tinted `#f0f1ff`.
