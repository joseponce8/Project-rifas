# Project Rifas

A full-stack web application for managing lottery (rifa) tickets, including:
- Landing page
- Ticket purchase form
- RNG logic for ticket assignment
- Database (SQLite via Prisma)
- Admin dashboard
- API endpoints

## Stack
- Next.js (React, API routes)
- TypeScript
- Prisma ORM
- SQLite (local database)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Folder Structure
- `pages/` - Frontend pages and API routes
- `lib/` - Business logic (RNG, helpers)
- `prisma/` - Database schema and seed scripts 