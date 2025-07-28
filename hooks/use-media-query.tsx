// hooks/use-media-query.ts
import React from "react";

export function useMediaQuery(query: string) {
  // 1. Initialize state safely: Check if window is defined before accessing it.
  //    On the server, 'matches' will initially be false.
  const [matches, setMatches] = React.useState(() => {
    // Check if we are in a browser environment
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false; // Default value for server-side rendering
  });

  React.useEffect(() => {
    // 2. Only attach event listener and update state on the client-side.
    if (typeof window === 'undefined') {
      return; // Do nothing on the server
    }

    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener for changes
    mediaQueryList.addEventListener("change", listener);

    // Cleanup function to remove the event listener
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]); // Re-run effect if the query string changes

  return matches;
}