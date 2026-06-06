import { formatINR } from '../../utils/whatsapp';

/**
 * PricingCard — a single price tier row (label + price).
 * Used inside CarCard for the duration/km pricing table.
 */
export default function PricingCard({ label, price, highlight = false }) {
  return (
    <div
      className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-colors ${
        highlight
          ? 'bg-primary-50 ring-1 ring-gold/30'
          : 'bg-white/60 ring-1 ring-primary-900/5'
      }`}
    >
      <span className="text-sm font-medium text-primary-900/75">{label}</span>
      <span className="font-display text-lg font-semibold text-primary-700">
        {formatINR(price)}
      </span>
    </div>
  );
}
