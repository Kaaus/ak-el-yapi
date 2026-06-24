"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const propertyOptions = [
  { value: "Ev", icon: Home, desc: "Daire, villa veya yazlık" },
  { value: "İş yeri", icon: Building2, desc: "Ofis, mağaza veya ticari alan" },
];

const serviceOptions = [
  "Pimapen pencere",
  "PVC kapı",
  "Sürgülü sistem",
  "Panjur sistemi",
  "Cam balkon",
  "Sineklik",
  "Ses yalıtımı",
];

export default function ContactSection() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState("");
  const [form, setForm] = useState({
    propertyType: "",
    service: "",
    phone: "",
    message: "",
  });

  const progress = ((step + 1) / 4) * 100;

  const canContinue =
    (step === 0 && form.propertyType) ||
    (step === 1 && form.service) ||
    (step === 2 && form.phone.trim().length >= 10) ||
    step === 3;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 3) {
      if (canContinue) setStep((current) => current + 1);
      return;
    }
    const whatsappUrl = buildWhatsAppUrl(form);
    setLastWhatsappUrl(whatsappUrl);
    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-white py-24" id="iletisim">
      <div className="absolute right-0 top-0 -z-10 hidden h-full w-1/2 rounded-l-[100px] bg-bg-soft lg:block" />
      <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold"
          >
            <Sparkles size={15} />
            Mini keşif sihirbazı
          </motion.div>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold tracking-tight text-brand-charcoal md:text-5xl"
          >
            Keşif talebinizi birkaç adımda hazırlayalım
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-brand-charcoal/70 md:text-xl"
          >
            Uzun form yerine tek tek ilerleyin. Ekibimiz ihtiyacınızı daha net anlayarak dönüş yapar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="rounded-[1.5rem] border border-brand-gray/50 bg-bg-warm p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-gold shadow-sm">
                <Phone size={24} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-brand-charcoal">Bizi arayın</h3>
              <p className="mb-4 text-sm text-brand-charcoal/60">
                {siteConfig.businessHours.days}: {siteConfig.businessHours.time}
              </p>
              <a href={`tel:${siteConfig.phone}`} className="text-xl font-medium text-brand-charcoal transition-colors hover:text-brand-gold">
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="rounded-[1.5rem] bg-brand-charcoal p-7 shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-gold-light">
                <MessageCircle size={24} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-white">WhatsApp destek</h3>
              <p className="mb-4 text-sm text-white/60">Hızlı teklif ve bilgi almak için yazın</p>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-brand-gold-light transition-colors hover:text-white"
              >
                Mesaj gönder <ArrowRight size={16} />
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-brand-gray/50 bg-bg-warm p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-gold shadow-sm">
                <MapPin size={24} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-brand-charcoal">Adres</h3>
              <p className="text-brand-charcoal/78">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district} / {siteConfig.address.city}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-brand-gray/30 bg-white p-6 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.18)] md:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold">
                  <CheckCircle2 size={42} />
                </div>
                <h3 className="mb-4 font-heading text-3xl font-bold text-brand-charcoal">Keşif talebiniz hazır</h3>
                <p className="max-w-md text-brand-charcoal/68">
                  WhatsApp mesajınız hazırlandı. Pencere açılmadıysa aşağıdaki butonla aynı keşif notunu gönderebilirsiniz.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={lastWhatsappUrl || siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3 font-semibold text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
                  >
                    WhatsApp ile gönder
                    <MessageCircle size={18} />
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(0);
                      setLastWhatsappUrl("");
                      setForm({ propertyType: "", service: "", phone: "", message: "" });
                    }}
                    className="rounded-full bg-brand-charcoal px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-gold hover:text-brand-charcoal"
                  >
                    Yeni talep oluştur
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <div className="mb-3 flex items-center justify-between text-sm font-medium text-brand-charcoal/60">
                    <span>Adım {step + 1} / 4</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-bg-soft">
                    <motion.div
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light"
                    />
                  </div>
                </div>

                <AnimateStep step={step} form={form} setForm={setForm} />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(0, current - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-gray px-5 py-3 font-medium text-brand-charcoal transition-all disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowLeft size={18} />
                    Geri
                  </button>
                  <button
                    type="submit"
                    disabled={!canContinue}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-charcoal px-6 py-3 font-semibold text-white shadow-xl transition-all hover:bg-brand-gold disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {step === 3 ? "Talebi hazırla" : "Devam et"}
                    {step === 3 ? <Send size={18} /> : <ArrowRight size={18} />}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type WizardForm = {
  propertyType: string;
  service: string;
  phone: string;
  message: string;
};

function buildWhatsAppUrl(form: WizardForm) {
  const separator = siteConfig.social.whatsapp.includes("?") ? "&" : "?";
  const message = [
    "Merhaba AK-EL Yapı, keşif talebi oluşturmak istiyorum.",
    `Alan türü: ${form.propertyType || "-"}`,
    `Hizmet: ${form.service || "-"}`,
    `Telefon: ${form.phone || "-"}`,
    `Mesaj: ${form.message || "-"}`,
  ].join("\n");

  return `${siteConfig.social.whatsapp}${separator}text=${encodeURIComponent(message)}`;
}

function AnimateStep({
  step,
  form,
  setForm,
}: {
  step: number;
  form: WizardForm;
  setForm: React.Dispatch<React.SetStateAction<WizardForm>>;
}) {
  return (
    <motion.div
      key={step}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="min-h-[360px]"
    >
      {step === 0 && (
        <div>
          <h3 className="mb-3 font-heading text-3xl font-bold text-brand-charcoal">Alan türü nedir?</h3>
          <p className="mb-8 text-brand-charcoal/64">Ev veya iş yeri seçimi, önerilecek sistemleri belirler.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {propertyOptions.map((option) => {
              const Icon = option.icon;
              const active = form.propertyType === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setForm((current) => ({ ...current, propertyType: option.value }))}
                  className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
                    active
                      ? "border-brand-gold bg-brand-gold/10 shadow-lg shadow-brand-gold/10"
                      : "border-brand-gray/60 bg-bg-soft hover:border-brand-gold/45 hover:bg-white"
                  }`}
                >
                  <Icon size={28} className="mb-8 text-brand-gold" />
                  <div className="font-heading text-2xl font-bold text-brand-charcoal">{option.value}</div>
                  <div className="mt-2 text-sm text-brand-charcoal/58">{option.desc}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="mb-3 font-heading text-3xl font-bold text-brand-charcoal">Hangi hizmet?</h3>
          <p className="mb-8 text-brand-charcoal/64">İhtiyacınızı seçin, keşif notunu buna göre hazırlayalım.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {serviceOptions.map((service) => {
              const active = form.service === service;
              return (
                <button
                  key={service}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setForm((current) => ({ ...current, service }))}
                  className={`rounded-2xl border px-5 py-4 text-left font-semibold transition-all duration-300 ${
                    active
                      ? "border-brand-gold bg-brand-gold/10 text-brand-charcoal"
                      : "border-brand-gray/60 bg-bg-soft text-brand-charcoal/72 hover:border-brand-gold/45 hover:bg-white"
                  }`}
                >
                  {service}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="mb-3 font-heading text-3xl font-bold text-brand-charcoal">Telefon numaranız</h3>
          <p className="mb-8 text-brand-charcoal/64">Keşif için size en hızlı ulaşabileceğimiz numarayı yazın.</p>
          <label htmlFor="wizard-phone" className="mb-2 block text-sm font-medium text-brand-charcoal/72">
            Telefon
          </label>
          <input
            id="wizard-phone"
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            placeholder="0 (5__) ___ __ __"
            className="w-full rounded-2xl border border-brand-gray bg-bg-soft px-5 py-5 text-lg text-brand-charcoal outline-none transition-all focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/35"
          />
          <p className="mt-4 text-sm text-brand-charcoal/50">En az 10 karakter girildiğinde devam edebilirsiniz.</p>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="mb-3 font-heading text-3xl font-bold text-brand-charcoal">Kısa not ekleyin</h3>
          <p className="mb-8 text-brand-charcoal/64">Ölçü, oda sayısı, konum veya beklentinizi birkaç cümleyle yazabilirsiniz.</p>
          <label htmlFor="wizard-message" className="mb-2 block text-sm font-medium text-brand-charcoal/72">
            Mesaj
          </label>
          <textarea
            id="wizard-message"
            rows={6}
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            placeholder="Örn: Salon ve iki oda için Pimapen yenileme düşünüyorum..."
            className="w-full resize-none rounded-2xl border border-brand-gray bg-bg-soft px-5 py-5 text-brand-charcoal outline-none transition-all focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/35"
          />
        </div>
      )}
    </motion.div>
  );
}
