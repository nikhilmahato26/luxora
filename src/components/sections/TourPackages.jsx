import { motion } from 'framer-motion';
import { tourPackages } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import TourPackageCard from '../ui/TourPackageCard';

export default function TourPackages() {
  return (
    <section id="tour-packages" className="section relative">
      <span className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Our Packages"
          title="Handcrafted Tours"
          highlight="Across India"
          subtitle="From Kerala's misty hills and serene backwaters to the iconic Taj Mahal and Charminar — explore India's finest destinations with expert-planned itineraries and premium transport."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tourPackages.map((pkg) => (
            <TourPackageCard key={pkg.id} pkg={pkg} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
