"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

const Instagram = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-heading font-bold text-3xl tracking-tight text-white">
                AK-EL <span className="text-brand-gold-light">Yapı</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">
                Premium Sistemler
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              AK-EL Yapı, Pimapen pencere ve kapı sistemlerinde kaliteli ürün, profesyonel montaj ve güvenilir hizmet anlayışıyla yaşam alanlarınıza değer katar.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold-light hover:text-brand-charcoal transition-colors">
                <Instagram size={18} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold-light hover:text-brand-charcoal transition-colors">
                <Facebook size={18} />
              </a>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold-light hover:text-brand-charcoal transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Hızlı Menü</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-brand-gold-light transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/kurumsal" className="hover:text-brand-gold-light transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hizmetler" className="hover:text-brand-gold-light transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/surec" className="hover:text-brand-gold-light transition-colors">Süreç</Link></li>
              <li><Link href="/referanslar" className="hover:text-brand-gold-light transition-colors">Projeler</Link></li>
              <li><Link href="/blog" className="hover:text-brand-gold-light transition-colors">Bilgi Merkezi</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Ürün Kategorileri</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/hizmetler#pvc-pencere" className="hover:text-brand-gold-light transition-colors">Pimapen Pencere Sistemleri</Link></li>
              <li><Link href="/hizmetler#pvc-kapi" className="hover:text-brand-gold-light transition-colors">PVC Kapı Sistemleri</Link></li>
              <li><Link href="/hizmetler#surgulu-sistemler" className="hover:text-brand-gold-light transition-colors">Sürgülü Sistemler</Link></li>
              <li><Link href="/hizmetler#panjur-sistemleri" className="hover:text-brand-gold-light transition-colors">Otomatik Panjur Sistemleri</Link></li>
              <li><Link href="/hizmetler#cam-balkon" className="hover:text-brand-gold-light transition-colors">Cam Balkon Uygulamaları</Link></li>
              <li><Link href="/hizmetler#sineklik" className="hover:text-brand-gold-light transition-colors">Sineklik Sistemleri</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold-light flex-shrink-0 mt-1" />
                <span>{siteConfig.address.street} {siteConfig.address.district} / {siteConfig.address.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold-light flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-gold-light transition-colors">{siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold-light flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-gold-light transition-colors">{siteConfig.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} AK-EL Yapı. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
