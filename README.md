# Terminal Portfolio

A modern, interactive terminal-style portfolio built with Next.js, TypeScript, and Framer Motion. This project showcases my work through a unique CRT-style interface that combines retro aesthetics with modern web technologies.

## Features

- 🖥️ Terminal-style interface with CRT screen effects
- 💻 Two interaction modes:
  - Command Line Interface (CLI)
  - Click-through Navigation
- 📱 Fully responsive design
- ⌨️ Real terminal commands and interactions
- 🎨 Retro CRT animations and effects
- 🚀 Optimized performance with Next.js

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Custom hooks and stores

## Key Components

### Terminal Interface

The terminal interface features authentic CRT-style effects including:

- Scanlines with scroll-reactive intensity
- Screen wave animations
- CRT flicker effects
- Command history tracking

### Interactive Elements

The portfolio includes several interactive elements:

- Falling letter animations on hover
- Clickable command buttons
- Smooth transitions between sections
- Mobile-responsive layouts

### Contact Section

Features a modern contact interface with:

- Social media links
- Direct email/phone contact
- Resume download
- Responsive icon sizing

## Performance Optimizations

- Lazy loading of components
- Optimized images with Next.js Image component
- Efficient animation handling
- Responsive media queries for mobile optimization

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy to AWS S3 & CloudFront

This project is deployed to AWS S3 and CloudFront. The deployment is handled automatically when a push is made to the `main` branch.

The `deploy.yml` file in the `.github/workflows` directory is the configuration for the deployment.
