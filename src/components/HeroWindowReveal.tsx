"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const forestImage =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2400&auto=format&fit=crop";

export default function HeroWindowReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [compactViewport, setCompactViewport] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setCompactViewport(media.matches);

    updateViewport();
    media.addEventListener("change", updateViewport);

    return () => media.removeEventListener("change", updateViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.14]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-1.35%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "2.25%"]);
  const bgFilter = useTransform(
    scrollYProgress,
    [0, 0.68],
    ["saturate(0.82) contrast(0.94) brightness(1.06)", "saturate(1) contrast(1) brightness(1)"],
  );

  const darkOverlayOpacity = useTransform(scrollYProgress, [0, 0.68], [0.25, 0.1]);
  const mistOpacity = useTransform(scrollYProgress, [0, 0.42, 0.78], [0.86, 0.44, 0]);
  const lightBloomOpacity = useTransform(scrollYProgress, [0, 0.28, 0.72], [0.34, 0.22, 0.06]);

  const frameScale = useTransform(scrollYProgress, [0, 0.68], [1, 3.05]);
  const frameOpacity = useTransform(scrollYProgress, [0, 0.7, 0.88], [1, 0.92, 0]);
  const frameRadius = useTransform(scrollYProgress, [0, 0.64], [18, 0]);
  const frameBorderWidth = useTransform(scrollYProgress, [0, 0.65], [18, 2]);

  const leftPanelX = useTransform(scrollYProgress, [0, 0.58], ["0vw", "-36vw"]);
  const rightPanelX = useTransform(scrollYProgress, [0, 0.58], ["0vw", "36vw"]);
  const leftPanelRotate = useTransform(scrollYProgress, [0, 0.58], [0, -10]);
  const rightPanelRotate = useTransform(scrollYProgress, [0, 0.58], [0, 10]);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.5, 0.72], [1, 0.58, 0]);
  const centerBarOpacity = useTransform(scrollYProgress, [0, 0.55, 0.75], [1, 0.72, 0]);
  const centerBarWidth = useTransform(scrollYProgress, [0, 0.58], [14, 8]);

  const textY = useTransform(scrollYProgress, [0.12, 0.34], [0, -12]);
  const textScale = useTransform(scrollYProgress, [0.12, 0.34], [1, 0.98]);
  const textBlur = useTransform(scrollYProgress, [0.14, 0.34], ["blur(0px)", "blur(2px)"]);
  const labelOpacity = useTransform(scrollYProgress, [0.08, 0.22], [1, 0]);
  const paragraphOpacity = useTransform(scrollYProgress, [0.1, 0.26], [1, 0]);
  const actionsOpacity = useTransform(scrollYProgress, [0.12, 0.3], [1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.18, 0.34], [1, 0]);
  const scrollPromptOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const backgroundMotionStyle =
    compactViewport || shouldReduceMotion
      ? {
          scale: 1.04,
          filter: "saturate(0.92) contrast(0.98) brightness(1.02)",
        }
      : {
          scale: bgScale,
          x: bgX,
          y: bgY,
          filter: bgFilter,
        };

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-charcoal" id="hero">
      <div className="sticky left-0 top-0 flex h-screen min-h-[100svh] w-full items-center justify-center overflow-hidden">
        <motion.div style={backgroundMotionStyle} className="absolute inset-0 will-change-transform">
          <Image
            src={forestImage}
            alt=""
            fill
            preload
            quality={88}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div style={{ opacity: darkOverlayOpacity }} className="absolute inset-0 bg-black" />

        <motion.div
          style={{ opacity: mistOpacity }}
          className="pointer-events-none absolute inset-0 z-[12] bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_34%,rgba(248,247,242,0.78)_72%,rgba(248,247,242,0.96)_100%)]"
        />

        <motion.div
          style={{ opacity: compactViewport ? 0.06 : lightBloomOpacity }}
          className="pointer-events-none absolute inset-0 z-[13] bg-[radial-gradient(circle_at_50%_48%,rgba(255,246,213,0.82)_0%,rgba(195,176,145,0.28)_26%,transparent_62%)] mix-blend-screen"
        />

        <motion.div
          style={{
            scale: shouldReduceMotion ? 1 : frameScale,
            opacity: shouldReduceMotion ? 0.82 : frameOpacity,
          }}
          className="pointer-events-none absolute inset-0 z-20 flex origin-center items-center justify-center will-change-transform"
        >
          <motion.div
            style={{
              borderRadius: frameRadius,
              borderWidth: frameBorderWidth,
            }}
            className="relative flex h-[58svh] w-[74vw] overflow-hidden border-white/95 bg-white/8 shadow-[0_24px_80px_rgba(15,20,25,0.22),_inset_0_0_42px_rgba(0,0,0,0.34)] md:h-[70vh] md:w-[50vw]"
          >
            <div className="absolute inset-0 z-30 rounded-[inherit] ring-1 ring-black/10" />

            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : leftPanelX,
                rotateY: shouldReduceMotion || compactViewport ? 0 : leftPanelRotate,
                opacity: shouldReduceMotion ? 0.55 : panelOpacity,
                transformPerspective: 1400,
              }}
              className="relative h-full w-1/2 origin-left overflow-hidden border-r border-white/62 bg-white/14 backdrop-blur-[2px] will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/24 via-white/6 to-transparent" />
              <motion.div
                animate={{ x: ["-130%", "145%"] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
                style={{ opacity: compactViewport ? 0 : 1 }}
                className="absolute top-0 h-full w-1/3 -skew-x-12 bg-white/30 blur-sm"
              />
            </motion.div>

            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : rightPanelX,
                rotateY: shouldReduceMotion || compactViewport ? 0 : rightPanelRotate,
                opacity: shouldReduceMotion ? 0.55 : panelOpacity,
                transformPerspective: 1400,
              }}
              className="relative h-full w-1/2 origin-right overflow-hidden border-l border-white/62 bg-white/14 backdrop-blur-[2px] will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-white/24 via-white/6 to-transparent" />
              <motion.div
                animate={{ x: ["-120%", "150%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
                style={{ opacity: compactViewport ? 0 : 1 }}
                className="absolute top-0 h-full w-1/3 -skew-x-12 bg-white/26 blur-sm"
              />
            </motion.div>

            <motion.div
              style={{ width: centerBarWidth, opacity: compactViewport ? 0 : centerBarOpacity }}
              className="absolute bottom-0 left-1/2 top-0 z-40 -translate-x-1/2 bg-white/92 shadow-[0_0_18px_rgba(0,0,0,0.22)]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: textY, scale: textScale, filter: textBlur }}
          className="relative z-30 mt-12 flex max-w-5xl flex-col items-center justify-center px-6 text-center md:mt-20"
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.15, ease: "easeOut" }}
            style={{ opacity: labelOpacity }}
            className="mb-5 rounded-full border border-white/35 bg-white/18 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.34em] text-white shadow-2xl backdrop-blur-xl"
          >
            Ferahlığa açılan premium sistemler
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 2.45, ease: [0.19, 1, 0.22, 1] }}
            style={{ opacity: titleOpacity }}
            className="text-balance font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white drop-shadow-[0_18px_45px_rgba(0,0,0,0.38)] sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Eviniz <br className="md:hidden" />
            Ferahlığa <br />
            <span className="text-brand-gold-light">Açılsın</span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 2.72, ease: [0.19, 1, 0.22, 1] }}
            style={{ opacity: paragraphOpacity }}
            className="mx-auto mb-10 mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/86 drop-shadow-md md:text-xl"
          >
            AK-EL Yapı, yalıtımlı Pimapen sistemlerini temiz işçilik, sessiz mekanlar ve gün ışığı hissiyle buluşturur.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 2.95, ease: [0.19, 1, 0.22, 1] }}
            style={{ opacity: actionsOpacity }}
            className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <Link
              href="#iletisim"
              className="w-full rounded-full bg-white px-8 py-4 text-center font-bold text-brand-charcoal shadow-2xl shadow-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 sm:w-auto"
            >
              Ücretsiz Keşif Talep Et
            </Link>
            <Link
              href="#donusum"
              className="w-full rounded-full border border-white/35 bg-white/12 px-8 py-4 text-center font-bold text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:w-auto"
            >
              Dönüşümü İzle
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: scrollPromptOpacity }}
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white/85 backdrop-blur-md">
            Işığın içeri girişini hisset
          </span>
          <motion.div
            animate={shouldReduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-12 w-0.5 rounded-full bg-gradient-to-b from-white to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
