"use client";

import { type CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock3, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Ürünler", href: "/urunler" },
  { name: "Süreç", href: "/surec" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "Kurumsal", href: "/kurumsal" },
  { name: "İletişim", href: "/iletisim" },
];

const InstagramIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

type Rgba = [number, number, number, number];
type HeaderStyle = CSSProperties & { "--header-progress": number };

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const range = (value: number, start: number, end: number) => clamp((value - start) / (end - start));
const easeOut = (value: number) => 1 - Math.pow(1 - clamp(value), 3);
const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;

const mixRgba = (from: Rgba, to: Rgba, amount: number) => {
  const t = easeOut(amount);
  const r = Math.round(lerp(from[0], to[0], t));
  const g = Math.round(lerp(from[1], to[1], t));
  const b = Math.round(lerp(from[2], to[2], t));
  const a = lerp(from[3], to[3], t).toFixed(3);

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export default function Header() {
  const pathname = usePathname();
  const [headerProgress, setHeaderProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";
  const progress = isHomePage ? headerProgress : 1;
  const contactProgress = range(progress, 0.25, 0.5);
  const navCompactProgress = range(progress, 0.25, 0.75);
  const lightCapsuleProgress = range(progress, 0.5, 1);
  const darkGlassProgress = range(progress, 0.05, 0.5);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const nextProgress = isHomePage ? clamp(window.scrollY / 156) : 1;

      setHeaderProgress((current) =>
        Math.abs(current - nextProgress) < 0.004 ? current : nextProgress,
      );
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isHomePage]);


  const shellBackground =
    progress < 0.5
      ? mixRgba([248, 247, 242, 0.68], [17, 20, 24, 0.72], darkGlassProgress)
      : mixRgba([17, 20, 24, 0.72], [248, 247, 242, 0.94], lightCapsuleProgress);

  const shellStyle: HeaderStyle = {
    "--header-progress": progress,
    maxWidth: `${Math.round(lerp(1280, 1152, lightCapsuleProgress))}px`,
    borderRadius: `${lerp(10, 28, lightCapsuleProgress)}px`,
    borderColor:
      progress < 0.5
        ? mixRgba([255, 255, 255, 0.7], [255, 255, 255, 0.18], darkGlassProgress)
        : mixRgba([255, 255, 255, 0.18], [20, 25, 30, 0.07], lightCapsuleProgress),
    backgroundColor: shellBackground,
    boxShadow: `0 ${Math.round(lerp(16, 12, lightCapsuleProgress))}px ${Math.round(
      lerp(45, 35, lightCapsuleProgress),
    )}px rgba(15, 20, 25, ${lerp(0.08, 0.1, lightCapsuleProgress).toFixed(3)})`,
    backdropFilter: `blur(${lerp(8, 16, progress)}px)`,
    WebkitBackdropFilter: `blur(${lerp(8, 16, progress)}px)`,
  };

  const topBarStyle: CSSProperties = {
    height: `${lerp(36, 0, contactProgress)}px`,
    opacity: 1 - contactProgress,
    transform: `translateY(${-8 * contactProgress}px)`,
    clipPath: `inset(0 0 ${contactProgress * 100}% 0 round 10px)`,
    backgroundColor: "rgba(17, 20, 24, 0.94)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  };

  const navRowStyle: CSSProperties = {
    paddingTop: `${lerp(22, 12, navCompactProgress)}px`,
    paddingBottom: `${lerp(22, 12, navCompactProgress)}px`,
    transform: `translateY(${-6 * contactProgress}px)`,
  };

  const useLightText = progress > 0.28 && progress < 0.66;
  const navTextColor = useLightText ? "rgba(255, 255, 255, 0.86)" : "rgba(30, 34, 41, 0.72)";
  const navHoverColor = useLightText ? "hover:text-white" : "hover:text-brand-charcoal";
  const quoteIsDark = progress < 0.3 || progress > 0.66;

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-6">
      <div
        className="pointer-events-auto mx-auto overflow-hidden border transition-[background-color,border-color,border-radius,box-shadow,max-width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={shellStyle}
      >
        <div
          className="flex w-full overflow-hidden rounded-[10px] border-b border-white/8 bg-[linear-gradient(90deg,rgba(17,20,24,0.97),rgba(30,34,41,0.93))] text-[11px] font-medium tracking-[0.01em] text-white/72"
          style={topBarStyle}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-5">
              <div className="hidden items-center gap-2 whitespace-nowrap lg:flex">
                <Clock3 size={13} className="text-brand-gold-light" aria-hidden="true" />
                <span>
                  {siteConfig.businessHours.days}: {siteConfig.businessHours.time}
                </span>
              </div>
              <span className="hidden h-3 w-px bg-white/14 lg:block" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-brand-gold-light focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
              >
                <Phone size={13} className="text-brand-gold-light" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
              <span className="hidden h-3 w-px bg-white/14 md:block" />
              <span className="hidden items-center gap-2 whitespace-nowrap text-white/58 md:flex">
                <MapPin size={13} className="text-brand-gold-light" aria-hidden="true" />
                {siteConfig.address.city}, {siteConfig.address.district}
              </span>
            </div>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-white/72 transition-all hover:border-brand-gold-light/40 hover:bg-white/10 hover:text-brand-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 sm:px-3"
              aria-label="AK-EL Yapı Instagram hesabı"
            >
              <InstagramIcon />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-8"
          style={navRowStyle}
        >
          <Link
            href="/"
            className="group flex shrink-0 items-center rounded-xl border border-white/55 bg-white/92 px-2 py-1.5 shadow-[0_8px_24px_rgba(15,20,25,0.08)] transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
            aria-label="AK-EL Yapı ana sayfa"
          >
            <Image
              src="/images/logo.png"
              alt="AK-EL Yapı Premium Sistemler"
              width={1204}
              height={330}
              priority
              sizes="(max-width: 1023px) 132px, 154px"
              className="h-8 w-auto object-contain sm:h-9 lg:h-[42px]"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const baseHref = link.href.split("#")[0];
                const isActive = pathname === baseHref || (link.href === "/" && pathname === "/");

                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`group relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 ${navHoverColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60`}
                      style={{ color: navTextColor }}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-1/2 h-px w-7 -translate-x-1/2 rounded-full bg-brand-gold/90 transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/iletisim"
              className={`min-w-[104px] rounded-full px-6 py-2.5 text-center text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 ${
                quoteIsDark
                  ? "bg-brand-charcoal text-white shadow-brand-charcoal/18 hover:bg-brand-gold"
                  : "bg-white text-brand-charcoal shadow-white/20 hover:bg-brand-gold-light"
              }`}
            >
              Teklif Al
            </Link>
          </nav>

          <button
            className="rounded-full bg-white/72 p-2.5 text-brand-charcoal shadow-sm transition-colors hover:bg-white lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menüyü aç"
          >
            <Menu size={24} />
          </button>

          <div
            className="pointer-events-none absolute bottom-0 left-6 right-6 h-px origin-center bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent transition-all duration-700"
            style={{ opacity: lightCapsuleProgress, transform: `scaleX(${lightCapsuleProgress})` }}
          />
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="pointer-events-auto fixed inset-0 z-50 flex flex-col bg-brand-charcoal/88 text-white backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl bg-white px-2 py-1.5 shadow-lg shadow-black/10"
                aria-label="AK-EL Yapı ana sayfa"
              >
                <Image
                  src="/images/logo.png"
                  alt="AK-EL Yapı Premium Sistemler"
                  width={1204}
                  height={330}
                  sizes="132px"
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Menüyü kapat"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-8 overflow-y-auto p-8">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.045 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-heading text-3xl font-medium text-white transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-auto border-t border-white/10 pt-8"
              >
                <Link
                  href="/iletisim"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-2xl bg-brand-gold px-6 py-4 text-lg font-bold text-white shadow-lg shadow-brand-gold/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                >
                  Ücretsiz Keşif İste
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
