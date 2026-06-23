import NirvanaProductDetail from "@/components/NirvanaProductDetail";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Carisma Serisi - Estetik Pimapen Pencere Sistemi",
  description:
    "70 mm profil genişliği, 5 odacıklı yapı, TPE conta sistemi ve modern oval hatlarıyla Carisma Serisi estetik Pimapen pencere sistemi.",
  path: "/urunler/carisma",
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Carisma Serisi Pimapen Pencere Sistemi",
  brand: {
    "@type": "Brand",
    name: "AK-EL Yapı",
  },
  description:
    "70 mm profil genişliği, 5 odacıklı tasarım, TPE conta sistemi ve modern oval hatlarıyla estetik Pimapen pencere sistemi.",
  image: [
    absoluteUrl("/images/carisma-series.webp"),
    absoluteUrl("/images/nirvana-showcase-poster.webp"),
  ],
  category: "PVC pencere sistemi",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "TRY",
    url: absoluteUrl("/urunler/carisma"),
  },
};

export default function CarismaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <NirvanaProductDetail
        series="carisma"
        phoneDisplay={siteConfig.phoneDisplay}
        phoneHref={`tel:${siteConfig.phone}`}
        whatsappUrl={siteConfig.social.whatsapp}
      />
    </>
  );
}
