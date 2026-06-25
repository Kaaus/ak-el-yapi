import { blogArticles, type BlogArticle } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": absoluteUrl("/#business"),
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    hasMap: siteConfig.address.mapsUrl,
    areaServed: ["İstanbul", "Esenyurt", "Beylikdüzü", "Avcılar", "Büyükçekmece"],
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    makesOffer: [
      "Pimapen pencere sistemleri",
      "PVC kapı sistemleri",
      "Sürgülü sistemler",
      "Panjur sistemleri",
      "Cam balkon uygulamaları",
      "Sineklik sistemleri",
      "Isı ve ses yalıtımı odaklı pencere yenileme",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "tr-TR",
    publisher: {
      "@id": absoluteUrl("/#business"),
    },
  };
}

export function blogCollectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog#blog"),
    name: "AK-EL Yapı Bilgi Merkezi",
    url: absoluteUrl("/blog"),
    inLanguage: "tr-TR",
    blogPost: blogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      url: absoluteUrl(`/blog/${article.slug}`),
      image: absoluteUrl(article.poster),
    })),
  };
}

export function blogArticleJsonLd(article: BlogArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: absoluteUrl(article.poster),
    url: absoluteUrl(`/blog/${article.slug}`),
    inLanguage: "tr-TR",
    publisher: {
      "@id": absoluteUrl("/#business"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${article.slug}`),
    },
  };
}
