# PSI Design System

The design system for **PSI — the Public Spaces Incubator**, a project by
[New Public](https://newpublic.org) building tools for healthier public
conversation inside public-service media. It powers **discussion spaces** —
question-led threads where readers respond, react, and slide their opinion on a
scale, while moderators keep the conversation prosocial.

It is a **white-label / multi-tenant** system. Partner broadcasters — **ZDF,
CBC, Radio-Canada, RTS, RTBF** (collectively "PSMs", public-service media) —
embed PSI into their sites and may customise the **font** and **icons**.
Everything ships in **light + dark** themes and **English / French / German**.

> **Source of truth:** the attached Figma file *"PSI Design System.fig"*
> (508 component families, 440 Figma Variables across 4 collections, light/dark
> + EN/FR/DE modes). Tokens, components, logos and illustrations in this project
> were extracted from that file. If you have access, pair this README with the
> Figma file for pixel-level detail.

---

## Products / surfaces

| Surface | What it is | UI kit |
|---|---|---|
| **PSI Discussion** | The public conversation surface — question, comment slider, responses, reactions, related conversations. The heart of PSI. | `ui_kits/discussion/` |
| **PSI Hub** | The internal admin launcher (Editorial / Dev / Moderation / Owner / Analysis tools) + login. | `ui_kits/hub/` |
| Moderation Dashboard | Where moderators review, approve/reject and manage users. (Components present in Figma; not yet recreated — see Caveats.) | — |

---

## CONTENT FUNDAMENTALS

PSI's voice is **calm, plain and second-person**. It talks **to** the reader
("Share your thoughts…", "Be the first to share your thoughts", "Slide to
respond"). It is never hype-y, never clever for its own sake — the product is
about lowering the temperature of online conversation, and the copy models that.

- **Tone:** warm, neutral, facilitative. It invites rather than instructs.
  Microcopy is encouraging at empty states ("Start the conversation", "Be the
  first to ask a question") and matter-of-fact for system messages ("Your
  response is posted.", "This conversation is now closed.").
- **Person:** **you / your** for the reader; the platform stays invisible.
  Moderators get neutral status lines in the third person ("Claire is
  reviewing", "You are reviewing").
- **Casing:** **Sentence case** everywhere — headings, buttons, labels.
  Buttons read as verbs: *Reply, Respond, Post, Approve, Reject, Show more,
  Read the room, Ask a question*. The only ALL-CAPS is tiny utility/status
  labels (LABS, BETA, OUTDATED) and the uppercase utility type style.
- **Length:** short. Buttons are 1–3 words. Questions are a single sentence
  ("Is Europe prepared for an aging population?"). Counters are terse
  ("1000 characters max.", "284 participants", "102 responses").
- **Emoji:** used **deliberately and sparingly** — only as **reaction icons**
  (❤️ Relatable, ➕ Helpful, 💬 Controversial, 💡 Interesting, ⚖️ Nuanced,
  🤝🏽 Respect, 🙏 Thank you) and the 🔥 "Heated" temperature tag. Never
  decorative, never in body copy or headings.
- **Opinion vocabulary** (the comment-slider scale): *Strongly no · No with
  reservations · It's complicated · Yes with reservations · Strongly yes.*
- **Reactions are constructive by design:** "Changed my mind", "Made me think",
  "New to me", "Respect" — the reaction set rewards good-faith engagement, not
  agreement.

---

## VISUAL FOUNDATIONS

**Overall vibe:** clean, editorial, quiet. Lots of white space, a single
confident accent (iris violet), and a typographic signature — **monospace
labels** on every interactive control. It reads like a thoughtful newsroom
product, not a social network.

### Colour
- **Primary brand:** **Iris** `rgb(90,30,245)` — a saturated violet — is the
  single accent (links, slider thumb, selected states, primary data-viz).
  **Lavender** `rgb(125,125,255)` is its dark-mode / on-dark counterpart.
  **Tanzanite-3** `rgb(236,236,255)` is the pale accent tint surface.
- **Neutrals carry the UI.** A 7-step greyscale from Grey-1 `rgb(247,247,247)`
  to **Soft black** `rgb(15,15,15)`. **Primary buttons are soft black, not
  iris** — the violet is reserved for accent moments. Text is near-black,
  secondary text is Grey-5 `rgb(101,103,107)`.
- **Secondary brand — Jasper:** a warm off-white `rgb(254,247,242)` used for
  publisher banners, the login surface and "Learn more" panels. It's the
  warm counterweight to the cool iris.
- **Signature teal — Hoh** `rgb(5,130,135)`: the "Related conversations" promo
  cards are full-bleed teal with white text. The most recognisable surface.
- **Status:** Success = Mum green `rgb(0,175,135)`; Warning = Kilauea
  `rgb(245,60,25)`; on soft tinted banner surfaces (hoh / garnet / hydrangea /
  jasper). Info = Hydrangea blue.
- **Extended palette:** a 16-ish hue set (tanzanite, garnet, saguaro, emperor,
  beetle, timucuan, pisgah, carnation, elsinore, gossamer…) drives **avatars**,
  **data-viz categories** and coloured **entry-point** backgrounds.
- **Imagery vibe:** photography is incidental (article thumbnails); the brand
  leans on **flat colour + data-viz** rather than photos. No gradients as
  decoration, no glassmorphism.

### Type
- **IBM Plex Sans** — `font/primary` + `font/utility`. Headings (Medium /
  SemiBold, 16–24px, 125% line-height), body & paragraphs (Regular, 14–16px,
  **150%** line-height), and utility/metadata text (125%, small letter-spacing).
- **IBM Plex Mono** — `font/mono`. **The signature face for interactive
  chrome:** buttons, tags, tabs, counters, character limits. If a thing is
  clickable or a count, it's usually mono.
- **DM Sans** — the large **editorial / marketing display** face (48px+),
  used for spec-page titles and big marketing headings.
- **Radio Canada Big** & **Raleway** appear only inside specific partner logos.
- Full scale lives in `tokens/typography.css` as `.psi-*` utility classes.
- **PSMs may swap `font/primary`** for their own brand face — keep the
  family in the `--font-primary` token so it cascades.

### Spacing, radius, elevation
- **Spacing** is a tight 4-based scale: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 80.
- **Radius:** 4 (tags/chips) · 8 (buttons, inputs, banners) · 12 (cards) ·
  16 (large cards, modals, panels) · 20 / 32 (hero surfaces) · pill (100).
  Corners are **soft but not pill-round** on most surfaces — friendly, not bubbly.
- **Borders** are 1px hairlines, usually Grey-3 `rgb(217,217,217)`, frequently
  drawn as an **inset box-shadow** (`--psi-hairline`) so they don't affect
  layout. Selected/focused borders go soft-black.
- **Cards** = white surface, 12px radius, hairline border + a soft drop shadow
  (`--psi-shadow-card`, `0 2px 8px rgba(0,0,0,.08)`). No heavy elevation.
- **Shadows** escalate xs → card → popover → modal. Popovers/toasts use the
  **dark** surface (soft black) with white text.

### Motion & states
- **Restrained.** Short fades / colour transitions (~120–180ms,
  `cubic-bezier(0.2,0,0.1,1)`). No bounces, no decorative loops.
- **Hover:** subtle — buttons darken slightly (soft-black → black); subtle &
  icon buttons pick up a Grey-1 wash; cards lift 2px with a deeper shadow;
  links underline.
- **Press:** primary buttons scale to 0.98. Calm, tactile.
- **Focus:** thicker (1.5px) soft-black inset border on inputs.

### Layout
- Reading surfaces are a **centred single column** (~680px). The product is
  content-first and mobile-friendly (the Figma thread template targets a
  **440px** mobile breakpoint).
- Transparency/blur is essentially unused — the system favours **solid tinted
  surfaces** (jasper, teal, tanzanite) over glass.

---

## ICONOGRAPHY

- **PSI uses IBM's [Carbon Design System](https://carbondesignsystem.com/) icons**
  ("All PSI icons from IBM's Carbon Design System (or emojis)"). PSMs may
  customise the icon set.
- Carbon icons are **outline/solid on a 32 grid, single-colour**. This system
  ships `components/core/Icon.jsx` — a curated, faithful-to-Carbon subset
  (`search, chevron-*, close, add, add-comment, edit, overflow, reply, share,
  bookmark, favorite, user, settings, checkmark, warning, information,
  arrow-*, view, send, filter, menu, thumbs-up`) painted with `currentColor`.
  **For production, swap in the real `@carbon/icons` glyph of the same name.**
- **Emoji** are used as **reaction icons** and the 🔥 temperature tag — never
  decoratively (see Content Fundamentals).
- **Logos:** `components/brand/Logo.jsx` carries the PSM partner lockups (ZDF,
  RTBF as bitmaps; CBC, Radio-Canada, RTS as vector/text; PSI placeholder).

---

## Index / manifest

**Root**
- `styles.css` — the global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**Tokens** (`tokens/`)
- `fig-tokens.css` — all 440 Figma Variables: colours, spacing/radius floats,
  i18n copy strings (tagged `@kind other`); light/dark + EN/FR/DE theme scopes.
- `foundations.css` — friendly px aliases (`--psi-space-*`, `--psi-radius-*`),
  colour shortcuts, shadows, motion.
- `typography.css` — webfonts + the `.psi-*` type scale.

**Components** (compiled to `window.PSIDesignSystem_22be98`)
- `components/core/` — **Icon, Button, SubtleButton, IconButton, Tag, Input,
  Checkbox, Radio, Toggle, Link, Avatar, Banner, Toast, Tooltip, Tabs, Card.**
- `components/brand/` — **Logo** (PSM partner lockups).
- `assets/illustrations/` — **EmptyLargeIllustration, CommentIllustration,
  Illustration404, LoginIllustration** (+ vector helpers).

**Foundation cards** (`guidelines/`) — colour, type, spacing/elevation specimens
for the Design System tab.

**UI kits** (`ui_kits/`)
- `discussion/` — the public Thread surface (interactive).
- `hub/` — the internal tools launcher + login (interactive).

**Assets** (`assets/`, `components/brand/assets/`) — logo bitmaps, illustration
bitmaps, CBC vector.
