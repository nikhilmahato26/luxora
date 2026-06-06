import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { business, fleet } from '../../data/siteContent';
import {
  whatsappLink,
  telLink,
  mailLink,
  mapsLink,
} from '../../utils/whatsapp';
import { fadeUp, slideInLeft, slideInRight, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';

/* Reusable field */
function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-primary-900/75">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs font-medium text-red-500">
          {error.message}
        </span>
      )}
    </label>
  );
}

const inputClass =
  'w-full rounded-2xl border border-primary-900/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-primary-900/40 outline-none transition-all focus:border-gold/60 focus:ring-2 focus:ring-gold/25';

/**
 * Contact — split layout: business info + glass booking form.
 * The form has no backend; on submit it composes a WhatsApp message and opens chat.
 */
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    const message = [
      `*New Booking Enquiry — Luxora Holidays*`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Pickup: ${data.pickup}`,
      `Destination: ${data.destination}`,
      `Travel Date: ${data.date}`,
      `Vehicle: ${data.vehicle}`,
      data.message ? `Message: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    reset();
  };

  const contactItems = [
    { icon: Phone, label: 'Call Us', value: business.phoneDisplay, href: telLink() },
    { icon: Mail, label: 'Email', value: business.email, href: mailLink() },
    {
      icon: MapPin,
      label: 'Visit',
      value: `${business.address.line1}, ${business.address.line2}, ${business.address.region}`,
      href: mapsLink(),
    },
    { icon: Clock, label: 'Hours', value: business.hours },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden">
      <span className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-emerald/5 blur-3xl" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Get in Touch"
          title="Book Your"
          highlight="Premium Ride"
          subtitle="Fill in your trip details and we'll confirm availability instantly over WhatsApp."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-2"
          >
            <div className="glass-strong flex h-full flex-col justify-between rounded-4xl p-7 shadow-glass">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {business.name}
                </h3>
                <p className="mt-2 text-sm text-primary-900/65">
                  {business.tagline}
                </p>

                <ul className="mt-7 space-y-5">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <span className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-deep text-gold-light">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-wider text-primary-900/50">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-sm font-medium text-ink">
                            {item.value}
                          </span>
                        </span>
                      </span>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block transition-opacity hover:opacity-75"
                          >
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href={whatsappLink('Hi Luxora Holidays! I would like to make a booking.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
                >
                  <FaWhatsapp className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href={telLink()}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-deep py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-glass-lg"
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-4xl p-7 shadow-glass sm:p-9">
              {isSubmitSuccessful ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                    Opening WhatsApp…
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-primary-900/65">
                    Your enquiry has been prepared. Send the message and we'll confirm
                    your booking right away.
                  </p>
                </motion.div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" error={errors.name}>
                    <input
                      className={inputClass}
                      placeholder="Your name"
                      {...register('name', { required: 'Please enter your name' })}
                    />
                  </Field>

                  <Field label="Phone" error={errors.phone}>
                    <input
                      className={inputClass}
                      placeholder="10-digit mobile"
                      inputMode="tel"
                      {...register('phone', {
                        required: 'Please enter your phone number',
                        pattern: {
                          value: /^[0-9+\-\s]{10,15}$/,
                          message: 'Enter a valid phone number',
                        },
                      })}
                    />
                  </Field>

                  <Field label="Pickup Location" error={errors.pickup}>
                    <input
                      className={inputClass}
                      placeholder="e.g. Cochin Airport"
                      {...register('pickup', { required: 'Pickup is required' })}
                    />
                  </Field>

                  <Field label="Destination" error={errors.destination}>
                    <input
                      className={inputClass}
                      placeholder="e.g. Munnar"
                      {...register('destination', { required: 'Destination is required' })}
                    />
                  </Field>

                  <Field label="Travel Date" error={errors.date}>
                    <input
                      type="date"
                      className={inputClass}
                      {...register('date', { required: 'Select a travel date' })}
                    />
                  </Field>

                  <Field label="Vehicle Type" error={errors.vehicle}>
                    <select
                      className={inputClass}
                      defaultValue=""
                      {...register('vehicle', { required: 'Choose a vehicle' })}
                    >
                      <option value="" disabled>
                        Select vehicle
                      </option>
                      {fleet.map((car) => (
                        <option key={car.id} value={car.name}>
                          {car.name} ({car.seats})
                        </option>
                      ))}
                      <option value="Urbania Traveller">Urbania Traveller (12–26)</option>
                      <option value="Bus">Bus (36 / 49)</option>
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Message" error={errors.message}>
                      <textarea
                        rows={4}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your trip (optional)"
                        {...register('message')}
                      />
                    </Field>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:col-span-2">
                    <button
                      type="button"
                      onClick={handleSubmit(onSubmit)}
                      className="btn-shimmer animate-shimmer flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-primary-900 shadow-gold transition hover:shadow-glass-lg"
                    >
                      <Send className="h-4 w-4" /> Book Now
                    </button>
                    <a
                      href={whatsappLink('Hi Luxora Holidays! I would like to make a booking.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
                    >
                      <FaWhatsapp className="h-5 w-5" /> WhatsApp
                    </a>
                    <a
                      href={telLink()}
                      className="flex items-center justify-center gap-2 rounded-full bg-green-deep px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:shadow-glass-lg"
                    >
                      <Phone className="h-5 w-5" /> Call
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
