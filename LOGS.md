# Session Log

> All changes made during this session (2026-06-03).

## 1. Hero Tablet Shadow Removed

**Files:** `src/components/ui/container-scroll-animation.tsx`

Removed the multi-layer `boxShadow` and `shadow-2xl` className from the `Card` component in ContainerScroll. The hero browser preview card is now shadowless.

---

## 2. Navbar Hover Pill Redesign

**Files:** `src/components/ui/floating-header.tsx`

### What changed
The pill (amber hover indicator for nav links) was moved from inside the links container to the `<nav>` level, sitting behind ALL navbar content.

### Behavior
- **No hover:** Amber pill covers the entire navbar (width = nav width, height = nav height) — the whole navbar appears amber.
- **Hover on Features/Pricing/About:** Pill shrinks to just that button's dimensions with amber (`bg-primary`).
- **Hover on Logo or Login:** Pill shrinks to that element with blue (`bg-blue`, `#5057ff`).
- **On unhover:** Pill expands back to full navbar.

### Text colors
- **No hover:** All text is white (`#ffffff`) on the amber/blue background.
- **Hover on item:** That item's text is white, all other items switch to black (`#090201`) on the white `bg-background`.
- Logic via `itemTextColor(index)` function in component.

### Element lookup
Replaced `navContainerRef.children[hoveredIndex + 1]` with `nav.querySelector([data-nav="${hoveredIndex}"])`. All 5 items (Logo=0, Features=1, Pricing=2, About=3, Login=4) have `data-nav` attributes.

### MouseLeave
Moved `onMouseLeave` from the links container to the `<nav>` element — the pill only resets when the cursor leaves the entire navbar.

### Initial flash fix
Added `useLayoutEffect` to set a `ready` state, and `initial={false}` on the motion pill. The pill now renders at correct full-nav dimensions before the user's first paint — no more amber-then-white glitch on refresh.

---

## 3. Blue Accent Color Added

**Files:** `src/app/globals.css`

Added `--color-blue: #5057ff` to the `@theme` block in Tailwind CSS. This is the original accent color from the earlier design system iteration, now used as a secondary accent for logo and Login hover pills.

---

## 4. Hero CTA Buttons — Gap Increased

**Files:** `src/app/components/Hero.tsx`

Added `mb-20` to the buttons flex container to increase the gap between the Download/Learn More buttons and the hero browser preview image below.

---

## 5. MagneticButton — More Aggressive

**Files:**
- `src/components/ui/magnetic-button.tsx`
- `src/app/components/Hero.tsx`

### Spring config change (magnetic-button.tsx)
- `damping`: 100 → 60 (less resistance, more movement)
- `stiffness`: 400 → 600 (faster response)

### Distance multiplier (Hero.tsx)
- Passed `distance={1.0}` to `<MagneticButton>` — previously used default 0.6. The button now follows the cursor further from center.

---

## 6. FAQ Accordion — Smooth Animation

**Files:** `src/app/components/FAQ.tsx`

Replaced the old conditional rendering (`{openIndex === i && <div>...`} which snapped instantly) with a `motion.div` wrapping the answer content. Uses `maxHeight` + `opacity` animation (0.25s ease-out). The answer now smoothly expands/collapses on click.

---

## 7. Text Colors Changed to Blue

**Files changed:** Multiple

Changed `text-foreground` to `text-blue` (`#5057ff`) on the following elements:

| File | Element | Change |
|---|---|---|
| `Hero.tsx` | "The browser that works the way" (h1, excluding "you do") | `text-foreground` → `text-blue` |
| `Features.tsx` | "Built for how you work" (h2 section heading) | `text-foreground` → `text-blue` |
| `Features.tsx` | Feature names (h3, when active) | `text-foreground` → `text-blue` |
| `creative-pricing.tsx` | "Find Your Perfect Plan" (h2 title) | `text-foreground` → `text-blue` |
| `FAQ.tsx` | "Frequently asked" (h2 heading) | `text-foreground` → `text-blue` |
| `FAQ.tsx` | FAQ question buttons | `text-foreground` → `text-blue` |
| `CTA.tsx` | "Ready to browse differently?" (h2 heading) | `text-primary-foreground` → `text-blue` |

---

## 8. Pricing Cards — Blue Background, White Text

**Files:** `src/components/ui/creative-pricing.tsx`

### Card background
Changed `bg-background` (white) to `bg-blue` (`#5057ff`) on the pricing tier card backgrounds.

### Card text colors
- Tier names, prices, feature items: `text-foreground` → `text-primary-foreground` (white)
- Descriptions, "/month" labels: `text-muted-foreground` → `text-primary-foreground/70` (white at 70%)
- Check icons: `text-primary` (amber) → `text-primary-foreground` (white)
- Icon container background: `bg-primary/10` (amber tint) → `bg-white/10`

### Button borders
Removed `border border-input` from the non-popular "Get Started" button. All pricing card buttons are now borderless.

---

## 9. Hero Image Aspect Ratio Fix

**Files:** `src/components/ui/container-scroll-animation.tsx`

The hero browser preview image was being cropped at the bottom because the card had a fixed height (`h-[30rem] md:h-[40rem]`) that didn't match the 1126×678 image's aspect ratio.

**Fix:** Replaced the fixed height with `aspect-[1126/678]` so the card perfectly matches the image dimensions. Combined with `object-cover`, the image now fills the container without cropping or zoom distortion.

---

## 10. Logo Added

**Files:**
- `src/components/ui/floating-header.tsx`
- `src/app/components/Footer.tsx`
- `public/logo-tran.png`

### Navbar
Replaced the `Grid2x2PlusIcon` + "Browser" text with `<img src="/logo-tran.png" alt="Logo" className="h-7 w-auto" />`.

### Footer
Replaced the "Browser" text link with the same logo image.

### Import cleanup
Removed unused `Grid2x2PlusIcon` import from `floating-header.tsx`. `MenuIcon` is now the only lucide-react icon imported there.

---

## 11. Pricing Card Button Border Removal

**Files:** `src/components/ui/creative-pricing.tsx`

Removed `border border-input` from the non-popular "Get Started" button variant. All pricing card buttons are now consistently borderless.

---

## 12. Design Reference Files Updated

**Files:**
- `SKILL.md`
- `DESIGN.md`

### SKILL.md
- Added `--color-blue: #5057ff` to Core Palette
- Added "Blue secondary accent" to Design Philosophy
- Replaced Navigation component section with current implementation (full-nav pill, blue for logo/login, text color logic, spring config 500/40, logo)
- Updated spring config reference in Motion Patterns
- Added logo info to Brand Spec and Quick Reference

### DESIGN.md
- Added `blue: "#5057ff"` to YAML frontmatter colors
- Updated Overview for two-accent system
- Added blue to Primary colors section
- Replaced Navigation section with current hover pill behavior
- Updated Cards/Pricing Tiers section (blue bg, white text, borderless buttons)
- Updated Hero section (aspect ratio description, blue heading)
- Updated Features section (blue feature names)
- Updated Single Accent Rule and Do's to include blue

---

## 13. New Reference Files Created

**Files created:**
- `LOGS.md` — This file
- `PROJECT.md` — Project structure reference
- `AGENTS.md` — Agent workflow instructions

---

## 14. Hero Heading — Flex Layout → Centered Text + Left-Shifted Second Line

**Files:**
- `src/app/components/Hero.tsx`
- `src/components/ui/gooey-text-morphing.tsx`

### Hero.tsx
- Changed h1 from `flex flex-col items-center` to block layout with `text-center` + `<br />`
- Second line "works the way you [morphing]" wrapped in `inline-block -ml-[4ch]` to shift left for visual balance
- Added `className="ml-[0.5ch]"` on GooeyText for gap between "you" and morphing word

### gooey-text-morphing.tsx full rewrite
- **Layout:** Changed outer wrapper from `inline-flex` to `inline-grid` — hidden span and filter div overlap in same grid cell. Grid sizes to hidden span width, filter div stretches to fill cell.
- **Centering:** Added `left-1/2 -translate-x-1/2` to absolute spans so morphing words center within the reserved width regardless of word length.
- **Initial text fix:** Added immediate `textContent` set on both refs in useEffect (previously spans started empty until first cooldown expired).
- **SVG filter:** Kept original threshold blur filter for gooey morphing effect.

---

## 15. Hero Tablet Aspect Ratio — Adjusted

**Files:** `src/components/ui/container-scroll-animation.tsx`

Went through two approaches:
1. Moved `aspect-[1126/678]` from outer card to inner content div — image filled correctly but tablet proportions changed
2. Reverted to `aspect-[1126/678]` on outer card — slight bottom cropping remains but tablet shape is correct
3. Image uses `object-cover`

---

## 16. Pricing Card Borders Removed

**Files:** `src/components/ui/creative-pricing.tsx`

Removed `border border-border` from the pricing card background divs. Cards are now borderless with `bg-blue` and shadow on hover.

---

## 17. Accent Color Experiments (All Reverted)

**Files:** `src/app/globals.css`

Multiple accent color iterations in this session, all ultimately reverted to original:
- `#F7E28F` (light yellow) + `#300018` (dark purple) — brief
- `#BFE169` (lime) + `#080209` (near-black) — brief
- `#F7DFB9` (warm beige) + `#0A332D` (dark teal) — brief
- `#F8CAA5` (peach) + `#1A0B22` (dark purple) — brief
- `#7B4B5A` / `#8A5B6E` (Prestige Mauve) — brief
- **Final: Reverted to amber `#F59E0B` + blue `#5057ff`**

---

## 18. GooeyText — Morphing Effect Restored

**Files:** `src/components/ui/gooey-text-morphing.tsx`

Replaced the framer-motion cross-fade approach with the original SVG threshold blur gooey effect:
- Two absolutely-positioned text spans with blur/opacity cross-fade driven by `requestAnimationFrame`
- SVG `<filter id="threshold">` with `feColorMatrix` creates the sharp-edge gooey transition
- `inline-grid` layout: hidden span reserves width of longest word, filter div fills same grid cell
- Left margin `ml-[0.5ch]` keeps morphing word from touching "you"
