"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Villa Pimapen Uygulaması",
    category: "Özel Proje",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Cam Balkon Uygulaması",
    category: "Dış Mekan",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Apartman Dairesi Yenileme",
    category: "Pencere Sistemleri",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2053&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Geniş Sürgülü Sistemler",
    category: "Mimari Çözüm",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    size: "large"
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-brand-charcoal text-white" id="referanslar">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Uyguladığımız Çözümlerden <span className="text-brand-gold-light">İlham Alın</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-medium">
              Farklı yaşam alanlarında estetik, konfor ve fonksiyonelliği buluşturduğumuz güncel projelerimiz.
            </p>
          </motion.div>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white font-medium hover:border-brand-gold-light hover:text-brand-charcoal hover:bg-brand-gold-light transition-all duration-300"
            >
              Benzer proje için teklif al
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Bounded Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {projects.map((project, idx) => {
            // Layout logic: 
            // Large = takes 8 cols, Small = takes 4 cols
            const isLarge = project.size === "large";
            const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
            
            return (
              <motion.div
                key={idx}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`${colSpan} group relative rounded-3xl overflow-hidden bg-white/5 cursor-pointer`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  quality={85}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-brand-gold-light/20 backdrop-blur-md border border-brand-gold-light/30 text-brand-gold-light text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">
                    {project.category}
                  </div>
                  <div className="flex justify-between items-end">
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-brand-gold-light hover:text-brand-charcoal">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
