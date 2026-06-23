import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";
import { blogArticles } from "@/lib/blog";
import { blogCollectionJsonLd } from "@/lib/schema";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Bilgi Merkezi - Pimapen Rehberleri",
  description:
    "Pimapen seçimi, ses yalıtımı, ısı yalıtımı ve PVC pencere avantajları hakkında kısa, net ve güven veren AK-EL Yapı rehberleri.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="bg-bg-soft pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionJsonLd()) }}
      />
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pb-28">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
            <BookOpen size={16} />
            Bilgi merkezi
          </div>
          <h1 className="text-balance font-heading text-5xl font-bold leading-tight tracking-tight text-brand-charcoal md:text-7xl">
            Kararınızı kolaylaştıran kısa rehberler.
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-brand-charcoal/70 md:text-xl">
            Pimapen ve yalıtım kararlarında teknik detayları sadeleştiriyoruz. Her rehber, keşif öncesi daha doğru soru sormanız için hazırlandı.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogArticles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-[1.75rem] border border-brand-gray/55 bg-white shadow-lg shadow-brand-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-gold/10"
            >
              <div className="relative h-72 overflow-hidden">
                {article.video ? (
                  <LazyVideo
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={article.video}
                    poster={article.poster}
                  />
                ) : (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/65 via-brand-charcoal/8 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-brand-gold shadow-sm backdrop-blur-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-7 md:p-9">
                <div className="mb-4 text-sm font-semibold text-brand-charcoal/50">{article.readTime} okuma</div>
                <h2 className="mb-4 font-heading text-2xl font-bold leading-tight text-brand-charcoal transition-colors group-hover:text-brand-gold md:text-3xl">
                  {article.title}
                </h2>
                <p className="mb-8 leading-relaxed text-brand-charcoal/68">{article.description}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-brand-charcoal transition-colors group-hover:text-brand-gold"
                >
                  Detaylı incele
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
