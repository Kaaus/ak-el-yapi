"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";
import { blogArticles } from "@/lib/blog";

export default function BlogPreview() {
  return (
    <section className="bg-bg-soft py-24" id="blog">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              <BookOpen size={16} />
              Bilgi merkezi
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-charcoal md:text-5xl">
              Karar vermeden önce bilinmesi gerekenler
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-charcoal/70">
              SEO için güçlü başlıklar, kullanıcı için kısa ve güven veren rehberler.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-medium text-brand-gold transition-colors hover:text-brand-charcoal"
            >
              Tüm rehberleri incele
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {blogArticles.map((article, idx) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              className="group overflow-hidden rounded-[1.5rem] border border-brand-gray/50 bg-white shadow-lg shadow-brand-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-gold/10"
            >
              <div className="relative h-56 overflow-hidden">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    quality={85}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/52 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-gold shadow-sm backdrop-blur-sm">
                  {article.category}
                </div>
              </div>

              <div className="p-7">
                <h3 className="mb-3 font-heading text-xl font-bold leading-tight text-brand-charcoal transition-colors group-hover:text-brand-gold">
                  {article.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-brand-charcoal/68">{article.description}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal transition-colors group-hover:text-brand-gold"
                >
                  Detaylı incele
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
