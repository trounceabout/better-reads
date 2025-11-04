/**
 * Core type definitions for the Better Reads application
 */

// User Types
export interface User {
  id: string;
  email: string;
  username: string;
  password: string; // hashed
  createdAt: string;
  updatedAt: string;
}

// Book Types
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  openLibraryId?: string;
  coverUrl?: string;
  description?: string;
  totalPages?: number;
  genre?: string[];
  publishedDate?: string;
  addedAt: string;
}

// Reading Progress Types
export interface ReadingProgress {
  id: string;
  userId: string;
  bookId: string;
  currentPage: number;
  percentComplete: number;
  status: 'reading' | 'completed' | 'want-to-read' | 'dnf'; // Did not finish
  startDate: string;
  completedDate?: string;
  notes?: string;
  updatedAt: string;
}

// Reading Challenge Types
export interface ReadingChallenge {
  id: string;
  userId: string;
  year: number;
  targetBooks: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

// API Response Types
export interface OpenLibraryBook {
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  isbn?: string[];
  number_of_pages?: number;
  key: string; // OpenLibrary ID
}

export interface BookSearchResult {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  openLibraryId: string;
  totalPages?: number;
}
