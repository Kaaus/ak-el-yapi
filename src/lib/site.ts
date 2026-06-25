import type { Metadata } from "next";

export const siteConfig = {
  name: "AK-EL Yapı",
  shortName: "AK-EL Yapı",
  title: "AK-EL Yapı - Premium Pimapen ve Cam Balkon Sistemleri",
  description:
    "İstanbul'da premium Pimapen, PVC kapı, sürgülü sistem, panjur ve cam balkon çözümleri. Isı ve ses yalıtımı güçlü, profesyonel montajlı yaşam alanları.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://akelyapi.com.tr",
  locale: "tr_TR",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+905332480380",
  phoneDisplay: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY ?? "+90 533 248 03 80",
  businessHours: {
    days: "Pzt - Cmt",
    time: "08:30 - 19:00",
  },
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@akelyapi.com.tr",
  address: {
    full:
      process.env.NEXT_PUBLIC_ADDRESS_FULL ??
      "Yenikent Mahallesi 604. Sokak No: 4/6 Dükkan 4, Esenyurt / İstanbul, Türkiye 34500",
    street:
      process.env.NEXT_PUBLIC_ADDRESS_STREET ??
      "Yenikent Mahallesi 604. Sokak No: 4/6 Dükkan 4",
    district: process.env.NEXT_PUBLIC_ADDRESS_DISTRICT ?? "Esenyurt",
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY ?? "İstanbul",
    country: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY ?? "Türkiye",
    postalCode: process.env.NEXT_PUBLIC_ADDRESS_POSTAL_CODE ?? "34500",
    mapsUrl:
      process.env.NEXT_PUBLIC_MAPS_URL ??
      "https://www.google.com/maps/search/?api=1&query=Yenikent%20Mahallesi%20604.%20Sokak%20No%3A%204%2F6%20D%C3%BCkkan%204%2C%20Esenyurt%20%C4%B0stanbul%20T%C3%BCrkiye%2034500",
  },
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://www.instagram.com/akelyapi55?igsh=YW45eGI2MGx0ZTl2",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/akelyapi",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/905332480380",
  },
};

export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/hizmetler", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/surec", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/urunler", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/urunler/nirvana", priority: 0.82, changeFrequency: "monthly" as const },
  { path: "/urunler/carisma", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/urunler/dynamic", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/urunler/albatros", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/referanslar", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/kurumsal", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iletisim", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/gizlilik-politikasi", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/kullanim-kosullari", priority: 0.35, changeFrequency: "yearly" as const },
];

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const safePath = path.startsWith("/") ? path : `/${path}`;

  return `${base}${safePath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
