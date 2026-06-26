# Luminary Co. Website Redesign Brief

Status: draft for review  
Related plan: `docs/REDESIGN_WORKPLAN.md`

## Objective

Create a premium homepage for Luminary Co. that presents the company as Zambia's first Creative Intelligence Agency, not a generic creative/media agency.

The page must make visitors feel:

- this is a serious strategy-led creative partner
- the brand has taste, discipline, and cultural intelligence
- Luminary understands both business clarity and human storytelling
- the company is young, but not amateur
- the work has African grounding and global ambition

## Primary Audience

1. Corporate, NGO, and institutional leaders who need strategic creative partners.
2. Ambitious brands and scale-ups that need premium positioning.
3. Creators and cultural partners who need infrastructure, storytelling, and amplification.
4. Future collaborators, funders, and team members evaluating whether Luminary is credible.

## Core Message

Luminary Co. helps ambitious brands and creators turn stories into cultural influence through Creative Intelligence: the disciplined fusion of design thinking methodology and storytelling heritage.

## Required Brand Language

Use:

- Your Story, Amplified.
- hello@luminaryco.net
- WhatsApp +260 97 465 1180
- https://wa.me/260974651180
- tel:+260974651180
- Lusaka, Zambia
- © 2026 Luminary Co. All rights reserved.
- Zambia's first Creative Intelligence Agency
- Creative Intelligence
- Design Thinking Rigor
- Storytelling Heritage
- Cultural Alchemy
- Build > Create > Amplify
- Strategic clarity
- Exceptional execution
- Maximum impact

Avoid:

- full-service agency
- creative/media ecosystem as the main description
- generic creative powerhouse language
- fake campaign results
- unverified client claims
- "best in Africa"
- "cutting-edge"
- "game-changing"
- "synergy"

## First Viewport Copy Lock

Default hero copy:

```text
Your Story, Amplified.

Zambia's first Creative Intelligence Agency, fusing design thinking methodology with storytelling heritage to build, create, and amplify brands shaping Africa's narrative.

Let's Talk
Learn Our Approach
```

Optional editorial variant for concept exploration:

```text
Your Story, Amplified.

Strategy for the brain.
Story for the heart.
Influence for the culture.
```

Rule: the concept may explore the optional variant, but the final build must not switch without approval.

## Homepage Section Order

Recommended v2 homepage:

1. Hero: `Your Story, Amplified.`
2. The gap: `Strategy Without Soul. Creativity Without Clarity.`
3. Creative Intelligence: methodology meets meaning.
4. Build > Create > Amplify: the operating model.
5. Cultural properties and strategic work.
6. Who we serve / fit criteria.
7. Proof and trust: methodology, standards, Lusaka base, founder mix.
8. Final CTA: start with a conversation.
9. Footer.

## Cultural Properties Copy Lock

Use this order:

1. Everything Zambia
   - Cultural knowledge platform.
   - A platform designed to help people understand Zambia with more context, clarity, and curiosity.
2. Know Your Power
   - Civic education series.
   - A non-partisan Everything Zambia series translating constitutional, governmental, and legal knowledge into clear, citizen-first content.
3. Pineapple Sessions
   - Music and storytelling property.
   - A cultural property built around performance, collaboration, artist journeys, and the next wave of Zambian creative culture.

Do not use `Community Engine` in the public v2 homepage cultural-properties section.

## Contact And Social Locks

Use this contact set in the final CTA/footer only:

- Email: `hello@luminaryco.net`
- WhatsApp / phone display: `+260 97 465 1180`
- WhatsApp link: `https://wa.me/260974651180`
- Phone link: `tel:+260974651180`
- Location: `Lusaka, Zambia`
- Copyright: `© 2026 Luminary Co. All rights reserved.`

Socials should be included as a quiet footer row:

- Facebook: `https://www.facebook.com/theluminaryco` (verified)
- Instagram
- LinkedIn
- X
- TikTok
- YouTube

Facebook is confirmed and can be clickable. All other social URLs are pending verification. Render pending social labels/icons in the v2 prototype, but keep them non-clickable until final URLs are confirmed. Do not use the full street address in v2 unless a future contact page intentionally supports office visits.

## Visual Direction

The site should feel like a premium brand/strategy/design consultancy with cinematic cultural intelligence.

Design qualities:

- high editorial confidence
- strong type hierarchy
- generous negative space
- black/white foundation
- gold used surgically
- image-led moments, not decorative filler
- confident pacing between dense and quiet sections
- no generic agency card grid
- no oversized fake metrics
- no repeated left-text/right-card sections

## Visual Motifs to Explore

1. Light as intelligence.
   - Eclipse, beam, aperture, projection, illuminated text, dark-to-light transitions.

2. Method as movement.
   - Build > Create > Amplify can behave like a horizontal sequence, timeline, or unfolding method.

3. Cultural archive meets studio.
   - Cinematic stills, editorial captions, project index, gallery-like restraint.

4. Brain and heart fusion.
   - Strategy and story can be expressed through typography, split composition, or motion, not cartoon icons.

## Design Constraints

- Use existing logo assets unless a separate logo refinement is approved.
- Use official colors: black, white, `#ffc75b`.
- Gold must be an accent only.
- Keep text code-native, not baked into images.
- Do not use decorative blobs, generic gradients, or stock-looking business imagery.
- Do not put every section in a card.
- Do not make the page feel like a SaaS dashboard unless a concept explicitly justifies it.
- Do not invent client results or client names.

## Technical Direction

Current site:

- static HTML
- Tailwind CSS
- custom CSS
- vanilla JavaScript

Recommended next build path:

Start with a separate static v2 prototype at:

```text
public/v2/index.html
public/v2/styles.css
public/v2/script.js
public/v2/assets/
```

Reason:

- preserves the old site for comparison
- fastest path to visual iteration
- easiest to teach section-by-section
- avoids framework setup before the direction is approved

Move to React/Vite only if:

- we decide to turn this into a multi-page content system
- we need reusable dynamic components
- we need heavier interactivity than static JS should carry

## Concept Requirements

Before coding v2, create at least three visual directions:

1. Editorial Consultancy
   - closest to Pentagram / Wolff Olins energy
   - stark, typographic, elegant

2. Cinematic Cultural Intelligence
   - more image-led and atmospheric
   - closer to a premium film/brand studio

3. Method-Led Creative Intelligence
   - more system/process driven
   - makes Build > Create > Amplify the memorable interaction

Each concept must include:

- hero
- Creative Intelligence explanation
- Build > Create > Amplify
- work / cultural properties
- CTA

## Acceptance Criteria

A concept is acceptable only if:

- it looks meaningfully more premium than the old site
- it preserves `Your Story, Amplified.`
- it clearly communicates Creative Intelligence
- it uses black, white, and gold with restraint
- it avoids fake proof and generic agency tropes
- it can be implemented faithfully
- it has a clear mobile path

The build is acceptable only if:

- browser output matches the approved concept closely
- desktop and mobile both work
- no console errors
- no text overlap
- no stale cache confusion
- copy matches the approved copy lock
- all assets load
- the site feels finished, not like a prototype

## Current Decision Needed

Proceed with static `public/v2/` prototype first unless there is a strong reason to switch to React/Vite immediately.
