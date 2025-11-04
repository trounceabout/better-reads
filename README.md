# better-reads

A reading tracking app to monitor your progress on multiple books and set yearly reading challenges. An alternative to Goodreads designed for simplicity and focus.

## Features

- 📚 **Track Multiple Books**: Monitor reading progress across several books simultaneously
- 📊 **Percentage Progress**: Track how far through each book you are
- 🎯 **Yearly Challenges**: Set annual reading goals and track progress
- 🔍 **Book Search**: Search millions of books via Open Library API
- 👥 **Multi-User**: Support for multiple users with authentication

## Tech Stack

- **Framework**: [Astro](https://astro.build) with SSR
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Database**: JSON file-based (can migrate to real DB later)
- **Book API**: [Open Library API](https://openlibrary.org/developers/api)
- **Authentication**: Custom authentication with password hashing

## Project Structure

```
src/
├── components/        # Reusable UI components (coming soon)
├── layouts/          # Page layouts (BaseLayout)
├── pages/            # Routes and pages
│   ├── index.astro          # Home/landing page
│   ├── dashboard.astro      # User dashboard
│   ├── books.astro          # Books list
│   ├── challenges.astro     # Reading challenges
│   ├── login.astro          # Login page
│   ├── signup.astro         # Signup page
│   └── api/                 # API endpoints
│       ├── books/search.ts  # Book search API
│       └── auth/            # Authentication endpoints
├── lib/              # Utility functions and helpers
│   ├── api/         # External API integrations
│   │   └── openLibrary.ts
│   ├── db/          # Database operations
│   │   └── json.ts
│   └── auth/        # Authentication utilities
│       └── password.ts
├── types/           # TypeScript type definitions
└── styles/          # Global styles

data/               # JSON file storage (created at runtime)
├── users.json
├── books.json
├── progress.json
└── challenges.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- Bun package manager

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Type checking
bun run check

# Build for production
bun run build

# Preview production build
bun run preview
```

The app will be available at `http://localhost:3000`

## Next Steps

### 1. Implement Authentication
- [ ] Implement login endpoint (`/api/auth/login`)
- [ ] Implement signup endpoint (`/api/auth/signup`)
- [ ] Implement logout endpoint (`/api/auth/logout`)
- [ ] Add session management with cookies
- [ ] Create middleware for protected routes

### 2. Implement Book Management
- [ ] Create add book page with search functionality
- [ ] Implement API endpoint to add books to user's collection
- [ ] Implement reading progress update functionality
- [ ] Create book detail page
- [ ] Add book filtering (reading, completed, want-to-read, dnf)

### 3. Implement Reading Challenges
- [ ] Create new challenge form
- [ ] Implement challenge creation API
- [ ] Add challenge progress tracking
- [ ] Display challenge statistics

### 4. UI Components
- [ ] Create BookCard component
- [ ] Create ProgressBar component
- [ ] Create BookSearch component
- [ ] Create ChallengeCard component

### 5. Future Enhancements
- [ ] Migrate from JSON to proper database (PostgreSQL, MongoDB)
- [ ] Add reading statistics and analytics
- [ ] Reading streak tracking
- [ ] Export reading history
- [ ] Integration with Goodreads import
- [ ] Social features (share challenges, follow friends)
- [ ] Mobile app with React Native or Flutter

## API Endpoints (To be implemented)

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/logout` - Logout user

### Books
- `GET /api/books/search?q=<query>` - Search books from Open Library
- `POST /api/books` - Add book to user's collection
- `GET /api/books` - Get user's books
- `PUT /api/books/:id` - Update book progress
- `DELETE /api/books/:id` - Remove book

### Challenges
- `POST /api/challenges` - Create new challenge
- `GET /api/challenges` - Get user's challenges
- `PUT /api/challenges/:id` - Update challenge
- `DELETE /api/challenges/:id` - Delete challenge

## Type Definitions

All TypeScript types are defined in `src/types/index.ts`. The main types are:

- `User` - User account information
- `Book` - Book metadata
- `ReadingProgress` - User's progress on a book
- `ReadingChallenge` - Yearly reading goal
- `BookSearchResult` - Result from Open Library search

## Notes

- The app uses file-based JSON storage for simplicity. This is suitable for personal use but should be migrated to a proper database for production.
- Authentication is basic for now. Consider using bcrypt or argon2 for production.
- All API endpoints return JSON responses.

## License

MIT
