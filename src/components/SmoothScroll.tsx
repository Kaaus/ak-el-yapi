"use client";

import { ReactLenis } from 'lenis/react';
import RouteScrollReset from "@/components/RouteScrollReset";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <RouteScrollReset />
      {children}
    </ReactLenis>
  );
}
