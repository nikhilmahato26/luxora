import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animations';

/**
 * SectionTitle — eyebrow + display heading + optional subtitle, centred or left.
 */
export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] ${
            light ? 'text-gold-light' : 'text-gold-dark'
          }`}
        >
          <span className="h-px w-6 bg-gold/60" />
          {eyebrow}
          <span className="h-px w-6 bg-gold/60" />
        </span>
      )}

      <h2
        className={`mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.85rem] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}{' '}
        {highlight && <span className="text-gold-gradient italic">{highlight}</span>}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/75' : 'text-primary-900/65'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
