/**
 * API route: POST /api/auth/logout
 * Handle user logout
 */

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ redirect }) => {
  // TODO: Implement logout logic
  // 1. Clear session/cookie
  // 2. Redirect to home page

  return redirect('/');
};

// Also support GET for link-based logout
export const GET: APIRoute = async ({ redirect }) => {
  return redirect('/');
};
