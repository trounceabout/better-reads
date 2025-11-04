/**
 * Password hashing and validation utilities
 * Using a simple approach with crypto module from Node.js
 * For production, consider using bcrypt or argon2
 */

import { createHash, randomBytes } from 'crypto';

/**
 * Hash a password with salt using SHA-256
 * Returns: salt$hash format
 */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = createHash('sha256')
    .update(salt + password)
    .digest('hex');

  return `${salt}$${hash}`;
}

/**
 * Verify a password against a hash
 */
export function verifyPassword(password: string, hash: string): boolean {
  const [salt, originalHash] = hash.split('$');

  if (!salt || !originalHash) {
    return false;
  }

  const computedHash = createHash('sha256')
    .update(salt + password)
    .digest('hex');

  return computedHash === originalHash;
}

/**
 * Generate a random session token
 */
export function generateSessionToken(): string {
  return randomBytes(32).toString('hex');
}
