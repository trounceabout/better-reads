/**
 * JSON file-based database utilities
 * Provides a simple, file-based storage solution using JSON files
 * Perfect for getting started; can migrate to a real database later
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = './data';

/**
 * Initialize the data directory if it doesn't exist
 */
function ensureDataDir(): void {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

/**
 * Get the full path to a data file
 */
function getFilePath(filename: string): string {
  return join(DATA_DIR, filename);
}

/**
 * Read data from a JSON file
 * Returns an empty array if file doesn't exist
 */
export function readJSON<T>(filename: string): T[] {
  ensureDataDir();

  const filePath = getFilePath(filename);

  if (!existsSync(filePath)) {
    return [];
  }

  try {
    const content = readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as T[];
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [];
  }
}

/**
 * Write data to a JSON file
 */
export function writeJSON<T>(filename: string, data: T[]): void {
  ensureDataDir();

  const filePath = getFilePath(filename);

  try {
    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error(`Error writing to ${filename}:`, error);
    throw error;
  }
}

/**
 * Find a single item by a property value
 */
export function findItem<T extends Record<string, unknown>>(
  filename: string,
  key: string,
  value: unknown
): T | undefined {
  const items = readJSON<T>(filename);
  return items.find(item => item[key] === value);
}

/**
 * Find all items matching a property value
 */
export function findItems<T extends Record<string, unknown>>(
  filename: string,
  key: string,
  value: unknown
): T[] {
  const items = readJSON<T>(filename);
  return items.filter(item => item[key] === value);
}

/**
 * Add a new item to the collection
 */
export function addItem<T extends Record<string, unknown>>(
  filename: string,
  item: T
): T {
  const items = readJSON<T>(filename);
  items.push(item);
  writeJSON(filename, items);
  return item;
}

/**
 * Update an existing item
 */
export function updateItem<T extends Record<string, unknown>>(
  filename: string,
  key: string,
  value: unknown,
  updates: Partial<T>
): T | undefined {
  const items = readJSON<T>(filename);
  const index = items.findIndex(item => item[key] === value);

  if (index === -1) {
    return undefined;
  }

  items[index] = { ...items[index], ...updates } as T;
  writeJSON(filename, items);
  return items[index];
}

/**
 * Delete an item from the collection
 */
export function deleteItem<T extends Record<string, unknown>>(
  filename: string,
  key: string,
  value: unknown
): boolean {
  const items = readJSON<T>(filename);
  const initialLength = items.length;
  const filtered = items.filter(item => item[key] !== value);

  if (filtered.length === initialLength) {
    return false; // Item not found
  }

  writeJSON(filename, filtered);
  return true;
}

/**
 * Get all items from a collection
 */
export function getAllItems<T>(filename: string): T[] {
  return readJSON<T>(filename);
}
