# Roundabout Design System

**Roundabout** is a mobile-first platform for local communities — a place where neighbors find local information (events, guides, announcements, classifieds-style asks) and build a real sense of belonging, without the dynamics of traditional social media.

The visual identity is **dependable, friendly, and upbeat**: built on a cool, teal-inflected neutral palette with warm, vibrant accents reserved for emphasis and identity. Tarnac Sans and Inter do the UI heavy lifting; the Tarnac serif is reserved for display moments. Everything is grounded, neighborly, slightly off-digital — it should feel like the best parts of a printed community bulletin translated into a modern app.

---

## Sources

This system was compiled from three Figma files and one codebase. All are private — this README preserves paths for anyone with access.

- **`Local MVP Design.fig`** — the main product spec (30 pages, ~1750 frames). Cover-Final-Screens, Composers, Onboarding.
- **`Local Design System.fig`** — the component library (Atoms/Molecules, Organisms).
- **`Roundabout Design (WIP).fig`** — in-progress feature docs.
- **`design-tokens/`** — `@xoxo/design-tokens` package (note: XOXO is the internal monorepo name; Roundabout is the product). Terrazzo-generated tokens synced from Figma Variables. 181 tokens. Entry point: `src/tokens.ts` / `src/primitives.ts`.
- **`uploads/`** — TTF-derived woff2 font files (Tarnac, Tarnac Sans) and core brand SVGs (Beachball mark, rounded-square mark, horizontal wordmark).

---

## Index

| File / Folder | Purpose |
|---|---|
| `colors_and_type.css` | CSS variables for every token (colors, type, spacing, radii, shadows) + semantic classes (`.ra-heading-lg`, `.ra-utility-md-700`, etc). **Start here.** |
| `fonts/` | Tarnac + Tarnac Sans woff2. Inter loaded from Google Fonts. |
| `assets/` | Brand marks: Beachball (primary), RoundedSquare (vertical icon), Horizontal wordmark. |
| `preview/` | Design System card previews. Rendered in the Design System tab. |
| `ui_kits/app/` | High-fidelity recreation of the mobile app. See `ui_kits/app/README.md`. |
| `SKILL.md` | Agent-skill front-matter so this folder can drop into Claude Code. |

---

## Content Fundamentals

Copy is **neighborly, plainspoken, and upbeat** — it sounds like a helpful person talking to another person, never like a platform. The tone is warm without being cutesy; factual without being cold.

- **Voice:** second-person, casual ("Hello neighbors!", "Your community", "Welcome back"). Platform voice uses first-person plural sparingly ("We moved this post to…"). Avoid marketing hype, avoid corporate-neutral.
- **Casing:** Sentence case *everywhere* — buttons, headings, nav labels. The only title-cased strings are proper nouns (community names, the brand "Roundabout") and a few data-origin labels (e.g. role tags like "Steward").
- **Punctuation:** Full stops on paragraph copy; buttons and labels usually skip them. Em-dashes and inline parentheticals are fine — the tone leans editorial.
- **Emoji:** Not part of the brand UI. The product uses **real icons** (Carbon, Phosphor, a handful of custom SVGs) for functional chrome and **reactions** rather than emoji stand-ins. Never use emoji as icon substitutes.
- **Concrete, local language:** Posts reference streets, shops, seasons, schools — the product is hyper-local, and copy reflects it. Placeholder content should echo this register ("Community garden volunteers", "Fall Festival", "Photo of the Week") rather than generic lorem.
- **Examples pulled from the Figma:**
  - *Greeting:* "Good Afternoon!" (32px Tarnac serif)
  - *Announcement body:* "Hello neighbors! This week the big thing is that we're excited to announce a new community garden project."
  - *Role tag:* "Steward" (12px Tarnac Sans, uppercase avoided — it's sentence case even on pills)
  - *Caption:* "Photo of the Week shared by Jane D."

---

## Visual Foundations

**Palette.** The product runs on a **cool teal-grey neutral** (`neutral-950` `#1a292e` down to `neutral-25` `#fbfdfd`) with a **rust primary** (`primary-950` `#66381e`, coral `primary-700` `#eb6640`).

> **Use primary sparingly.** In practice only `primary-950` (rust) and `primary-50`–`primary-400` (tinted surfaces) see UI use. Mid-range values (`500`–`900`) read as error/warning orange, and text contrast against them is weak — reserve those for illustration and the logo, not interface. Warm accents — beige `#a3663d`, muted pink `#7d516d` for links — provide the "upbeat" counterweight. Five category themes (pink / yellow / green / purple / beige / fuchsia / blue, each with `bright` + `muted` surface variants) tag events, guides, and channels; they're always applied as paired surface + text tokens, never ad-hoc.

**Type.** Three families with clear jobs:
- **Tarnac** (serif, 400) — display moments only: big greetings, brand marks, login hero copy. 20/24/32px.
- **Tarnac Sans** (brand sans, 400/700) — every heading, every UI utility label, author names, tags. 10/12/14/16/20/24px. Tight leading (1.25).
- **Inter** (400/500/600/700) — body copy, longform. 14/16px. Normal leading (1.5).

**Spacing.** A 4-based scale: `xs 4 / sm 8 / md 12 / lg 16 / xl 20 / xxl 24 / xxxl 32 / xxxxl 40 / huge 80`. Layouts lean on `lg` and `sm` most.

**Radii.** `xs 4 / sm 8 / md 12 / lg 16 / xl 32 / full 999`. Cards usually `md` (12) or `sm` (8). Avatars and pills go `full`. The **phone chrome itself** uses `lg` (16) which gives screens a friendly rounded frame.

**Shadows.** The signature is a **cool blue-grey shadow** (`#adb8bd`) — not black. Four named elevations — `low` (hairline lift), `md` (modal), `medium` (drawer), `high` (floating composer). Shadows are used sparingly; most separation comes from 1px borders in `neutral-200` / `neutral-400`.

**Backgrounds.** Two dominant surfaces: `surface-base` `#ebf2f5` (the pale teal that defines "app" — used on Home, Feed, Calendar) and `surface-base-weak` white (used on utility pages, post detail, settings). Marketing/login switches to the stronger `surface-base-strong` `#bbcfd7` for a branded feel. No gradients, no noise, no hand-drawn illustrations. Photography is used as **post attachments** and **photo-of-the-week** content, never as decorative background.

**Animation.** Lightweight and functional. Tap/press states: small scale-down or background shift, no bouncing. Drawer transitions: gentle slide-up. No parallax, no hero animations.

**Hover/press.** Consistent token triads (e.g. `surface.actionPrimary` / `…Hover` `#364a51` / `…Pressed`). Hover typically *lightens* for dark surfaces and *darkens* for light ones. Press states collapse back to the default color.

**Borders.** 1px solid is the default; 2px is reserved for strong emphasis (selected tab indicator, focused input). `border-primary` `#e1ebef` shows up constantly as section dividers.

**Cards.** Two flavors. (1) Post cards — white or base-weak, usually **borderless** but separated by a hairline divider or 1px border-primary. (2) Attachment/info cards — `surface-card` `#f9f9fb` with `border-card` `#cdced7`, `radius-md`, no shadow by default.

**Transparency & blur.** Used only on the mobile overlay (`surface-overlay` black @ 10%) and the iOS/browser status-bar mock-ups. No frosted glass panels.

**Imagery.** Warm, natural, community-scale photography. People, markets, gardens, neighborhood streets. No stock-heavy studio shots.

---

## Iconography

Roundabout's icon system is **pragmatic and mixed**, not purist:

- **Primary icon set:** IBM **Carbon Design icons** (stroke icons, 20/24px). See `design-tokens/src/icons/generated/carbon-definitions.ts`. Most UI chrome icons come from here.
- **Secondary set:** **Phosphor** icons (also stroke, slightly softer terminals) — appear in the channel tab bar and some content icons. Figma overrides reference e.g. `CollectionPhosphorNameNewspaper`, `CollectionPhosphorNameUserFocus`, `CollectionPhosphorNameStorefront`, `CollectionPhosphorNameWave`.
- **Custom SVGs:** A small set of product-specific glyphs in `design-tokens/src/icons/custom/` — duotone code/upload icons for the event composer, custom channel glyphs, custom share icons. These live as `IconDefinition` objects with inline path data.
- **Brand marks:** In `assets/` — `RA_Beachball_Rust.png` (primary mark, segmented flag circle), `RA_RoundedSquare_RIcon_Rust.png` / `RA_RoundedSquare_VertIcon_Rust.png` (app-icon forms), `RA_Horz_Wordmark_Rust.png` (horizontal wordmark). **Use the PNGs for display** — the SVG versions in `assets/` are kept for reference but don't always render faithfully.ordmark_Rust.svg` (lockup).
- **Reactions:** Custom reaction buttons (thumbs, heart, celebrate) rather than emoji.
- **No emoji. No unicode as icons.** Never substitute.

**If you need an icon in an artifact and don't have the exact one,** link Carbon Icons from CDN (`@carbon/icons-react` unpkg) or use Lucide as a near-match (stroke-style, similar weight). Document the substitution.

---

## Caveats

- **SF Pro / SF Compact / DM Sans / Google Sans / Roboto / Helvetica / Lora / DM Mono** appear in the Figma files — these are from OS screenshots (iOS status bars, Google / Mail screenshots embedded in designs). They are **not** part of the product's own type system.
- Shadow values were lifted directly from Terrazzo token JSON; one-off micro-pixel offsets (e.g. `0.3px`) are preserved but rounded where browsers would treat them identically.
- `design-tokens` package name is `@xoxo/design-tokens` — XOXO is the internal monorepo codename; user-facing product is always "Roundabout".

---
