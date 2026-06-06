import { motion } from 'framer-motion';
import { fleet } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import CarCard from '../ui/CarCard';

/**
 * Fleet — premium vehicle cards with tiered pricing.
 */
export default function Fleet() {
  return (
    <section id="fleet" className="section relative">
      {/* soft background accent */}
      <span className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-emerald/5 blur-3xl" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Premium Fleet"
          title="Choose Your"
          highlight="Perfect Ride"
          subtitle="Immaculately maintained vehicles with transparent, all-inclusive pricing — from budget sedans to spacious 7-seaters."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {fleet.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
