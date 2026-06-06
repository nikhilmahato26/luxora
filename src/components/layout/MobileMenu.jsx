import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { navLinks, business } from '../../data/siteContent';
import { whatsappLink, telLink } from '../../utils/whatsapp';
import Logo from '../ui/Logo';

/**
 * MobileMenu — full-screen slide-in navigation for small screens.
 */
export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-primary-900/40 backdrop-blur-sm lg:hidden"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-canvas shadow-lift lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="gold-rule mx-6 h-px" />

            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="rounded-2xl px-4 py-3.5 font-display text-xl font-medium text-ink transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto space-y-3 px-6 pb-8">
              <a
                href={whatsappLink('Hi Luxora Holidays! I would like to make a booking.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-white shadow-soft"
              >
                <FaWhatsapp className="h-5 w-5" /> WhatsApp Booking
              </a>
              <a
                href={telLink()}
                className="flex items-center justify-center gap-2 rounded-full bg-green-deep py-3.5 font-semibold text-white shadow-soft"
              >
                <Phone className="h-5 w-5" /> {business.phoneDisplay}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
