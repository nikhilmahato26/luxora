import { motion } from 'framer-motion';
import { bookingProcess } from '../../data/siteContent';
import { fadeUp, staggerContainer, viewport } from '../../utils/animations';
import { getIcon, iconMap } from '../../utils/iconMap';
import SectionTitle from '../ui/SectionTitle';

/**
 * BookingProcess — animated 4-step timeline (Choose → Contact → Confirm → Enjoy).
 */
export default function BookingProcess() {
  return (
    <section id="process" className="section bg-green-deep relative overflow-hidden">
      {/* texture */}
      <span className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />
      <span className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="How It Works"
          title="Booking in"
          highlight="Four Easy Steps"
          subtitle="From choosing your vehicle to enjoying the journey — getting on the road with Luxora is effortless."
          light
        />

        <motion.div
          variants={staggerContainer(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mt-16 grid gap-10 md:grid-cols-4"
        >
          {/* connecting line (desktop) */}
          <span className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />

          {bookingProcess.map((item) => {
            const Icon = getIcon(item.icon, iconMap.Circle);
            return (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gold-sheen text-primary-900 shadow-gold">
                  <Icon className="h-8 w-8" strokeWidth={1.6} />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-primary-700 shadow">
                    {item.step}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-white/65">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
