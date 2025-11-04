# Better Reads - Setup Guide

This document explains what has been set up for the Better Reads reading tracker app.

## What's Been Built

### 1. **Core Astro.js Application**
   - Configured with SSR (Server-Side Rendering) for handling authentication
   - Using Node.js adapter for backend functionality
   - TypeScript enabled with strict type checking
   - Full build and development environment ready

### 2. **Styling Setup**
   - Tailwind CSS integrated and configured
   - Custom color palette defined (purple primary, amber accent)
   - Global styles with utility classes for buttons, cards, inputs
   - Responsive design ready

### 3. **Type System**
   - Complete TypeScript types defined for all data models:
     - **User**: Account information (email, username, hashed password)
     - **Book**: Book metadata (title, author, ISBN, cover, page count)
     - **ReadingProgress**: Track where you are in each book
     - **ReadingChallenge**: Annual reading goals
     - **BookSearchResult**: Results from Open Library API

### 4. **Data Management**
   - JSON file-based database system (`src/lib/db/json.ts`)
   - Read/write operations for persistent storage
   - CRUD operations (Create, Read, Update, Delete)
   - Data stored in `data/` directory (created at runtime)

### 5. **API Integrations**
   - Open Library API wrapper (`src/lib/api/openLibrary.ts`)
   - Book search functionality
   - Automatic cover image fetching
   - Book metadata retrieval

### 6. **Authentication Utilities**
   - Password hashing and verification
   - Session token generation
   - Salt-based secure password storage
   - Ready for session management implementation

### 7. **Foundation Pages**
   - **Home/Landing Page** (`/`) - Marketing page with features
   - **Dashboard** (`/dashboard`) - User overview and stats
   - **Books** (`/books`) - Books list and management
   - **Challenges** (`/challenges`) - Yearly reading goals
   - **Login** (`/login`) - User authentication
   - **Signup** (`/signup`) - New user registration

### 8. **Base Layout**
   - Responsive navigation bar
   - Authenticated/unauthenticated states
   - Footer with branding
   - Mobile-friendly design

### 9. **API Routes (Scaffolding)**
   - `GET /api/books/search` - Search books via Open Library (implemented)
   - `POST /api/auth/login` - Login endpoint (scaffolding)
   - `POST /api/auth/signup` - Signup endpoint (scaffolding)
   - `GET /api/auth/logout` - Logout endpoint (scaffolding)

## Development Commands

```bash
# Start development server (hot reload at http://localhost:3000)
bun run dev

# Type checking (find TypeScript errors)
bun run check

# Build for production
bun run build

# Preview production build
bun run preview
```

## Key Design Decisions

### Why Astro?
- Excellent for content-heavy sites
- Built-in SSR support for authentication
- Hybrid rendering (some static, some dynamic)
- Great performance and developer experience
- Node.js adapter allows full backend capabilities

### Why Tailwind CSS?
- Rapid UI development
- Consistent, customizable design system
- Small bundle size with PurgeCSS
- Responsive design built-in

### Why JSON File-Based Storage?
- Simple to start without database complexity
- Easy to understand and debug
- Can be migrated to PostgreSQL/MongoDB later
- Perfect for personal project starting point

### Why Open Library API?
- Free and open-source
- Millions of books available
- No authentication required
- Good book metadata coverage
- Easy integration

## Architecture Overview

```
User (Browser)
    ↓
Astro Pages (SSR)
    ↓
├─ API Routes (Authentication & Data)
│   ├─ Auth Services (password hashing, sessions)
│   └─ External APIs (Open Library)
│
└─ Database Layer
    └─ JSON File Storage

Data Flow:
1. User visits page → Astro renders page
2. User logs in → API route validates, creates session
3. User searches books → API calls Open Library
4. User adds book → Saves to JSON file with progress
5. Dashboard loads → Calculates stats from JSON data
```

## File Organization Philosophy

- **Pages** (`src/pages/`) - Routes and user-facing pages
- **Components** (`src/components/`) - Reusable UI pieces (coming soon)
- **Layouts** (`src/layouts/`) - Page templates
- **Types** (`src/types/`) - TypeScript definitions
- **Lib** (`src/lib/`) - Utility functions
  - `api/` - External service integrations
  - `db/` - Database operations
  - `auth/` - Authentication utilities

## Educational Notes

### Key Concepts Used

1. **TypeScript Generics** - The database functions use generics (`<T>`) to work with any data type
2. **Middleware/Guards** - Pages check for authentication before rendering
3. **API Routes** - Astro file-based routing for backend endpoints
4. **Async/Await** - Used for file I/O and external API calls
5. **RESTful API** - Proper HTTP methods (GET, POST, PUT, DELETE)

### Best Practices Implemented

- Type safety throughout with TypeScript
- Error handling in API calls
- Separation of concerns (UI, business logic, data)
- Reusable utility functions
- Consistent code structure
- Clear file organization

## Next Priority Features

1. **Complete Authentication** - Most blocking feature
   - Session management with cookies
   - Password validation
   - Middleware for protected routes

2. **Book Management** - Core functionality
   - Add/remove books
   - Update reading progress
   - Display book list with filters

3. **UI Components** - Better user experience
   - Reusable book cards
   - Progress indicators
   - Search component

## Troubleshooting

### Build Errors
- Run `bun run check` to see TypeScript errors
- Check that all imports have `.js` extension for ESM
- Ensure all required packages are in `package.json`

### Type Errors
- Look at the error location and line number
- Check that imported types exist in `src/types/index.ts`
- Use strict types; avoid `any` when possible

### API Integration Issues
- Open Library API is free but rate-limited
- Check API response format matches expected types
- Log response data when debugging

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Open Library API](https://openlibrary.org/developers/api)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Notes for Designer

When ready to work on designs:
- Color palette defined in `tailwind.config.mjs` - can customize here
- Global styles in `src/styles/globals.css` - Tailwind directives
- Component styles follow Tailwind utility patterns
- Use BEM or similar naming for custom classes if needed
- Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)

## Project Status

✅ **Foundation Complete** - Ready for feature development
- Astro project structure set up
- TypeScript configured
- Styling system ready
- API integration framework in place
- Data model defined
- Authentication utilities ready

⏳ **Next Phase** - Feature implementation
- Complete authentication endpoints
- Implement book management
- Create reading challenge system
- Add UI components
