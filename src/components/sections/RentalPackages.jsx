import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fleet } from '../../data/siteContent';
import { formatINR, whatsappLink, vehicleEnquiry } from '../../utils/whatsapp';
import { fadeUp, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';

/**
 * RentalPackages — at-a-glance rate comparison table across the fleet.
 * Complements the detailed Fleet cards for quick comparison shopping.
 */
const ROWS = [
  { key: 0, label: '4 Hours / 40 Km' },
  { key: 1, label: '8 Hours / 80 Km' },
  { key: 2, label: '12 Hours / 120 Km' },
];

export default function RentalPackages() {
  return (
    <section id="packages" className="section bg-primary-900/[0.02]">
      <div className="container-x">
        <SectionTitle
          eyebrow="Transparent Pricing"
          title="Rental Packages"
          highlight="At a Glance"
          subtitle="Clear, all-inclusive hourly rates. No hidden charges, no surge pricing — just honest fares."
        />

        {/* Desktop table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 hidden overflow-hidden rounded-4xl glass-strong shadow-glass-lg md:block"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-green-deep text-white">
                <th className="px-6 py-5 font-display text-base font-semibold">
                  Package
                </th>
                {fleet.map((car) => (
                  <th
                    key={car.id}
                    className="px-6 py-5 text-center font-display text-base font-semibold"
                  >
                    {car.name.replace(' Package', '')}
                    <span className="mt-0.5 block text-xs font-normal text-white/60">
                      {car.seats}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, idx) => (
                <tr
                  key={row.label}
                  className={idx % 2 ? 'bg-white/40' : 'bg-white/70'}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-primary-900/80">
                    {row.label}
                  </td>
                  {fleet.map((car) => (
                    <td
                      key={car.id}
                      className="px-6 py-4 text-center font-display text-lg font-semibold text-primary-700"
                    >
                      {formatINR(car.tiers[row.key].price)}
                    </td>
                  ))}
                </tr>
              ))}
              {/* extra hour row */}
              <tr className="bg-primary-50">
                <td className="px-6 py-4 text-sm font-semibold text-primary-900/80">
                  Extra Hour
                </td>
                {fleet.map((car) => (
                  <td
                    key={car.id}
                    className="px-6 py-4 text-center font-semibold text-gold-dark"
                  >
                    {formatINR(car.extraHour)}
                  </td>
                ))}
              </tr>
              {/* outstation row */}
              <tr className="bg-white/70">
                <td className="px-6 py-4 text-sm font-semibold text-primary-900/80">
                  Outstation (150 Km)
                </td>
                {fleet.map((car) => (
                  <td
                    key={car.id}
                    className="px-6 py-4 text-center font-display text-lg font-semibold text-primary-700"
                  >
                    {formatINR(car.outstation.options[0].price)}
                    <span className="block text-xs font-normal text-primary-900/50">
                      onwards
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Mobile stacked cards */}
        <div className="mt-10 space-y-5 md:hidden">
          {fleet.map((car) => (
            <motion.div
              key={car.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="glass-strong rounded-3xl p-5 shadow-glass"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {car.name.replace(' Package', '')}
                </h3>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                  {car.seats}
                </span>
              </div>
              <dl className="mt-4 space-y-2.5 text-sm">
                {ROWS.map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <dt className="text-primary-900/65">{row.label}</dt>
                    <dd className="font-semibold text-primary-700">
                      {formatINR(car.tiers[row.key].price)}
                    </dd>
                  </div>
                ))}
                <div className="flex justify-between border-t border-primary-900/5 pt-2.5">
                  <dt className="text-primary-900/65">Extra Hour</dt>
                  <dd className="font-semibold text-gold-dark">
                    {formatINR(car.extraHour)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-primary-900/65">Outstation (150 Km)</dt>
                  <dd className="font-semibold text-primary-700">
                    {formatINR(car.outstation.options[0].price)}
                  </dd>
                </div>
              </dl>
              <a
                href={whatsappLink(vehicleEnquiry(car.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-green-deep py-2.5 text-sm font-semibold text-white"
              >
                Book {car.name.replace(' Package', '')}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-900/60"
        >
          {['Toll & parking as actuals', 'Driver allowance included', 'GST extra'].map(
            (item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald" /> {item}
              </span>
            )
          )}
        </motion.p>
      </div>
    </section>
  );
}
