import { motion } from 'framer-motion';
import { Check, MapPin, Clock, MessageCircle } from 'lucide-react';
import { fadeUp, viewport } from '../../utils/animations';
import { whatsappLink, tourPackageEnquiry, formatINR } from '../../utils/whatsapp';

export default function TourPackageCard({ pkg }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="group flex flex-col overflow-hidden rounded-3xl glass-strong shadow-glass hover:shadow-glass-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-52 flex-none overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.name} — Luxora Holidays`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />

        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full glass-dark px-2.5 py-1 text-xs font-semibold text-white">
          <MapPin className="h-3 w-3 text-gold-light" />
          {pkg.tag}
        </span>

        {pkg.duration && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold-sheen/90 px-2.5 py-1 text-xs font-semibold text-primary-900">
            <Clock className="h-3 w-3" />
            {pkg.duration}
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-light/80">
            {pkg.region}
          </p>
          <h3 className="font-display text-lg font-bold leading-tight text-white drop-shadow">
            {pkg.name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <ul className="flex-1 space-y-1.5">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-primary-900/70">
              <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-emerald" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mt-4 rounded-2xl bg-primary-50/70 p-3">
          <div className="grid grid-cols-3 divide-x divide-primary-900/10">
            {pkg.pricing.map((tier) => (
              <div key={tier.label} className="px-2 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-900/50">
                  {tier.label}
                </p>
                {tier.sublabel && (
                  <p className="text-[9px] text-primary-900/40">{tier.sublabel}</p>
                )}
                <p className="mt-1 font-display text-sm font-bold text-primary-700">
                  {formatINR(tier.total)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <a
          href={whatsappLink(tourPackageEnquiry(pkg.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-green-deep py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          Book on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
