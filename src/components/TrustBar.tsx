"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, EarOff, Clock } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Yetkili Satış Bayisi",
    desc: "Orijinal ve garantili ürünler",
  },
  {
    icon: Wrench,
    title: "Profesyonel Montaj",
    desc: "Eksiksiz ve temiz işçilik",
  },
  {
    icon: EarOff,
    title: "Isı ve Ses Yalıtımı",
    desc: "Maksimum enerji verimliliği",
  },
  {
    icon: Clock,
    title: "Uzun Ömürlü Kullanım",
    desc: "Yıllara meydan okuyan kalite",
  },
];

type TrustBarProps = {
  lifted?: boolean;
};

export default function TrustBar({ lifted = true }: TrustBarProps) {
  return (
    <section
      className={`relative z-30 mx-auto mb-20 max-w-7xl px-6 md:mb-32 ${
        lifted ? "-mt-16 md:-mt-24" : "pt-10 md:pt-16"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={lifted ? { opacity: 0, y: 20, scale: 0.98 } : false}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.52, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="glass bg-white/70 p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white transition-colors duration-300 group shadow-lg shadow-black/5 will-change-transform"
            >
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-brand-charcoal text-lg">{item.title}</h3>
                <p className="text-sm text-brand-charcoal/60 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
