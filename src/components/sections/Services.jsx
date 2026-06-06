import { motion } from 'framer-motion';
import { services } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

/**
 * Services — premium icon cards covering the full service line-up.
 */
export default function Services() {
  return (
    <section id="services" className="section bg-primary-900/[0.02]">
      <div className="container-x">
        <SectionTitle
          eyebrow="What We Offer"
          title="Travel Services for"
          highlight="Every Journey"
          subtitle="From a quick airport transfer to a full group tour across Kerala — we have the right vehicle and the right plan."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
