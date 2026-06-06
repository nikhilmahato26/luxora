import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { hero, business } from '../../data/siteContent';
import { whatsappLink } from '../../utils/whatsapp';
import { useCountUp } from '../../hooks/useCountUp';
import Button from '../ui/Button';

/* Animated stat counter */
function Stat({ stat }) {
  const [value, ref] = useCountUp(stat.value, { decimals: stat.decimals || 0 });
  const display =
    stat.value >= 1000 ? value.toLocaleString('en-IN') : value;
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
        {display}
        <span className="text-gold-light">{stat.suffix}</span>
      </div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-wider text-white/65">
        {stat.label}
      </div>
    </div>
  );
}

/* Decorative floating palm leaf */
function PalmLeaf({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      className={`pointer-events-none absolute text-emerald-soft/40 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      aria-hidden="true"
    >
      <path
        d="M60 110 C60 70 40 30 8 14 C44 20 58 44 60 70 C62 44 76 20 112 14 C80 30 60 70 60 110Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image with parallax-ish zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={hero.background}
          alt="Kerala backwaters at sunset"
          className="h-full w-full object-cover"
        />
        {/* layered overlays for legibility + brand tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-900/55 to-primary-700/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
      </motion.div>

      {/* Floating palm leaves */}
      <PalmLeaf className="left-[6%] top-[18%] h-24 w-24 animate-float-slow" delay={0.4} />
      <PalmLeaf className="right-[8%] top-[24%] h-32 w-32 rotate-45 animate-float" delay={0.7} />
      <PalmLeaf className="bottom-[14%] left-[12%] h-16 w-16 -rotate-12 animate-float" delay={1} />

      {/* Content */}
      <div className="container-x relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {hero.titleLine1}
            <br />
            <span className="text-gold-gradient italic">{hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="#fleet" variant="gold" size="lg" icon={ArrowRight} iconRight>
              Book Your Ride
            </Button>
            <Button href="#packages" variant="glass" size="lg">
              Explore Packages
            </Button>
            <Button
              href={whatsappLink('Hi Luxora Holidays! I would like to make a booking.')}
              variant="whatsapp"
              size="lg"
              icon={FaWhatsapp}
            >
              WhatsApp Booking
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {hero.trustBadges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-white/85"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-sheen text-primary-900">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Floating stats glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl glass-dark sm:grid-cols-4"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-5">
              <Stat stat={stat} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-gold-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
