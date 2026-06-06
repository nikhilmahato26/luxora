# Luxora Holidays 🌴

A premium, high-converting **luxury travel & cab rental** single-page website for
**Luxora Holidays** (Cochin Airport, Nedumbassery, Kerala).

Built with a refined light theme — deep forest green `#14532D`, gold `#D4AF37` and
emerald `#10B981` — glassmorphism, Fraunces × Manrope typography, and smooth
Framer Motion animations.

---

## 🧱 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (utility classes only)
- **React Router DOM** — routing shell (single page, extendable)
- **Framer Motion** — scroll reveals, parallax, hover lift, page transitions
- **Swiper JS** — auto-playing testimonials slider
- **React Hook Form** — validated booking form
- **React Icons** + **Lucide React** — iconography

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

> Requires Node.js 18+.

---

## 📁 Project Structure

```
src/
├── assets/            # images, icons, logos (drop your own here)
├── components/
│   ├── ui/            # Button, GlassCard, SectionTitle, CarCard,
│   │                  # PackageCard, ServiceCard, PricingCard, FeatureCard, Logo
│   ├── layout/        # Navbar, MobileMenu, Footer, FloatingActions
│   └── sections/      # Hero, Fleet, RentalPackages, Destinations, Services,
│                      # WhyChooseUs, BookingProcess, Testimonials, CTA, Contact, FAQ
├── hooks/             # useCountUp, useScrolled
├── utils/             # whatsapp.js (links + INR formatting), animations.js
├── data/              # siteContent.js  ← EDIT EVERYTHING HERE
├── pages/             # Home.jsx
├── App.jsx
└── main.jsx
```

---

## ✏️ Editing Content

**All copy, pricing, fleet, packages, services, testimonials and FAQs live in one file:**

```
src/data/siteContent.js
```

Change phone numbers, prices, destinations, etc. there — every component reads
from it. No need to touch the components for content updates.

---

## 🖼️ Replacing Images

The site ships with free **Unsplash** photos so it looks complete immediately.
**For production, replace them with your own licensed photography:**

1. Drop files into `src/assets/images/`.
2. Either `import` them in `siteContent.js` and reference the imported variable,
   or swap the URLs for your own CDN links.

---

## 🪧 Adding the Real Logo

The logo is an inline SVG wordmark in `src/components/ui/Logo.jsx`
(placeholder built from the brand palette). To use the real artwork:

1. Add your file to `src/assets/logos/` (e.g. `logo.svg`).
2. `import logoUrl from '../../assets/logos/logo.svg'`.
3. Replace the emblem `<svg>` with `<img src={logoUrl} alt="Luxora Holidays" />`.

The `light` prop renders a white variant for dark backgrounds (used in the footer).

---

## 📞 Contact / Booking Logic

- **WhatsApp** is the primary booking channel. The number lives in
  `siteContent.js → business.whatsapp` (wa.me format, no `+`).
- The **booking form** (`Contact.jsx`) has no backend — on submit it composes a
  formatted WhatsApp message and opens chat. To wire a real backend (email,
  Sheets, CRM), replace the `onSubmit` handler.

---

## 🔍 SEO

`index.html` includes title, meta description, keywords, Open Graph, Twitter cards,
and `TravelAgency` JSON-LD structured data targeting:
*Best Cab Rental in Kochi · Cochin Airport Taxi · Kerala Tour Packages ·
Innova Rental Kerala · Luxury Cab Rental Kerala · Airport Pickup Cochin.*

---

## 🎨 Brand Tokens (tailwind.config.js)

| Token              | Value                       |
| ------------------ | --------------------------- |
| `canvas`           | `#F8FAFC` (background)       |
| `primary` (700)    | `#14532D` (forest green)     |
| `gold`             | `#D4AF37`                    |
| `emerald`          | `#10B981`                    |
| Display font       | Fraunces                     |
| Body font          | Manrope                      |

---

© Luxora Holidays. Built as a premium travel brand experience.
