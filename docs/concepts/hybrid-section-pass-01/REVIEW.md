# Hybrid Section Pass 01 Review

Status: corrected concept pass ready for design-system extraction  
Date: 2026-06-25

## Corrected Source Of Truth

Use these concept images for the next build step:

1. `01-hero.png`
2. `02-problem-creative-intelligence.png`
3. `03-build-create-amplify.png`
4. `04-cultural-properties-v2-kyp.png`
5. `05-final-cta-footer-v5-contact-social-deduped.png`

The original `04-cultural-properties.png`, `05-final-cta-footer.png`, `05-final-cta-footer-v2-email.png`, `05-final-cta-footer-v3-date.png`, and `05-final-cta-footer-v4-contact-social.png` are retained only as historical first-pass references.

## Locked Copy Corrections

- Contact email: `hello@luminaryco.net`
- WhatsApp / phone: `+260 97 465 1180`
- WhatsApp link: `https://wa.me/260974651180`
- Phone link: `tel:+260974651180`
- Location: `Lusaka, Zambia`
- Socials: Facebook is verified at `https://www.facebook.com/theluminaryco` and clickable; Instagram, LinkedIn, X, TikTok, and YouTube stay visible but non-clickable until final URLs are verified.
- Cultural properties order: Everything Zambia, Know Your Power, Pineapple Sessions
- Remove Community Engine from the public homepage cultural-properties section.

Know Your Power source language comes from:

- `../../../../../know_your_power/README.md`: KYP is an Everything Zambia series and a non-partisan, knowledge-base-driven civic education series.
- `../../../../../know_your_power/KYP_STRATEGY.md`: KYP translates Zambia's constitutional, governmental, and legal documentation into clear, citizen-first content.

## Section Read

### 01 Hero

Keep:

- Black premium first viewport with large serif `Your Story, Amplified.`
- Minimal header, confident nav, one primary CTA.
- Cinematic light / lens / human profile motif.
- Gold as a surgical accent only.

Watch:

- Final build text must be code-native, not baked into the image.
- Avoid adding a hero eyebrow or badge.

### 02 Problem + Creative Intelligence

Keep:

- Strong contrast between the problem statement and the Creative Intelligence explanation.
- The brain / heart / fusion logic.
- Methodology presented as an elegant intellectual system, not a dashboard.

Watch:

- The section should feel like category creation, not a generic services intro.

### 03 Build > Create > Amplify

Keep:

- Horizontal method sequence and active-step treatment.
- BUILD as the first focused state.
- Photography paired with the method, so the section feels strategic and human.

Watch:

- This can become interactive later, but the first implementation can be static if fidelity is stronger that way.

### 04 Cultural Properties

Keep:

- Gallery/editorial composition with one featured property and two supporting rows.
- Everything Zambia as the featured first property.
- Know Your Power in the second slot as civic education.
- Pineapple Sessions in the third slot as music and storytelling.

Watch:

- The generated KYP image includes small poster-like text; do not treat that raster text as required homepage copy.
- Use the locked HTML copy from `docs/REDESIGN_BRIEF.md`.

### 05 Final CTA / Footer

Keep:

- Large `Start with a Conversation.` close.
- The light beam / profile / eclipse motif.
- Email displayed as `hello@luminaryco.net`.
- WhatsApp / phone displayed as `+260 97 465 1180`.
- Social labels/icons present in the footer, but not linked until URLs are verified.
- Location displayed as `Lusaka, Zambia`; do not use the full street address.
- Restrained footer with brand, nav, location, and `© 2026 Luminary Co. All rights reserved.`
- No duplicate email or WhatsApp directly beneath the `Let's Talk` button; the button is the only contact action in the top CTA area.
- Footer legal row should stay legal-only; email, WhatsApp, phone, and location live once in the footer contact block.

Watch:

- Footer links should map to real anchors in the v2 page.

## Next Step

Extract the design system before implementation:

- typography scale and font choices
- color tokens
- spacing and grid
- section rhythm
- buttons and arrows
- image treatment
- motion rules
- responsive collapse rules

Then build `public/v2/` section by section, comparing each browser section against the matching concept image.
