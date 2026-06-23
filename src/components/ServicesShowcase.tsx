"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    anchorId: "pvc-pencere",
    title: "Pimapen Pencere Sistemleri",
    desc: "Isı, ses ve güvenlik performansını aynı çerçevede toplayan premium PVC pencere çözümleri. Daha aydınlık, daha sessiz ve daha dengeli yaşam alanları için tasarlanır.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2200&auto=format&fit=crop",
    stat: "6 odacıklı profil",
  },
  {
    id: "02",
    anchorId: "pvc-kapi",
    title: "PVC Kapı Sistemleri",
    desc: "Giriş, balkon ve iç mekan geçişlerinde uzun ömürlü, temiz çizgili ve yüksek sızdırmazlık sağlayan kapı sistemleri.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2200&auto=format&fit=crop",
    stat: "yüksek güvenlik",
  },
  {
    id: "03",
    anchorId: "surgulu-sistemler",
    title: "Sürgülü Sistemler",
    desc: "Geniş açıklıklarda manzarayı kesmeden, mekanları ferahlatan ve günlük kullanımı hafifleten modern sürme çözümleri.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2200&auto=format&fit=crop",
    stat: "geniş görüş alanı",
  },
  {
    id: "04",
    anchorId: "panjur-sistemleri",
    title: "Panjur Sistemleri",
    desc: "Güneş kontrolü, mahremiyet ve ekstra güvenlik için yapıyla bütünleşen otomatik panjur uygulamaları.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2200&auto=format&fit=crop",
    stat: "konforlu kontrol",
  },
  {
    id: "05",
    anchorId: "cam-balkon",
    title: "Cam Balkon Sistemleri",
    desc: "Balkon ve terasları dört mevsim kullanılabilir, aydınlık ve korunaklı yaşam alanlarına dönüştüren cam balkon uygulamaları.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2200&auto=format&fit=crop",
    stat: "dört mevsim konfor",
  },
  {
    id: "06",
    anchorId: "sineklik",
    title: "Sineklik Sistemleri",
    desc: "Temiz hava akışını korurken yaşam alanlarını haşereden ayıran, ince profilli ve kolay kullanılan sineklik çözümleri.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2200&auto=format&fit=crop",
    stat: "temiz hava akışı",
  },
];

export default function ServicesShowcase() {
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
                className="group relative min-h-[620px] scroll-mt-32 overflow-hidden rounded-[2rem] bg-brand-charcoal shadow-[0_30px_90px_rgba(30,34,41,0.16)] md:min-h-[720px]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={85}
                  className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/92 via-brand-charcoal/30 to-transparent" />
                <div
                  className={`absolute inset-x-0 bottom-0 z-10 flex flex-col gap-8 p-6 md:p-10 lg:p-14 ${
                    reverse ? "lg:items-end lg:text-right" : "lg:items-start"
                  }`}
                >
                  <div className="flex w-full max-w-4xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <span className="font-heading text-[104px] font-bold leading-none text-white/12 md:text-[160px]">
                      {service.id}
                    </span>

                    <div className="glass max-w-2xl rounded-[1.75rem] border-white/60 bg-white/88 p-7 shadow-2xl shadow-black/15 backdrop-blur-2xl md:p-10">
                      <div className="mb-5 inline-flex rounded-full bg-brand-gold/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                        {service.stat}
                      </div>
                      <h3 className="mb-5 font-heading text-3xl font-bold leading-tight text-brand-charcoal md:text-5xl">
                        {service.title}
                      </h3>
                      <p className="mb-8 text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
                        {service.desc}
                      </p>
                      <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-4 rounded-full bg-brand-charcoal px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold"
                      >
                        Keşif planla
                        <span className="h-px w-9 bg-white/70 transition-all duration-300 group-hover:w-12" />
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
