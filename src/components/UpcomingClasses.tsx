import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const CLASSES = [
  { id: 1, date: 'HOY', time: '19:00h', title: 'Manejo del Estrés', location: 'Centro (Malasaña)', locationId: 'centro' },
  { id: 2, date: 'MAÑ', time: '11:00h', title: 'Mente Clara', location: 'Retiro', locationId: 'retiro' },
  { id: 3, date: 'JUE', time: '18:30h', title: 'Compasión Activa', location: 'Centro (Malasaña)', locationId: 'centro' },
  { id: 4, date: 'VIE', time: '19:00h', title: 'Meditación Guiada', location: 'Retiro', locationId: 'retiro' },
];

export default function UpcomingClasses() {
  const [filter, setFilter] = useState('todas');

  const filteredClasses = CLASSES.filter(c => filter === 'todas' || c.locationId === filter).slice(0, 3);

  return (
    <section id="clases" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold text-teal-dark mb-2">Próximas Clases</h2>
          <p className="text-brand-dark/70 font-montserrat font-medium">Encuentra tu momento de paz esta semana.</p>
        </div>
        <a href="#calendario" className="text-teal-medium font-bold uppercase tracking-wider text-sm hover:underline">
          Ver todo el calendario →
        </a>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button 
          onClick={() => setFilter('todas')}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === 'todas' ? 'bg-teal-dark text-white' : 'bg-white text-brand-dark border border-teal-light hover:border-teal-dark'}`}
        >
          Todas las sedes
        </button>
        <button 
          onClick={() => setFilter('centro')}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === 'centro' ? 'bg-teal-dark text-white' : 'bg-white text-brand-dark border border-teal-light hover:border-teal-dark'}`}
        >
          Centro (Malasaña)
        </button>
        <button 
          onClick={() => setFilter('retiro')}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === 'retiro' ? 'bg-teal-dark text-white' : 'bg-white text-brand-dark border border-teal-light hover:border-teal-dark'}`}
        >
          Retiro
        </button>
      </div>

      {/* Class List */}
      <div className="bg-white rounded-lg shadow-sm border border-teal-light/30 overflow-hidden">
        {filteredClasses.map((cls, index) => (
          <div 
            key={cls.id} 
            className={`flex items-center justify-between p-4 sm:p-6 hover:bg-teal-light/10 transition-colors ${index !== filteredClasses.length - 1 ? 'border-b border-teal-light/30' : ''}`}
          >
            <div className="flex items-center gap-4 sm:gap-8 flex-1">
              <div className="text-center min-w-[60px]">
                <div className="text-teal-dark font-extrabold text-sm uppercase tracking-wider">{cls.date}</div>
                <div className="text-brand-dark/70 text-sm font-medium">{cls.time}</div>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl text-brand-dark">{cls.title}</h3>
                <p className="text-brand-dark/60 text-sm font-montserrat font-medium flex items-center gap-1">
                  Sede: {cls.location}
                </p>
              </div>
            </div>
            <button 
              className="ml-4 w-10 h-10 rounded-full bg-white border border-teal-medium flex items-center justify-center text-teal-dark hover:bg-teal-dark hover:text-white transition-colors flex-shrink-0"
              aria-label={`Inscribirse a ${cls.title}`}
            >
              <Plus size={20} strokeWidth={2.5} />
            </button>
          </div>
        ))}
        {filteredClasses.length === 0 && (
          <div className="p-8 text-center text-brand-dark/60 font-montserrat font-medium">
            No hay clases programadas para esta sede actualmente.
          </div>
        )}
      </div>
    </section>
  );
}
