"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Gauge, Leaf, ThermometerSun, Wallet } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";

const homeVideo = "/videos/energy-saving-little.mp4";
const homePoster = "/images/energy-saving-pimapen-home.webp";

export default function EnergySavingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "-3%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.09, 1.12]);
  const heatOpacity = useTransform(scrollYProgress, [0.1, 0.42, 0.86], [0, 1, 0.42]);
  const cardY = useTransform(scrollYProgress, [0.12, 0.55], [48, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.12, 0.42], [0, 1]);

  const indicators = [
    { icon: ThermometerSun, value: "%34", label: "daha dengeli ısı" },
    { icon: Wallet, value: "%28", label: "fatura avantajı" },
    { icon: Leaf, value: "A+", label: "verimli yaşam" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-white py-24 md:py-32"
      id="enerji-tasarrufu"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
            <span className="h-px w-12 bg-brand-gold" />
            Enerji hikayesi
          </div>
          <h2 className="text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-brand-charcoal md:text-6xl">
            Isı Kaybını Azaltın, Konforu Artırın
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-brand-charcoal/70 md:text-xl">
            Doğru Pimapen sistemi, sıcaklığı içeride tutar, soğuk yüzey hissini azaltır ve evin ekonomik konforunu görünür hale getirir.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {indicators.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.55 }}
                  className="rounded-2xl border border-brand-gray/50 bg-bg-soft p-5"
                >
                  <Icon size={22} className="mb-5 text-brand-gold" />
                  <div className="font-heading text-3xl font-bold text-brand-charcoal">{item.value}</div>
                  <div className="mt-1 text-sm font-medium text-brand-charcoal/58">{item.label}</div>
                </motion.div>
              );
            })}
          </div>

          <Link
            href="/iletisim"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-brand-charcoal px-8 py-4 font-bold text-white shadow-xl shadow-brand-charcoal/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-gold"
          >
            Enerji keşfi al
            <Gauge size={20} />
          </Link>
        </motion.div>

        <motion.div
          style={{ y: cardY, opacity: cardOpacity }}
          className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-brand-charcoal shadow-[0_30px_100px_rgba(30,34,41,0.16)]"
        >
          <motion.div style={{ y: imageY, scale: imageScale }} className="absolute -inset-y-10 inset-x-0 md:-inset-y-12">
            <LazyVideo
              className="h-full w-full object-cover [object-position:center_70%] md:[object-position:center_64%]"
              src={homeVideo}
              poster={homePoster}
              ariaLabel="Gün ışığı alan ferah ev ve premium pencere sistemi"
              decorative={false}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/10 to-white/12" />

          <motion.div style={{ opacity: heatOpacity }} className="absolute inset-0">
            <motion.div
              animate={{ x: ["-12%", "8%", "-12%"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute left-8 top-16 h-32 w-[78%] rounded-full bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0 blur-2xl"
            />
            <motion.div
              animate={{ x: ["10%", "-8%", "10%"] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute bottom-28 right-6 h-40 w-[82%] rounded-full bg-gradient-to-r from-brand-gold/0 via-brand-gold/34 to-brand-gold/0 blur-2xl"
            />
          </motion.div>

          <div className="absolute bottom-4 left-4 right-4 rounded-[1.35rem] border border-white/25 bg-white/80 p-4 shadow-2xl backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5 md:bottom-8 md:left-8 md:right-8 md:rounded-[1.5rem] md:p-6">
            <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:gap-4">
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold sm:text-xs sm:tracking-[0.24em]">Isı katmanı</div>
                <div className="mt-1 text-balance font-heading text-xl font-bold leading-tight text-brand-charcoal sm:text-2xl">Sıcaklık içeride kalır</div>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-charcoal text-brand-gold-light sm:h-14 sm:w-14">
                <ThermometerSun size={24} className="sm:h-7 sm:w-7" />
              </div>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-brand-gray">
              <motion.div
                initial={{ width: "28%" }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.25, ease: [0.19, 1, 0.22, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
