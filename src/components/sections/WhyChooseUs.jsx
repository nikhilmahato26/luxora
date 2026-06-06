import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import FeatureCard from '../ui/FeatureCard';

/**
 * WhyChooseUs — premium glass feature cards.
 */
export default function WhyChooseUs() {
  return (
    <section id="why" className="section relative overflow-hidden">
      {/* decorative gradient orb */}
      <span className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" />
      <span className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Why Luxora"
          title="The Luxora"
          highlight="Difference"
          subtitle="A premium travel partner you can rely on — every ride, every time."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
