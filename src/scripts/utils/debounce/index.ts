/**
 * Creates a debounced callback
 * @param callback Callback to debounce
 * @param delay The amount of ms to debounce callback
 * @returns debounced callback
 */
export function debounce(
  callback: (...args: any[]) => void,
  delay: number,
): (...args: any[]) => void {
  let timeout: NodeJS.Timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
