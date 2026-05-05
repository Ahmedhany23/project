---
name: High-Contrast Tech
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bdcbae'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#88957b'
  outline-variant: '#3e4a34'
  surface-tint: '#6ee000'
  primary: '#f7ffe9'
  on-primary: '#173800'
  primary-container: '#7cfc00'
  on-primary-container: '#347000'
  inverse-primary: '#316b00'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#464747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#fcfcfc'
  on-tertiary: '#2f3131'
  tertiary-container: '#dfdfdf'
  on-tertiary-container: '#616263'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#82ff1a'
  primary-fixed-dim: '#6ee000'
  on-primary-fixed: '#0a2000'
  on-primary-fixed-variant: '#245100'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is defined by a high-energy, technical aesthetic that balances extreme minimalism with a punchy, digital-first vibrance. It is designed to evoke feelings of precision, innovation, and developer-centric efficiency. By leveraging a dark-mode foundation and high-contrast accents, the UI creates a focused environment that highlights content through structural clarity rather than decorative fluff.

The visual style is a hybrid of **Minimalism** and **High-Contrast / Bold**. It utilizes heavy blacks and neon greens to simulate a futuristic command-line interface, refined for a modern professional context. This approach prioritizes immediate visual impact and clear hierarchy, making it ideal for technical portfolios, software engineering tools, or high-end fintech platforms.

## Colors

The palette is rooted in a deep, near-black neutral (#0D0D0D) which provides a sophisticated backdrop for high-frequency interactions. The primary brand color is a vibrant electric green (#7CFC00), used sparingly for calls to action, status indicators, and critical highlights to draw the eye instantly.

A secondary mid-tone gray (#999999) manages secondary information and inactive states, ensuring the UI doesn't become overwhelming. Pure white (#FFFFFF) is reserved for primary body text and high-level icons to ensure maximum legibility against the dark background. The color application follows a strict 60-30-10 rule to maintain a professional, rather than garish, atmosphere.

## Typography

This design system uses a strategic pairing of **Space Grotesk** and **Inter**. Space Grotesk serves as the primary engine for headlines and labels; its geometric and slightly eccentric character reinforces the technical, futuristic narrative. For large displays, the font is set with tight letter spacing to emphasize its bold, architectural qualities.

**Inter** is utilized for all body copy and long-form text. Its neutral, utilitarian design ensures that even in a dark-mode environment with high contrast, the readability remains high. The hierarchy relies on significant scale shifts between headlines and body text to create a clear entry point for the user’s eye.

## Layout & Spacing

The design system employs a **fixed grid** philosophy for desktop layouts, utilizing a 12-column system with generous margins to create a focused "stage" for content. This creates a sense of intentionality and premium polish. On mobile, the system transitions to a fluid model with a 4-column structure.

The spacing rhythm is strictly based on an 8px baseline grid. Padding and margins should always be multiples of 8 to ensure mathematical harmony. Elements that are logically grouped use a 12px or 24px gap, while major sections are separated by 80px or more to allow the design to "breathe" despite the heavy color palette.

## Elevation & Depth

In this design system, depth is achieved through **low-contrast outlines** and **tonal layers** rather than traditional drop shadows. Surfaces are differentiated by slight variations in the darkness of the background (e.g., a slightly lighter gray for a card component) combined with a 1px solid border in a subtle gray.

For interactive elements or focused states, a "glow" effect may be used by applying a soft, low-opacity outer blur using the primary green color, mimicking the light of a monitor. This keeps the interface feeling flat and modern while providing clear physical metaphors for stack order and importance.

## Shapes

The shape language is primarily **Soft**, using subtle 4px (0.25rem) corner radii to prevent the UI from feeling overly aggressive or dated. Large containers and sections maintain a more rigid structure, while interactive components like buttons and tags use the small radius to appear approachable yet professional. 

Circular shapes are used exclusively for avatars and secondary utility icons to provide a visual counterpoint to the otherwise rectangular and grid-heavy composition.

## Components

### Buttons
Buttons should be high-contrast blocks. The primary action button is a solid fill of the primary green with black text. Secondary buttons use a "ghost" style: a 1px white or gray border with white text. Hover states should involve a slight scale-up (1.02x) or a shift to a solid primary green background if the button was previously outlined.

### Cards & Containers
Cards are styled with the neutral background and a 1px border (#999999 at 20% opacity). There is no background blur; instead, content is organized using strict internal padding (24px). Titles within cards should always use the Space Grotesk headline-sm style.

### Inputs & Fields
Input fields use a dark-gray fill slightly lighter than the background to denote interactivity. The bottom border should be emphasized; when focused, the entire border or a bottom indicator should transition to the primary green.

### Chips & Tags
Used for categories or skills, chips should use the label-md typography. They can be styled as small outlines or with a very subtle green tint in the background to indicate active filtering.

### Lists
Lists should be separated by thin, low-opacity horizontal dividers. Bullet points are replaced with geometric shapes (small squares or chevrons) in the primary green to reinforce the technical aesthetic.