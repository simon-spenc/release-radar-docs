# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 documentation site using Markdoc for content authoring. The project uses the App Router and is configured to render Markdown/Markdoc files as pages.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Content**: Markdoc (@markdoc/markdoc, @markdoc/next.js)
- **Styling**: Tailwind CSS v4 with @tailwindcss/typography
- **Language**: TypeScript
- **Font**: Geist (sans and mono)

## Architecture

### Content Strategy

Documentation content is written as **Markdoc files** (.md, .mdoc) and lives directly in the `app/` directory using Next.js file-based routing. The Markdoc Next.js plugin (configured in `next.config.ts`) enables rendering these files as pages.

- Page extensions include: `js`, `jsx`, `ts`, `tsx`, `md`, `mdoc`
- Frontmatter in Markdoc files defines `title` and `description`
- The `content/` directory exists but is currently empty

### Routing Structure

- `app/page.tsx` - Homepage (default Next.js landing page)
- `app/docs/layout.tsx` - Documentation layout with navigation and sidebar
- `app/docs/getting-started/page.md` - Getting started guide (Markdoc)
- `app/docs/api/page.md` - API reference (Markdoc)

### Documentation Layout

The docs layout (`app/docs/layout.tsx`) provides:
- Top navigation bar with "Product Docs" branding
- Horizontal nav links (Getting Started, API Reference)
- Left sidebar with documentation sections
- Main content area with prose styling via @tailwindcss/typography

### Styling

- Uses Tailwind CSS v4 with PostCSS
- CSS custom properties for theming (background/foreground colors)
- Dark mode support via `prefers-color-scheme`
- Typography plugin for prose content styling
- Geist fonts loaded via `next/font/google`

### TypeScript Configuration

- Path alias: `@/*` maps to project root
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler

## Adding New Documentation Pages

1. Create a new `.md` or `.mdoc` file in the appropriate `app/docs/` subdirectory
2. Add frontmatter with `title` and `description`
3. Update `app/docs/layout.tsx` to add navigation links if needed
4. The file will be automatically routed based on its path

Example:
```markdown
---
title: My New Page
description: Description of the page
---

# My New Page

Content goes here...
```