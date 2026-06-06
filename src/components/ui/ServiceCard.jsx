import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animations';
import { getIcon } from '../../utils/iconMap';

/**
 * ServiceCard — premium icon card. `icon` is a lucide-react icon name (string).
 */
export default function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group glass relative flex flex-col overflow-hidden rounded-3xl p-6"
    >
      {/* hover glow */}
      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-deep text-gold-light shadow-soft transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-7 w-7" strokeWidth={1.6} />
      </span>

      <h3 className="mt-5 font-display text-xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-900/65">
        {service.description}
      </p>

      {service.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700 ring-1 ring-gold/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
