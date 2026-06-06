import { motion } from 'framer-motion';

/**
 * Button — primary brand button with variants.
 * variants: 'gold' | 'green' | 'outline' | 'glass' | 'whatsapp'
 * Renders as <a> when `href` is given, otherwise <button>.
 */
const VARIANTS = {
  gold:
    'btn-shimmer animate-shimmer text-primary-900 shadow-gold hover:shadow-glass-lg',
  green:
    'bg-green-deep text-white shadow-soft hover:shadow-glass-lg',
  outline:
    'bg-transparent text-primary-700 ring-1 ring-primary-700/40 hover:ring-primary-700/60 hover:bg-primary-50',
  glass:
    'glass-strong text-primary-700 hover:shadow-glass-lg',
  whatsapp:
    'bg-[#25D366] text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.6)] hover:brightness-105',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  href,
  icon: Icon,
  iconRight,
  className = '',
  ...props
}) {
  const classes = `group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ${
    VARIANTS[variant] || VARIANTS.gold
  } ${SIZES[size]} ${className}`;

  const content = (
    <>
      {Icon && !iconRight && (
        <Icon className="h-[1.1em] w-[1.1em] transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconRight && (
        <Icon className="h-[1.1em] w-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
