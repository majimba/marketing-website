# Luminary Co. Website Redesign Work Plan

Status: active  
Purpose: rebuild the Luminary Co. website from the current static placeholder into a premium Creative Intelligence Agency website, while documenting the process so it can be repeated.

## What We Have Already Done

1. Located the current website.
   - Path: `luminary_website/luminary_co_website/public/index.html`
   - Stack: static HTML, Tailwind CSS, custom CSS, vanilla JavaScript.
   - Local preview: `http://127.0.0.1:4173/`

2. Confirmed the current site is still the old design shell.
   - Same hero video, layout, black overlay card, service cards, portfolio grid, testimonials, and general styling.
   - This is not the redesigned site.

3. Updated copy inside the old shell as an interim fix.
   - Hero now uses `Your Story, Amplified.`
   - Positioning now says `Zambia's first Creative Intelligence Agency`.
   - Services now map to `Build > Create > Amplify`.
   - Approach copy now uses `Design Thinking Rigor`, `Storytelling Heritage`, and `Cultural Alchemy`.
   - Old generic/fake campaign language was removed from the homepage.

4. Updated the source website copy framework.
   - Path: `docs/02_brand_identity/client_facing/20_website_copy_framework.md`
   - The hero now treats `Your Story, Amplified.` as the main public tagline.
   - `Where Strategy Meets Story.` is retained as a secondary positioning/method line.

5. Fixed stale homepage caching.
   - Path: `public/js/sw.js`
   - The service worker no longer cache-first serves the homepage shell, so future copy/design updates are easier to verify.

6. Created the redesign brief and first premium concept direction.
   - Path: `docs/REDESIGN_BRIEF.md`
   - Path: `docs/CONCEPT_DIRECTIONS.md`
   - Direction: Concept C structure + Concept B cinematic cultural image treatment + Concept A editorial discipline.

7. Generated the first section-level concept pass.
   - Folder: `docs/concepts/hybrid-section-pass-01/`
   - Sections: hero, problem / Creative Intelligence, Build > Create > Amplify, cultural properties, final CTA / footer.
   - Corrected content locks: `hello@luminaryco.net`; cultural properties ordered as Everything Zambia, Know Your Power, Pineapple Sessions.

8. Extracted the first v2 design system draft.
   - Path: `docs/V2_DESIGN_SYSTEM.md`
   - Covers typography, color, layout, imagery, motion, components, responsive rules, and implementation acceptance criteria.

9. Corrected the final CTA / footer contact strategy.
   - Active concept: `docs/concepts/hybrid-section-pass-01/05-final-cta-footer-v5-contact-social-deduped.png`
   - Email, WhatsApp, phone, location, socials, and 2026 copyright are locked.
   - The final CTA no longer repeats email or WhatsApp beneath the `Let's Talk` button.

10. Started the static v2 prototype.
   - Path: `public/v2/index.html`
   - Path: `public/v2/styles.css`
   - Current coded slice: final CTA and footer/contact area.

11. Added the approved 2026 Chawana headshot.
   - Path: `public/assets/images/about/founders/chawana_maseka_2026.png`
   - The homepage founder card and team page should use this instead of the old Chawana portrait.
   - Do not use the Chawana headshot in the v2 final CTA / contact section.

12. Added the consolidated v2 PRD and engineering spec.
   - Path: `docs/V2_PRODUCT_ENGINEERING_SPEC.md`
   - Covers source docs, product requirements, site map, Mermaid diagrams, stack, architecture, component boundaries, build sequence, and QA gates.

13. Built the v2 header and hero slice.
   - Path: `public/v2/index.html`
   - Path: `public/v2/styles.css`
   - Path: `public/v2/script.js`
   - New asset: `public/v2/assets/hero-cinematic-studio.png`
   - Includes desktop nav, mobile menu, hero copy lock, CTAs, cinematic media treatment, and lower scroll reveal.

14. Corrected the v2 final CTA image treatment.
   - Path: `public/v2/assets/final-cta-profile-light.png`
   - The final CTA / contact section uses anonymous cinematic profile artwork, not the Chawana corporate headshot.

15. Built the remaining v2 homepage sections.
   - Path: `public/v2/index.html`
   - Path: `public/v2/styles.css`
   - New assets:
     - `public/v2/assets/problem-light-corridor.png`
     - `public/v2/assets/method-research-wall.png`
     - `public/v2/assets/property-everything-zambia.png`
     - `public/v2/assets/property-know-your-power.png`
     - `public/v2/assets/property-pineapple-sessions.png`
   - Implemented sections: problem / category gap, Creative Intelligence, Build > Create > Amplify, cultural properties, who we serve, and proof / trust.
   - Cultural properties are ordered Everything Zambia, Know Your Power, Pineapple Sessions.

## What We Have Not Done Yet

1. We have not replaced the old homepage with the v2 prototype.
2. We have not completed final approval polish across the full page.
3. We have not completed launch/deployment QA.

## Working Principle

This project should be run like a senior design-and-engineering workflow:

1. Strategy before visuals.
2. Visual concept before code.
3. Design system before components.
4. Section-by-section implementation before full-page polish.
5. Browser and screenshot QA before calling anything finished.

We are not trying to make the current page slightly nicer. We are building a new v2 that can stand beside premium global strategy, brand, and design consultancies.

## Quality Bar

The new site should feel:

- premium, not decorative
- editorial, not template-like
- cinematic, not stock
- intelligent, not jargon-heavy
- African and culturally rooted, not generic global agency
- sparse and confident, not empty
- alive through motion, image, pacing, and hierarchy

Reference family:

- Pentagram: editorial confidence and case-study discipline
- COLLINS: sharp transformation language and bold brand systems
- IDEO: design thinking made human
- AKQA / Work & Co / Instrument: design, technology, and innovation polish
- Made Thought / Wolff Olins: premium brand consultancy confidence

## Brand Constraints

Use the official Luminary identity:

- Tagline: `Your Story, Amplified.`
- Category: `Zambia's first Creative Intelligence Agency`
- Method: `Build > Create > Amplify`
- Pillars: `Design Thinking Rigor`, `Storytelling Heritage`, `Cultural Alchemy`
- Palette: black, white, and `#ffc75b` gold
- Rule: gold is an accent only, not the dominant color
- Voice: confident, intelligent, passionate, professional, bold, thoughtful
- Avoid: full-service agency, best in Africa, cutting-edge, synergy, game-changing

## Work Phases

### Phase 0: Baseline and Interim Copy

Status: done

Goal: make the existing site factually aligned enough to preview while we build v2.

Completed:

- Current site found and served locally.
- Interim copy updated.
- Source copy framework corrected.
- Service worker cache adjusted.

### Phase 1: Redesign Brief

Status: done

Goal: define what the new website must say, feel like, include, and avoid before generating concepts.

Outputs:

- One-page design brief.
- Final homepage section list.
- Above-the-fold copy lock.
- Benchmark notes.
- Acceptance criteria.

Teaching focus:

- How to translate strategy documents into a design brief.
- How to distinguish brand tagline, positioning line, method language, and section copy.
- How to decide what belongs in the first viewport.

Decisions to lock:

- Is the homepage a one-page site for now, or the first page of a multi-page system?
- Which sections are mandatory for v2?
- Which cultural properties are ready to show publicly?
- Should founders appear on the homepage or move to About/Team?

Default recommendation:

- Build a strong one-page v2 first, then expand into About, Work, Services, and Insights after the homepage direction is approved.

### Phase 2: Premium Concept Direction

Status: section concept pass generated; awaiting extraction / approval

Goal: create visual concepts before coding.

Outputs:

- Concept A: editorial consultancy direction.
- Concept B: cinematic cultural-intelligence direction.
- Concept C: systems/method-led Creative Intelligence direction.
- Concept direction notes in `docs/CONCEPT_DIRECTIONS.md`.
- Hybrid section concepts in `docs/concepts/hybrid-section-pass-01/`.

Each concept should show:

- hero / first viewport
- Creative Intelligence explanation
- Build > Create > Amplify section
- cultural properties / work section
- final CTA
- mobile treatment if needed

Teaching focus:

- How to judge a design concept before code.
- How to reject concepts that are pretty but wrong.
- How to identify typography, spacing, image treatment, motion, and component rules.

Acceptance criteria:

- The concept must look like a top-tier agency site, not a local marketing template.
- It must preserve the logo, color system, and `Your Story, Amplified.`.
- It must be practical to implement in HTML/CSS/JS or a small React build.

Current recommendation:

- Use Concept C as the structural spine.
- Use Concept B for cinematic cultural image treatment.
- Use Concept A for editorial restraint, typography, and spacing.
- Use the corrected section-level concepts as the design reference before coding.
- Treat `hello@luminaryco.net` and the Everything Zambia > Know Your Power > Pineapple Sessions order as locked public copy.

### Phase 3: Design System Extraction

Status: first draft complete

Goal: convert the approved concept into engineering rules.

Outputs:

- Color tokens.
- Type scale.
- Spacing scale.
- Grid/container rules.
- Button styles.
- Navigation rules.
- Section templates.
- Image/media treatment.
- Motion rules.
- Draft file: `docs/V2_DESIGN_SYSTEM.md`

Teaching focus:

- How designers think in systems instead of one-off screens.
- How engineers prevent visual drift by creating reusable primitives.

### Phase 4: Technical Architecture

Status: initial spec complete

Goal: choose the build path before implementation.

Output:

- `docs/V2_PRODUCT_ENGINEERING_SPEC.md`

Options:

1. Static v2 inside the current project.
   - Fastest.
   - Lowest complexity.
   - Good if the site stays mostly marketing/editorial.

2. React + Vite v2.
   - Better if we want componentized sections and future expansion.
   - Slightly more setup.
   - Better teaching surface for reusable frontend architecture.

Default recommendation:

- Build `public/v2/` first as a static prototype if speed matters.
- Move to React + Vite only if we decide the site needs multiple pages, reusable content systems, or heavier interaction.

### Phase 5: Section-by-Section Implementation

Status: underway

Goal: build the approved concept faithfully.

Current implementation:

- Final CTA / footer slice exists in `public/v2/`.
- Header and hero slice exists in `public/v2/`.
- Problem / Creative Intelligence section is next.

Order:

1. Header and hero.
2. Problem / category creation section.
3. Creative Intelligence method section.
4. Build > Create > Amplify section.
5. Cultural properties / work section.
6. Who we serve / proof section.
7. Contact / final CTA.
8. Footer.

Teaching focus:

- How to build one section, test it, and only then move on.
- How to preserve design fidelity without overfitting to one viewport.

### Phase 6: Browser QA and Polish

Status: not started

Goal: verify the actual rendered site, not just the code.

Checks:

- Desktop viewport.
- Mobile viewport.
- No console errors.
- No horizontal overflow.
- Text does not overlap or clip.
- Buttons and nav work.
- Motion respects reduced-motion preferences.
- Images/media load correctly.
- Above-the-fold copy matches the approved copy lock.
- Browser screenshots are compared against the approved concept.

Teaching focus:

- How to review a website like a designer.
- How to review a website like an engineer.
- How to separate taste issues from bugs.

### Phase 7: Handoff and Next Pages

Status: not started

Goal: make the finished v2 maintainable and ready to extend.

Outputs:

- Final source files.
- QA notes.
- Remaining improvements.
- Page expansion plan.
- Deployment notes.

Future pages:

- About
- Services / Method
- Work / Cultural Properties
- Insights
- Contact

## Current Next Step

We are in Phase 5 with the full v2 homepage prototype now coded in `public/v2/`.

Next action:

1. Review the full v2 homepage in the browser.
2. Polish section spacing, media crops, copy density, and responsive behavior from that review.
3. Complete final launch QA.
4. Replace the old homepage only after the full v2 page is approved.

## Phase 1 Draft Direction

Homepage story:

1. Your Story, Amplified.
2. Zambia's first Creative Intelligence Agency.
3. The problem: brands are forced to choose between strategy without soul and creativity without clarity.
4. The answer: Creative Intelligence.
5. The method: Build > Create > Amplify.
6. The proof: cultural properties and strategic work.
7. The invitation: start with a conversation.

Likely first viewport:

```text
Your Story, Amplified.

Zambia's first Creative Intelligence Agency, fusing design thinking methodology with storytelling heritage to build, create, and amplify brands shaping Africa's narrative.

[Let's Talk] [Learn Our Approach]
```

Alternative first viewport if the concept needs more editorial drama:

```text
Your Story, Amplified.

Strategy for the brain.
Story for the heart.
Influence for the culture.
```

Do not code this alternative until it is approved.
