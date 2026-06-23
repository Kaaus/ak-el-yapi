"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles, ThermometerSun, VolumeX } from "lucide-react";

const beforeImage = "/images/before-old-pvc-window.webp";
const afterImage = "/images/after-premium-pimapen-window.webp";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const featureCards = [
    { icon: ThermometerSun, title: "Daha iyi ısı dengesi", desc: "Mevsim geçişlerinde konforu içeride tutar." },
    { icon: VolumeX, title: "Daha sessiz mekan", desc: "Şehir gürültüsünü belirgin biçimde azaltır." },
    { icon: Sparkles, title: "Daha ferah görünüm", desc: "Beyaz premium profil gün ışığını güçlendirir." },
    { icon: ShieldCheck, title: "Daha uzun ömür", desc: "Temiz montaj ve dayanıklı sistem birlikte çalışır." },
  ];

  return (
    <section className="bg-[#FAFAFA] py-24" id="donusum">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-balance font-heading text-4xl font-bold leading-tight text-brand-charcoal md:text-5xl"
          >
            Eski doğramadan gün ışığına uzanan <span className="text-brand-gold">sessiz dönüşüm</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg font-medium leading-relaxed text-brand-charcoal/70 md:text-xl"
          >
            Sararmış eski PVC ve kasvetli atmosfer, beyaz premium Pimapen, gün ışığı ve ferah iç mekan hissine dönüşür.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto mb-16 max-w-5xl"
        >
          <div
            ref={containerRef}
            role="slider"
            aria-label="Önce sonra karşılaştırma"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            tabIndex={0}
            className="relative h-[420px] w-full touch-none select-none overflow-hidden rounded-[2rem] bg-brand-charcoal shadow-[0_24px_70px_rgba(30,34,41,0.18)] md:h-[620px]"
            onPointerDown={(event) => {
              setIsDragging(true);
              event.currentTarget.setPointerCapture(event.pointerId);
              updatePosition(event.clientX);
            }}
            onPointerMove={(event) => {
              if (isDragging) updatePosition(event.clientX);
            }}
            onPointerUp={() => setIsDragging(false)}
            onPointerCancel={() => setIsDragging(false)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") setSliderPosition((value) => Math.max(0, value - 4));
              if (event.key === "ArrowRight") setSliderPosition((value) => Math.min(100, value + 4));
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={afterImage}
                alt="Beyaz premium Pimapen ve gün ışığı alan ferah iç mekan"
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-brand-gold/16" />
              <div className="absolute right-5 top-5 z-10 rounded-full bg-brand-gold/90 px-5 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md md:text-sm">
                Sonra: Gün ışığı ve premium Pimapen
              </div>
            </div>

            <div
              className="absolute inset-0 will-change-[clip-path]"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src={beforeImage}
                alt="Sararmış eski PVC pencere ve kasvetli atmosfer"
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                quality={85}
                className="object-cover grayscale-[0.2] sepia-[0.25]"
              />
              <div className="absolute inset-0 bg-brand-charcoal/38" />
              <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-5 py-2 text-xs font-bold text-brand-charcoal shadow-lg backdrop-blur-md md:text-sm">
                Önce: Eski doğrama ve soluk atmosfer
              </div>
            </div>

            <div
              className="pointer-events-none absolute bottom-0 top-0 z-20 w-1 bg-white shadow-[0_0_18px_rgba(0,0,0,0.55)]"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            />

            <div
              className="pointer-events-none absolute top-1/2 z-30 flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/92 text-brand-charcoal shadow-[0_0_34px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              style={{
                left: `${sliderPosition}%`,
                transform: `translate(-50%, -50%) ${isDragging ? "scale(1.08)" : "scale(1)"}`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <ChevronLeft size={24} className="text-brand-charcoal/70" />
              <ChevronRight size={24} className="text-brand-charcoal/70" />
            </div>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              className="group rounded-2xl border border-brand-gray/40 bg-white p-6 text-center shadow-lg shadow-brand-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg-soft text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-white">
                <feat.icon size={24} />
              </div>
              <h4 className="mb-2 font-heading font-bold text-brand-charcoal">{feat.title}</h4>
              <p className="text-sm leading-relaxed text-brand-charcoal/60">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
