"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const trafficImage =
  "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2200&auto=format&fit=crop";
const calmImage = "/images/after-premium-pimapen-window.webp";

const noisyBars = [72, 48, 88, 34, 64, 92, 42, 76, 56, 84, 38, 68, 96, 45, 72, 52, 88, 36, 78, 58];
const calmBars = [18, 24, 16, 28, 20, 32, 18, 26, 15, 30, 22, 27, 17, 24, 19, 29, 21, 25, 16, 28];

export default function SoundInsulationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cityAudioRef = useRef<HTMLAudioElement>(null);
  const calmAudioRef = useRef<HTMLAudioElement>(null);

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const quietness = sliderPosition / 100;
  const decibel = Math.round(85 - quietness * 55);
  const redOpacity = Math.max(0.08, 0.68 - quietness * 0.58);
  const brightness = 0.12 + quietness * 0.42;

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    if (!cityAudioRef.current || !calmAudioRef.current) return;

    calmAudioRef.current.volume = quietness;
    cityAudioRef.current.volume = 1 - quietness;
  }, [quietness]);

  const toggleSound = () => {
    if (!cityAudioRef.current || !calmAudioRef.current) return;

    if (isSoundEnabled) {
      cityAudioRef.current.pause();
      calmAudioRef.current.pause();
      setIsSoundEnabled(false);
      return;
    }

    calmAudioRef.current.volume = quietness;
    cityAudioRef.current.volume = 1 - quietness;

    cityAudioRef.current.play().catch(() => undefined);
    calmAudioRef.current.play().catch(() => undefined);
    setIsSoundEnabled(true);
  };

  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-24 text-white" id="sessizlik">
      <audio ref={cityAudioRef} loop preload="none" src="/sounds/city.wav" />
      <audio ref={calmAudioRef} loop preload="none" src="/sounds/calm.mp3" />

      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-balance font-heading text-4xl font-bold tracking-tight md:text-6xl"
        >
          Şehrin sesini azaltın, <span className="text-brand-gold-light">evin ışığını artırın</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-white/70 md:text-xl"
        >
          Slider ilerledikçe trafik tonu söner, dB değeri düşer ve iç mekan daha aydınlık bir sessizliğe geçer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={toggleSound}
            className={`flex items-center gap-3 rounded-full px-8 py-4 font-bold shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
              isSoundEnabled
                ? "bg-brand-gold text-white shadow-brand-gold/30"
                : "border border-white/12 bg-white/10 text-white/82 hover:bg-white/18"
            }`}
          >
            {isSoundEnabled ? <Volume2 size={22} className="animate-pulse" /> : <VolumeX size={22} />}
            {isSoundEnabled ? "Ses deneyimi aktif" : "Etkileşimli sesi aç"}
          </button>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div
          ref={containerRef}
          role="slider"
          aria-label="Ses yalıtımı karşılaştırması"
          aria-valuemin={30}
          aria-valuemax={85}
          aria-valuenow={decibel}
          tabIndex={0}
          className="group relative h-[520px] w-full touch-none select-none overflow-hidden rounded-[2rem] bg-black shadow-[0_0_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 md:h-[680px]"
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
              src={trafficImage}
              alt="Şehir trafiği ve yoğun gürültü ortamı"
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              quality={85}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-red-950 mix-blend-multiply" style={{ opacity: redOpacity }} />
            <div className="absolute inset-0 bg-brand-charcoal/35" />
            <div className="absolute right-5 top-5 rounded-full border border-red-200/20 bg-black/62 px-5 py-2.5 font-medium text-red-100 shadow-xl backdrop-blur-md md:right-8 md:top-8">
              Şehir trafiği <span className="font-heading text-xl font-bold">{decibel} dB</span>
            </div>
          </div>

          <div
            className="absolute inset-0 border-r-4 border-brand-gold will-change-[clip-path]"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <Image
              src={calmImage}
              alt="Aydınlık ve sessiz ev ortamı"
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              quality={90}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white mix-blend-screen" style={{ opacity: brightness }} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/36 via-transparent to-white/10" />
            <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/82 px-5 py-2.5 font-medium text-brand-charcoal shadow-xl backdrop-blur-md md:left-8 md:top-8">
              Huzurlu iç mekan <span className="font-heading text-xl font-bold">{decibel} dB</span>
            </div>
          </div>

          <div className="absolute bottom-10 left-6 right-6 z-20 flex h-32 items-end justify-between gap-1 opacity-80 md:left-10 md:right-10">
            {noisyBars.map((bar, index) => {
              const height = Math.max(8, bar * (1 - quietness) + 8);
              return (
                <motion.div
                  key={`noise-${index}`}
                  animate={{ height: `${height}%`, opacity: Math.max(0.18, 1 - quietness * 0.78) }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-1.5 rounded-t-full bg-red-500 md:w-2"
                />
              );
            })}
          </div>

          <div className="absolute bottom-10 left-6 right-6 z-20 flex h-32 items-end justify-between gap-1 opacity-80 md:left-10 md:right-10">
            {calmBars.map((bar, index) => {
              const height = Math.min(62, bar + quietness * 32);
              return (
                <motion.div
                  key={`calm-${index}`}
                  animate={{ height: `${height}%`, opacity: Math.max(0.16, quietness) }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-1.5 rounded-t-full bg-brand-gold-light md:w-2"
                />
              );
            })}
          </div>

          <div
            className="absolute bottom-0 top-0 z-30 flex w-16 -translate-x-1/2 items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/35 bg-brand-gold text-white shadow-[0_0_34px_rgba(142,133,104,0.72)] backdrop-blur-md transition-transform duration-200 group-hover:scale-105">
              <span className="text-lg font-bold">{decibel}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-7 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 text-sm font-medium text-white/68 backdrop-blur-xl sm:flex-row">
          <span>Kırmızı alan şehir gürültüsünü gösterir.</span>
          <span>Slider ilerledikçe ses ve dB seviyesi düşer.</span>
        </div>
      </div>
    </section>
  );
}
