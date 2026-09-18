/**
 * Motion system, JS side. Mirrors the CSS custom properties in globals.css so the
 * few JS-driven effects (cursor-follow preview, theme crossfade) share the same
 * timing as the CSS ones. Change a value in both places or not at all.
 */

/** Systemic z-index scale (Tailwind z-40 / z-50 map to nav / overlay). */
export const Z = {
  base: 0,
  raised: 10,
  nav: 40,
  overlay: 50,
} as const;

export const DUR = {
  micro: 0.16,
  fast: 0.45,
  base: 0.7,
  hero: 0.85,
} as const;

/**
 * Per-frame interpolation factor for pointer-follow. 0.18 settles in roughly
 * DUR.fast at 60fps: fast enough to feel attached, slow enough to feel weighted.
 */
export const FOLLOW = 0.18;

/** How long transient feedback ("Copied") stays visible, in ms. */
export const FEEDBACK_MS = 2000;

export const MOTION_QUERIES = {
  animate: "(prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
} as const;

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(MOTION_QUERIES.reduce).matches;
}
