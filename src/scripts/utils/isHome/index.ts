import { withPrefix } from 'gatsby';

/**
 * Tells you if the current location path is on the homepage
 */
export function isHome(): boolean {
  return window.location.pathname === withPrefix(`/`);
}
