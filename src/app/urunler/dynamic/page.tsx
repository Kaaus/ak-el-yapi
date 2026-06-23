import NirvanaProductDetail from "@/components/NirvanaProductDetail";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Dynamic Sürme - Premium Pimapen Sürme Kapı Sistemi",
  description:
    "Dar alanlarda yer kazandıran, geniş görüş alanı ve konforlu hareket hissi sunan Dynamic Sürme Pimapen kapı ve pencere sistemi.",
  path: "/urunler/dynamic",
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dynamic Sürme Pimapen Kapı Sistemi",
  brand: {
    "@type": "Brand",
    name: "AK-EL Yapı",
  },
  description:
    "Dar alanlarda yer kazandıran, balkon ve teras geçişlerinde konforlu kullanım sağlayan yalıtımlı Pimapen sürme kapı sistemi.",
  image: [
    absoluteUrl("/images/dynamic-showcase-poster.webp"),
  ],
  category: "PVC sürme kapı sistemi",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "TRY",
    url: absoluteUrl("/urunler/dynamic"),
  },
};

export default function DynamicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <NirvanaProductDetail
        series="dynamic"
        phoneDisplay={siteConfig.phoneDisplay}
        phoneHref={`tel:${siteConfig.phone}`}
        whatsappUrl={siteConfig.social.whatsapp}
      />
    </>
  );
}
