# Design System: The Editorial Core

## 1. Overview & Creative North Star: "The Digital Curator"
This design system moves away from the utilitarian "utility tool" aesthetic typical of SaaS platforms and moves toward an editorial, high-end experience. Our Creative North Star is **The Digital Curator**. 

We treat every QR code not as a technical barcode, but as a digital artifact. To achieve this, the system breaks the "template" look through **intentional white space (macro-typography)**, **asymmetric balance**, and **tonal layering**. We prioritize breathing room over density, ensuring the user feels a sense of calm and privacy—a direct reflection of our commitment to a fast, reliable, and secure environment.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in a pristine, light-only environment. We achieve structure not through lines, but through the sophisticated interplay of light and surface.

### The "No-Line" Rule
**Prohibition:** Designers are strictly prohibited from using 1px solid borders for sectioning or containment. 
**Execution:** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the definition needed. If an element requires a container, use the hierarchy below.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine paper.
*   **Base Layer:** `surface` (#f9f9f9) – The canvas.
*   **Secondary Layer:** `surface-container-low` (#f3f3f3) – For subtle content grouping.
*   **Floating Layer:** `surface-container-lowest` (#ffffff) – Used for high-priority cards or modals to create "pop" against the off-white base.

### The "Glass & Gradient" Rule
To elevate the primary blue (`primary`: #004ac6), use **Signature Textures**. Main CTAs should utilize a subtle linear gradient from `primary` to `primary_container` (#2563eb) at a 135-degree angle. This prevents the "flat" default look and adds a premium, tactile glow. For floating navigation or sidebars, apply `surface-container-lowest` with an 80% opacity and a `24px` backdrop blur to create a frosted-glass effect.

---

## 3. Typography: Authoritative Clarity
We use **Inter** as our sole typeface, leveraging its mathematical precision to convey reliability.

*   **Display (lg/md):** Used for hero sections. These should be set with tight letter-spacing (-0.02em) to create an authoritative, editorial feel.
*   **Headline (sm/md):** The "voice" of the platform. Use these to introduce features with ample margin-bottom to emphasize importance.
*   **Body (md):** Set at #434655 (`on_surface_variant`). Never use pure black for long-form text; the slight grey reduction increases readability and perceived premium quality.
*   **Label (sm):** All-caps with +0.05em tracking for secondary metadata or small "Privacy-First" badges.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often "muddy." This system uses light to define space.

*   **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on top of a `surface-container-low` (#f3f3f3) background. The delta in hex value creates a "Soft Lift" that feels integrated into the architecture.
*   **Ambient Shadows:** For high-elevation elements (like the QR Code Previewer), use a dual-shadow approach:
    *   Shadow 1: 0px 4px 20px rgba(0, 74, 198, 0.04) (A tinted blue shadow).
    *   Shadow 2: 0px 2px 4px rgba(0, 0, 0, 0.02).
*   **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use `outline-variant` (#c3c6d7) at **20% opacity**. It should be felt, not seen.

---

## 5. Components: Fluid Primitives

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `md` (12px) corner radius. Use 16px 32px padding for a "wide" luxury feel.
*   **Tertiary:** No background, no border. Use `primary` text weight 600. These should feel like text links but function as actions.

### Input Fields
*   **Visual Style:** `surface-container-lowest` fill with a "Ghost Border." On focus, the border transitions to 100% `primary` opacity, and the background shifts to `surface`.
*   **Feedback:** Error states use `error` (#ba1a1a) text but the input background shifts to `error_container` (#ffdad6) at 30% opacity.

### QR Code Artifacts (Specialty Component)
*   The QR code itself should never be placed on a raw background. It must sit on a `surface-container-lowest` card with a `xl` (24px) corner radius and an "Ambient Shadow" to signify its status as a generated "object."

### Cards & Lists
*   **Forbid Dividers:** Do not use horizontal lines between list items. Use 12px or 16px of vertical white space and a subtle hover state shift to `surface-container-high` (#e8e8e8) to define rows.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. A wider left-hand margin on text-heavy pages creates an "Editorial Column" feel.
*   **Do** use `9999px` (Full) radius for status chips (e.g., "Active," "Encrypted") to contrast against the `12px` (md) radius of functional containers.
*   **Do** leverage high-contrast typography scales (e.g., placing `label-sm` directly above `display-md`).

### Don’t:
*   **Don't** use Dark Mode colors. This system is optimized for light-wavelength clarity and "cleanliness."
*   **Don't** use standard "Blue/Gray" shadows. Always tint shadows with 2-4% of the `primary` blue to keep the palette vibrant.
*   **Don't** crowd the interface. If a screen feels busy, increase the background-color nesting levels rather than adding lines or borders.