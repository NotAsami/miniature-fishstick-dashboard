# Dashboard Starter Template

A modern web dashboard built with **Next.js**, **React**, and **TailwindCSS**. This project provides a clean, extensible structure for building dashboard applications.

## Features

- 🚀 **Next.js 16** with App Router
- ⚛️ **React 19** for building user interfaces
- 🎨 **TailwindCSS 4** for styling
- 📱 **Responsive design** that works on all devices
- 🧩 **Component-based architecture** for easy expansion
- 📦 **TypeScript** for type safety

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── analytics/          # Analytics page
│   ├── settings/           # Settings page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Dashboard home page
├── components/
│   ├── layout/             # Layout components
│   │   ├── DashboardLayout.tsx
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── index.ts
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── StatCard.tsx
│       └── index.ts
├── lib/                    # Utility functions
│   ├── utils.ts
│   └── index.ts
└── types/                  # TypeScript types
    └── index.ts
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Extending the Dashboard

### Adding a New Page

1. Create a new folder in `src/app/` with a `page.tsx` file
2. Use the `DashboardLayout` component to maintain consistent styling
3. Add navigation item in `src/components/layout/Sidebar.tsx`

### Adding New Components

1. Create your component in `src/components/ui/` or `src/components/layout/`
2. Export it from the appropriate `index.ts` file
3. Import and use in your pages

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

MIT
