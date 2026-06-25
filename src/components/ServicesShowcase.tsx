"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ServiceMedia =
  | {
      mediaType: "image";
      mediaSrc: string;
      posterSrc?: never;
      image: string;
    }
  | {
      mediaType: "video";
      mediaSrc: string;
      posterSrc: string;
      image: string;
    };

let activeServiceVideo: HTMLVideoElement | null = null;

const services = [
  {
    id: "01",
    anchorId: "pvc-pencere",
    title: "Pimapen Pencere Sistemleri",
    desc: "Isı, ses ve güvenlik performansını aynı çerçevede toplayan premium PVC pencere çözümleri. Daha aydınlık, daha sessiz ve daha dengeli yaşam alanları için tasarlanır.",
    mediaType: "image",
    mediaSrc: "/images/services/pimapen-pencere.jpg",
    image: "/images/services/pimapen-pencere.jpg",
    stat: "6 odacıklı profil",
  },
  {
    id: "02",
    anchorId: "pvc-kapi",
    title: "PVC Kapı Sistemleri",
    desc: "Giriş, balkon ve iç mekan geçişlerinde uzun ömürlü, temiz çizgili ve yüksek sızdırmazlık sağlayan kapı sistemleri.",
    mediaType: "image",
    mediaSrc: "/images/services/pvc-kapi.jpg",
    image: "/images/services/pvc-kapi.jpg",
    stat: "yüksek güvenlik",
  },
  {
    id: "03",
    anchorId: "surgulu-sistemler",
    title: "Sürgülü Sistemler",
    desc: "Geniş açıklıklarda manzarayı kesmeden, mekanları ferahlatan ve günlük kullanımı hafifleten modern sürme çözümleri.",
    mediaType: "video",
    mediaSrc: "/videos/services/surgu-sistem.mp4",
    posterSrc: "/images/services/posters/surgu-sistem-poster.jpg",
    image: "/images/services/posters/surgu-sistem-poster.jpg",
    stat: "geniş görüş alanı",
  },
  {
    id: "04",
    anchorId: "panjur-sistemleri",
    title: "Panjur Sistemleri",
    desc: "Güneş kontrolü, mahremiyet ve ekstra güvenlik için yapıyla bütünleşen otomatik panjur uygulamaları.",
    mediaType: "video",
    mediaSrc: "/videos/services/panjur.mp4",
    posterSrc: "/images/services/posters/panjur-poster.jpg",
    image: "/images/services/posters/panjur-poster.jpg",
    stat: "konforlu kontrol",
  },
  {
    id: "05",
    anchorId: "cam-balkon",
    title: "Cam Balkon Sistemleri",
    desc: "Balkon ve terasları dört mevsim kullanılabilir, aydınlık ve korunaklı yaşam alanlarına dönüştüren cam balkon uygulamaları.",
    mediaType: "video",
    mediaSrc: "/videos/services/cam-balkon.mp4",
    posterSrc: "/images/services/posters/cam-balkon-poster.jpg",
    image: "/images/services/posters/cam-balkon-poster.jpg",
    stat: "dört mevsim konfor",
  },
  {
    id: "06",
    anchorId: "sineklik",
    title: "Sineklik Sistemleri",
    desc: "Temiz hava akışını korurken yaşam alanlarını haşereden ayıran, ince profilli ve kolay kullanılan sineklik çözümleri.",
    mediaType: "image",
    mediaSrc: "/images/services/sineklik.jpeg",
    image: "/images/services/sineklik.jpeg",
    stat: "temiz hava akışı",
  },
] satisfies Array<ServiceMedia & {
  id: string;
  anchorId: string;
  title: string;
  desc: string;
  stat: string;
}>;

function ServiceBackgroundMedia({
  service,
  isActive,
}: {
  service: (typeof services)[number];
  isActive: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const [mediaFailed, setMediaFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateHoverCapability = () => setCanHover(mediaQuery.matches);

    updateHoverCapability();
    mediaQuery.addEventListener("change", updateHoverCapability);

    return () => mediaQuery.removeEventListener("change", updateHoverCapability);
  }, []);

  useEffect(() => {
    const element = containerRef.current;

    if (!element || service.mediaType !== "video") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35, rootMargin: "80px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [service.mediaType]);

  const shouldPlayVideo = service.mediaType === "video" && !mediaFailed && (canHover ? isActive : isVisible);

  useEffect(() => {
    if (service.mediaType !== "video") {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!shouldPlayVideo) {
      video.pause();
      if (activeServiceVideo === video) {
        activeServiceVideo = null;
      }
      return;
    }

    if (activeServiceVideo && activeServiceVideo !== video) {
      activeServiceVideo.pause();
    }

    activeServiceVideo = video;
    video.play().catch(() => {
      if (activeServiceVideo === video) {
        activeServiceVideo = null;
      }
    });

    return () => {
      if (activeServiceVideo === video) {
        video.pause();
        activeServiceVideo = null;
      }
    };
  }, [service.mediaType, shouldPlayVideo]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        quality={85}
        className="object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-105"
      />

      {service.mediaType === "image" ? (
        <Image
          src={service.mediaSrc}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={85}
          onError={() => setMediaFailed(true)}
          className={`object-cover object-center transition-[opacity,transform] duration-[1800ms] ease-out group-hover:scale-105 ${
            mediaFailed ? "opacity-0" : "opacity-100"
          }`}
        />
      ) : (
        <video
          ref={videoRef}
          className={`h-full w-full object-cover object-center transition-[opacity,transform] duration-[1800ms] ease-out group-hover:scale-105 ${
            mediaFailed ? "opacity-0" : "opacity-100"
          }`}
          muted
          loop
          playsInline
          preload="metadata"
          poster={service.posterSrc}
          onError={() => setMediaFailed(true)}
          aria-label={`${service.title} arka plan videosu`}
        >
          <source src={service.mediaSrc} type="video/mp4" onError={() => setMediaFailed(true)} />
        </video>
      )}
    </div>
  );
}

export default function ServicesShowcase() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  return (
    <section className="bg-bg-warm py-24" id="hizmetler">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-3xl md:mb-24"
        >
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
            <span className="h-px w-12 bg-brand-gold" />
            Hizmet deneyimi
          </div>
          <h2 className="text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-brand-charcoal md:text-6xl">
            Her sistem, evin içinde başka bir his yaratır.
          </h2>
        </motion.div>

        <div className="space-y-14 md:space-y-24">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                id={service.anchorId}
                key={service.id}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onMouseLeave={() => setActiveServiceId(null)}
                onFocus={() => setActiveServiceId(service.id)}
                onBlur={() => setActiveServiceId(null)}
                className="group relative min-h-[580px] scroll-mt-32 overflow-hidden rounded-[1.5rem] bg-brand-charcoal shadow-[0_24px_70px_rgba(30,34,41,0.14)] sm:min-h-[620px] md:min-h-[720px] md:rounded-[2rem] md:shadow-[0_30px_90px_rgba(30,34,41,0.16)]"
              >
                <ServiceBackgroundMedia service={service} isActive={activeServiceId === service.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/86 via-brand-charcoal/18 to-transparent md:from-brand-charcoal/92 md:via-brand-charcoal/30" />
                <div
                  className={`absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 p-4 sm:p-5 md:gap-8 md:p-10 lg:p-14 ${
                    reverse ? "lg:items-end lg:text-right" : "lg:items-start"
                  }`}
                >
                  <div className="flex w-full max-w-4xl flex-col gap-3 sm:gap-4 md:gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <span className="font-heading text-[64px] font-bold leading-none text-white/16 sm:text-[82px] md:text-[160px] md:text-white/12">
                      {service.id}
                    </span>

                    <div className="glass max-w-[28rem] rounded-[1.35rem] border-white/55 bg-white/82 p-4 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-5 md:max-w-2xl md:rounded-[1.75rem] md:border-white/60 md:bg-white/88 md:p-10 md:shadow-2xl md:shadow-black/15 md:backdrop-blur-2xl">
                      <div className="mb-3 inline-flex rounded-full bg-brand-gold/12 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold md:mb-5 md:px-4 md:py-2 md:text-xs md:tracking-[0.22em]">
                        {service.stat}
                      </div>
                      <h3 className="mb-3 font-heading text-2xl font-bold leading-tight text-brand-charcoal sm:text-[1.7rem] md:mb-5 md:text-5xl">
                        {service.title}
                      </h3>
                      <p className="mb-5 text-sm leading-relaxed text-brand-charcoal/70 sm:text-[15px] md:mb-8 md:text-lg">
                        {service.desc}
                      </p>
                      <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-3 rounded-full bg-brand-charcoal px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold md:gap-4 md:px-6 md:py-3 md:text-base"
                      >
                        Keşif planla
                        <span className="h-px w-7 bg-white/70 transition-all duration-300 group-hover:w-10 md:w-9 md:group-hover:w-12" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
