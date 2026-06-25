"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3, Maximize, ShieldCheck, SlidersHorizontal, Wind } from "lucide-react";

const pimapenSeries = [
  {
    id: "nirvana",
    name: "Nirvana Serisi",
    subtitle: "Üstün Isı ve Ses Yalıtımı",
    desc: "80 mm profil genişliği ve 6 odacıklı tasarımıyla, en zorlu iklim şartlarında bile evinizi mükemmel koruyan, Pimapen'in en üst segment serisi.",
    features: [
      { icon: ShieldCheck, text: "6 Odacıklı Profil" },
      { icon: Wind, text: "Üçlü Conta Sistemi" },
      { icon: SlidersHorizontal, text: "Akustik İzolasyon" }
    ],
    image: "/images/nirvana-360.webp",
    imageMode: "contain",
    imageFrameClassName:
      "absolute left-[18%] right-[-22%] top-5 h-[270px] transition-all duration-[1600ms] ease-out group-hover:translate-x-4 group-hover:scale-[1.04] group-hover:opacity-35 sm:h-[305px] md:-bottom-10 md:-right-32 md:-top-8 md:left-[22%] md:h-auto md:scale-100 md:group-hover:scale-[1.08]",
    detailHref: "/urunler/nirvana",
    cinematic: {
      photo: "/images/nirvana-profile-detail.webp",
      video: "/videos/nirvana.mp4",
      poster: "/images/nirvana-showcase-poster.webp",
      spin: "/images/nirvana-360.webp",
    },
  },
  {
    id: "carisma",
    name: "Carisma Serisi",
    subtitle: "Estetik ve Dayanıklılık",
    desc: "70 mm genişliğinde 5 odacıklı yapısıyla modern mimarinin tercihi. Kendine has oval hatlarıyla evinize hem şıklık hem de yüksek performans katar.",
    features: [
      { icon: ShieldCheck, text: "5 Odacıklı Tasarım" },
      { icon: Wind, text: "TPE Conta ile Tam Yalıtım" },
      { icon: Maximize, text: "Modern Çizgiler" }
    ],
    image: "/images/nirvana-360.webp",
    imageMode: "contain",
    imageFrameClassName:
      "absolute left-[24%] right-[-18%] top-7 h-[255px] transition-all duration-[1600ms] ease-out group-hover:translate-x-3 group-hover:scale-[1.03] group-hover:opacity-35 sm:h-[295px] md:-bottom-12 md:-right-20 md:top-14 md:left-[26%] md:h-auto md:scale-100 md:group-hover:scale-[1.04]",
    detailHref: "/urunler/carisma",
    cinematic: {
      photo: "/images/nirvana-profile-detail.webp",
      video: "/videos/nirvana.mp4",
      poster: "/images/nirvana-showcase-poster.webp",
      spin: "/images/carisma-series.webp",
    },
  },
  {
    id: "dynamic",
    name: "Dynamic Sürme",
    subtitle: "Konforlu Sürme Sistemi",
    desc: "Dar mekanlarda yer kazandıran, mükemmel sızdırmazlık sağlayan yeni nesil yalıtımlı sürme kapı ve pencere sistemi.",
    features: [
      { icon: SlidersHorizontal, text: "Yumuşak Kapanma" },
      { icon: Maximize, text: "Geniş Görüş Alanı" },
      { icon: ShieldCheck, text: "Yüksek Güvenlik" }
    ],
    image: "/images/dynamic-showcase-poster.webp",
    detailHref: "/urunler/dynamic",
    cinematic: {
      photo: "/images/dynamic-showcase-poster.webp",
      video: "/videos/dynamic-showcase.mp4",
      poster: "/images/dynamic-showcase-poster.webp",
      photoLabel: "Sürme",
    },
  },
  {
    id: "albatros",
    name: "Albatros Sürme",
    subtitle: "Maksimum Cam Yüzeyi",
    desc: "Geniş açıklıklar için özel tasarlanmış, eşiksiz geçiş imkanı sunan ve mekanları dışarıyla bütünleştiren premium sürme serisi.",
    features: [
      { icon: Maximize, text: "Kesintisiz Manzara" },
      { icon: Wind, text: "Eşiksiz Kullanım" },
      { icon: SlidersHorizontal, text: "Kolay Hareket" }
    ],
    image: "/images/albatros-showcase-poster.webp",
    detailHref: "/urunler/albatros",
    cinematic: {
      photo: "/images/albatros-showcase-poster.webp",
      video: "/videos/albatros-showcase.mp4",
      poster: "/images/albatros-showcase-poster.webp",
      photoLabel: "Sürme",
    },
  }
];

export default function PopularProducts() {
  const [activeSeries, setActiveSeries] = useState<string | null>(null);

  return (
    <section className="relative isolate overflow-hidden bg-[#f8faf8] py-32 text-brand-charcoal" id="orijinal-seriler">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fbfcfb_0%,#eef4f2_48%,#f8faf8_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(164,151,116,0.18),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.96),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(205,216,213,0.42),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] [background-image:linear-gradient(rgba(30,34,41,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(30,34,41,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">
              <span className="w-8 h-px bg-brand-gold" />
              Orijinal Pimapen Serileri
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Premium Pencere <br className="hidden md:block"/>
              <span className="text-slate-400">Sistemleri</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              En son teknolojiyle üretilen orijinal Pimapen serileriyle tanışın. Ses ve ısı yalıtımında sınırları zorlayan mühendislik harikaları.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-charcoal text-white font-bold rounded-full shadow-xl shadow-brand-charcoal/15 transition-all duration-300 hover:bg-brand-gold hover:text-brand-charcoal hover:scale-105"
            >
              Fiyat Teklifi Al
            </Link>
          </motion.div>
        </div>

        {/* Product Grid - Premium Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {pimapenSeries.map((series, idx) => (
            <motion.div
              key={series.id}
              onPointerEnter={() => {
                if (series.cinematic) setActiveSeries(series.id);
              }}
              onPointerLeave={() => {
                if (series.cinematic) setActiveSeries(null);
              }}
              onPointerDown={() => {
                if (series.cinematic) setActiveSeries(series.id);
              }}
              onFocusCapture={() => {
                if (series.cinematic) setActiveSeries(series.id);
              }}
              onBlurCapture={() => {
                if (series.cinematic) setActiveSeries(null);
              }}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 shadow-[0_28px_90px_rgba(30,34,41,0.13)] backdrop-blur-2xl ${series.detailHref ? "cursor-pointer" : ""} ${series.imageMode === "contain" ? "h-[500px] sm:h-[540px] md:h-[640px]" : series.cinematic ? "h-[560px] md:h-[640px]" : "h-[500px] md:h-[600px]"}`}
            >
              {/* Ultra High Quality Background Image */}
              <div className={`absolute inset-0 h-full w-full ${series.imageMode === "contain" ? "bg-[radial-gradient(circle_at_58%_22%,rgba(255,255,255,0.98),rgba(228,235,233,0.78)_38%,rgba(210,221,218,0.76)_76%)]" : "bg-white"}`}>
                {series.imageMode === "contain" ? (
                  <>
                    <div className="absolute inset-x-10 bottom-8 h-32 rounded-full bg-slate-300/45 blur-3xl" />
                    <div className={series.imageFrameClassName ?? "absolute -bottom-10 -right-24 -top-8 left-[12%] transition-all duration-[1600ms] ease-out group-hover:translate-x-4 group-hover:scale-[1.08] group-hover:opacity-35 md:-right-32 md:left-[22%]"}>
                      <Image
                        src={series.image}
                        alt={series.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={85}
                        className="h-full w-full object-contain object-center drop-shadow-[0_36px_64px_rgba(30,34,41,0.24)]"
                      />
                    </div>
                  </>
                ) : (
                  <Image
                    src={series.image}
                    alt={series.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                )}
              </div>

              {series.cinematic ? (
                <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
                  <ProductHoverVideo
                    src={series.cinematic.video}
                    poster={series.cinematic.poster}
                    className="h-full w-full scale-105 object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-100"
                    ariaLabel={`${series.name} ürün animasyonu`}
                    active={activeSeries === series.id}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/50 to-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/94 via-white/16 to-white/36" />

                  <div className="absolute right-5 top-20 hidden h-32 w-32 translate-y-4 overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/70 opacity-0 shadow-2xl shadow-brand-charcoal/12 backdrop-blur-xl transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 md:block lg:h-36 lg:w-36">
                    <Image
                      src={series.cinematic.photo}
                      alt={`${series.name} profil kesiti`}
                      fill
                      sizes="144px"
                      quality={85}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/46 via-transparent to-white/20" />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-charcoal shadow-sm backdrop-blur-md">
                      <Layers3 size={12} className="text-brand-gold" />
                      {series.cinematic.photoLabel ?? "Kesit"}
                    </div>
                  </div>
                </div>
              ) : null}

              {series.cinematic?.spin ? (
                <div className="pointer-events-none absolute right-5 top-5 z-30 hidden items-center gap-2 rounded-full border border-white/80 bg-white/72 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-charcoal shadow-2xl shadow-brand-charcoal/10 backdrop-blur-2xl transition-all duration-500 group-hover:bg-white/88 md:flex">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-charcoal text-white shadow-sm">
                    360
                  </span>
                  <span className="text-slate-600">Model</span>
                </div>
              ) : null}

              {/* Gradient Overlays */}
              <div className={`absolute inset-0 z-20 bg-gradient-to-t ${series.cinematic ? "from-white/94 via-white/38 to-white/6" : "from-white/92 via-white/36 to-transparent"}`} />
              <div className={`absolute inset-0 z-20 transition-colors duration-700 ${series.cinematic ? "bg-white/4 group-hover:bg-white/10" : "bg-white/10 group-hover:bg-white/4"}`} />

              {series.detailHref ? (
                <Link
                  href={series.detailHref}
                  aria-label={`${series.name} detay sayfasını aç`}
                  className="absolute inset-0 z-[25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-brand-gold-light"
                />
              ) : null}

              {/* Content Box */}
              <div className={`absolute inset-0 z-30 flex flex-col justify-end p-5 pb-7 sm:p-6 sm:pb-8 md:p-12 ${series.detailHref ? "pointer-events-none" : ""}`}>
                <div className={`transform translate-y-0 transition-transform duration-500 ease-out md:translate-y-8 md:group-hover:translate-y-0 ${series.cinematic ? "max-w-[29rem]" : ""}`}>
                  
                  <span className="mb-3 inline-block rounded-full bg-brand-gold/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-charcoal shadow-lg backdrop-blur-md md:mb-4 md:px-4 md:text-xs">
                    {series.subtitle}
                  </span>
                  
                  <h3 className="mb-3 font-heading text-3xl font-bold text-brand-charcoal md:mb-4 md:text-5xl">
                    {series.name}
                  </h3>
                  
                  <p className={`mb-5 max-w-lg text-sm leading-relaxed text-slate-600 transition-all duration-500 sm:text-base md:mb-7 md:text-lg ${series.cinematic ? "line-clamp-3" : "line-clamp-3 group-hover:line-clamp-none"}`}>
                    {series.desc}
                  </p>

                  <div className={`mb-0 max-h-0 overflow-hidden opacity-0 transition-all delay-100 duration-500 group-hover:max-h-40 group-hover:opacity-100 md:mb-8 md:max-h-none ${series.cinematic ? "flex max-w-md flex-wrap gap-2.5" : "grid grid-cols-2 gap-4"}`}>
                    {series.features.map((feat, i) => (
                      <div key={i} className={`flex items-center gap-3 ${series.cinematic ? "rounded-full border border-slate-200/80 bg-white/72 px-3 py-2 shadow-sm backdrop-blur-xl" : ""}`}>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-charcoal/7 backdrop-blur-md">
                          <feat.icon size={14} className="text-brand-gold" />
                        </div>
                        <span className={`${series.cinematic ? "text-xs" : "text-sm"} font-medium text-slate-700`}>{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={series.detailHref ?? "/iletisim"}
                    className="group/link pointer-events-auto inline-flex w-fit items-center gap-2.5 rounded-full border border-brand-charcoal/10 bg-white/70 px-4 py-2.5 text-sm font-semibold text-brand-charcoal shadow-lg shadow-brand-charcoal/8 backdrop-blur-xl transition-all hover:border-brand-gold/35 hover:bg-white hover:text-brand-gold md:gap-3 md:border-transparent md:bg-transparent md:px-0 md:py-0 md:text-base md:shadow-none md:backdrop-blur-0"
                  >
                    Detaylı Bilgi İste
                    <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

function ProductHoverVideo({
  active,
  ariaLabel,
  className,
  poster,
  src,
}: {
  active: boolean;
  ariaLabel: string;
  className?: string;
  poster: string;
  src: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!active || shouldReduceMotion) {
      video.pause();
      return;
    }

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        video.pause();
      });
    }
  }, [active, shouldReduceMotion]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={ariaLabel}
    >
      {active ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
