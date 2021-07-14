import { useRef, useEffect } from 'react';

/**
 * Attaches an event listener to the eventTarget and calls the handler when the event fires
 * @param eventName Name of event to listen to, f.ex `mousemove`
 * @param handler Handler for event. Called when event is fired
 * @param eventTarget Target to attach event to
 * @example
 * function App() {
 *  // State for storing mouse coordinates
 *  const [coords, setCoords] = useState({ x: 0, y: 0 });
 *
 *  // Event handler utilizing useCallback ...
 *  // ... so that reference never changes.
 *  const handler = useCallback(
 *    ({ clientX, clientY }) => {
 *      setCoords({ x: clientX, y: clientY });
 *    },
 *    [setCoords]
 *  );
 *
 *  // Add event listener using our hook
 *  useEventListener('mousemove', handler);
 *
 *  return (
 *    <h1>
 *      The mouse position is ({coords.x}, {coords.y})
 *    </h1>
 *  );
 * }
 */
export function useEventListener(
  eventName: string,
  handler: EventListener,
  eventTarget: EventTarget = window,
  options?: boolean | AddEventListenerOptions,
): void {
  // Create a ref that stores handler
  const savedHandler = useRef<typeof handler>();
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      // Make sure element supports addEventListener
      const isSupported = eventTarget && eventTarget.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      const eventListener: EventListener = (event) =>
        savedHandler.current?.(event);
      // Add event listener
      eventTarget.addEventListener(eventName, eventListener, options);
      // Remove event listener on cleanup
      // eslint-disable-next-line consistent-return
      return () => {
        eventTarget.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, eventTarget], // Re-run if eventName or element changes
  );
}
