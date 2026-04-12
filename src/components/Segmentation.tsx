import React from 'react';
import { Flower2, Bell } from 'lucide-react';

export default function Segmentation() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto -mt-24 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Soy Nuevo Card */}
        <a 
          href="#nuevo" 
          className="group bg-white border-2 border-teal-light/30 rounded-lg p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-teal-light/20 flex items-center justify-center mb-6 group-hover:bg-teal-light/40 transition-colors">
            <Flower2 className="text-teal-dark" size={32} strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-montserrat font-bold text-teal-dark mb-3 uppercase tracking-wide">Soy Nuevo</h2>
          <p className="text-brand-dark/80 mb-6 font-montserrat font-medium text-lg">
            Aprende desde cero.<br />Sin experiencia previa.
          </p>
          <span className="mt-auto text-teal-medium font-bold uppercase tracking-wider text-sm flex items-center group-hover:gap-2 transition-all">
            Comenzar aquí <span className="ml-1">→</span>
          </span>
        </a>

        {/* Ya Soy Miembro Card */}
        <a 
          href="#miembro" 
          className="group bg-teal-light/10 border-2 border-teal-medium/30 rounded-lg p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-teal-medium/20 flex items-center justify-center mb-6 group-hover:bg-teal-medium/30 transition-colors">
            <Bell className="text-teal-dark" size={32} strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-montserrat font-bold text-teal-dark mb-3 uppercase tracking-wide">Ya Soy Miembro</h2>
          <p className="text-brand-dark/80 mb-6 font-montserrat font-medium text-lg">
            Agenda, preces y<br />retiros exclusivos.
          </p>
          <span className="mt-auto text-teal-dark font-bold uppercase tracking-wider text-sm flex items-center group-hover:gap-2 transition-all">
            Mi espacio <span className="ml-1">→</span>
          </span>
        </a>

      </div>
    </section>
  );
}
