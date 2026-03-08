# Isa Ebrahim Fitness Landing Page - Implementation Kickstart

## Project Overview

**Project Type:** Frontend-only prototype landing page  
**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, Framer Motion  
**Target:** High-converting fitness coaching landing page with premium dark aesthetic

---

## Design Token System

### Color Palette (Dark Theme with Electric Blue Accent)

```css
/* Background Colors */
--background: oklch(0.12 0 0);           /* #1a1a1a - Primary background */
--background-elevated: oklch(0.16 0 0);  /* #242424 - Cards, elevated surfaces */
--background-subtle: oklch(0.20 0 0);    /* #2e2e2e - Subtle backgrounds */

/* Accent Colors - Electric Blue */
--accent: oklch(0.65 0.25 250);          /* #3b82f6 - Primary accent */
--accent-hover: oklch(0.70 0.27 250);    /* #60a5fa - Accent hover state */
--accent-muted: oklch(0.55 0.20 250);    /* #2563eb - Muted accent */
--accent-glow: oklch(0.65 0.25 250 / 0.3); /* Glow effect */

/* Text Colors */
--foreground: oklch(0.98 0 0);           /* #fafafa - Primary text */
--foreground-muted: oklch(0.70 0 0);     /* #a3a3a3 - Secondary text */
--foreground-subtle: oklch(0.55 0 0);    /* #737373 - Subtle text */

/* Border & Surface */
--border: oklch(0.25 0 0);               /* #3d3d3d - Default borders */
--border-accent: oklch(0.65 0.25 250 / 0.5); /* Accent borders */

/* Glass Effect */
--glass-bg: oklch(0.16 0 0 / 0.6);       /* Glass background */
--glass-border: oklch(1 0 0 / 0.1);      /* Glass border */
--glass-blur: 12px;                       /* Backdrop blur */

/* Semantic Colors */
--success: oklch(0.65 0.20 145);         /* Green for success states */
--warning: oklch(0.75 0.18 85);          /* Amber for warnings */
--destructive: oklch(0.60 0.25 25);      /* Red for destructive */
```

### Typography System

```css
/* Font Family */
--font-sans: 'Geist', system-ui, sans-serif;
--font-mono: 'Geist Mono', monospace;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### Spacing System

```css
/* Base: 4px grid */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Border Radius

```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Pill shape */
```

### Shadows & Effects

```css
/* Shadows */
--shadow-sm: 0 1px 2px oklch(0 0 0 / 0.3);
--shadow-md: 0 4px 6px oklch(0 0 0 / 0.4);
--shadow-lg: 0 10px 15px oklch(0 0 0 / 0.5);
--shadow-xl: 0 20px 25px oklch(0 0 0 / 0.5);
--shadow-accent: 0 0 30px oklch(0.65 0.25 250 / 0.3);

/* Glass Effect */
backdrop-filter: blur(12px);
background: oklch(0.16 0 0 / 0.6);
border: 1px solid oklch(1 0 0 / 0.1);
```

### Animation Tokens

```css
/* Durations */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Easings */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / Small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Grid System

- **Mobile (< 768px):** Single column, full width
- **Tablet (768px - 1024px):** 2 columns for cards, navigation collapse
- **Desktop (> 1024px):** 3-4 columns for cards, full navigation

---

## Component Architecture

### File Structure

```
/app
  /layout.tsx              # Root layout with fonts, metadata
  /page.tsx                # Main landing page (imports all sections)
  /contact/page.tsx        # Contact Marcus page
  /globals.css             # Design tokens & global styles

/components
  /layout
    /navbar.tsx            # Sticky navbar with mobile menu
    /footer.tsx            # Footer with links
    /mobile-menu.tsx       # Hamburger menu drawer
  
  /sections
    /hero.tsx              # Hero section with CTA
    /social-proof.tsx      # Metrics strip
    /transformations.tsx   # Before/after gallery
    /testimonials.tsx      # Client testimonials
    /programs.tsx          # Pricing cards
    /why-train.tsx         # Benefits grid
    /about.tsx             # About Isa section
    /faq.tsx               # FAQ accordion
    /final-cta.tsx         # Bottom CTA section
  
  /ui
    /... (shadcn components)
    /glass-card.tsx        # Reusable glass effect card
    /section-header.tsx    # Consistent section headings
    /cta-button.tsx        # Primary CTA button
    /program-modal.tsx     # Modal for "View Programs"
    /back-to-top.tsx       # Smooth scroll button
    /star-rating.tsx       # 5-star display component
    /metric-card.tsx       # Stats display card
    /transformation-card.tsx # Before/after card
    /testimonial-card.tsx  # Quote card
    /pricing-card.tsx      # Program pricing card
    /benefit-card.tsx      # Why train feature card

/lib
  /utils.ts                # Helper functions (cn, etc.)
  /constants.ts            # Static content data
  /animations.ts           # Framer Motion variants

/public
  /images
    /hero-trainer.jpg      # Generated hero image
    /about-trainer.jpg     # About section image
    /transformations/      # Before/after images
```

### Component Size Guidelines

- Maximum ~600 lines per file
- Extract reusable UI components
- Keep section components focused
- Use constants file for static data

---

## Animation Specifications

### Scroll Animations (Framer Motion)

```typescript
// Fade up on scroll
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Scale on hover (cards)
const cardHover = {
  scale: 1.02,
  transition: { duration: 0.3 }
}
```

### Interactive Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Buttons | Scale 1.02 + glow on hover | 200ms |
| Cards | Subtle lift + border glow | 300ms |
| Navigation links | Underline slide | 200ms |
| Mobile menu | Slide from right | 300ms |
| FAQ accordion | Smooth expand/collapse | 300ms |
| Scroll reveal | Fade up | 600ms |
| Back to top | Fade in at 300px scroll | 200ms |

---

## CTA Placement Strategy

CTAs appear in these locations (minimum 3):

1. **Navbar** - "View Programs" button (always visible)
2. **Hero Section** - Primary "View Programs" button
3. **After Social Proof** - "Start Your Transformation" link
4. **Programs Section** - "Choose Program" on each card (opens modal)
5. **Final CTA Section** - "View Programs" with supporting text
6. **Footer** - Secondary "View Programs" link

### CTA Behavior

- **"View Programs"** - Opens modal showing all 3 programs
- **"Choose Program"** - Opens modal focused on that specific program
- **"Contact Marcus"** - Navigates to `/contact` page
- **"Back to Top"** - Smooth scroll to top

---

## SEO Strategy

### Meta Tags

```typescript
export const metadata: Metadata = {
  title: 'Isa Ebrahim | Online Fitness Coach - Transform Your Body',
  description: 'Train with Isa Ebrahim - 7+ years coaching, 500+ clients. Structured fitness programs for fat loss, strength building, and body recomposition.',
  keywords: ['fitness coach', 'online training', 'fat loss', 'strength training', 'personal trainer', 'Bahrain'],
  authors: [{ name: 'Isa Ebrahim' }],
  openGraph: {
    title: 'Isa Ebrahim | Online Fitness Coach',
    description: 'Structured fitness programs for real results',
    type: 'website',
    locale: 'en_US',
    images: ['/images/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isa Ebrahim | Online Fitness Coach',
    description: 'Structured fitness programs for real results'
  }
}
```

### Viewport

```typescript
export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1
}
```

### Semantic HTML

- `<header>` for navbar
- `<main>` for content
- `<section>` with appropriate aria-labels
- `<footer>` for footer
- Proper heading hierarchy (h1 > h2 > h3)
- Alt text on all images
- ARIA labels on interactive elements

---

## Implementation Phases

### Phase 1: Foundation Setup
1. Update `globals.css` with design tokens
2. Update `layout.tsx` with Geist fonts and metadata
3. Create animation utilities in `/lib/animations.ts`
4. Create constants file with all static content

### Phase 2: Core Components
1. Create `glass-card.tsx` component
2. Create `section-header.tsx` component
3. Create `cta-button.tsx` component
4. Create `back-to-top.tsx` component

### Phase 3: Layout Components
1. Build `navbar.tsx` with mobile menu
2. Build `mobile-menu.tsx` drawer
3. Build `footer.tsx`

### Phase 4: Section Components
1. Build `hero.tsx`
2. Build `social-proof.tsx` (metrics strip)
3. Build `transformations.tsx`
4. Build `testimonials.tsx`
5. Build `programs.tsx` with pricing cards
6. Build `why-train.tsx`
7. Build `about.tsx`
8. Build `faq.tsx`
9. Build `final-cta.tsx`

### Phase 5: Modal & Contact
1. Build `program-modal.tsx`
2. Build contact page `/contact/page.tsx`

### Phase 6: Images & Polish
1. Generate hero/trainer images
2. Generate transformation placeholder images
3. Final animation tweaks
4. Accessibility audit

---

## Image Generation Requirements

| Image | Dimensions | Description |
|-------|-----------|-------------|
| Hero Trainer | 800x1000 | Athletic male trainer, confident pose, dark background |
| About Trainer | 600x800 | Professional headshot, gym setting |
| Transformation 1 | 400x500 | Before/after male, visible progress |
| Transformation 2 | 400x500 | Before/after female, athletic |
| Transformation 3 | 400x500 | Before/after male, muscle gain |
| Transformation 4 | 400x500 | Before/after female, toned |
| OG Image | 1200x630 | Social sharing preview |

---

## Static Content Data

All content is defined in `/lib/constants.ts`:

- Trainer persona details
- Navigation links
- Hero content
- Trust indicators (metrics)
- Transformation data
- Testimonials
- Program details & pricing
- Benefits list
- FAQ items
- Footer links

---

## Glass Card Specifications

```css
.glass-card {
  background: oklch(0.16 0 0 / 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid oklch(1 0 0 / 0.1);
  border-radius: 1rem;
  box-shadow: 0 4px 6px oklch(0 0 0 / 0.4);
}

.glass-card:hover {
  border-color: oklch(0.65 0.25 250 / 0.3);
  box-shadow: 0 0 20px oklch(0.65 0.25 250 / 0.15);
}
```

---

## Accessibility Checklist

- [ ] Color contrast ratio >= 4.5:1 for text
- [ ] Focus indicators on all interactive elements
- [ ] Skip to content link
- [ ] Keyboard navigation support
- [ ] Screen reader friendly headings
- [ ] Alt text on images
- [ ] ARIA labels on icons/buttons
- [ ] Reduced motion support (`prefers-reduced-motion`)

---

## Development Notes

### Dependencies to Install

```json
{
  "framer-motion": "^11.x",
  "@radix-ui/react-dialog": "^1.x",
  "@radix-ui/react-accordion": "^1.x"
}
```

### Key Considerations

1. **No State Management** - Use local component state only
2. **Placeholder Content** - All content in constants file for easy editing
3. **Mobile First** - Build mobile layout, enhance for desktop
4. **Performance** - Lazy load images, optimize animations
5. **Full Width** - No max-width container, sections span viewport

---

## Ready for Implementation

This document provides all specifications needed to begin development. The implementation will follow the phases outlined above, with each component kept modular and under the 600-line limit for maintainability.

**Next Step:** Begin Phase 1 - Foundation Setup
