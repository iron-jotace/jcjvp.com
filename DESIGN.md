# Design System

This site uses an Executive Editorial Tech direction: restrained, text-led, premium, and precise. The visual language should feel closer to an executive profile in a serious editorial publication than a colorful startup landing page.

## Direction

- Preserve the existing editorial profile system from `src/styles.css`.
- Favor hierarchy, typography, rules, and spacing over decoration.
- Keep the interface calm, focused, and publication-like.
- Avoid playful, neon, gradient-heavy, SaaS-dashboard, or colorful startup aesthetics.

## Palette

The palette is dark, refined, and warm-neutral. Use the existing CSS custom properties as the source of truth:

- `--ink-0`, `--ink-1`, `--ink-2` for deep warm-black backgrounds and subtle surfaces.
- `--rule`, `--rule-strong` for minimal borders and hairlines.
- `--paper`, `--paper-2`, `--paper-3` for warm paper text.
- `--muted`, `--muted-2` for secondary metadata and subdued supporting text.
- `--accent`, `--accent-soft` for restrained warm-paper interaction states.

Do not introduce new brand colors or saturated accents unless explicitly requested.

## Typography

The typography system combines serif, sans, and mono roles:

- Serif: `--serif` is used for editorial display, section titles, identity, and selected emphasized prose.
- Sans: `--sans` is used for body copy, navigation, UI labels, and general reading.
- Mono: `--mono` is used for metadata, numbering, issue-style labels, and compact uppercase annotations.

Maintain the existing contrast between editorial display type, readable sans body copy, and precise mono metadata.

## Motion

Motion is restrained and premium. Existing transitions are subtle, short, and mostly limited to:

- hover underlines and color changes;
- small vertical movement on selected rows or story cards;
- gentle image scale on hover;
- controlled service index and card transitions;
- reduced-motion fallbacks via `prefers-reduced-motion`.

Avoid new ornamental animation, large movement, bouncy easing, animated gradients, parallax, or distracting interaction effects.

## Structure

Sections use an editorial numbering model such as `Nº 02`, `Nº 03`, and onward. Preserve this numbered-section rhythm when adding or changing major content areas.

The layout relies on:

- a constrained `--max` content width;
- responsive `--gutter` spacing;
- grid-based section headers and bodies;
- clear section rules;
- large but controlled editorial headings;
- compact mono metadata.

## Borders And Rules

Borders are minimal and functional. Use thin rules to create editorial structure, section separation, and list rhythm. Avoid heavy containers, decorative outlines, excessive cards, and strong shadows.

## Text Color

Primary text should read as warm paper on dark ink. Use `--paper` for primary emphasis, `--paper-2` for supporting copy, and muted tokens for metadata. Avoid pure white and cold gray unless already present in the token system.

## Components

Use existing classes, tokens, and visual patterns before adding anything new. New UI should feel native to the current system: quiet, editorial, warm, and precise.

