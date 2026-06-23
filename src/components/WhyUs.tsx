"use client";

import { motion } from "framer-motion";
import { Award, UserCheck, Wrench, Clock, ShieldCheck, HeartHandshake, ThumbsUp, Zap } from "lucide-react";

const reasons = [
  { icon: Award, title: "Yetkili Bayi Güvencesi" },
  { icon: UserCheck, title: "İhtiyaca Uygun Yönlendirme" },
  { icon: Wrench, title: "Profesyonel Montaj Ekibi" },
  { icon: Clock, title: "Zamanında Teslimat" },
  { icon: ShieldCheck, title: "Temiz ve Hassas İşçilik" },
  { icon: HeartHandshake, title: "Satış Sonrası Destek" },
  { icon: ThumbsUp, title: "Uzun Ömürlü Çözümler" },
  { icon: Zap, title: "Estetik ve Fonksiyonel Tasarım" }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white" id="hakkimizda">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6 leading-tight">
              Doğru Ürün, <br/>
              <span className="text-brand-gold">Temiz İşçilik,</span> <br/>
              Güvenilir Hizmet.
            </h2>
            <p className="text-brand-charcoal/70 text-lg mb-8 leading-relaxed">
              Pencere ve kapı sistemleri yalnızca bir yapı elemanı değil, yaşam alanınızın konforunu belirleyen en önemli detaylardan biridir. AK-EL Yapı olarak ihtiyacınıza en uygun Pimapen çözümlerini profesyonel montaj kalitesiyle buluşturuyoruz.
            </p>
            <div className="w-20 h-1 bg-brand-charcoal/10 rounded-full" />
          </motion.div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="bg-bg-soft border border-brand-gray/50 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:shadow-brand-gold/5 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-gold mb-4 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-charcoal text-sm leading-snug">
                    {reason.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
