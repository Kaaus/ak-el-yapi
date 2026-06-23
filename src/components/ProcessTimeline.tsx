"use client";

import { motion } from "framer-motion";
import { ClipboardList, Ruler, CheckSquare, Wrench, ThumbsUp } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Ücretsiz Keşif Talebi",
    desc: "Bize ulaşarak ücretsiz keşif ve teklif talebinizi oluşturursunuz."
  },
  {
    id: 2,
    icon: Ruler,
    title: "Yerinde Ölçü ve İhtiyaç Analizi",
    desc: "Uzman ekibimiz adresinize gelerek net ölçüleri alır ve ihtiyaçlarınızı belirler."
  },
  {
    id: 3,
    icon: CheckSquare,
    title: "Ürün ve Sistem Seçimi",
    desc: "Evinize en uygun Pimapen profillerini, cam tiplerini ve renkleri birlikte seçeriz."
  },
  {
    id: 4,
    icon: Wrench,
    title: "Profesyonel Montaj",
    desc: "Deneyimli ustalarımız belirlenen günde temiz ve eksiksiz montajı gerçekleştirir."
  },
  {
    id: 5,
    icon: ThumbsUp,
    title: "Teslim, Kontrol ve Destek",
    desc: "Son kontroller yapılır, garantili ürünleriniz teslim edilir ve satış sonrası desteğimiz başlar."
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-bg-warm" id="surec">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6"
          >
            Keşiften Montaja <br className="hidden sm:block"/>
            <span className="text-brand-gold">Şeffaf Süreç</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-charcoal/70 text-lg md:text-xl font-medium"
          >
            Hayalinizdeki konfora ulaşmanız için her adımı planlıyor, şeffaf ve profesyonel bir hizmet sunuyoruz.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-gray -translate-x-1/2 rounded-full" />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              const Icon = step.icon;
              
              return (
                <div key={step.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot (Desktop) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-bg-warm shadow-xl items-center justify-center text-brand-gold z-10"
                  >
                    <span className="font-heading font-bold text-xl">{step.id}</span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                  >
                    <div className="glass bg-white/70 p-8 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 group relative overflow-hidden border border-brand-gray/50">
                      {/* Mobile Step Indicator */}
                      <span className="md:hidden absolute top-6 right-6 font-heading font-bold text-5xl text-brand-charcoal/5 pointer-events-none">
                        0{step.id}
                      </span>

                      <div className="w-14 h-14 rounded-2xl bg-bg-soft flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-sm">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      
                      <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">
                        {step.title}
                      </h3>
                      <p className="text-brand-charcoal/70 leading-relaxed text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
