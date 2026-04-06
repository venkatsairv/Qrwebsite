# Design System Document

## 1. Overview & Creative North Star: "The Ethereal Utility"
This design system moves beyond the utility of a standard QR generator to create a premium, editorial-grade tool. The Creative North Star is **"The Ethereal Utility"**—a philosophy where high-function tools are presented through a lens of extreme clarity and soft, atmospheric depth.

To break the "template" look of modern web apps, this system relies on **intentional asymmetry** and **tonal layering**. We treat the browser as a physical space where light and air occupy the gaps between elements. By utilizing a dramatic typography scale—pairing the functional `Inter` with the architectural `Manrope`—we elevate a simple generator into a professional creative instrument.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a "Low-Key" dark environment, punctuated by a singular, high-energy primary blue.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural definition must be achieved through **background color shifts**. For example, a configuration panel uses `surface-container-low` (#1f2324) to distinguish itself from the `surface` (#141516) canvas. 

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of frosted glass. 
- **The Canvas:** `surface` (#141516)
- **The Stage:** `surface-container-low` (#1f2324) for large secondary areas.
- **The Hero:** `surface-container-lowest` (#0a0b0c) for primary cards and interaction zones.

### The "Glass & Gradient" Rule
To avoid a "flat" feel, use **Glassmorphism** for floating tooltips or navigation bars. Apply a `backdrop-filter: blur(20px)` to a semi-transparent `surface` color.
- **Signature Texture:** The primary CTA should not be a flat fill. Use a subtle linear gradient from `primary` (#0049db) to `primary-container` (#2962ff) at a 135-degree angle to provide a "lit from within" professional polish.

---

## 3. Typography
We utilize two distinct typefaces to balance character with utility.

*   **Display & Headlines (Manrope):** Used for brand moments and section headers. Manrope’s geometric construction provides an "Architectural" feel.
*   **Body & Labels (Inter):** Used for all functional data and input. Inter’s high x-height ensures readability at small scales.

### Key Scales:
- **Display-LG (Manrope, 3.5rem):** Used for hero headers. Tracking: -0.02em.
- **Title-MD (Inter, 1.125rem):** Used for input labels to ensure high-speed legibility.
- **Label-SM (Inter, 0.6875rem):** Used for micro-copy and metadata, uppercase with +0.05em tracking for a "Swiss" editorial look.

---

## 4. Elevation & Depth
Depth is a functional tool, not a decoration. We use **Tonal Layering** to guide the eye.

### The Layering Principle
Instead of shadows, use the surface tiers. A `surface-container-lowest` (#0a0b0c) card sitting on a `surface-container-low` (#1f2324) background creates a "Soft Lift" that feels native to the environment.

### Ambient Shadows
Where floating is required (e.g., a generated QR code preview), use **Ambient Shadows**:
- **Shadow:** `0 20px 40px -12px rgba(25, 28, 29, 0.06)`
- This creates a diffused, natural lift that mimics a softbox in a photo studio.

### The "Ghost Border" Fallback
If a boundary is required for accessibility, use the **Ghost Border**: `outline-variant` (#434757) at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `moderate` (1rem) corner radius. High-contrast `on-primary` text.
- **Secondary:** `surface-container-high` (#242829) background with `primary` (#0049db) text. No border.
- **Interaction:** On hover, primary buttons should scale to 102% with a slight increase in shadow diffusion.

### Input Fields
- **Container:** `surface-container-lowest` (#0a0b0c).
- **Border:** Ghost Border (15% opacity `outline-variant`).
- **Focus State:** Border opacity increases to 100% using `primary` (#0049db) with a 4px soft glow.
- **Corners:** `subtle` (0.5rem) for a precise, "tool-like" feel.

### QR Code Preview Card
- **Styling:** Use `moderate` (1rem) corner radius. The card should use the `surface-container-lowest` fill.
- **Presentation:** Forbid divider lines. Separate the "Download" actions from the "QR Preview" using `spacious` (1.5rem) vertical whitespace.

### Chips (Format Selectors)
- **Unselected:** `surface-container-high` text on `surface-background`.
- **Selected:** `primary-fixed` (#dce1ff) background with `on-primary-fixed` (#001550) text. Use `full` (9999px) rounding.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Whitespace:** If it feels "too empty," add more space. High-end design breathes.
*   **Use Asymmetry:** Place the QR preview off-center or in a floating side-panel to break the "standard form" layout.
*   **Soft Transitions:** All state changes (hover, focus, active) must use a 300ms `cubic-bezier(0.4, 0, 0.2, 1)` transition.

### Don't:
*   **Don't Use Dividers:** Never use a horizontal rule `<hr>` to separate content. Use a background color shift or 48px+ of whitespace.
*   **Don't Use Pure Black:** Even for text. Use `on-surface` (#dce1e3) to maintain the "Ethereal" softness.
*   **Don't Use Sharp Corners:** Nothing in this system should be sharper than the `subtle` (0.5rem) radius. High-end tech is tactile and approachable.