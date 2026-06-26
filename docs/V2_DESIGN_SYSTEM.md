# Luminary Co. V2 Design System

Status: draft extracted from `docs/concepts/hybrid-section-pass-01/`  
Purpose: translate the approved visual direction into repeatable frontend rules before coding `public/v2/`.

## Design Thesis

Luminary Co. should feel like a premium Creative Intelligence Agency: editorial, cinematic, method-led, and culturally rooted. The page should not feel like a local agency template with nicer copy. The system is built around three moves:

1. High-contrast editorial typography.
2. Cinematic black-and-white imagery with surgical gold light.
3. A visible operating method: Build > Create > Amplify.

## Source Concept Set

Use these as implementation references:

- `docs/concepts/hybrid-section-pass-01/01-hero.png`
- `docs/concepts/hybrid-section-pass-01/02-problem-creative-intelligence.png`
- `docs/concepts/hybrid-section-pass-01/03-build-create-amplify.png`
- `docs/concepts/hybrid-section-pass-01/04-cultural-properties-v2-kyp.png`
- `docs/concepts/hybrid-section-pass-01/05-final-cta-footer-v5-contact-social-deduped.png`

## Copy Locks

Above the fold:

```text
Your Story, Amplified.

Zambia's first Creative Intelligence Agency, fusing design thinking methodology with storytelling heritage to build, create, and amplify brands shaping Africa's narrative.

Let's Talk
Learn Our Approach
```

Contact:

```text
hello@luminaryco.net
+260 97 465 1180
WhatsApp: https://wa.me/260974651180
Phone: tel:+260974651180
Lusaka, Zambia
© 2026 Luminary Co. All rights reserved.
```

Socials:

- Facebook: `https://www.facebook.com/theluminaryco` (verified)
- Instagram
- LinkedIn
- X
- TikTok
- YouTube

Facebook is confirmed and should be clickable. All other social URLs are pending verification. In the v2 prototype, render pending socials as visible but non-clickable footer items until confirmed.

Cultural properties:

1. Everything Zambia
   - Cultural knowledge platform.
2. Know Your Power
   - Civic education series.
3. Pineapple Sessions
   - Music & storytelling property.

Do not use Community Engine on the public v2 homepage.

## Color Tokens

```css
:root {
  --color-black: #030303;
  --color-ink: #0a0a0a;
  --color-charcoal: #111111;
  --color-line: rgba(255, 255, 255, 0.16);
  --color-line-strong: rgba(255, 255, 255, 0.28);
  --color-white: #ffffff;
  --color-paper: #f7f5ef;
  --color-muted: rgba(255, 255, 255, 0.72);
  --color-muted-dark: rgba(0, 0, 0, 0.62);
  --color-gold: #f5bc10;
  --color-gold-bright: #ffc75b;
  --color-gold-deep: #8f6200;
}
```

Rules:

- Black and white carry the page.
- Gold is sampled from the Luminary logo and used for punctuation, rules, focus states, and one primary CTA.
- Avoid gold floods except for tiny highlight moments.
- White sections should feel like gallery paper, but not beige or tan.

## Typography

Recommended web fonts:

- Display serif: `Cormorant Garamond` or `Playfair Display`.
- Body/UI sans: `Inter`.
- Logo/nav small caps: `Inter` with letter spacing.

Implementation rule:

- Do not use viewport-width font scaling.
- Use fixed rem values by breakpoint so type does not become unpredictable.

Type scale:

```css
--font-display: "Cormorant Garamond", "Playfair Display", Georgia, serif;
--font-body: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

--text-nav: 0.875rem;
--text-label: 0.75rem;
--text-body: 1rem;
--text-body-lg: 1.25rem;
--text-section: 4.5rem;
--text-hero: 7.5rem;
```

Desktop:

- Hero H1: 7.5rem, display serif, line-height 0.9.
- Section H2: 4.5rem to 5.25rem, display serif, line-height 0.95.
- Body: 1.125rem to 1.25rem, sans, line-height 1.65.
- Labels/nav: sans, controlled tracking, never decorative filler.

Mobile:

- Hero H1: 4rem, line-height 0.95.
- Section H2: 3rem, line-height 1.
- Body: 1rem, line-height 1.65.
- Buttons: 1rem, stable height.

## Layout And Spacing

Grid:

- Max content width: 90rem.
- Desktop gutters: 4rem to 5rem.
- Tablet gutters: 2rem.
- Mobile gutters: 1.25rem.

Spacing:

```css
--space-1: 0.5rem;
--space-2: 1rem;
--space-3: 1.5rem;
--space-4: 2rem;
--space-5: 3rem;
--space-6: 4rem;
--space-7: 6rem;
--space-8: 8rem;
```

Section rhythm:

- Hero: full viewport with next-section preview.
- Problem: dark, cinematic, spacious.
- Creative Intelligence: light section with method diagram.
- Build > Create > Amplify: dark method timeline.
- Cultural Properties: dark editorial gallery.
- CTA/Footer: dark cinematic close.

## Navigation

Desktop:

- Fixed or sticky top nav.
- Transparent black over hero, solid black after scroll.
- Brand left, nav right.
- Nav labels: About, Approach, Services, Work, Contact.
- Keep nav quiet; no extra pills or badges.

Mobile:

- Brand left, icon menu right.
- Full-height or drop-down black menu.
- Links must be large enough to tap.

## Buttons And Links

Primary CTA:

- Gold fill, black text.
- Rectangular with minimal radius, not pill-shaped.
- Right arrow icon, not plain text arrow.
- Height: 4rem desktop, 3.5rem mobile.

Secondary CTA:

- Transparent black/white surface.
- Thin gold border.
- Right arrow icon.

Text link:

- Gold text with thin underline rule.
- Arrow icon to the right.

## Imagery

Visual treatment:

- Black-and-white, high-contrast, cinematic.
- Human presence matters: silhouettes, studio scenes, civic learning, performance, cultural archive.
- Avoid generic stock-business photography.
- Avoid party-political colors or campaign visuals for Know Your Power.
- Chawana's approved 2026 headshot is `public/assets/images/about/founders/chawana_maseka_2026.png`; do not use the old Chawana portrait in new v2 work.
- Do not use Chawana's headshot in the final CTA / contact section. Use anonymous cinematic profile/light artwork there.

Image roles:

- Hero: cinematic studio / light / cultural storytelling.
- Problem: solitary human figure in strong architectural light.
- Build section: research wall / studio process.
- Cultural properties: editorial gallery images.
- CTA: anonymous profile/light/eclipse motif, currently `public/v2/assets/final-cta-profile-light.png`.

Implementation rule:

- Use real image elements or generated assets as media, with code-native text layered separately.
- Do not bake homepage copy into raster images.

## Motifs

Allowed motifs:

- Thin gold rules.
- Aperture circles.
- Light beams.
- Fine radial lines.
- Editorial numbering: 01, 02, 03.
- Horizontal method lines and nodes.

Avoid:

- Decorative blobs or bokeh.
- Generic gradients.
- Rounded card grids.
- Fake metrics.
- Dashboard chrome.
- Hero eyebrows, badges, or pills.

## Components

Build these first:

1. `SiteHeader`
2. `Button`
3. `SectionShell`
4. `GoldRule`
5. `MediaFrame`
6. `MethodTimeline`
7. `PropertyIndex`
8. `FinalCTA`
9. `SiteFooter`

For the static prototype, these can be CSS classes and repeated HTML blocks. If the site later moves to React/Vite, the same list becomes the component boundary.

## Motion

Use motion sparingly:

- Header background settles on scroll.
- Text fades in with short vertical movement.
- Gold method lines draw in.
- Cultural property rows reveal image movement on hover.
- Respect `prefers-reduced-motion`.

Avoid:

- Constant parallax.
- Slow decorative loops.
- Animations that make text hard to read.

## Responsive Rules

Hero:

- Desktop: text left, image/light composition right.
- Mobile: stacked with image acting as atmospheric top or background, never covering the H1.

Problem / Creative Intelligence:

- Desktop: dark problem band over light method section.
- Mobile: stack text and diagram; diagram may simplify to three vertical stages.

Build > Create > Amplify:

- Desktop: horizontal timeline.
- Mobile: accordion or stacked numbered stages.

Cultural Properties:

- Desktop: one featured property and two horizontal rows.
- Mobile: stacked editorial list with images above text.

Footer:

- Desktop: brand, nav, location, email, WhatsApp/phone, and a quiet social row.
- Mobile: stacked, with WhatsApp and email visible before socials and legal copy.
- Copyright line: `© 2026 Luminary Co. All rights reserved.`
- Do not show the full street address in v2; use `Lusaka, Zambia`.
- Do not repeat email or WhatsApp directly under the final CTA button when they already appear in the footer contact block.
- Do not repeat email again in the footer legal row when it already appears in the footer contact block.

## Acceptance Criteria For Implementation

- Above-the-fold copy matches the copy lock exactly.
- No hero overlay card from the old site.
- No old service-card grid in v2.
- Email is `hello@luminaryco.net`.
- WhatsApp link is `https://wa.me/260974651180`.
- Phone link is `tel:+260974651180`.
- Social items are visible but non-clickable until URLs are verified.
- Location is `Lusaka, Zambia`, not the full street address.
- Copyright year is `2026`.
- Cultural properties are Everything Zambia, Know Your Power, Pineapple Sessions.
- No Community Engine on the public v2 homepage.
- Gold remains accent-only.
- Text does not overlap on mobile.
- Browser screenshots are compared against the matching concept section before handoff.
