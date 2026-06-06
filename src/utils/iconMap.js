/**
 * iconMap.js
 * Curated registry of only the lucide-react icons referenced via string names
 * in siteContent.js. Importing named icons (instead of `import * as Icons`)
 * lets Vite tree-shake the rest of the library, keeping the bundle lean.
 *
 * If you add a new icon name in siteContent.js, import + register it here.
 */
import {
  // services
  Plane,
  Camera,
  Bus,
  BusFront,
  Car,
  Users,
  Briefcase,
  UsersRound,
  // why choose us
  Crown,
  Sparkles,
  BadgeCheck,
  IndianRupee,
  Heart,
  MapPin,
  CheckCircle2,
  // booking process
  CarFront,
  PhoneCall,
  CalendarCheck,
  PartyPopper,
  Circle,
} from 'lucide-react';

export const iconMap = {
  Plane,
  Camera,
  Bus,
  BusFront,
  Car,
  Users,
  Briefcase,
  UsersRound,
  Crown,
  Sparkles,
  BadgeCheck,
  IndianRupee,
  Heart,
  MapPin,
  CheckCircle2,
  CarFront,
  PhoneCall,
  CalendarCheck,
  PartyPopper,
  Circle,
};

/** Resolve an icon by name with a sensible fallback. */
export function getIcon(name, fallback = Sparkles) {
  return iconMap[name] || fallback;
}
