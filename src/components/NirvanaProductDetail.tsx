"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  FileText,
  Layers3,
  Maximize,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  ThermometerSun,
  Volume2,
  Wind,
} from "lucide-react";

type NirvanaProductDetailProps = {
  phoneDisplay: string;
  phoneHref: string;
  series?: ProductSeriesId;
  whatsappUrl: string;
};

type ViewerMode = "model" | "profile";
type ProductTab = "about" | "technical" | "brochure";
type ProductSeriesId = "nirvana" | "carisma" | "dynamic" | "albatros";
type ProductTabContent = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
};

type ProductDetailConfig = {
  id: ProductSeriesId;
  name: string;
  mutedName: string;
  eyebrow: string;
  modelBadge: string;
  modelImage: string;
  modelAlt: string;
  modelPresentation: "image" | "video";
  profilePoster: string;
  profileVideo: string;
  showcaseVideo: string;
  showcasePoster: string;
  metrics: Array<{ label: string; value: string }>;
  features: Array<{ icon: typeof ShieldCheck; label: string }>;
  technicalRows: string[][];
  tabContent: Record<ProductTab, ProductTabContent>;
  brochureTitle: string;
  installTitle: string;
  installText: string;
};

const viewerModes: Array<{
  id: ViewerMode;
  label: string;
  icon: typeof PanelsTopLeft;
}> = [
  { id: "model", label: "Görünüm", icon: PanelsTopLeft },
  { id: "profile", label: "Profil Kesiti", icon: Layers3 },
];

const productTabs: Array<{
  id: ProductTab;
  label: string;
}> = [
  { id: "about", label: "Ürün Hakkında" },
  { id: "technical", label: "Teknik Detay" },
  { id: "brochure", label: "Broşür" },
];

const productDetails = {
  nirvana: {
    id: "nirvana",
    name: "Nirvana",
    mutedName: "Serisi",
    eyebrow: "Üst Segment Seri",
    modelBadge: "360 Model",
    modelImage: "/images/nirvana-360.webp",
    modelAlt: "Nirvana Serisi koyu renk pencere modeli",
    modelPresentation: "image",
    profilePoster: "/images/nirvana-showcase-poster.webp",
    profileVideo: "/videos/nirvana-showcase.mp4",
    showcaseVideo: "/videos/nirvana-showcase.mp4",
    showcasePoster: "/images/nirvana-showcase-poster.webp",
    metrics: [
      { label: "Profil genişliği", value: "80 mm" },
      { label: "Odacık yapısı", value: "6" },
      { label: "Conta sistemi", value: "Üçlü" },
      { label: "Akustik performans", value: "41 dB" },
    ],
    features: [
      { icon: ShieldCheck, label: "Yüksek sızdırmazlık" },
      { icon: ThermometerSun, label: "Dengeli ısı konforu" },
      { icon: Volume2, label: "Sessiz yaşam alanı" },
      { icon: Wind, label: "Kontrollü hava geçişi" },
    ],
    technicalRows: [
      ["Profil genişliği", "80 mm"],
      ["Tasarım", "6 odacıklı premium PVC profil"],
      ["Conta", "Üçlü conta sistemi"],
      ["Cam uyumu", "Isı ve ses yalıtımlı cam kombinasyonları"],
      ["Kullanım alanı", "Konut, villa, ofis ve yoğun şehir cepheleri"],
    ],
    tabContent: {
      about: {
        eyebrow: "Nirvana Premium",
        title: "Isı ve ses performansını tek gövdede toplayan üst segment seri.",
        body:
          "Nirvana Serisi, geniş profil yapısı ve çok odacıklı tasarımıyla yaşam alanlarında daha dengeli ısı, daha sessiz bir atmosfer ve daha net bir dış görünüş hedefler. AK-EL Yapı montaj hassasiyetiyle birleştiğinde ürün sadece pencere değil, evin konfor katmanına dönüşür.",
        bullets: [
          "Şehir gürültüsünü azaltmaya yardımcı akustik yapı",
          "Soğuk yüzey hissini azaltan güçlü profil tasarımı",
          "Modern yapılara uyumlu koyu ve açık renk seçenekleri",
        ],
      },
      technical: {
        eyebrow: "Teknik Detay",
        title: "Detayda güçlü, kullanımda sessiz.",
        body:
          "Profil kesiti, conta hattı ve cam birleşimi aynı performans hikayesinin parçalarıdır. Nirvana, bu üç alanı dengeli biçimde bir araya getirerek uzun ömürlü ve ölçülü bir pencere deneyimi sunar.",
        bullets: [
          "80 mm profil derinliğiyle güçlü gövde hissi",
          "6 odacıklı yapı ile ısı transferine karşı direnç",
          "Üçlü conta sistemi ile daha kontrollü sızdırmazlık",
        ],
      },
      brochure: {
        eyebrow: "Broşür ve Keşif",
        title: "Doğru ürün, doğru ölçü ve doğru montajla netleşir.",
        body:
          "Nirvana Serisi için teknik broşür ve keşif notlarını proje ihtiyacınıza göre paylaşabiliriz. Cephe yönü, cam kombinasyonu ve kullanım alanı birlikte değerlendirildiğinde en doğru teklif ortaya çıkar.",
        bullets: [
          "Keşif sonrası ürün ve cam kombinasyonu önerisi",
          "Proje ölçüsüne göre tekliflendirme",
          "Montaj ve teslim süreci için net planlama",
        ],
      },
    },
    brochureTitle: "Nirvana teknik broşürü",
    installTitle: "Premium ürün, doğru montajla gerçek performansına ulaşır.",
    installText:
      "AK-EL Yapı, keşif aşamasından montaj detayına kadar profil, cam, conta ve duvar birleşimini birlikte ele alır. Bu yaklaşım Nirvana Serisi'nin teknik değerlerini evinizde hissedilen konfora dönüştürür.",
  },
  carisma: {
    id: "carisma",
    name: "Carisma",
    mutedName: "Serisi",
    eyebrow: "Estetik Performans",
    modelBadge: "70 mm Sistem",
    modelImage: "/images/carisma-series.webp",
    modelAlt: "Carisma Serisi kahverengi PVC pencere modeli",
    modelPresentation: "image",
    profilePoster: "/images/nirvana-showcase-poster.webp",
    profileVideo: "/videos/nirvana-showcase.mp4",
    showcaseVideo: "/videos/nirvana-showcase.mp4",
    showcasePoster: "/images/nirvana-showcase-poster.webp",
    metrics: [
      { label: "Profil genişliği", value: "70 mm" },
      { label: "Odacık yapısı", value: "5" },
      { label: "Conta sistemi", value: "TPE" },
      { label: "Tasarım dili", value: "Oval" },
    ],
    features: [
      { icon: ShieldCheck, label: "5 odacıklı tasarım" },
      { icon: ThermometerSun, label: "Dengeli ısı yalıtımı" },
      { icon: Wind, label: "TPE conta ile sızdırmazlık" },
      { icon: Volume2, label: "Konforlu iç mekan hissi" },
    ],
    technicalRows: [
      ["Profil genişliği", "70 mm"],
      ["Tasarım", "5 odacıklı estetik PVC profil"],
      ["Conta", "TPE conta ile güçlü sızdırmazlık"],
      ["Cam uyumu", "Isı ve ses yalıtımlı cam kombinasyonları"],
      ["Kullanım alanı", "Konut, ofis, yenileme ve modern cephe projeleri"],
    ],
    tabContent: {
      about: {
        eyebrow: "Carisma Premium",
        title: "Estetik çizgiyi konforlu yalıtımla birleştiren modern seri.",
        body:
          "Carisma Serisi, oval hatları ve 70 mm profil yapısıyla yaşam alanlarına daha zarif bir pencere dili kazandırır. AK-EL Yapı montaj hassasiyetiyle birleştiğinde hem görünüm hem de günlük kullanım konforu dengeli bir premium deneyime dönüşür.",
        bullets: [
          "Modern yapılara uyum sağlayan oval profil formu",
          "TPE conta yapısıyla kontrollü sızdırmazlık",
          "Kahverengi ve açık renk seçenekleriyle güçlü mimari uyum",
        ],
      },
      technical: {
        eyebrow: "Teknik Detay",
        title: "İnce detaylarda estetik, gövdede güven veren performans.",
        body:
          "Carisma, profil geometrisi, conta hattı ve cam birleşimini dengeli bir sistem olarak ele alır. Bu yapı özellikle yenileme projelerinde estetik görünümden vazgeçmeden ısı ve ses konforunu artırmayı hedefler.",
        bullets: [
          "70 mm profil genişliğiyle dengeli gövde yapısı",
          "5 odacıklı tasarım ile kontrollü ısı geçişi",
          "TPE conta sistemi ile uzun ömürlü kullanım hissi",
        ],
      },
      brochure: {
        eyebrow: "Broşür ve Keşif",
        title: "Renk, cam ve ölçü detayları projeye göre netleşir.",
        body:
          "Carisma Serisi için doğru renk, cam kombinasyonu ve montaj detayı keşif sırasında birlikte değerlendirilir. Böylece pencere yalnızca ölçüye göre değil, mekandaki ışık, cephe yönü ve kullanım alışkanlıklarına göre seçilir.",
        bullets: [
          "Keşif sonrası renk ve cam kombinasyonu önerisi",
          "Mevcut doğrama yenilemeleri için net ölçülendirme",
          "Montaj ve teslim süreci için planlı ilerleme",
        ],
      },
    },
    brochureTitle: "Carisma teknik broşürü",
    installTitle: "Estetik seri, doğru montajla kalıcı konfora dönüşür.",
    installText:
      "AK-EL Yapı, Carisma Serisi'nde profil seçimini, cam yapısını ve montaj birleşimlerini birlikte değerlendirir. Bu yaklaşım ürünün estetik çizgisini günlük yaşamda hissedilen yalıtım ve kullanım konforuyla tamamlar.",
  },
  dynamic: {
    id: "dynamic",
    name: "Dynamic",
    mutedName: "Sürme",
    eyebrow: "Konforlu Sürme Sistemi",
    modelBadge: "Sürme Sistem",
    modelImage: "/images/dynamic-showcase-poster.webp",
    modelAlt: "Dynamic Sürme siyah çerçeveli sürme kapı sistemi",
    modelPresentation: "video",
    profilePoster: "/images/nirvana-showcase-poster.webp",
    profileVideo: "/videos/nirvana-showcase.mp4",
    showcaseVideo: "/videos/dynamic-showcase.mp4",
    showcasePoster: "/images/dynamic-showcase-poster.webp",
    metrics: [
      { label: "Sistem tipi", value: "Sürme" },
      { label: "Kullanım hissi", value: "Yumuşak" },
      { label: "Alan avantajı", value: "Yüksek" },
      { label: "Sızdırmazlık", value: "Güçlü" },
    ],
    features: [
      { icon: SlidersHorizontal, label: "Yumuşak hareket" },
      { icon: Maximize, label: "Geniş geçiş alanı" },
      { icon: ShieldCheck, label: "Güçlü kilit ve conta hattı" },
      { icon: Wind, label: "Kontrollü hava geçişi" },
    ],
    technicalRows: [
      ["Sistem tipi", "Yalıtımlı PVC sürme kapı ve pencere sistemi"],
      ["Kullanım", "Dar alanlarda yer kazandıran yatay hareket"],
      ["Yalıtım", "Doğru cam ve montajla ısı/ses konforu"],
      ["Donanım", "Yumuşak hareket hissi veren sürme mekanizması"],
      ["Kullanım alanı", "Balkon, teras, salon çıkışı ve geçiş alanları"],
    ],
    tabContent: {
      about: {
        eyebrow: "Dynamic Sürme",
        title: "Dar alanlarda ferah geçiş hissi veren konforlu sürme sistem.",
        body:
          "Dynamic Sürme, kapı kanadının yaşam alanına doğru açılmadığı projelerde daha rahat kullanım sağlar. Balkon, teras ve salon geçişlerinde geniş görüş alanını korurken mekan içinde daha düzenli, daha sakin ve daha kullanışlı bir akış oluşturur.",
        bullets: [
          "Dar mekanlarda açılır kanat payı gerektirmeyen kullanım",
          "Geniş cam yüzeyiyle daha ferah iç mekan hissi",
          "AK-EL Yapı montajıyla dengeli sızdırmazlık ve konfor",
        ],
      },
      technical: {
        eyebrow: "Teknik Detay",
        title: "Sürme hareketini günlük kullanımda sessiz ve kontrollü hale getirir.",
        body:
          "Dynamic, sürme rayı, kanat dengesi, cam seçimi ve montaj birleşimi birlikte doğru uygulandığında uzun ömürlü ve konforlu bir geçiş deneyimi sunar. Sistem özellikle alan kazanımı ve pratik kullanım ihtiyacında öne çıkar.",
        bullets: [
          "Yatay hareketle mekan içinde daha verimli kullanım",
          "Doğru cam kombinasyonuyla ısı ve ses konforu",
          "Profesyonel montajla güçlenen conta ve ray performansı",
        ],
      },
      brochure: {
        eyebrow: "Broşür ve Keşif",
        title: "Geçiş ölçüsü ve kullanım alışkanlığı sürme sistem seçiminde belirleyicidir.",
        body:
          "Dynamic Sürme için doğru kanat ölçüsü, cam yapısı ve ray detayı keşif sırasında netleşir. Böylece ürün yalnızca ölçüye değil, mekanın günlük kullanım akışına göre planlanır.",
        bullets: [
          "Balkon ve teras geçişleri için ölçü değerlendirmesi",
          "Cam ve renk kombinasyonu önerisi",
          "Montaj günü için net uygulama planı",
        ],
      },
    },
    brochureTitle: "Dynamic Sürme teknik broşürü",
    installTitle: "Sürme sistemlerde performans, ray ve montaj hassasiyetiyle belirginleşir.",
    installText:
      "AK-EL Yapı, Dynamic Sürme uygulamalarında ölçü, ray hattı, kanat dengesi ve cam seçimini birlikte değerlendirir. Bu yaklaşım sürme hareketini yalnızca görsel değil, günlük kullanımda hissedilen bir konfor unsuruna dönüştürür.",
  },
  albatros: {
    id: "albatros",
    name: "Albatros",
    mutedName: "Sürme",
    eyebrow: "Maksimum Cam Yüzeyi",
    modelBadge: "Geniş Açılım",
    modelImage: "/images/albatros-showcase-poster.webp",
    modelAlt: "Albatros Sürme geniş cam yüzeyli sürme kapı sistemi",
    modelPresentation: "video",
    profilePoster: "/images/nirvana-showcase-poster.webp",
    profileVideo: "/videos/nirvana-showcase.mp4",
    showcaseVideo: "/videos/albatros-showcase.mp4",
    showcasePoster: "/images/albatros-showcase-poster.webp",
    metrics: [
      { label: "Sistem tipi", value: "Sürme" },
      { label: "Cam yüzeyi", value: "Maks." },
      { label: "Geçiş hissi", value: "Ferah" },
      { label: "Mimari uyum", value: "Premium" },
    ],
    features: [
      { icon: Maximize, label: "Kesintisiz manzara" },
      { icon: Wind, label: "Eşik hissi düşük kullanım" },
      { icon: SlidersHorizontal, label: "Kolay hareket" },
      { icon: ShieldCheck, label: "Güvenli sürme yapı" },
    ],
    technicalRows: [
      ["Sistem tipi", "Geniş açıklıklar için premium sürme sistem"],
      ["Tasarım", "Maksimum cam yüzeyi ve ince çerçeve hissi"],
      ["Kullanım", "Teras, bahçe, kış bahçesi ve villa geçişleri"],
      ["Konfor", "Doğru camla ısı ve ses yalıtımı desteği"],
      ["Montaj odağı", "Ray terazisi, kanat dengesi ve sızdırmazlık hattı"],
    ],
    tabContent: {
      about: {
        eyebrow: "Albatros Premium",
        title: "Mekanı dışarıyla bütünleştiren geniş cam yüzeyli sürme seri.",
        body:
          "Albatros Sürme, geniş açıklıklarda manzarayı bölmeden iç ve dış alan arasında daha akıcı bir bağ kurar. Villa, teras ve bahçe geçişlerinde büyük cam yüzeyi sayesinde daha aydınlık, daha ferah ve daha premium bir yaşam hissi oluşturur.",
        bullets: [
          "Geniş açıklıklar için daha güçlü panoramik görünüm",
          "İç ve dış mekan arasında daha akıcı geçiş deneyimi",
          "Modern yapılarda sade, güçlü ve premium cephe etkisi",
        ],
      },
      technical: {
        eyebrow: "Teknik Detay",
        title: "Büyük açıklıklarda konforu taşıyan dengeli sürme yapı.",
        body:
          "Albatros, geniş cam yüzeyi, ray dengesi ve kanat taşıma hissiyle standart sürme çözümlerden daha premium bir kullanım hedefler. Doğru ölçülendirme ve montajla birlikte ürün, manzara etkisini konforla birleştirir.",
        bullets: [
          "Geniş açıklıklarda yüksek görsel süreklilik",
          "Ray ve kanat dengesiyle kontrollü hareket",
          "Cam seçimiyle güçlenen ısı ve ses konforu",
        ],
      },
      brochure: {
        eyebrow: "Broşür ve Keşif",
        title: "Büyük sürme sistemlerde ölçü ve montaj planı kritik önemdedir.",
        body:
          "Albatros Sürme için açıklık ölçüsü, zemin terazisi, cam ağırlığı ve kullanım senaryosu birlikte değerlendirilir. Bu değerlendirme sonunda hem estetik hem de uzun ömürlü kullanım için doğru sistem kurgulanır.",
        bullets: [
          "Geniş açıklıklar için yerinde keşif ve teknik ölçülendirme",
          "Cam, renk ve aksesuar kombinasyonu önerisi",
          "Montaj öncesi zemin ve ray hattı kontrolü",
        ],
      },
    },
    brochureTitle: "Albatros Sürme teknik broşürü",
    installTitle: "Geniş cam yüzeylerde premium his, hassas montajla ortaya çıkar.",
    installText:
      "AK-EL Yapı, Albatros Sürme projelerinde ray terazisi, kanat taşıma dengesi, cam kombinasyonu ve sızdırmazlık hattını birlikte ele alır. Böylece büyük açıklıklar yalnızca şık görünmez, günlük kullanımda da güvenli ve konforlu hissedilir.",
  },
} satisfies Record<ProductSeriesId, ProductDetailConfig>;

export default function NirvanaProductDetail({
  phoneDisplay,
  phoneHref,
  series = "nirvana",
  whatsappUrl,
}: NirvanaProductDetailProps) {
  const [viewerMode, setViewerMode] = useState<ViewerMode>("model");
  const [activeTab, setActiveTab] = useState<ProductTab>("about");
  const shouldReduceMotion = useReducedMotion();
  const product = productDetails[series];
  const activeContent = product.tabContent[activeTab];

  return (
    <main className="relative overflow-hidden bg-[#edf1ef] text-brand-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.98),transparent_34%),radial-gradient(circle_at_84%_12%,rgba(164,151,116,0.16),transparent_30%),linear-gradient(180deg,#f8f8f5_0%,#eef2f1_48%,#e1e8e7_100%)]" />
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(24,28,35,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(24,28,35,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-1/2 top-0 h-72 w-[72rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

      <section className="relative mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-32 lg:pb-24 lg:pt-36">
        <Link
          href="/urunler"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-brand-charcoal"
        >
          <ArrowLeft size={18} />
          Ürünlere dön
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <motion.section
            initial={false}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/80 bg-white/[0.72] shadow-[0_32px_90px_rgba(31,41,55,0.16)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_26%,rgba(255,255,255,0.96),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(226,232,232,0.58)_58%,rgba(206,216,216,0.62))]" />
            <div className="absolute inset-x-8 top-28 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
            <div className="absolute inset-y-14 right-14 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="relative z-10 flex h-full min-h-[620px] flex-col">
              <div className="flex items-start justify-between gap-4 p-6 md:p-8">
                <div>
                  <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#8f835f]">
                    <span className="h-px w-10 bg-[#8f835f]" />
                    {product.eyebrow}
                  </div>
                  <h1 className="font-heading text-5xl font-bold leading-none tracking-tight text-brand-charcoal md:text-7xl">
                    {product.name}{" "}
                    <span className="block text-slate-400/80">{product.mutedName}</span>
                  </h1>
                </div>

                <div className="hidden rounded-full border border-slate-300/70 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur-xl md:block">
                  {product.modelBadge}
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-center px-4 pb-3">
                <div className="absolute inset-x-12 bottom-20 h-24 rounded-full bg-slate-400/[0.24] blur-3xl" />
                <div className="absolute bottom-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                <div className="relative h-[390px] w-full md:h-[430px]">
                  <motion.div
                    aria-hidden={viewerMode !== "model"}
                    initial={false}
                    animate={{
                      opacity: viewerMode === "model" ? 1 : 0,
                      scale: viewerMode === "model" ? 1 : 0.98,
                      x: viewerMode === "model" ? 0 : -20,
                    }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.25, 1, 0.5, 1] }}
                    className="pointer-events-none absolute inset-0"
                  >
                    {product.modelPresentation === "video" ? (
                      <>
                        <NirvanaViewerVideo
                          active={viewerMode === "model"}
                          poster={product.showcasePoster}
                          src={product.showcaseVideo}
                          className="absolute inset-0 h-full w-full object-contain bg-white p-2 opacity-[0.98] contrast-[1.04] saturate-[0.98] md:p-3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/28 via-transparent to-white/10" />
                      </>
                    ) : (
                      <>
                        <NirvanaViewerVideo
                          active={viewerMode === "model"}
                          poster={product.profilePoster}
                          src={product.profileVideo}
                          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-[0.16] mix-blend-multiply saturate-0"
                        />
                        <Image
                          src={product.modelImage}
                          alt={product.modelAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={90}
                          className="object-contain drop-shadow-[0_46px_82px_rgba(51,65,85,0.34)]"
                        />
                      </>
                    )}
                  </motion.div>

                  <motion.div
                    aria-hidden={viewerMode !== "profile"}
                    initial={false}
                    animate={{
                      opacity: viewerMode === "profile" ? 1 : 0,
                      scale: viewerMode === "profile" ? 1 : 0.98,
                      x: viewerMode === "profile" ? 0 : 20,
                    }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.25, 1, 0.5, 1] }}
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.6rem] border border-white/90 bg-white/[0.78] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_22px_60px_rgba(51,65,85,0.14)]"
                  >
                    <NirvanaViewerVideo
                      active={viewerMode === "profile"}
                      poster={product.profilePoster}
                      src={product.profileVideo}
                      className="absolute inset-0 h-full w-full object-contain bg-white p-2 opacity-[0.98] contrast-[1.04] saturate-[0.96] md:p-3"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/34 via-transparent to-white/12" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/72 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur-xl">
                      Hareketli Kesit
                    </div>
                  </motion.div>
                </div>
              </div>
 
              <div className="relative z-20 px-6 pb-6 md:px-8 md:pb-8">
                <div className="mx-auto mb-6 flex w-fit overflow-hidden rounded-full border border-slate-300/70 bg-white/[0.76] p-1.5 shadow-[0_18px_45px_rgba(51,65,85,0.16)] backdrop-blur-2xl">
                  {viewerModes.map((mode) => {
                    const Icon = mode.icon;
                    const isActive = viewerMode === mode.id;
 
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setViewerMode(mode.id)}
                        className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-brand-charcoal text-white shadow-lg"
                            : "text-slate-600 hover:bg-white hover:text-brand-charcoal"
                        }`}
                      >
                        <Icon size={18} />
                        {mode.label}
                      </button>
                    );
                  })}
                </div>
 
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {product.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/80 bg-white/[0.64] p-4 shadow-sm backdrop-blur-xl">
                      <div className="text-2xl font-bold text-brand-charcoal">{metric.value}</div>
                      <div className="mt-1 text-xs font-medium text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
          <motion.aside
            initial={false}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/[0.72] p-6 shadow-[0_32px_90px_rgba(31,41,55,0.14)] backdrop-blur-2xl md:p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.42)_46%,transparent)]" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#dfe8e7]/80 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label={`${product.name} ürün bilgileri`}>
                {productTabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      id={`${product.id}-tab-${tab.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`${product.id}-panel-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={`min-h-11 cursor-pointer rounded-full px-5 text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-brand-charcoal text-white shadow-xl shadow-slate-900/15"
                          : "border border-slate-300/70 bg-white/[0.66] text-slate-600 hover:border-slate-400/80 hover:bg-white hover:text-brand-charcoal"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  id={`${product.id}-panel-${activeTab}`}
                  role="tabpanel"
                  aria-labelledby={`${product.id}-tab-${activeTab}`}
                  initial={false}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#8f835f]">
                    <span className="h-px w-10 bg-[#8f835f]" />
                    {activeContent.eyebrow}
                  </div>
                  <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-brand-charcoal md:text-5xl">
                    {activeContent.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    {activeContent.body}
                  </p>

                  <div className="mt-8 space-y-3">
                    {activeContent.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/90 bg-white/[0.68] p-4 shadow-sm">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#a49774] text-white">
                          <Check size={14} />
                        </span>
                        <span className="text-sm font-medium leading-relaxed text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  {activeTab === "technical" ? (
                    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
                      {product.technicalRows.map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[0.9fr_1.1fr] gap-4 border-b border-slate-200/90 bg-white/[0.62] px-4 py-3 last:border-b-0">
                          <span className="text-sm font-medium text-slate-500">{label}</span>
                          <span className="text-sm font-semibold text-slate-800">{value}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {activeTab === "brochure" ? (
                    <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white/[0.68] p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-charcoal text-white">
                          <FileText size={22} />
                        </div>
                        <div>
                          <div className="font-bold text-brand-charcoal">{product.brochureTitle}</div>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            Projenize uygun cam, renk ve ölçü notlarıyla birlikte paylaşalım.
                          </p>
                        </div>
                      </div>
                      <Link
                        href="/iletisim"
                        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-charcoal px-5 text-sm font-bold text-white transition-colors hover:bg-[#a49774]"
                      >
                        <Download size={17} />
                        Broşür talep et
                      </Link>
                    </div>
                  ) : null}
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-charcoal px-5 font-bold text-white shadow-xl shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-[#a49774]"
                >
                  Teklif Al
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/[0.62] px-5 font-bold text-brand-charcoal transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
                >
                  <MessageCircle size={18} />
                  WhatsApp ile Sor
                </a>
              </div>

              <a
                href={phoneHref}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-charcoal"
              >
                <Phone size={16} />
                {phoneDisplay}
              </a>
            </div>
          </motion.aside>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          {product.features.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="rounded-[1.5rem] border border-white/80 bg-white/[0.64] p-5 shadow-[0_18px_48px_rgba(51,65,85,0.1)] backdrop-blur-xl">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-brand-charcoal text-white">
                  <Icon size={21} />
                </div>
                <div className="text-base font-bold text-brand-charcoal">{item.label}</div>
              </div>
            );
          })}
        </section>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-white/80 bg-white/[0.64] p-6 shadow-[0_24px_70px_rgba(51,65,85,0.12)] backdrop-blur-xl md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#8f835f]">
                <span className="h-px w-10 bg-[#8f835f]" />
                Montaj Hassasiyeti
              </div>
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal md:text-4xl">
                {product.installTitle}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600">
              {product.installText}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

function NirvanaViewerVideo({
  active,
  className,
  poster,
  src,
}: {
  active: boolean;
  className: string;
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
      preload={active ? "metadata" : "none"}
      poster={poster}
      aria-hidden="true"
    >
      {active ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
