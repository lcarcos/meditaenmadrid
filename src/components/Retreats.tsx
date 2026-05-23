import React from 'react';

const RETREATS = [
  {
    id: 1,
    title: 'Silencio en la Sierra',
    date: 'Junio 2026',
    teacher: 'Guen Kelsang Chokga',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    limited: true,
  },
  {
    id: 2,
    title: 'Purificación y Vajrasatva',
    date: 'Julio 2026',
    teacher: 'Guen Kelsang Lochani',
    image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2000&auto=format&fit=crop',
    limited: false,
  },
  {
    id: 3,
    title: 'Meditación Profunda',
    date: 'Agosto 2026',
    teacher: 'Guen Kelsang Chokga',
    image: 'https://images.unsplash.com/photo-1445264618000-f1e069c5920f?q=80&w=2070&auto=format&fit=crop',
    limited: true,
  },
];

export default function Retreats() {
  return (
    <section id="retiros" className="py-20 bg-teal-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold text-teal-dark mb-4">Retiros Destacados</h2>
          <p className="text-brand-dark/70 font-montserrat font-medium max-w-2xl mx-auto text-lg">
            Desconecta del ajetreo de la ciudad y profundiza en tu práctica en un entorno inspirador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RETREATS.map((retreat) => (
            <div key={retreat.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-teal-light/20">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={retreat.image} 
                  alt={retreat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {retreat.limited && (
                  <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-sm shadow-sm">
                    Plazas limitadas
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="text-teal-medium font-bold text-sm uppercase tracking-wider mb-2">{retreat.date}</div>
                <h3 className="font-montserrat font-bold text-2xl text-teal-dark mb-2">{retreat.title}</h3>
                <p className="text-brand-dark/70 font-montserrat font-medium mb-6">Prof. {retreat.teacher}</p>
                
                <a 
                  href={`#retiro-${retreat.id}`}
                  className="mt-auto inline-block text-center border-2 border-teal-dark text-teal-dark hover:bg-teal-dark hover:text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  Más info
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#todos-retiros" className="inline-block text-teal-dark font-bold uppercase tracking-wider text-sm hover:underline">
            Ver programa completo de retiros →
          </a>
        </div>
      </div>
    </section>
  );
}
