import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { fadeUp, viewport } from '../../utils/animations';
import { whatsappLink, packageEnquiry } from '../../utils/whatsapp';

/**
 * PackageCard — large destination card with image zoom and Explore action.
 */
export default function PackageCard({ destination, featured = false }) {
  return (
    <motion.a
      href={whatsappLink(packageEnquiry(destination.name))}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className={`group relative block overflow-hidden rounded-4xl shadow-glass-lg ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className={`relative ${featured ? 'h-full min-h-[22rem]' : 'h-72'}`}>
        <img
          src={destination.image}
          alt={`${destination.name} — Luxora Holidays tour package`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/25 to-transparent" />

        {/* Tag */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass-dark px-3 py-1 text-xs font-semibold text-white">
          <MapPin className="h-3.5 w-3.5 text-gold-light" />
          {destination.tag}
        </span>

        {/* Content */}
        <div className="absolute inset-x-5 bottom-5">
          <h3
            className={`font-display font-semibold text-white drop-shadow ${
              featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
            }`}
          >
            {destination.name}
          </h3>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/80">
            {destination.blurb}
          </p>

          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
            Explore
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-sheen text-primary-900 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}
