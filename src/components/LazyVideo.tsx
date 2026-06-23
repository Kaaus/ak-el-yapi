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
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nearViewport = entry.isIntersecting;

        if (nearViewport) setCanLoad(true);
        setIsVisible(nearViewport);
      },
      {
        rootMargin: "260px 0px",
        threshold: 0.12,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!canLoad || shouldReduceMotion || !isVisible) {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        video.pause();
      });
    }
  }, [canLoad, isVisible, shouldReduceMotion]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : ariaLabel}
    >
      {canLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
