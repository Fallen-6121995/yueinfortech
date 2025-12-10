Biggest issues: Mobile navigation lacked accessible controls and escape handling, decorative hero assets (arrow/social icons) risked overlapping small screens, and the hero’s LCP image had no responsive sizing/placeholder leading to layout shifts and heavier loads. Container padding was fixed at 2rem on all viewports, making small screens feel cramped, and primary hero text/CTA did not adapt fluidly on mobile.

Prioritized fixes:
- Tuned container padding in `tailwind.config.ts` to be mobile-first (smaller on xs/sm, scaling up on lg+) to avoid edge-to-edge squeeze.
- Improved navbar accessibility/responsiveness: 44px menu target, `aria-expanded`/`aria-controls`, Escape-to-close, scroll-lock, and scrollable drawer with backdrop blur for tall content.
- Hero layout made mobile-safe: reduced min-height on small screens, centered CTA option, balanced text, and ensured decorative arrow hides on xs while scaling fluidly on larger breakpoints.
- Optimized hero imagery: Next `<Image>` now uses `sizes`, `placeholder="blur"`, and `priority` for the LCP figure to cut CLS and bandwidth.
- Prevented overlay clutter by hiding social icon cluster on very small screens and tightening spacing/typography for better legibility across breakpoints.
