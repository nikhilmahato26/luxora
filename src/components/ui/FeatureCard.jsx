import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animations';
import { getIcon } from '../../utils/iconMap';

/**
 * FeatureCard — compact glass card with icon for the "Why Choose Us" grid.
 */
export default function FeatureCard({ feature }) {
  const Icon = getIcon(feature.icon);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group glass-strong relative flex items-start gap-4 rounded-3xl p-5"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-sheen text-primary-900 shadow-gold transition-transform duration-300 group-hover:rotate-6">
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <div>
        <h3 className="font-display text-lg font-semibold text-ink">
          {feature.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-primary-900/65">
          {feature.text}
        </p>
      </div>
    </motion.div>
  );
}
