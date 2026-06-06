import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../../data/siteContent';
import { fadeUp, staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';

/**
 * FAQ — accordion of common questions.
 */
export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section bg-primary-900/[0.02]">
      <div className="container-x">
        <SectionTitle
          eyebrow="Good to Know"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know before booking your ride or tour."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-12 max-w-3xl space-y-4"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                className={`overflow-hidden rounded-3xl transition-all ${
                  isOpen ? 'glass-strong shadow-glass' : 'glass'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-ink">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 bg-gold-sheen text-primary-900'
                        : 'bg-primary-50 text-primary-700'
                    }`}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-primary-900/70">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
