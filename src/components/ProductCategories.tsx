"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, DoorClosed, AppWindow, Blinds, Layers, Focus, Shield } from "lucide-react";

const categories = [
  {
    icon: AppWindow,
    title: "PVC Pencere",
    desc: "Isı ve ses yalıtımında üstün performans.",
    image: "/images/category-pvc-window.webp",
    imageAlt: "Antrasit PVC pencere sistemi",
    badge: "Yalıtımlı cam yüzeyi",
    imageClassName:
      "absolute -right-20 top-2 h-[82%] w-[86%] transition-transform duration-700 ease-out group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:scale-[1.045] motion-reduce:transform-none sm:-right-24",
    href: "/hizmetler#pvc-pencere",
  },
  {
    icon: DoorClosed,
    title: "PVC Kapı",
    desc: "Güvenli ve estetik giriş çözümleri.",
    image: "/images/category-pvc-door.webp",
    imageAlt: "Camlı antrasit PVC kapı sistemi",
    badge: "Güvenli geçiş",
    imageClassName:
      "absolute -right-20 top-2 h-[82%] w-[86%] transition-transform duration-700 ease-out group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:scale-[1.045] motion-reduce:transform-none sm:-right-24",
    href: "/hizmetler#pvc-kapi",
  },
  {
    icon: Layers,
    title: "Sürgülü Sistemler",
    desc: "Geniş mekanlar için konforlu kullanım.",
    image: "/images/category-sliding-system.webp",
    imageAlt: "Antrasit sürgülü PVC pencere sistemi",
    badge: "Geniş geçiş alanı",
    imageClassName:
      "absolute -right-16 top-12 h-[68%] w-[88%] transition-transform duration-700 ease-out group-hover:-translate-x-5 group-hover:translate-y-1 group-hover:scale-[1.035] motion-reduce:transform-none sm:-right-20 lg:-right-24",
    href: "/hizmetler#surgulu-sistemler",
  },
  {
    icon: Blinds,
    title: "Panjur Sistemleri",
    desc: "Güneş kontrolü ve ekstra güvenlik.",
    image: "/images/category-blinds.webp",
    imageAlt: "Antrasit otomatik panjur sistemi",
    badge: "Kontrollü gölge",
    imageClassName:
      "absolute -right-14 top-7 h-[78%] w-[82%] transition-transform duration-700 ease-out group-hover:-translate-x-4 group-hover:translate-y-1 group-hover:scale-[1.035] motion-reduce:transform-none sm:-right-[4.5rem] lg:-right-20",
    href: "/hizmetler#panjur-sistemleri",
  },
  {
    icon: Focus,
    title: "Cam Balkon",
    desc: "Dört mevsim kullanışlı alanlar.",
    image: "/images/category-glass-balcony.webp",
    imageAlt: "Modern cam balkon korkuluk sistemi",
    badge: "Dört mevsim alan",
    imageClassName:
      "absolute -right-28 bottom-10 h-[62%] w-[112%] transition-transform duration-700 ease-out group-hover:-translate-x-7 group-hover:translate-y-1 group-hover:scale-[1.04] motion-reduce:transform-none sm:-right-36 lg:-right-40",
    href: "/hizmetler#cam-balkon",
  },
  {
    icon: Shield,
    title: "Sineklik",
    desc: "Ferah ve haşeresiz mekanlar.",
    image: "/images/category-insect-screen.webp",
    imageAlt: "Antrasit sineklik panel sistemi",
    badge: "Temiz hava konforu",
    imageClassName:
      "absolute -right-10 top-5 h-[84%] w-[72%] transition-transform duration-700 ease-out group-hover:-translate-x-4 group-hover:translate-y-1 group-hover:scale-[1.035] motion-reduce:transform-none sm:-right-14 lg:-right-16",
    href: "/hizmetler#sineklik",
  },
];

export default function ProductCategories() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-24 md:scroll-mt-32" id="urunler">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(164,151,116,0.12),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.94),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(30,34,41,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,34,41,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6"
          >
            Sistemler ve Çözümler
          </motion.h2>
          <motion.p 
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-charcoal/70 text-lg md:text-xl"
          >
            İhtiyacınıza uygun en kaliteli Pimapen ürünleriyle evinizi veya iş yerinizi baştan yaratın.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const hasImage = Boolean(cat.image);

            return (
              <motion.div
                key={cat.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Link
                  href={cat.href}
                  className={`group relative flex h-full min-h-[310px] overflow-hidden rounded-3xl border border-white/80 bg-white/72 shadow-[0_22px_70px_rgba(30,34,41,0.08)] outline-none transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_90px_rgba(30,34,41,0.12)] focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf7] motion-reduce:transform-none motion-reduce:transition-none ${
                    hasImage ? "p-0 sm:min-h-[360px]" : "p-8"
                  }`}
                >
                  {hasImage ? (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(255,255,255,0.98),rgba(224,232,230,0.7)_42%,rgba(246,244,239,0.96)_100%)]" />
                      <div className="absolute inset-x-10 bottom-8 h-20 rounded-full bg-slate-300/30 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                      <div className={cat.imageClassName}>
                        <Image
                          src={cat.image!}
                          alt={cat.imageAlt!}
                          fill
                          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 44vw, 29vw"
                          quality={75}
                          className="object-contain object-center drop-shadow-[0_28px_52px_rgba(30,34,41,0.24)]"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/78 to-white/10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/88 via-white/10 to-white/18" />
                      <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-18deg] bg-white/30 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[420%] motion-reduce:hidden" />

                      <div className="relative z-10 flex min-h-[310px] w-full flex-col p-8 sm:min-h-[360px]">
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white/82 text-brand-charcoal shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 group-hover:text-brand-gold">
                          <Icon size={28} strokeWidth={1.5} />
                        </div>
                        <span className="mb-3 inline-flex w-fit rounded-full bg-brand-gold/82 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-charcoal shadow-sm">
                          {cat.badge}
                        </span>
                        <h3 className="mb-3 max-w-[13rem] font-heading text-3xl font-bold leading-tight text-brand-charcoal transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transform-none">
                          {cat.title}
                        </h3>
                        <p className="max-w-[15rem] text-base leading-relaxed text-slate-600 md:text-lg">
                          {cat.desc}
                        </p>

                        <div className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/80 bg-white/78 px-4 py-2.5 text-sm font-bold text-brand-charcoal shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:border-brand-charcoal group-hover:bg-brand-charcoal group-hover:text-white">
                          <span>Hemen İncele</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/7 via-transparent to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative z-10 flex h-full w-full flex-col">
                        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white shadow-sm text-brand-charcoal transition-all duration-500 group-hover:scale-105 group-hover:text-brand-gold motion-reduce:transform-none">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="mb-3 font-heading text-2xl font-bold text-brand-charcoal transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                          {cat.title}
                        </h3>
                        <p className="mb-8 text-lg leading-relaxed text-brand-charcoal/60">
                          {cat.desc}
                        </p>

                        <div className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2.5 text-sm font-bold text-brand-gold opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          <span>Hemen İncele</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-brand-gold transition-all duration-500 ease-out group-hover:w-full" />
                    </>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
