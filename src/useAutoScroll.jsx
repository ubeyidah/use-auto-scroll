import { useEffect, useRef } from "react";

/**
 * useAutoScroll - Automatically scrolls to the bottom when dependencies change.
 * @param {Array} dependencies - The dependencies to trigger the scroll effect.
 * @returns {Object} - Ref to attach to the scroll container.
 */
const useAutoScroll = (dependencies = []) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, dependencies);

  return bottomRef;
};

export default useAutoScroll;
