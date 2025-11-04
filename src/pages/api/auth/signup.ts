/**
 * API route: POST /api/auth/signup
 * Handle new user registration
 * Body: { email: string, username: string, password: string }
 */

import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
  // TODO: Implement signup logic
  // 1. Parse request body
  // 2. Validate email, username, password
  // 3. Check if user already exists
  // 4. Hash password using hashPassword()
  // 5. Create new user in database (users.json)
  // 6. Set session/cookie
  // 7. Redirect to dashboard

  return new Response(
    JSON.stringify({ error: 'Signup not yet implemented' }),
    { status: 501, headers: { 'Content-Type': 'application/json' } }
  );
};
