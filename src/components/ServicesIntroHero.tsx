"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const heroVideo = "/videos/services-window-opening.mp4";
const heroPoster = "/images/energy-saving-pimapen-home.webp";
const premiumEase = [0.19, 1, 0.22, 1] as const;

const serviceRhythm = [
  { id: "01", label: "Pencere Sistemleri", href: "#pvc-pencere" },
  { id: "02", label: "PVC Kapı", href: "#pvc-kapi" },
  { id: "03", label: "Sürgülü Sistemler", href: "#surgulu-sistemler" },
  { id: "04", label: "Panjur", href: "#panjur-sistemleri" },
];

export default function ServicesIntroHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden bg-brand-charcoal text-white">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay={!shouldReduceMotion}
        muted
        loop={!shouldReduceMotion}
        playsInline
        preload={shouldReduceMotion ? "none" : "metadata"}
        poster={heroPoster}
        aria-hidden="true"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0.64,
                scale: 1.08,
                filter: "blur(18px) saturate(0.78) brightness(0.72)",
              }
        }
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                scale: 1,
                filter: "blur(0px) saturate(1.08) brightness(1.02)",
              }
        }
        transition={{ duration: 3.1, ease: premiumEase }}
      >
        <source src={heroVideo} />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/48 via-brand-charcoal/16 to-brand-charcoal/78" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.28),transparent_36%),linear-gradient(90deg,rgba(30,34,41,0.72),transparent_42%,rgba(30,34,41,0.4))]" />

      {!shouldReduceMotion && (
        <div className="pointer-events-none absolute inset-0 z-10 flex">
          <motion.div
            className="h-full flex-1 border-r border-white/18 bg-white/18 backdrop-blur-2xl"
            initial={{ x: 0, opacity: 0.84 }}
            animate={{ x: "-112%", opacity: 0 }}
            transition={{ delay: 0.35, duration: 2.6, ease: premiumEase }}
          />
          <motion.div
            className="h-full flex-1 border-l border-white/18 bg-white/18 backdrop-blur-2xl"
            initial={{ x: 0, opacity: 0.84 }}
            animate={{ x: "112%", opacity: 0 }}
            transition={{ delay: 0.35, duration: 2.6, ease: premiumEase }}
          />
        </div>
      )}

      <div className="relative z-20 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-6 pb-8 pt-32 md:pb-10 lg:pt-40">
        <motion.div
          initial={false}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.65, duration: 0.95, ease: premiumEase }}
          className="max-w-4xl pb-10 md:pb-14"
        >
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-brand-gold-light">
            <span className="h-px w-12 bg-brand-gold-light" />
            Hizmetler
          </div>
          <h1 className="text-balance font-heading text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Pencere açılır, hizmet netleşir.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">
            Gökyüzüyle başlayan ferahlığı; Pimapen pencere, PVC kapı, sürgülü sistem ve panjur çözümleriyle ölçülü, sessiz ve uzun ömürlü bir deneyime dönüştürüyoruz.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#hizmetler"
              className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-brand-charcoal shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Hizmetleri keşfet
              <ChevronDown size={20} />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-white/28 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Teklif al
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.8, ease: premiumEase }}
          className="grid grid-cols-2 overflow-hidden rounded-[1.5rem] border border-white/18 bg-white/10 backdrop-blur-2xl md:grid-cols-4"
        >
          {serviceRhythm.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group min-h-24 cursor-pointer border-white/14 p-4 transition-colors duration-300 hover:bg-white/12 md:border-r md:last:border-r-0"
            >
              <div className="text-xs font-bold tracking-[0.26em] text-brand-gold-light">{item.id}</div>
              <div className="mt-3 flex items-end justify-between gap-3">
                <span className="text-sm font-semibold text-white/84 md:text-base">{item.label}</span>
                <span className="h-px w-5 bg-white/50 transition-all duration-300 group-hover:w-9" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
