# 🏭 Nusantara Industrial Group — Company Profile Website

> **⚠️ Disclaimer: This project is built purely as a personal portfolio project. The company "Nusantara Industrial Group", its data, statistics, and all content within this website are entirely fictional and created solely for demonstration purposes.**

---

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=flat-square&logo=tailwindcss)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=flat-square&logo=reactrouter)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A full-featured, multi-page **Company Profile Website** for a fictional heavy industry conglomerate (Manufacturing & Mining sector), built as a **frontend portfolio project**. Designed with an **Industrial Modern & Bold** aesthetic using a dark-mode-first approach.

---

## 🎯 About This Project

This project was built as part of my **frontend development portfolio** to demonstrate my ability to:

- Design and implement a **production-grade, multi-page website** from scratch
- Apply **UI/UX principles** specific to a B2B / heavy industry context
- Write **clean, modular React code** with reusable components
- Work with **Tailwind CSS** for a fully custom, responsive design system
- Structure a real-world project with **React Router** for client-side navigation

> 💼 **Built by:** Rama Raditya
> 🔗 **Portfolio:** [https://ramaditya19.github.io/rama-raditya]
> 📧 **Contact:** [[EMAIL_ADDRESS]](mailto:[ramaraditya4371@gmail.com])

---

## 🖥️ Live Demo

> 🚀 [View Live Demo](https://industrial-compro.vercel.app/)

---

## 📸 Pages Overview

| # | Halaman | Path | Deskripsi |
|---|---------|------|-----------|
| 1 | **Home** | `/` | Hero, animated stats, operations preview, ESG highlight, news, CTA |
| 2 | **Tentang Kami** | `/tentang-kami` | Visi-misi, company timeline, core values, interactive leadership panel |
| 3 | **Operasi** | `/operasi` | Tabbed division detail (Manufaktur & Pertambangan), specs, facilities table |
| 4 | **Keberlanjutan** | `/keberlanjutan` | ESG 3-pillar framework, environment programs with progress, certifications |
| 5 | **Karir** | `/karir` | Company culture, searchable & filterable job listings with accordion |
| 6 | **Berita** | `/berita` | Category filter, featured news + grid layout |
| 7 | **Kontak** | `/kontak` | Contact form with validation, office locations, quick channels |

---

## ✨ Key Features

- 🌑 **Dark Mode Industrial Design** — `zinc-950` base with `amber-500` accent throughout
- 📱 **Fully Responsive** — Mobile-first layout, works on all screen sizes
- 🧭 **Multi-Page Routing** — Client-side navigation with React Router DOM v6
- 🔢 **Animated Counters** — Scroll-triggered number animations on stats section
- 🗂️ **Interactive Components** — Tabbed panels, accordion job listings, leadership selector
- 🔍 **Search & Filter** — Live search + category filter on the careers page
- ✅ **Form with Validation** — Contact form with loading state and success feedback
- 🎨 **Glassmorphism Navbar** — Transparent → frosted glass on scroll
- 🏗️ **Modular Architecture** — Shared components, reusable hooks, clean file structure

---

## 🗂️ Project Structure

```
src/
├── App.jsx                  # Root component, router config
├── Layout.jsx               # Navbar & Footer shared layout
├── shared.jsx               # Reusable components & custom hooks
│   ├── NoiseTexture
│   ├── GridPattern
│   ├── SectionLabel
│   ├── PageHero
│   ├── useCounter()
│   └── useInView()
└── pages/
    ├── HomePage.jsx
    ├── AboutPage.jsx
    ├── OperationsPage.jsx
    ├── SustainabilityPage.jsx
    ├── CareerPage.jsx
    ├── NewsPage.jsx
    └── ContactPage.jsx
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18.x | UI framework |
| [Vite](https://vitejs.dev) | 5.x | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Utility-first styling |
| [React Router DOM](https://reactrouter.com) | 6.x | Client-side routing |
| [Lucide React](https://lucide.dev) | Latest | Icon library |
| [Barlow](https://fonts.google.com/specimen/Barlow) | — | Display & body font (Google Fonts) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18.x`
- npm `>= 9.x`

### Installation

```bash
# 1. Clone repository
git clone https://github.com/rama-raditya/nusantara-industrial.git

# 2. Navigate into the project
cd nusantara-industrial

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy.

---

## 🌐 Deployment

This project can be deployed to any static hosting platform:

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
```bash
npm run build
# Upload the dist/ folder to Netlify drag-and-drop
```

> ⚠️ For React Router to work on Netlify, add a `_redirects` file inside `public/`:
> ```
> /*    /index.html   200
> ```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Background | `zinc-950` (#09090b) | Page background |
| Surface | `zinc-900` (#18181b) | Cards, panels |
| Border | `zinc-800` (#27272a) | Dividers, card borders |
| Text Primary | `white` | Headings |
| Text Secondary | `zinc-400` (#a1a1aa) | Body text |
| Accent | `amber-500` (#f59e0b) | CTAs, highlights, accents |
| Accent Alt | `orange-600` (#ea580c) | Mining division accent |
| Success | `emerald-500` (#10b981) | ESG / sustainability |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Acknowledgements

- Design inspired by industrial & heavy equipment brand aesthetics
- Icons by [Lucide](https://lucide.dev)
- Font by [Google Fonts — Barlow](https://fonts.google.com/specimen/Barlow)
- Color system powered by [Tailwind CSS](https://tailwindcss.com)

---

<div align="center">

**⭐ If you find this project helpful or inspiring, please consider giving it a star!**

Made with ❤️ as a portfolio project by Rama Raditya

</div>
