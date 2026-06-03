---
name: arc-design
description: Design system skill for arc. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# arc Design System

You are building UI for **arc**. Light-themed, clean palette, sans-serif typography (Marlin + Marlin Soft SQ), compact density on a 4px grid.

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Clean surfaces** — solid backgrounds without blur or transparency for crisp, legible interfaces.
- **Two-tier typeface** — Marlin for headings, Marlin Soft SQ for body text. Hierarchy comes from size, weight, and color.
- **Compact density** — 4px base grid. Every dimension is a multiple of 4.
- **Warm accent** — `#F59E0B` (amber) is the primary accent color. Used for CTAs, links, focus rings, hover indicators, and active states.
- **Blue secondary accent** — `#5057ff` (`--color-blue`) used for the secondary accent on logo hover and Login hover in the navbar.
- **Subtle motion with Framer Motion** — spring physics for interactive states, scroll-driven for reveals. Keep durations under 300ms.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--color-background` | `#ffffff` | Page/app background |
| Text Primary | `--color-foreground` | `#090201` | Headings, body text |
| Surface | `--color-card`, `--color-muted` | `#f0f1ff` | Cards, panels, modals |
| Text Muted | `--color-muted-foreground` | `#766e6a` | Captions, placeholders |
| Accent/Primary | `--color-primary` | `#F59E0B` | CTAs, links, focus rings, hover indicators |
| Accent Blue | `--color-blue` | `#5057ff` | Secondary accent for logo/nav hover (Browser, Login) |
| Text on Primary | `--color-primary-foreground` | `#ffffff` | Text on accent backgrounds |
| Border | `--color-border`, `--color-input` | `#d3d3d3` | Dividers, borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Success | `#00110c` | Confirmations, positive trends |
| Warning | `#fffcec` | Caution states, pending items |
| Danger | `#f25e6b` | Errors, destructive actions |

### Shadow Tokens

```css
--shadow-subtle: 0 2px 2px rgba(0, 0, 0, 0.1);
--shadow-raised: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
--shadow-raised-alt: 0 5px 5px rgba(0, 0, 0, 0.1);
--shadow-floating: 0 7px 15px rgba(0, 0, 0, 0.2);
```

## Typography

### Font Stack

- **Marlin** — Heading 1, Heading 2, Heading 3
- **Marlin Soft SQ** — Body, descriptions, subtitles
- **Space Mono** — Logo, handwritten, code

### Font Sources

```css
@font-face {
  font-family: "Marlin";
  src: url("/fonts/Marlin-800.woff2") format("woff2");
  font-weight: 800;
}
@font-face {
  font-family: "Marlin Soft SQ";
  src: url("/fonts/MarlinSoftSQ-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Marlin Soft SQ";
  src: url("/fonts/MarlinSoftSQ-500.woff2") format("woff2");
  font-weight: 500;
}
@font-face {
  font-family: "Marlin Soft SQ";
  src: url("/fonts/MarlinSoftSQ-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Marlin Soft Basic";
  src: url("/fonts/MarlinSoftBasic-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "Space Mono";
  src: url("/fonts/SpaceMono-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Space Mono";
  src: url("/fonts/SpaceMono-Regular.woff2") format("woff2");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Marlin | 64-100px | 700 |
| Heading 2 | Marlin | 48-64px | 700 |
| Heading 3 | Marlin | 24-36px | 700 |
| Body | Marlin Soft SQ | 14-16px | 400 |
| Small text | Marlin Soft SQ | 12-14px | 400-500 |
| Logo | Space Mono | 16px | 700 |

### Typography Rules

- **Headings**: Marlin, weight 700. Line height 1.2.
- **Body**: Marlin Soft SQ, weight 400. Line height 1.5.
- **Small text**: Marlin Soft SQ, weight 400-500. Color `--color-muted-foreground`.
- Max 3-4 font sizes per screen
- Use color and opacity for text hierarchy, not additional font sizes

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `0.5rem, 1em, 1rem, 1.375rem, 1.875rem, 1.9rem, 2.5rem, 4px, 6.25rem, 8px, 10px, 12px, 16px, 22px, 24px, 25px, 30px, 40px, inherit`
Default: `8px`

### Container

Max-width: `1280px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| xs | 30em |
| lg | 50rem |
| lg | 50em |
| lg | 60em |
| xs | 400px |
| sm | 580px |
| sm | 600px |
| md | 650px |
| md | 750px |
| md | 768px |
| lg | 800px |
| lg | 1000px |
| xl | 1075px |
| xl | 1100px |
| xl | 1150px |
| xl | 1200px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #f0f1ff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.25);
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #F59E0B;

  color: #ffffff;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #d3d3d3;
  color: #090201;
  border-radius: 8px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 8px 12px;
  color: #090201;
  font-size: 14px;
}
.input:focus { border-color: #F59E0B; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #f0f1ff;
  color: #766e6a;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #f0f1ff;
  border-radius: inherit;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
  box-shadow: 0 7px 15px rgba(0,0,0,0.2);
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #766e6a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #cccccc;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #cccccc;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation (FloatingHeader)

React component in `src/components/ui/floating-header.tsx`. Implements a sticky, centered floating navbar.

**Structure:** The navbar has 3 content areas inside `<nav>` — logo (left), nav links (center), login + menu (right). A spring-animated pill (`motion.div`) sits behind all content and covers the full `<nav>` by default, or shrinks to the hovered item on hover.

**Hover pill behavior:**
- **No hover:** amber (`bg-primary`) pill covers the entire navbar — all text is white
- **Hover on Features/Pricing/About:** amber pill shrinks to that button — other items show black text on white `bg-background`
- **Hover on Logo or Login:** blue (`bg-blue`, `#5057ff`) pill shrinks to that button

**Text color logic** (`itemTextColor` function):
```ts
const itemTextColor = (index: number): string => {
  if (hoveredItem === null) return '#ffffff';    // on amber/blue bg
  return hoveredItem === index ? '#ffffff' : '#090201';  // hovered=white, others=black
};
```

**Spring config:** `stiffness: 500, damping: 40` (slightly stiffer than previous 400/35)

**Color logic:**
```ts
const isBlue = hoveredItem === 0 || hoveredItem === 4;  // Logo=0, Login=4
// pill color: isBlue ? 'bg-blue' : 'bg-primary'
```

**Key behaviors:**
- `useLayoutEffect` + `initial={false}` prevents initial flash — pill renders at correct full-nav dimensions before first paint
- `onMouseLeave` on `<nav>` resets hover state (only when cursor leaves entire navbar)
- Nav links use `data-nav` attributes for element lookup via `querySelector`
- Mobile nav uses a `Sheet` (slide-in panel) from Radix UI
- No border, no backdrop-blur — solid white background

### Extracted Components

These components were found in the codebase:

**FloatingHeader** — Sticky centered navbar with spring hover pill
**Button** — shadcn-style button with variants
**Input** — shadcn-style input  
**Sheet** — Radix dialog slide-in panel
**ContainerScroll** — Scroll-driven perspective animation
**GooeyFilter** — SVG gooey filter for background effects
**MagneticButton** — Mouse-tracking button
**MultiTypeRippleButtons** — Click ripple button
**PixelTrail** — Mouse-following pixel trail
**GooeyText** — SVG threshold-blur word morphing (inline-grid, hidden span for width)
**SparklesText** — Animated sparkle text
**CreativePricing** — 3-tier pricing cards

## Page Structure

The page renders sections in this order:

1. **FloatingHeader** — Sticky centered navbar (Features, Pricing, About links + Login/Get Started)
2. **Hero** — Full-width header with ContainerScroll, PixelTrail, and CTA buttons. Heading uses GooeyText for morphing word animation ("want" → "love" → "like" → "do") with SVG threshold blur filter. The second line "works the way you [morphing]" is left-shifted via `-ml-[4ch]` for visual balance. GooeyText has `ml-[0.5ch]` left margin for breathing room from "you".
3. **Features** — Scroll-driven showcase ("Built for how you work") with sticky left text and right images
4. **PricingSection** — 3-tier pricing via CreativePricing (Starter/Pro/Enterprise)
5. **FAQ** — Accordion-style Q&A section ("Frequently asked")
6. **CTA** — Full-width amber call-to-action ("Ready to browse differently?")
7. **Footer** — 4-column link grid (Product, Company, Support, Legal)

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **Framer Motion** for animations. Motion is subtle — smooth transitions without demanding attention.

### Motion Patterns

- **Spring physics** — navbar hover indicator (`stiffness: 500, damping: 40`)
- **Scroll-driven** — Features section uses `useScroll` → opacity/scale transforms on text and images
- **Perspective scroll** — Hero ContainerScroll rotates scales content on scroll (`rotateX: 20°→0°`)
- **Mouse tracking** — MagneticButton follows cursor, PixelTrail draws mouse-following particles
- **Ripple** — click ripple effect via RippleButton
- **Sparkles** — animated sparkle particles on hero "you do" text

### Motion Guidelines

- Spring for interactive hover states (fast, natural feel)
- Scroll-driven for progress-based reveals (matches user's scroll pace)
- Duration: 150-300ms for micro-interactions
- Always respect `prefers-reduced-motion`

## Depth & Elevation

### Shadow Tokens

- Subtle: `0 2px 2px rgba(0,0,0,.1)`
- Raised (cards, buttons): `0px 2px 8px 0px rgba(0,0,0,0.25)`
- Raised (cards, buttons): `0 5px 5px rgba(0,0,0,0.1)`
- Raised (cards, buttons): `0 2px 6px rgba(0,0,0,0.1)`
- Raised (cards, buttons): `0px 1px 6px rgba(0,0,0,0.30)`
- Raised (cards, buttons): `0px 1px 4px rgba(0,0,0,0.30)`

### Z-Index Scale

`0, 1, 2, 3, 98, 99, 100`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Marlin, Marlin Soft SQ, and Space Mono are allowed
- **No arbitrary border-radius** — use the scale: 0.5rem, 1em, 1rem, 1.375rem, 1.875rem, 1.9rem, 2.5rem, 4px, 6.25rem, 8px
- **No opacity for disabled states** — use muted colors instead
- **No navbar border** — the floating header should not have a border
- **No navbar backdrop-blur** — the floating header uses a solid `bg-background`

## Workflow

1. **Read** `DESIGN.md` or `SKILL.md` before writing any UI code
2. **Pick colors** from the Core Palette — never invent new ones
3. **Set typography** — Marlin for headings, Marlin Soft SQ for body, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Set animations** — use Framer Motion: spring for interactive, scroll-driven for reveals
8. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `/favicon.png`
- **Site URL:** `https://arc.net`
- **Brand color:** `#F59E0B` (amber)
- **Brand typeface:** Marlin (headings), Marlin Soft SQ (body)
- **Logo:** `/logo-tran.png` — appears in navbar (left) and footer

## Quick Reference

```
Background:     #ffffff
Surface:        #f0f1ff
Text:           #090201 / #766e6a
Accent:         #F59E0B (amber)
Accent Blue:    #5057ff
Border:         #d3d3d3
Font:           Marlin (headings), Marlin Soft SQ (body)
Spacing:        4px grid
Radius:         8px
Animation:      Framer Motion (spring + scroll-driven)
Components:     12 (FloatingHeader, Hero, Features, CreativePricing, FAQ, CTA, Footer, plus UI)
Icons:          lucide-react
Logo:           /logo-tran.png (public/)
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for arc
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "arc" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# arc DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: Next.js 15, React 19, Tailwind CSS 4, Framer Motion
> Colors: 14 · Fonts: 3 · Components: 12
> Icon library: lucide-react · State: react, framer-motion
> Primary theme: light · Dark mode toggle: no · Motion: subtle

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a clean, approachable feel. The white background emphasizes content clarity. Typography uses **Marlin** (headings) and **Marlin Soft SQ** (body) — a cohesive sans-serif family for all text. Spacing follows a **4px base grid** (compact density). The accent color **#F59E0B** (amber) anchors interactive elements (buttons, links, focus rings, hover states). Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention. Scroll-driven animations and spring-based hover effects use **Framer Motion**.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| `--color-background` | `#ffffff` | Page background | Lightest surface |
| `--color-foreground` | `#090201` | Text primary | Headings and body text |
| `--color-card` | `#f0f1ff` | Surface | Card and panel backgrounds |
| `--color-primary` | `#F59E0B` | Accent/primary | CTAs, links, focus rings, hover indicators |
| `--color-primary-foreground` | `#ffffff` | Text on primary | Text on primary backgrounds |
| `--color-muted` | `#f0f1ff` | Muted bg | Subtle backgrounds |
| `--color-muted-foreground` | `#766e6a` | Text muted | Captions, placeholders, secondary info |
| `--color-accent` | `#f0f1ff` | Accent bg | Hover backgrounds |
| `--color-destructive` | `#f25e6b` | Danger | Error states |
| `--color-border` | `#d3d3d3` | Border | Dividers, borders |
| `--color-input` | `#d3d3d3` | Input border | Input field borders |
| `--color-ring` | `#F59E0B` | Focus ring | Focus ring outline |
| `--color-success` | `#00110c` | Success | Confirmation states |
| `--color-warning` | `#fffcec` | Warning | Caution states |


---

## 3. Typography Rules

**Font Stack:**
- **Marlin** — Heading 1, Heading 2, Heading 3
- **Marlin Soft SQ** — Body, descriptions, subtitles
- **Space Mono** — Logo, handwritten, code

**Font Sources:**

```css
@font-face {
  font-family: "Marlin";
  src: url("/fonts/Marlin-800.woff2") format("woff2");
  font-weight: 800;
}
@font-face {
  font-family: "Marlin Soft SQ";
  src: url("/fonts/MarlinSoftSQ-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Marlin Soft SQ";
  src: url("/fonts/MarlinSoftSQ-500.woff2") format("woff2");
  font-weight: 500;
}
@font-face {
  font-family: "Marlin Soft SQ";
  src: url("/fonts/MarlinSoftSQ-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Marlin Soft Basic";
  src: url("/fonts/MarlinSoftBasic-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "Space Mono";
  src: url("/fonts/SpaceMono-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Space Mono";
  src: url("/fonts/SpaceMono-Regular.woff2") format("woff2");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Marlin | 64-100px | 700 |
| Heading 2 | Marlin | 48-64px | 700 |
| Heading 3 | Marlin | 24-36px | 700 |
| Body | Marlin Soft SQ | 14-16px | 400 |
| Small text | Marlin Soft SQ | 12-14px | 400-500 |
| Logo | Space Mono | 16px | 700 |

**Typographic Rules:**
- **Headings**: Marlin, weight 700. Line height 1.2.
- **Body**: Marlin Soft SQ, weight 400. Line height 1.5.
- **Small text**: Marlin Soft SQ, weight 400-500. Color `--color-muted-foreground`.
- Max 3-4 font sizes per screen
- Use color and opacity for text hierarchy, not additional font sizes


---

## 4. Component Stylings

### Navigation

**FloatingHeader** — React component — Sticky centered navbar, solid `bg-background`, spring-animated amber hover pill, no border, no blur.

### Page Sections

- **Hero** — ContainerScroll, PixelTrail, GooeyFilter, SparklesText, MagneticButton + RippleButton
- **Features** — Scroll-driven left text + right image showcase (3 features)
- **PricingSection** — CreativePricing with 3 tiers (Starter, Pro, Enterprise)
- **FAQ** — Accordion with 4 questions
- **CTA** — Full-width amber background with Download CTA
- **Footer** — 4-column link grid

### UI Components

Button, Input, Label, Sheet, ContainerScroll, GooeyFilter, MagneticButton, MultiTypeRippleButtons, PixelTrail, SparklesText, CreativePricing



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** 0.5rem, 1em, 1rem, 1.375rem, 1.875rem, 1.9rem, 2.5rem, 4px, 6.25rem, 8px, 10px, 12px, 16px, 22px, 24px, 25px, 30px, 40px, inherit
- **Max content width:** 1280px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `0 2px 2px rgba(0,0,0,.1)`

### Raised — cards, buttons, interactive elements

- `0px 2px 8px 0px rgba(0,0,0,0.25)`
- `0 5px 5px rgba(0,0,0,0.1)`
- `0 2px 6px rgba(0,0,0,0.1)`

### Floating — dropdowns, popovers, modals

- `0 7px 15px rgba(0,0,0,0.2)`
- `0px 4px 11px 0px rgba(0,0,0,0.02),0px 1px 2px 0px rgba(0,0,0,0.03)`
- `0px 1.8px 8.5px 0px rgba(0,0,0,0.15),inset 0px 0px 1px 1px rgba(0,0,0,0.12)`

### Overlay — full-screen overlays, top-level dialogs

- `0px 0px 60px 20px rgba(255,255,255,0.20) inset,0px 0px 1px 0px rgba(29,43,72,0.30),0px 0px 30px 0px rgba(29,43,72,0.40)`

### Z-Index Scale

`0, 1, 2, 3, 98, 99, 100`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### Motion Patterns

- **Spring physics** — navbar hover indicator (`stiffness: 500, damping: 40`)
- **Scroll-driven** — Features section uses `useScroll` for opacity/scale transitions
- **Perspective scroll** — Hero ContainerScroll animates rotateX/scale on scroll
- **Mouse tracking** — MagneticButton follows cursor, PixelTrail draws mouse particles

### Motion Guidelines

- Spring for interactive hover states (fast, natural feel)
- Scroll-driven for progress-based reveals (matches user's scroll pace)
- Duration: 150-300ms for micro-interactions
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#F59E0B` (`--color-primary`) for interactive elements (buttons, links, focus rings, hover indicators)
- Use `#ffffff` as the primary page background
- Use **Marlin** for headings, **Marlin Soft SQ** for body text
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 0.5rem, 1em, 1rem, 1.375rem, 1.875rem
- Reuse existing components before creating new ones
- Use **Framer Motion** — spring for interactivity, scroll-driven for reveals

### Don'ts

- Don't introduce colors outside this palette
- Don't mix font families beyond Marlin, Marlin Soft SQ, Space Mono
- Don't use arbitrary spacing — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius — pick from the scale
- Don't duplicate component patterns

### Anti-Patterns (detected from codebase)

- No zebra striping on tables/lists
- No backdrop-blur on navbar (solid `bg-background` only)
- No border on floating navbar


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 30em | css |
| lg | 50rem | css |
| lg | 50em | css |
| lg | 60em | css |
| xs | 400px | css |
| sm | 580px | css |
| sm | 600px | css |
| md | 650px | css |
| md | 750px | css |
| md | 768px | css |
| lg | 800px | css |
| lg | 1000px | css |
| xl | 1075px | css |
| xl | 1100px | css |
| xl | 1150px | css |
| xl | 1200px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f0f1ff
Border: 1px solid var(--border)
Radius: 8px
Padding: 16px
Font: Marlin
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #F59E0B, text white
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1280px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f0f1ff
Label: #766e6a (muted, 12px, uppercase)
Value: #090201 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid var(--border)
Focus: border-color #F59E0B
Label: #766e6a 12px
Spacing: 16px between fields
Radius: 8px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Marlin, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/ABCFavoritMono-500.woff2`
- `fonts/ABCFavoritMono-700.woff2`
- `fonts/ABCFavoritMono-Regular.woff2`
- `fonts/ABCOracle-350.woff`
- `fonts/ABCOracle-350.woff2`
- `fonts/ABCOracle-Regular.woff`
- `fonts/ABCOracle-Regular.woff2`
- `fonts/EBGaramond-Regular.woff`
- `fonts/EBGaramond-Regular.woff2`
- `fonts/ExposureVAR-650.woff`
- `fonts/ExposureVAR-650.woff2`
- `fonts/ExposureVAR-700.woff`
- `fonts/ExposureVAR-700.woff2`
- `fonts/ExposureVAR-750.woff`
- `fonts/ExposureVAR-750.woff2`
- `fonts/Inter-Regular.woff2`
- `fonts/InterVariable-100.woff2`
- `fonts/Marlin-800.woff2`
- `fonts/MarlinSoftBasic-Regular.otf`
- `fonts/MarlinSoftSQ-500.woff2`
- `fonts/MarlinSoftSQ-700.woff2`
- `fonts/MarlinSoftSQ-900.woff2`
- `fonts/MarlinSoftSQ-Regular.woff2`
- `fonts/SohneBreit-700.woff`
- `fonts/SohneBreit-700.woff2`
- `fonts/SohneBreit-Regular.woff`
- `fonts/SohneBreit-Regular.woff2`
- `fonts/SohneBreitExtrafett-900.woff`
- `fonts/SohneBreitExtrafett-900.woff2`
- `fonts/SpaceMono-700.woff`
- `fonts/SpaceMono-700.woff2`
- `fonts/SpaceMono-Regular.woff`
- `fonts/SpaceMono-Regular.woff2`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

