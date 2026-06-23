import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";
import { blogArticles, getBlogArticle } from "@/lib/blog";
import { blogArticleJsonLd } from "@/lib/schema";
import { absoluteUrl, siteConfig } from "@/lib/site";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "Rehber bulunamadı",
    };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: absoluteUrl(`/blog/${article.slug}`),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [
        {
          url: absoluteUrl(article.poster),
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [absoluteUrl(article.poster)],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) notFound();

  const relatedArticles = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-bg-soft pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogArticleJsonLd(article)) }}
      />
      <article className="mx-auto max-w-5xl px-6 pb-20 pt-10 md:pb-28">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal/62 transition-colors hover:text-brand-gold"
        >
          <ArrowLeft size={17} />
          Bilgi merkezine dön
        </Link>

        <header className="mb-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal/52">
              <Clock size={16} />
              {article.readTime} okuma
            </span>
          </div>
          <h1 className="text-balance font-heading text-5xl font-bold leading-tight tracking-tight text-brand-charcoal md:text-7xl">
            {article.title}
          </h1>
          <p className="mt-7 text-xl leading-relaxed text-brand-charcoal/70 md:text-2xl">
            {article.intro}
          </p>
        </header>

        <div className="relative mb-14 h-[360px] overflow-hidden rounded-[2rem] bg-brand-charcoal shadow-[0_24px_80px_rgba(30,34,41,0.18)] md:h-[540px]">
          <LazyVideo
            className="h-full w-full object-cover"
            src={article.video}
            poster={article.poster}
            ariaLabel={article.title}
            decorative={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/42 to-transparent" />
        </div>

        <div className="space-y-10 rounded-[2rem] border border-brand-gray/55 bg-white p-7 shadow-lg shadow-brand-charcoal/5 md:p-12">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-brand-charcoal md:text-3xl">
                {section.title}
              </h2>
              <p className="text-lg leading-relaxed text-brand-charcoal/70">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-brand-charcoal p-8 text-white md:p-10">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold-light">Keşif zamanı</div>
          <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl">
            Mekanınız için doğru sistemi birlikte seçelim.
          </h2>
          <p className="mb-8 max-w-2xl leading-relaxed text-white/70">
            Kısa keşif sihirbazı ile ihtiyacınızı netleştirin, ekibimiz size en uygun çözümü daha hızlı hazırlasın.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-brand-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light"
          >
            Ücretsiz keşif iste
            <ArrowRight size={18} />
          </Link>
        </div>

        <aside className="mt-16">
          <h2 className="mb-6 font-heading text-2xl font-bold text-brand-charcoal">Diğer rehberler</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {relatedArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-2xl border border-brand-gray/55 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
              >
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">{item.category}</div>
                <h3 className="font-heading text-lg font-bold leading-tight text-brand-charcoal">{item.title}</h3>
              </Link>
            ))}
          </div>
        </aside>
      </article>
    </div>
  );
}
