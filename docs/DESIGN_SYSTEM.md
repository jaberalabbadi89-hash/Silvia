# Design System

Scope: this system is derived solely from the existing project documentation. Any value not documented as observed remains **UNVERIFIED**; no value is estimated.

## Colors

| Token      | Role                                           |           RGB |       Hex | Status    |
| ---------- | ---------------------------------------------- | ------------: | --------: | --------- |
| `color_41` | Primary green / action                         |  `80,149,109` | `#50956D` | CONFIRMED |
| `color_36` | White / base surface                           | `255,255,255` | `#FFFFFF` | CONFIRMED |
| `color_45` | Black / title text                             |       `0,0,0` | `#000000` | CONFIRMED |
| `color_38` | Light gray                                     | `232,230,230` | `#E8E6E6` | CONFIRMED |
| `color_39` | Medium gray / disabled control fill and border | `199,199,199` | `#C7C7C7` | CONFIRMED |
| `color_40` | Dark gray                                      |    `89,89,89` | `#595959` | CONFIRMED |

Semantic mappings are limited to documented use. Error, success, warning, overlay, focus-ring, and gradient tokens: **UNVERIFIED**.

## Typography

| Token     | Intended use        | Family / weight            | Size | Line height | Status    |
| --------- | ------------------- | -------------------------- | ---: | ----------: | --------- |
| `font_0`  | H1                  | Inter Bold                 | 60px |       1.4em | CONFIRMED |
| `font_2`  | Heading             | Inter Bold                 | 40px |       1.4em | CONFIRMED |
| `font_3`  | Section H3          | Inter Bold                 | 38px |       1.4em | CONFIRMED |
| `font_4`  | Heading             | Inter Bold                 | 35px |       1.4em | CONFIRMED |
| `font_5`  | H5 / form heading   | Inter Bold                 | 27px |       1.4em | CONFIRMED |
| `font_6`  | H6 / item heading   | Inter Bold                 | 20px |       1.4em | CONFIRMED |
| `font_7`  | Large body          | Inter Regular              | 22px |       1.4em | CONFIRMED |
| `font_8`  | Body                | Inter Regular              | 16px |       1.4em | CONFIRMED |
| `font_9`  | Small body          | Inter Regular              | 14px |       1.4em | CONFIRMED |
| `font_1`  | Text fallback chain | DIN Next Light, sans-serif | 16px |       1.4em | CONFIRMED |
| `font_10` | Text fallback chain | DIN Next Light, sans-serif | 12px |       1.4em | CONFIRMED |

Letter spacing, paragraph margins, mobile typography overrides, and font loading strategy: **UNVERIFIED**.

## Spacing scale

No reusable spacing tokens or numeric spacing values have been documented. **UNVERIFIED**

| Token family             | Values     | Status     |
| ------------------------ | ---------- | ---------- |
| `space-*`                | UNVERIFIED | UNVERIFIED |
| Section vertical padding | UNVERIFIED | UNVERIFIED |
| Container gutter         | UNVERIFIED | UNVERIFIED |
| Form field gap           | UNVERIFIED | UNVERIFIED |

## Radius

| Token / use                                   |      Value | Status     |
| --------------------------------------------- | ---------: | ---------- |
| `radius-full` / circular media container      |      `50%` | CONFIRMED  |
| `radius-*` for buttons, cards, fields, badges | UNVERIFIED | UNVERIFIED |

## Shadows

Page-specific shadow tokens and applied shadow values: **UNVERIFIED**.

| Token family | Value      | Status     |
| ------------ | ---------- | ---------- |
| `shadow-*`   | UNVERIFIED | UNVERIFIED |

## Breakpoints

The reference has a viewport meta tag, mobile-optimized Wix support, and responsive image sources. **CONFIRMED**

| Token family                     | Value / behavior          | Status     |
| -------------------------------- | ------------------------- | ---------- |
| `breakpoint-*`                   | Exact viewport thresholds | UNVERIFIED |
| Mobile navigation transformation | UNVERIFIED                | UNVERIFIED |
| Mobile section reflow            | UNVERIFIED                | UNVERIFIED |
| Responsive image delivery        | `srcset` is used          | CONFIRMED  |

## Containers and grid

| Token / system                  | Value / behavior                       | Status     |
| ------------------------------- | -------------------------------------- | ---------- |
| Master page layout              | CSS Grid rows for header, main, footer | CONFIRMED  |
| Form grid                       | 12 columns                             | CONFIRMED  |
| Observed form-field span        | Full 12 columns                        | CONFIRMED  |
| `container-*` max widths        | UNVERIFIED                             | UNVERIFIED |
| Main grid, columns, and gutters | UNVERIFIED                             | UNVERIFIED |

## Buttons

| Variant          | Default                                                  | Hover                             | Disabled                         | Status                 |
| ---------------- | -------------------------------------------------------- | --------------------------------- | -------------------------------- | ---------------------- |
| Primary          | Green fill and border; white text                        | White fill; green border and text | Gray fill and border; white text | CONFIRMED              |
| Secondary        | White fill; green border and text                        | Green fill and border; white text | UNVERIFIED                       | CONFIRMED / UNVERIFIED |
| Form submit      | Label is “Submit”; non-full-width desktop state observed | Underline hover style             | UNVERIFIED                       | CONFIRMED / UNVERIFIED |
| Carousel control | Previous/Next SVG chevron button                         | UNVERIFIED                        | UNVERIFIED                       | CONFIRMED / UNVERIFIED |

Button dimensions, padding, radius, font style, focus treatment, transition duration, and pressed state: **UNVERIFIED**.

## Cards

Offer, benefit, method, audience, and testimonial content groups exist. **CONFIRMED**

Their card boundaries, surface colors, radius, border, elevation, internal padding, and hover behavior: **UNVERIFIED**.

## Badges

No badge component or badge token is documented. **UNVERIFIED**

## Icons

| Icon                   | Source / behavior                         | Status    |
| ---------------------- | ----------------------------------------- | --------- |
| Instagram              | Footer vector SVG and external link       | CONFIRMED |
| Carousel chevrons      | Inline SVG for Previous and Next controls | CONFIRMED |
| Phone country selector | Spain flag PNG plus downward chevron SVG  | CONFIRMED |

Icon size scale, stroke/fill rules, color rules, hover behavior, and general icon library: **UNVERIFIED**.

## Forms

| Element       | Documented behavior                              | Status    |
| ------------- | ------------------------------------------------ | --------- |
| Form layout   | 12-column grid; observed fields span all columns | CONFIRMED |
| Theme         | Box input theme                                  | CONFIRMED |
| Name label    | “Yam”; required                                  | CONFIRMED |
| E-mail label  | Required email field                             | CONFIRMED |
| Phone label   | Required phone field with Spain country selector | CONFIRMED |
| Message label | Required textarea                                | CONFIRMED |
| Consent       | Required checkbox linking Privacy Policy         | CONFIRMED |
| Submit        | “Submit”                                         | CONFIRMED |

Field height, border, background, radius, padding, label type scale, placeholder styling, focus state, error state, success state, validation copy, and submission feedback: **UNVERIFIED**.

## Animation tokens

| Token / behavior                                           |           Value | Status                                                          |
| ---------------------------------------------------------- | --------------: | --------------------------------------------------------------- |
| Hover-box opacity/visibility transition                    |            0.5s | CONFIRMED; application to a specific page element is UNVERIFIED |
| Submit hover treatment                                     | Underline style | CONFIRMED                                                       |
| Page-specific entrance/scroll animation                    |      UNVERIFIED | UNVERIFIED                                                      |
| General easing, duration, delay, and reduced-motion policy |      UNVERIFIED | UNVERIFIED                                                      |

## Naming conventions

Use semantic, lower-kebab-case design-token names. This naming convention is a documentation protocol, not an observed source implementation. **CONFIRMED**

| Category    | Convention            | Example                | Status    |
| ----------- | --------------------- | ---------------------- | --------- |
| Colors      | `color-{role}`        | `color-action-primary` | CONFIRMED |
| Typography  | `type-{role}`         | `type-heading-section` | CONFIRMED |
| Spacing     | `space-{step}`        | `space-section-y`      | CONFIRMED |
| Radius      | `radius-{shape}`      | `radius-full`          | CONFIRMED |
| Shadows     | `shadow-{elevation}`  | `shadow-card`          | CONFIRMED |
| Breakpoints | `breakpoint-{size}`   | `breakpoint-mobile`    | CONFIRMED |
| Containers  | `container-{context}` | `container-page`       | CONFIRMED |
| Buttons     | `button-{variant}`    | `button-primary`       | CONFIRMED |
| Cards       | `card-{context}`      | `card-testimonial`     | CONFIRMED |
| Motion      | `motion-{property}`   | `motion-hover-opacity` | CONFIRMED |

These proposed token names do not assert a corresponding CSS/implementation API. **CONFIRMED**
