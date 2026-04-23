# solution-architect-cv

Modern futuristic portfolio and CV starter built with Astro, TypeScript, Tailwind CSS, and isolated React interactivity for Software & Solution Architects.

## Purpose

This project provides a production-ready portfolio template with an enterprise architectural aesthetic:

- Futuristic minimalist design with blueprint-inspired visuals
- Architecture-focused sections (experience timeline, projects, certifications, skills)
- Lightweight Hexagonal Architecture adapted for frontend delivery
- Scalable folder structure for maintainability and extension

## Tech Stack

- **Astro** (main framework)
- **TypeScript** (strict mode)
- **Tailwind CSS** (modern v4 setup via Vite plugin)
- **React** (isolated client-side interactivity only)

## Folder Structure

```text
src/
  domain/
    entities/
    repositories/
    services/
    types/
    value-objects/
  application/
    dto/
    mappers/
    ports/
    use-cases/
  infrastructure/
    adapters/
    config/
    mappers/
    providers/
    repositories/
    static-data/
  presentation/
    components/
      sections/
      ui/
    hooks/
    layouts/
    pages/
    view-models/
  shared/
    constants/
    helpers/
    utils/
  pages/
  styles/
public/
```

## Hexagonal Architecture Decisions

- **Domain** defines core entities and repository contracts (`PortfolioRepository`)
- **Application** orchestrates behavior via use case (`GetPortfolioDataUseCase`)
- **Infrastructure** provides static data and repository implementation (`StaticPortfolioRepository`)
- **Presentation** renders Astro pages/components and consumes application output
- Dependency inversion is respected: UI depends on use-cases/contracts, not infrastructure details

## Main Sections Implemented

1. Hero
2. About
3. Technical Skills
4. Experience Timeline
5. Certifications
6. Featured Projects
7. Contact (LinkedIn, GitHub, Email, Download CV)

## Local Development

> Recommended Node.js version: **22.12+**

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Quality Checks

```bash
npm run check
npm run build
```

## Deploy to Vercel

1. Push repository to GitHub
2. Import project in Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy

Vercel auto-detects Astro and serves the static output.
