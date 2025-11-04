/**
 * Integration with the Open Library API
 * Free API for searching books and retrieving metadata
 * Documentation: https://openlibrary.org/developers/api
 */

import type { OpenLibraryBook, BookSearchResult } from '../../types/index.js';

const OPENLIBRARY_API = 'https://openlibrary.org/api';

/**
 * Search for books by title or author
 * @param query - Search term (title or author name)
 * @param limit - Number of results to return (default: 10)
 * @returns Array of book search results
 */
export async function searchBooks(query: string, limit: number = 10): Promise<BookSearchResult[]> {
  try {
    const params = new URLSearchParams({
      q: query,
      limit: limit.toString(),
    });

    const response = await fetch(`${OPENLIBRARY_API}/search.json?${params}`);

    if (!response.ok) {
      throw new Error(`OpenLibrary API error: ${response.statusText}`);
    }

    const data = await response.json() as { docs?: OpenLibraryBook[] };

    if (!data.docs || !Array.isArray(data.docs)) {
      return [];
    }

    // Transform OpenLibrary data to our BookSearchResult format
    return data.docs
      .filter(book => book.title && book.key) // Only include books with title and ID
      .map(book => ({
        id: book.key.replace('/works/', ''),
        title: book.title,
        author: book.author_name?.[0] || 'Unknown Author',
        coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : undefined,
        openLibraryId: book.key,
        totalPages: book.number_of_pages,
      }))
      .slice(0, limit);
  } catch (error) {
    console.error('Error searching books:', error);
    return [];
  }
}

/**
 * Get detailed information about a specific book
 * @param openLibraryId - The OpenLibrary ID (e.g., /works/OL82563W)
 * @returns Detailed book information or null if not found
 */
export async function getBookDetails(openLibraryId: string): Promise<BookSearchResult | null> {
  try {
    const response = await fetch(`https://openlibrary.org${openLibraryId}.json`);

    if (!response.ok) {
      throw new Error(`OpenLibrary API error: ${response.statusText}`);
    }

    const data = await response.json() as {
      title?: string;
      authors?: Array<{ name: string }>;
      covers?: number[];
      number_of_pages?: number;
    };

    if (!data.title) {
      return null;
    }

    const coverUrl = data.covers?.[0]
      ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`
      : undefined;

    return {
      id: openLibraryId.replace('/works/', ''),
      title: data.title,
      author: data.authors?.[0]?.name || 'Unknown Author',
      coverUrl,
      openLibraryId,
      totalPages: data.number_of_pages,
    };
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
}
