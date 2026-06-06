import Hero from '../components/sections/Hero';
import Fleet from '../components/sections/Fleet';
import RentalPackages from '../components/sections/RentalPackages';
import Services from '../components/sections/Services';
import Destinations from '../components/sections/Destinations';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import BookingProcess from '../components/sections/BookingProcess';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';

/**
 * Home — single-page composition of all sections in narrative order.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Fleet />
      <RentalPackages />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <BookingProcess />
      <Testimonials />
      <CTA />
      <Contact />
      <FAQ />
    </>
  );
}
