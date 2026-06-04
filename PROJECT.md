# Project Structure: arc-design

> Next.js 15.5 + React 19 + Tailwind CSS 4 + Framer Motion 12.40

## Root Directory

```
arc-design/
├── .agents/                       # AI agent skills (impeccable)
│   └── skills/impeccable/         # Impeccable design skill
│       ├── SKILL.md
│       ├── agents/                # Agent configs
│       ├── reference/             # Design reference docs
│       └── scripts/               # Impeccable runtime scripts
├── .impeccable/
│   └── design.json               # Machine-readable design tokens
├── .next/                        # Build cache (delete on stale cache issues)
├── assets/                       # Source assets
│   ├── logo.png
│   ├── logo-tran.png             # Transparent logo (copied to public/)
│   └── scroll-1/2/3.png
├── fonts/                        # Font files (symlinked/copied to public/fonts/)
├── public/                       # Static assets served at /
│   ├── fonts/                    # Font files
│   ├── logo-tran.png             # Logo (copy of assets/logo-tran.png)
│   ├── browser-view.png          # Hero browser preview (1126×678)
│   ├── scroll-1/2/3.png          # Feature section images
│   └── bg.png
├── references/
│   └── DESIGN.md                 # Legacy design reference
├── screenshots/                  # Scroll journey screenshots
├── src/                          # Application source
│   ├── app/                      # Next.js App Router
│   ├── components/               # Shared UI components
│   ├── hooks/                    # Custom React hooks
│   └── lib/                      # Utilities
├── SKILL.md                      # Design system skill (design reference)
├── DESIGN.md                     # Full design system doc (Stitch format)
├── LOGS.md                       # Session change log
├── PROJECT.md                    # This file
├── AGENTS.md                     # Agent workflow instructions
├── CLAUDE.md                     # Project-level instructions
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── tailwind.config.ts
└── arc-design.skill
```

## Source Structure (`src/`)

### `src/app/` — Next.js App Router

```
src/app/
├── layout.tsx                    # Root layout (metadata, fonts, globals)
├── page.tsx                      # Home page (assembles all sections)
├── globals.css                   # Tailwind theme, @font-face, CSS variables
└── components/                   # Page-level section components
    ├── Hero.tsx                  # Hero with ContainerScroll + PixelTrail + CTA
    ├── Features.tsx              # Scroll-driven feature showcase (3 features)
    ├── PricingSection.tsx        # Pricing section wrapper → CreativePricing
    ├── FAQ.tsx                   # Accordion FAQ (4 questions, framer-motion)
    ├── CTA.tsx                   # Amber call-to-action ("Ready to browse differently?")
    └── Footer.tsx                # 4-column link grid + logo + copyright
```

### `src/components/ui/` — Shared UI Components

```
src/components/ui/
├── floating-header.tsx           # Sticky centered navbar with spring hover pill
├── container-scroll-animation.tsx # Scroll-driven perspective card + header
├── creative-pricing.tsx          # 3-tier pricing card grid
├── magnetic-button.tsx           # Mouse-tracking cursor-follow button wrapper
├── multi-type-ripple-buttons.tsx # Click ripple button (ghost, hover, hoverborder)
├── pixel-trail.tsx               # Mouse-following pixel trail
├── sparkles-text.tsx             # Animated sparkle text overlay
├── gooey-text-morphing.tsx         # SVG threshold blur word morphing (inline-grid)
├── gooey-filter.tsx              # SVG gooey filter component
├── sheet.tsx                     # Radix dialog slide-in panel (mobile nav)
├── button.tsx                    # shadcn-style button (used in pricing)
├── input.tsx                     # shadcn-style input
└── label.tsx                     # shadcn-style label
```

### `src/hooks/` — Custom Hooks

```
src/hooks/
├── use-screen-size.ts            # Responsive breakpoint detection
```

### `src/lib/` — Utilities

```
src/lib/
└── utils.ts                      # cn() classname merge utility (clsx + tailwind-merge)
```

### `src/components/hooks/` — Debounced Dimensions

```
src/components/hooks/
└── use-debounced-dimensions.ts   # Debounced element dimension measurement
```

## Page Sections Flow

```
layout.tsx (root)
  → page.tsx
    → FloatingHeader           (sticky top, z-50)
    → <main>
      → Hero                   (full-width, ContainerScroll)
      → Features               (scroll-driven, 2-column)
      → PricingSection         (CreativePricing, 3 tiers)
      → FAQ                    (accordion, 4 questions)
      → CTA                    (amber bg, "Download free")
    → Footer                   (4-column link grid)
```

## Component Dependencies

```
FloatingHeader → Sheet, RippleButton
Hero → ContainerScroll, PixelTrail, GooeyFilter, GooeyText, SparklesText, MagneticButton, RippleButton
ContainerScroll → (children: img + Header + Card with motion transforms)
Features → (framer-motion useScroll)
PricingSection → CreativePricing
CreativePricing → Button
FAQ → (framer-motion motion.div)
CTA → MagneticButton, RippleButton
Footer → (static, no component deps)
MagneticButton → (framer-motion useMotionValue, useSpring)
RippleButton → (internal ripple CSS keyframes)
Sheet → @radix-ui/react-dialog
```

## Design Tokens (globals.css `@theme`)

### Colors
| Token | Value | Usage |
|---|---|---|
| `--color-background` | `#ffffff` | Page bg |
| `--color-foreground` | `#090201` | Text primary |
| `--color-primary` | `#F59E0B` | Amber accent |
| `--color-primary-foreground` | `#ffffff` | Text on amber |
| `--color-blue` | `#5057ff` | Blue accent |
| `--color-card`, `--color-muted`, `--color-accent` | `#f0f1ff` | Surface |
| `--color-muted-foreground` | `#766e6a` | Muted text |
| `--color-border`, `--color-input` | `#d3d3d3` | Borders |
| `--color-destructive` | `#f25e6b` | Error |

### Shadows
| Token | Value |
|---|---|
| `--shadow-subtle` | `0 2px 2px rgba(0,0,0,0.1)` |
| `--shadow-raised` | `0px 2px 8px 0px rgba(0,0,0,0.25)` |
| `--shadow-raised-alt` | `0 5px 5px rgba(0,0,0,0.1)` |
| `--shadow-floating` | `0 7px 15px rgba(0,0,0,0.2)` |

## Key Behaviors

- **Navbar pill:** `AnimatePresence` mounts/unmounts the pill — no pill by default (white navbar). Pill grows upward from the hovered button's bottom edge via `scaleY` + `transformOrigin: bottom`. Spring config: `stiffness: 500, damping: 40`. Pill color `isBlue` for Logo (0) and Login (4), `bg-primary` for links (1-3). Text always stays `#090201` (black).
- **Hero card:** `aspect-[1126/678]` matches the 1126×678 browser preview image.
- **MagneticButton:** Spring config `damping: 60, stiffness: 600`. Hero's Download button uses `distance={1.0}`.
- **FAQ:** `motion.div` with `maxHeight`/`opacity` animation (0.25s ease-out).
- **Pricing cards:** Blue background (`bg-blue`), white text (`text-primary-foreground`). Borderless Get Started buttons.
- **Pricing cards:** Blue background (`bg-blue`), white text (`text-primary-foreground`). Borderless Get Started buttons. No card borders.
- **Blue text elements:** Hero heading (partial), Features heading + names, Pricing title, FAQ heading + questions, CTA heading.
- **Hero heading:** Two lines, `text-center`. Second line "works the way you [morphing]" shifted left via `-ml-[4ch]` for visual balance.
- **GooeyText:** `inline-grid` with hidden span (longest word width) + filter div in same cell. Absolute spans centered with `left-1/2 -translate-x-1/2`. SVG threshold blur filter for gooey morphing transition between words.
