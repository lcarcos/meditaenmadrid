import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-32 sm:pt-36 md:pt-40 pb-32 sm:pb-40 md:pb-44 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="Centro de meditación budista en Madrid"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-teal-dark/45 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-brand-dark/35"></div>
        {/* Subtle bottom gradient to blend gracefully with section below */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto my-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-white mb-6 leading-[1.15] drop-shadow-lg tracking-tight">
          ENCUENTRA LA PAZ INTERIOR <br className="hidden md:block" />
          EN EL CORAZÓN DE MADRID
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-white/95 mb-10 font-montserrat font-medium max-w-2xl mx-auto drop-shadow-md">
          Meditación y budismo moderno para la vida diaria.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="#empezar"
            className="w-full sm:w-auto bg-brand-yellow hover:bg-yellow-500 text-brand-dark px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-xl text-center"
          >
            Empezar Hoy
          </a>
          <a
            href="#retiros"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-dark px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-xl text-center backdrop-blur-xs"
          >
            Ver Retiros
          </a>
        </div>
      </div>
    </section>
  );
}
