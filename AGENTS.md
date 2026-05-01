# Agent Instructions

Before doing any UI work in this repository, Codex must read `DESIGN.md` and follow the existing visual system documented there.

## UI Change Rules

- Preserve the existing design tokens in `src/styles.css`.
- Do not introduce new colors, typography, spacing scales, shadows, animations, or components unless the user explicitly requests them.
- Prefer small, reviewable patches that fit the current Executive Editorial Tech direction.
- Reuse existing classes, CSS variables, layout primitives, and component patterns whenever possible.
- Keep the dark warm-neutral palette, serif/sans/mono typography, warm paper text, restrained premium motion, section numbering, and minimal borders/rules intact.
- Do not redesign the whole site without explicit approval.
- Do not shift the site toward a colorful startup aesthetic.

When a UI request is ambiguous, make the smallest change that satisfies the request while preserving the established design system.

