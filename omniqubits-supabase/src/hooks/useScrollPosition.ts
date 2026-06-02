"use client";
import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY]       = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsScrolled(y > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollY, isScrolled };
}
