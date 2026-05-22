# Akshat Kardak — Developer Portfolio

> A cinematic, dark-themed developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Features a multi-phase animated loading screen, section-based navigation, lightbox image previews, and a Resend-powered contact form.

---

## ✨ Features

- **Cinematic Loader** — Multi-phase entrance: logo reveal → terminal boot → "Get Started" CTA → portfolio reveal
- **Section Navigation** — Smooth SPA-style switching between Dashboard, About, Projects, Skills, Experience, Certifications, and Contact
- **Lightbox Image Previews** — Click any project/experience/certificate image to view full-screen with a blur backdrop
- **Resend Contact Form** — Contact form POSTs to `/api/contact` which sends a styled email via Resend
- **CV Download** — "Download Resume" button in the About section directly serves `Akshat Kardak CV.pdf` from `public/images/`
- **Dark-First Design** — Fully dark themed with glassmorphism cards, gradient accents, and ambient particles
- **Fully Responsive** — Mobile-first layout, works across all screen sizes
- **Accessible** — Semantic HTML, keyboard navigable, WCAG-compliant contrast, `aria-label` on all icon buttons

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Email | Resend |
| Deployment | Vercel |

---

## 📁 Project Structure

```
Akshat-Portfolio/
├── app/
│   ├── api/
│   │   └── contact/route.ts     # Resend email API route
│   ├── globals.css               # Global styles, design tokens, animations
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main SPA page with section routing
├── components/
│   ├── Loader.tsx                # Multi-phase animated loading screen
│   ├── Navbar.tsx                # Top navigation bar
│   ├── About.tsx                 # About section with CV download
│   ├── Projects.tsx              # Projects grid with lightbox
│   ├── Experience.tsx            # Work experience timeline with lightbox
│   ├── Certifications.tsx        # Certifications grid with lightbox
│   ├── Skills.tsx                # Skills section
│   ├── Contact.tsx               # Contact form (Resend)
│   └── BrandIcons.tsx            # Custom SVG brand icons
├── lib/
│   ├── data.ts                   # All portfolio content (projects, experience, certs, skills)
│   └── types.ts                  # TypeScript type definitions
└── public/
    └── images/
        ├── Akshat Kardak CV.pdf  # ⬅ CV served by the Download Resume button
        └── (project screenshots, cert images, profile photos)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/AkshatKardak/Akshat-Portfolio.git
cd Akshat-Portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
# Required — Resend API key for the contact form
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> **Resend:** Sign up at [resend.com](https://resend.com), create an API key, and paste it above.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## ☁️ Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import `AkshatKardak/Akshat-Portfolio`
3. Vercel auto-detects Next.js — no build config needed
4. Add environment variables in **Settings → Environment Variables**:
   - `RESEND_API_KEY` → your Resend API key **(required for contact form)**
5. Click **Deploy**

Every future push to `main` triggers an automatic redeployment.

---

## 📧 Contact Form (Resend)

The route `app/api/contact/route.ts` accepts `POST { name, email, message }` and:
- Sends a styled dark-themed HTML email to `kardakakshat@gmail.com`
- Sets `replyTo` to the sender's email so you can reply directly
- Returns `{ success: true, id }` on success or `{ error }` on failure

The `RESEND_API_KEY` environment variable must be set. Without it the form will return a 500 error.

---

## 📄 CV Download

The **Download Resume** button in the About section points to `/images/Akshat Kardak CV.pdf`.
The file lives at `public/images/Akshat Kardak CV.pdf` and is served as a static asset by Next.js.
To update your CV, simply replace that file — no code changes needed.

---

## 🎨 Customisation

All portfolio content lives in **`lib/data.ts`** — edit this file to update your info:

```ts
// Personal details + resume path
export const personal = { name, role, email, github, linkedin, resumeUrl, ... }

// Projects
export const projects: Project[] = [...]

// Experience
export const experiences = [...]

// Certifications
export const certifications = [...]

// Skills
export const skillGroups = [...]
```

To update your CV: replace `public/images/Akshat Kardak CV.pdf` with your new file (keep the same filename).
To add a project screenshot: place the image in `public/images/` and set `image: "/images/your-screenshot.png"` in the project object.

---

## 📄 License

MIT — feel free to fork and customise for your own portfolio.

---

<p align="center">Built with ❤️ by <a href="https://github.com/AkshatKardak">Akshat Kardak</a></p>
