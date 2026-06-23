export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  video: string;
  poster: string;
  readTime: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "pimapen-secerken-dikkat-edilmesi-gerekenler",
    title: "Pimapen seçerken dikkat edilmesi gerekenler",
    category: "Satın alma rehberi",
    description:
      "Profil odacığı, conta yapısı, cam kombinasyonu ve montaj kalitesi kararın en kritik parçalarıdır.",
    image: "/images/blog-pimapen-guide-poster.jpg",
    video: "/videos/blog-pimapen-guide.mp4",
    poster: "/images/blog-pimapen-guide-poster.jpg",
    readTime: "4 dk",
    intro:
      "Doğru Pimapen seçimi sadece profil markasına bakarak yapılmaz. Pencerenin performansı; profil, cam, aksesuar, ölçü ve montajın birlikte çalışmasıyla ortaya çıkar.",
    sections: [
      {
        title: "Profil yapısını tek başına değerlendirmeyin",
        body:
          "Odacık sayısı, profil et kalınlığı ve conta sistemi ısı kaybı ile ses geçişini doğrudan etkiler. Ancak yüksek performans için profilin doğru camla ve doğru montaj detayıyla tamamlanması gerekir.",
      },
      {
        title: "Cam kombinasyonu konforu belirler",
        body:
          "Çift cam, ısı kontrollü cam veya ses yalıtımı odaklı cam seçenekleri yaşam alanının ihtiyacına göre seçilmelidir. Trafiğe bakan cephe ile sakin cephe aynı çözümü gerektirmez.",
      },
      {
        title: "Montaj kalitesi sistemi görünmez şekilde taşır",
        body:
          "Ölçü, terazileme, köpükleme, sızdırmazlık ve son ayarlar doğru yapılmadığında en iyi sistem bile beklenen verimi vermez. Bu yüzden keşif ve uygulama ekibi ürün kadar önemlidir.",
      },
    ],
  },
  {
    slug: "ses-yalitimi-saglayan-pencere-sistemleri",
    title: "Ses yalıtımı sağlayan pencere sistemleri",
    category: "Akustik konfor",
    description:
      "Yoğun şehir yaşamında doğru cam ve profil seçimiyle evin iç sesi tamamen değişebilir.",
    image: "/images/blog-sound-insulation-poster.jpg",
    video: "/videos/blog-sound-insulation.mp4",
    poster: "/images/blog-sound-insulation-poster.jpg",
    readTime: "3 dk",
    intro:
      "Ses yalıtımı, yalnızca daha kalın cam kullanmak değildir. Gürültünün geliş yönü, cephe açıklığı, conta sürekliliği ve pencere ayarı aynı hikayenin parçalarıdır.",
    sections: [
      {
        title: "Gürültü kaynağı doğru okunmalı",
        body:
          "Trafik, okul, atölye veya komşu kaynaklı sesler farklı frekanslarda rahatsızlık verir. Bu yüzden çözüm, mekanın gerçek gürültü profiline göre seçilmelidir.",
      },
      {
        title: "Conta ve kapanma basıncı kritik rol oynar",
        body:
          "Ses çoğu zaman küçük açıklıklardan içeri sızar. Kanat ayarı, conta sürekliliği ve aksesuar kalitesi akustik konforun temelini oluşturur.",
      },
      {
        title: "Cam ve profil birlikte düşünülmeli",
        body:
          "Lamine veya farklı kalınlıklarda cam kombinasyonları, doğru profil yapısıyla birleştiğinde şehir gürültüsünü hissedilir şekilde azaltır.",
      },
    ],
  },
  {
    slug: "isi-yalitimi-nasil-artirilir",
    title: "Isı yalıtımı nasıl artırılır",
    category: "Enerji tasarrufu",
    description:
      "Pencere sistemi, montaj detayı ve sızdırmazlık birlikte çalıştığında fatura avantajı görünür olur.",
    image: "/images/blog-thermal-insulation-poster.jpg",
    video: "/videos/blog-thermal-insulation.mp4",
    poster: "/images/blog-thermal-insulation-poster.jpg",
    readTime: "4 dk",
    intro:
      "Isı kaybı çoğu evde pencere çevresinde hissedilir. Doğru sistem ve temiz montaj, sıcaklığı içeride tutarken evin konforunu daha dengeli hale getirir.",
    sections: [
      {
        title: "Sızdırmazlık küçük detaylarla başlar",
        body:
          "Kasa-duvar birleşimi, kanat baskısı ve conta yüzeyleri sıcaklık farkını belirgin şekilde etkiler. Doğru uygulama, soğuk yüzey hissini azaltır.",
      },
      {
        title: "Cam seçimi enerji performansını büyütür",
        body:
          "Isı kontrollü cam kombinasyonları kışın sıcaklığı içeride tutmaya, yazın ise güneş etkisini yönetmeye yardımcı olur.",
      },
      {
        title: "Keşif, doğru sistemi seçmenin merkezidir",
        body:
          "Cephe yönü, oda kullanımı, mevcut doğrama durumu ve kullanıcı beklentisi ölçülmeden yapılan seçimler gereksiz maliyet veya düşük performans doğurabilir.",
      },
    ],
  },
  {
    slug: "pvc-pencere-avantajlari",
    title: "PVC pencere avantajları",
    category: "Malzeme bilgisi",
    description:
      "PVC sistemler bakım kolaylığı, uzun ömür ve yüksek yalıtım performansını tek gövdede toplar.",
    image: "/images/blog-pvc-advantages-poster.jpg",
    video: "/videos/blog-pvc-advantages.mp4",
    poster: "/images/blog-pvc-advantages-poster.jpg",
    readTime: "3 dk",
    intro:
      "PVC pencere sistemleri, modern yapılarda konfor, bakım kolaylığı ve uzun ömür beklentisini dengeli şekilde karşılayan çözümler sunar.",
    sections: [
      {
        title: "Bakım kolaylığı günlük hayatı rahatlatır",
        body:
          "PVC yüzeyler düzenli boya gerektirmez, kolay temizlenir ve uzun süre formunu korur. Bu da özellikle yoğun kullanılan yaşam alanlarında avantaj sağlar.",
      },
      {
        title: "Yalıtım performansı ekonomik fayda üretir",
        body:
          "Doğru profille uygulanan PVC sistemler ısı ve ses yalıtımına katkı sağlayarak hem konforu hem de enerji verimliliğini destekler.",
      },
      {
        title: "Tasarım seçenekleri yapıya uyum sağlar",
        body:
          "Farklı açılım tipleri, renk seçenekleri ve aksesuar alternatifleri sayesinde PVC sistemler hem klasik hem modern yapılara rahatça uyarlanabilir.",
      },
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
