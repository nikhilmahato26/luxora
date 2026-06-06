import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animations';

/**
 * GlassCard — frosted glass surface with optional hover lift + gold edge glow.
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  animate = true,
  strong = false,
  ...props
}) {
  const base = `relative rounded-3xl ${
    strong ? 'glass-strong' : 'glass'
  } shadow-glass ${className}`;

  const hoverProps = hover
    ? { whileHover: { y: -8 }, transition: { type: 'spring', stiffness: 260, damping: 22 } }
    : {};

  const revealProps = animate
    ? { variants: fadeUp, initial: 'hidden', whileInView: 'show', viewport }
    : {};

  return (
    <motion.div className={base} {...hoverProps} {...revealProps} {...props}>
      {/* subtle gold top hairline */}
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {children}
    </motion.div>
  );
}
