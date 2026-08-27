# Praveen Kumar V — Production-Structured React Portfolio

## Stack
- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Folder structure

```text
praveen-portfolio-production/
├── public/
│   └── assets/
│       ├── hero-scene.png
│       ├── portrait-cutout.png
│       └── id-card-lanyard.png
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Reveal.tsx
│   │   │   ├── SectionLabel.tsx
│   │   │   └── Typewriter.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       └── ContactSection.tsx
│   ├── data/
│   │   ├── navigation.ts
│   │   └── portfolio.ts
│   ├── hooks/
│   │   └── useTypewriter.ts
│   ├── lib/
│   │   └── scroll.ts
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Install and run

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm run preview
```

## Where to edit your personal details

### 1. Main portfolio content
`src/data/portfolio.ts`
- roles
- services
- projects

### 2. Navigation
`src/data/navigation.ts`

### 3. About section
`src/components/sections/AboutSection.tsx`

### 4. Contact details / social links
`src/components/sections/ContactSection.tsx`

Replace:
- `your-email@example.com`
- GitHub URL
- LinkedIn URL

### 5. Images
Replace files inside:
`public/assets/`

Keep the same filenames if you do not want to change the code.

## Important architecture rule

Do not put all sections into `main.tsx`.

`main.tsx` should only bootstrap React.
`App.tsx` should only compose the page.
Each reusable UI/section belongs in its own file.
Static content belongs in `src/data`.
Shared TypeScript types belong in `src/types`.
Shared behavior belongs in `src/hooks` or `src/lib`.

This makes the project easier to maintain and extend when you add more sections, APIs, CMS data, blog pages, authentication, analytics or a real contact backend.
# perosnal_portfolio
