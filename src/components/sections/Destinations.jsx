import { motion } from 'framer-motion';
import { destinations } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import PackageCard from '../ui/PackageCard';

/**
 * Destinations — Kerala tour packages in a bento-style grid.
 * The first destination is rendered "featured" (spans 2x2).
 */
export default function Destinations() {
  const [featured, ...rest] = destinations;

  return (
    <section id="destinations" className="section relative">
      <span className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Destinations"
          title="Where Will Luxora"
          highlight="Take You?"
          subtitle="From misty hill stations to serene backwaters and golden beaches — explore India's finest destinations with Luxora."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid auto-rows-[18rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <PackageCard destination={featured} featured />
          {rest.map((d) => (
            <PackageCard key={d.name} destination={d} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
