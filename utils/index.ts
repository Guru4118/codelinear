/**
 * General-purpose utilities (non-React, non-domain).
 * Add helpers here as the application grows.
 */

export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
