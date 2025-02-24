# Leon Landing Page

A responsive, animated landing page for a gaming platform with a candy-themed design. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode toggle with theme persistence
- Interactive carousel with automatic rotation
- Scroll-triggered animations
- Candy-themed design with subtle background animations
- Component-based architecture for better maintainability

## Technical Implementation

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Context API** for theme management
- **Intersection Observer API** for scroll animations

## Project Structure

The project follows a modular architecture with the following structure:

```
src/
├── app/               # Next.js App Router
├── components/        # UI Components
│   ├── landing/       # Landing page specific components
│   └── ui/            # Reusable UI components
├── contexts/          # React Context providers
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is set up to be deployed on Vercel:

```bash
npm run build
```

## Optimizations

- Background elements are conditionally rendered based on viewport
- Lazy loading animations triggered by scroll position
- Efficient use of Tailwind CSS for styling
- No unnecessary JavaScript libraries
