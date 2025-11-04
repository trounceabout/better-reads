/**
 * API route: GET /api/books/search
 * Search for books using Open Library API
 * Query params: q (search query), limit (default: 10)
 */

import type { APIRoute } from 'astro';
import { searchBooks } from '../../../lib/api/openLibrary.js';

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('q');
  const limit = parseInt(url.searchParams.get('limit') ?? '10', 10);

  if (!query) {
    return new Response(
      JSON.stringify({ error: 'Search query is required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const results = await searchBooks(query, Math.min(limit, 20)); // Cap at 20
    return new Response(
      JSON.stringify({ success: true, data: results }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Search error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to search books' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
