/// <reference types="astro/client" />

// This file declares types for environment variables and Astro globals
declare namespace App {
  interface Locals {
    user?: {
      id: string;
      email: string;
      username: string;
    };
  }
}
