import { isBrowser } from '../isBrowser';

type PossibleMSHtmlDivElement = HTMLDivElement & {
  style: HTMLDivElement['style'] & { msOverflowStyle?: string | null };
};

export const getScrollbarWidth = (): number => {
  // If not in browser environment, we can't do any calculations
  if (!isBrowser()) {
    return 0;
  }
  // Creating invisible container
  const outer = document.createElement(`div`) as PossibleMSHtmlDivElement;
  outer.style.visibility = `hidden`;
  outer.style.overflow = `scroll`; // forcing scrollbar to appear
  if (outer.style?.msOverflowStyle) {
    outer.style.msOverflowStyle = `scrollbar`; // needed for WinJS apps
  }
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement(`div`);
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
};
