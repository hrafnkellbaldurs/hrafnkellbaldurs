/**
 * Checks if window is defined (so if in the browser or in node.js)
 * @see https://www.gatsbyjs.com/docs/debugging-html-builds/#how-to-check-if-window-is-defined
 * @returns true if current context is in browser
 */
export const isBrowser = (): boolean => typeof window !== `undefined`;
