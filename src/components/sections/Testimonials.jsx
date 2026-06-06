import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/siteContent';
import SectionTitle from '../ui/SectionTitle';

import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Testimonials — luxury review cards in an auto-playing Swiper slider.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="section relative overflow-hidden">
      <span className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Loved by Travellers"
          title="What Our Guests"
          highlight="Say"
          subtitle="Real stories from families, business travellers and explorers who chose Luxora."
        />
      </div>

      <div className="container-x relative mt-14">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto">
              <div className="glass-strong flex h-full flex-col rounded-4xl p-7 shadow-glass">
                <Quote className="h-9 w-9 text-gold/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-primary-900/75">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-primary-900/5 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-deep font-display text-lg font-semibold text-gold-light">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-primary-900/55">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper pagination bullet theming */}
      <style>{`
        #testimonials .swiper-pagination-bullet {
          background: #14532d;
          opacity: 0.25;
        }
        #testimonials .swiper-pagination-bullet-active {
          background: #d4af37;
          opacity: 1;
          width: 22px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
