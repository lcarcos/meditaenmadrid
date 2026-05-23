import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="Centro de meditación budista en Madrid"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-teal-dark/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-brand-dark/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          ENCUENTRA LA PAZ INTERIOR <br className="hidden md:block" />
          EN EL CORAZÓN DE MADRID
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 font-montserrat font-medium max-w-2xl mx-auto drop-shadow-md">
          Meditación y budismo moderno para la vida diaria.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#empezar"
            className="w-full sm:w-auto bg-brand-yellow hover:bg-yellow-500 text-brand-dark px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Empezar Hoy
          </a>
          <a
            href="#retiros"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-dark px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Ver Retiros
          </a>
        </div>
      </div>
    </section>
  );
}
