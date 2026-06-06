import { business } from '../data/siteContent';

/**
 * Build a WhatsApp click-to-chat URL with a prefilled message.
 * @param {string} message - prefilled text
 * @returns {string} wa.me URL
 */
export function whatsappLink(message = '') {
  const base = `https://wa.me/${business.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** tel: link for the business phone */
export function telLink() {
  return `tel:${business.phone}`;
}

/** mailto: link for the business email */
export function mailLink(subject = 'Booking enquiry — Luxora Holidays') {
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}`;
}

/** Google Maps directions link */
export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;
}

/** Format a number as Indian Rupees, e.g. 1600 -> ₹1,600 */
export function formatINR(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

/** Prebuilt WhatsApp message for a specific vehicle */
export function vehicleEnquiry(vehicleName) {
  return `Hi Luxora Holidays! I'd like to book the ${vehicleName}. Could you share availability and details?`;
}

/** Prebuilt WhatsApp message for a destination package */
export function packageEnquiry(destination) {
  return `Hi Luxora Holidays! I'm interested in a Kerala tour package for ${destination}. Please share details.`;
}
