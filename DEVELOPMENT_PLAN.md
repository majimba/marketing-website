# Luminary Co. Website - Development Plan

## 🎯 Project Overview
**Goal:** Build a single-page marketing website for Luminary Co. in 3-4 development days
**Deliverable:** Production-ready `index.html` file deployable to any static hosting provider

---

## 📅 Phase 1: Project Setup & Foundation (Day 1 - Morning, 2 hours)

### 1.1 Initialize Project Structure
- [ ] Create project folder: `luminary_co_website`
- [ ] Open folder in Cursor
- [ ] Create initial file structure

### 1.2 Generate HTML Boilerplate
**Action:** Use Cursor AI Chat (`Cmd+K`)
**Prompt:** 
```
Generate a single HTML file boilerplate with Tailwind CSS and Google Fonts (Montserrat and Inter) loaded via CDN. Include a basic <header>, <main>, and <footer> structure. The header should have a logo placeholder and navigation menu. The main should be empty and ready for sections. The footer should have basic structure.
```

**Expected Output:** Complete HTML file with:
- Proper DOCTYPE and meta tags
- Tailwind CSS CDN link
- Google Fonts (Montserrat, Inter)
- Basic header with navigation
- Empty main section
- Basic footer structure

### 1.3 Scaffold Primary Sections
**Action:** Add section structure to main element
**Prompt:**
```
Create 9 <section> tags inside main, each with a unique ID corresponding to the website plan: hero, about, services, portfolio, why, testimonials, movement, contact, and footer. Each section should have appropriate semantic HTML structure and be ready for content.
```

**Expected Output:** 9 empty sections with proper IDs and basic structure

---

## 🏗️ Phase 2: Building the Layout (Day 1 - Afternoon to Day 2, 1 full day)

### 2.1 Hero Section
**Action:** Build full-screen hero with CTAs
**Prompt:**
```
Build the hero section using the provided HTML file. It should be a full-screen section (min-h-screen) with a placeholder background image from placehold.co. Center the H1 headline 'Your Story, Amplified.' in large, bold Montserrat font. Add a paragraph of subtext below it. Include two buttons: 'Start Your Journey' (primary, #ffc75b background) and 'Explore Our Work' (secondary, outline style). Style them according to the brand guide with proper hover effects.
```

**Expected Output:** Full-screen hero with centered content and two styled CTAs

### 2.2 About Us Section
**Action:** Create brand narrative section
**Prompt:**
```
Build the about us section with a centered headline 'Who We Are' and a compelling paragraph explaining Luminary Co.'s mission as a Lusaka-based creative and media agency. Include a subtitle about being mission-driven. Use proper spacing and typography hierarchy.
```

**Expected Output:** About section with mission statement and brand positioning

### 2.3 Services Section
**Action:** Implement 6-service grid layout
**Prompt:**
```
Build the services section with a centered headline 'Our Services' and a responsive 3-column grid (md:grid-cols-3). Each grid item should be a card with an icon placeholder, headline, and short description. The six services are: Brand Strategy, Content Creation, Digital Marketing, Media Production, Event Management, and Creative Consulting. Make it mobile-responsive with proper spacing.
```

**Expected Output:** Responsive services grid with 6 service cards

### 2.4 Portfolio Section
**Action:** Create visual showcase with hover effects
**Prompt:**
```
Build the portfolio section with a centered headline 'Our Work' and a responsive grid of portfolio items. Each item should have a placeholder image from placehold.co, and on hover, reveal the client name and a brief result. Use CSS transitions for smooth hover effects. Include at least 6 portfolio items.
```

**Expected Output:** Portfolio grid with hover effects and client information

### 2.5 Why Choose Us Section
**Action:** Build value proposition section
**Prompt:**
```
Create a 'Why Choose Us' section that highlights Luminary Co.'s unique advantages. Include 3-4 key points with icons and descriptions. Use a clean, card-based layout that's mobile-responsive.
```

**Expected Output:** Value proposition section with key differentiators

### 2.6 Testimonials Section
**Action:** Build client quotes section
**Prompt:**
```
Build the testimonials section with a centered headline 'What Our Clients Say' and a container for rotating testimonials. Include 3-4 placeholder testimonials with client names and quotes. Style them in an attractive card format.
```

**Expected Output:** Testimonials section ready for slider functionality

### 2.7 Movement Section
**Action:** Create company culture section
**Prompt:**
```
Build the 'Movement' section that showcases Luminary Co.'s company culture and team. Include a headline about joining the movement and a brief description of the company's values and mission.
```

**Expected Output:** Company culture and values section

### 2.8 Contact Section
**Action:** Implement lead capture form
**Prompt:**
```
Build the contact section with a centered headline 'Get In Touch' and a contact form. The form should include fields for: Name, Email, Phone, and Message. Add a submit button styled with the brand colors. Include direct contact information below the form.
```

**Expected Output:** Functional contact form with proper styling

---

## ⚡ Phase 3: JavaScript Interactivity (Day 3, 1 full day)

### 3.1 Mobile Menu Functionality
**Action:** Implement hamburger menu toggle
**Prompt:**
```
Write the JavaScript needed to make the mobile menu button toggle the visibility of the mobile menu. The mobile menu should slide in from the right and include all navigation items. Place the script in a <script> tag at the bottom of the <body>. Include proper CSS transitions for smooth animations.
```

**Expected Output:** Functional mobile menu with smooth animations

### 3.2 Testimonial Slider
**Action:** Create auto-cycling testimonial carousel
**Prompt:**
```
Create the JavaScript for a simple testimonial slider. It should automatically cycle through the testimonial divs every 5 seconds and update the active dot indicator. Include pause on hover functionality and smooth transitions between testimonials.
```

**Expected Output:** Auto-cycling testimonial slider with controls

### 3.3 Scroll Animations
**Action:** Implement fade-in effects on scroll
**Prompt:**
```
Write JavaScript using the Intersection Observer API to add a 'visible' class to any element with the class 'fade-in' when it enters the viewport. Add the required CSS for a smooth fade-in transition. Apply the fade-in class to key elements throughout the page.
```

**Expected Output:** Smooth scroll-triggered animations

### 3.4 Form Validation & Submission
**Action:** Add form functionality
**Prompt:**
```
Add JavaScript form validation for the contact form. Validate that all required fields are filled and email format is correct. Include visual feedback for validation errors and success messages. The form should prevent submission if validation fails.
```

**Expected Output:** Form validation with user feedback

---

## 🎨 Phase 4: Content, SEO & Testing (Day 4, 4-6 hours)

### 4.1 Content Population
**Action:** Replace placeholder content with production copy
- [ ] Replace all placeholder text with final copy
- [ ] Update image URLs from placehold.co to production images
- [ ] Verify all CTAs and links are correct
- [ ] Check typography hierarchy and readability

### 4.2 SEO & Meta Tags
**Action:** Add search engine optimization
**Prompt:**
```
Generate the necessary meta tags for SEO for the Luminary Co. website, including title, description, and open graph tags for social sharing. The title should be "Luminary Co. - Your Story, Amplified | Creative & Media Agency Zambia" and include proper meta description and Open Graph tags.
```

**Expected Output:** Complete SEO meta tags and Open Graph data

### 4.3 Cross-Browser Testing
**Action:** Validate functionality across browsers
- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Verify all interactive elements work correctly

### 4.4 Mobile Testing
**Action:** Validate mobile responsiveness
- [ ] Test on physical mobile devices
- [ ] Verify touch interactions work properly
- [ ] Check responsive breakpoints
- [ ] Ensure no horizontal scrolling
- [ ] Test mobile menu functionality

### 4.5 Performance Optimization
**Action:** Optimize for speed and accessibility
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Validate accessibility (WCAG 2.1 AA)
- [ ] Optimize images and assets
- [ ] Minify code if needed

---

## 🚀 Phase 5: Deployment Preparation (Day 4 - Final hours)

### 5.1 Final Review
- [ ] Proofread all content
- [ ] Verify all links and forms work
- [ ] Check responsive design on all screen sizes
- [ ] Validate HTML structure
- [ ] Test contact form submission

### 5.2 Deployment Files
- [ ] Ensure `index.html` is production-ready
- [ ] Verify all assets are properly linked
- [ ] Check that the site works without internet connection (for local testing)
- [ ] Create deployment checklist

### 5.3 Deployment Options
**Choose one deployment method:**
- [ ] **Netlify:** Drag and drop `index.html` to netlify.com
- [ ] **Vercel:** Connect GitHub repository for automatic deployment
- [ ] **GitHub Pages:** Push to repository and enable Pages
- [ ] **AWS S3 + CloudFront:** Upload to S3 bucket with CloudFront distribution

---

## 📋 Daily Milestones

### Day 1
- ✅ Project setup complete
- ✅ HTML boilerplate generated
- ✅ All sections scaffolded
- ✅ Hero section built
- ✅ About section built

### Day 2
- ✅ Services section complete
- ✅ Portfolio section complete
- ✅ Why Choose Us section complete
- ✅ Testimonials section complete
- ✅ Movement section complete
- ✅ Contact section complete

### Day 3
- ✅ Mobile menu functional
- ✅ Testimonial slider working
- ✅ Scroll animations implemented
- ✅ Form validation complete

### Day 4
- ✅ All content populated
- ✅ SEO meta tags added
- ✅ Cross-browser testing complete
- ✅ Mobile testing complete
- ✅ Performance optimized
- ✅ Ready for deployment

---

## 🛠️ Development Tools & Resources

### Cursor AI Commands
- **`Cmd+K` (Mac) / `Ctrl+K` (Windows):** AI chat assistance
- **Inline editing:** Select code and use `Cmd+K` for quick refinements
- **Code generation:** Use specific prompts for each section

### Testing Tools
- **Browser DevTools:** For responsive testing and debugging
- **Lighthouse:** Performance and accessibility auditing
- **Mobile device simulation:** Chrome DevTools device toolbar

### Deployment Platforms
- **Netlify:** Free tier, drag-and-drop deployment
- **Vercel:** Git-based deployment with previews
- **GitHub Pages:** Free hosting for public repositories

---

## 🎯 Success Criteria

### Technical Requirements
- [ ] Page loads in under 3 seconds
- [ ] Fully responsive on all devices
- [ ] WCAG 2.1 AA accessibility compliance
- [ ] Cross-browser compatibility
- [ ] Mobile-first design

### Business Requirements
- [ ] Clear value proposition communicated
- [ ] Portfolio effectively showcases work
- [ ] Contact form captures leads
- [ ] Professional brand representation
- [ ] Ready for client presentation

---

**Ready to start building? Begin with Phase 1, Step 1.1! 🚀**
