# Modern Landing Page

A responsive landing page built with Next.js, Tailwind CSS, and TypeScript.

![Landing Page Preview](/public/screenshot.png)

## Live Demo

[View Live Demo](https://connvo.vercel.app/)

## Prerequisites

- Node.js (v18 or later)
- npm/yarn/pnpm
- VS Code (recommended)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd your-project-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── globals.css                # Global styles with Tailwind
│   ├── layout.tsx                 # Root layout
│   ├── (landing)/page.tsx         # Homepage
│   └── components/                # React components
├── public/                        # Static assets
└── next.config.js                 # Next.js configuration
```

## VS Code Setup

Install recommended extensions:

- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository at [vercel.com](https://vercel.com)
3. Deploy automatically

### Build for Production

```bash
npm run build
npm run start
```

---

Built with Next.js 14 + Tailwind CSS
