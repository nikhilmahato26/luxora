import { motion } from 'framer-motion';
import { Users, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { fadeUp, viewport } from '../../utils/animations';
import {
  whatsappLink,
  telLink,
  vehicleEnquiry,
  formatINR,
} from '../../utils/whatsapp';
import PricingCard from './PricingCard';

/**
 * CarCard — luxury fleet card with image, pricing table, outstation rates,
 * and Book / WhatsApp actions.
 */
export default function CarCard({ car }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="group glass-strong relative flex flex-col overflow-hidden rounded-4xl shadow-glass-lg"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.name} — Luxora Holidays Kerala cab rental`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/10 to-transparent" />

        {/* Badge */}
        {car.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-gold-sheen px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-primary-900 shadow-gold">
            {car.badge}
          </span>
        )}

        {/* Name + seats */}
        <div className="absolute inset-x-5 bottom-4 text-white">
          <h3 className="font-display text-2xl font-semibold drop-shadow">
            {car.name}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-white/85">
            <Users className="h-4 w-4 text-gold-light" />
            {car.seats}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-primary-900/65">
          {car.subtitle}
        </p>

        {/* Pricing tiers */}
        <div className="mt-5 space-y-2.5">
          {car.tiers.map((tier, i) => (
            <PricingCard
              key={tier.label}
              label={tier.label}
              price={tier.price}
              highlight={i === 1}
            />
          ))}
        </div>

        {/* Extra hour */}
        <div className="mt-3 flex items-center justify-between rounded-2xl border border-dashed border-gold/40 px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-900/60">
            Extra Hour
          </span>
          <span className="font-display font-semibold text-gold-dark">
            {formatINR(car.extraHour)}
          </span>
        </div>

        {/* Outstation */}
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-900/55">
            {car.outstation.note}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {car.outstation.options.map((opt) => (
              <span
                key={opt.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-700"
              >
                {opt.label}
                <span className="font-semibold text-gold-dark">
                  {formatINR(opt.price)}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3 pt-2">
          <a
            href={whatsappLink(vehicleEnquiry(car.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-deep px-4 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glass-lg"
          >
            Book Now
          </a>
          <a
            href={whatsappLink(vehicleEnquiry(car.name))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp about ${car.name}`}
            className="flex items-center justify-center rounded-full bg-[#25D366] px-4 text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:brightness-105"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>
          <a
            href={telLink()}
            aria-label={`Call about ${car.name}`}
            className="flex items-center justify-center rounded-full bg-primary-50 px-4 text-primary-700 ring-1 ring-primary-700/15 transition-all duration-300 hover:bg-primary-100"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
