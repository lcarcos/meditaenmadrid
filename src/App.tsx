import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Segmentation from './components/Segmentation';
import UpcomingClasses from './components/UpcomingClasses';
import Retreats from './components/Retreats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Segmentation />
        <UpcomingClasses />
        <Retreats />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-teal-light/20 z-40">
        <a
          href="#reservar"
          className="block w-full bg-brand-yellow text-brand-dark text-center py-3 rounded-sm font-bold uppercase tracking-wider shadow-md"
        >
          Reservar Clase
        </a>
      </div>
    </div>
  );
}
