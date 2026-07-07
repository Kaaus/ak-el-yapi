"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  decorative?: boolean;
};

export default function LazyVideo({
  src,
  poster,
  className,
  ariaLabel,
  decorative = true,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canLoad, setCanLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [pageIsVisible, setPageIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setCanLoad(true);
        loadObserver.disconnect();
      },
      {
        rootMargin: "220px 0px",
        threshold: 0.01,
      }
    );

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      {
        threshold: [0, 0.2, 0.45],
      }
    );

    loadObserver.observe(video);
    playObserver.observe(video);

    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!canLoad || shouldReduceMotion || !isVisible || !pageIsVisible) {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        video.pause();
      });
    }
  }, [canLoad, isVisible, pageIsVisible, shouldReduceMotion]);

  useEffect(() => {
    const updatePageVisibility = () => {
      const visible = !document.hidden;
      setPageIsVisible(visible);

      if (!visible) {
        videoRef.current?.pause();
      }
    };

    updatePageVisibility();
    document.addEventListener("visibilitychange", updatePageVisibility);

    return () => document.removeEventListener("visibilitychange", updatePageVisibility);
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload={canLoad ? "metadata" : "none"}
      poster={poster}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : ariaLabel}
    >
      {canLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
