import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    text: "Desde que medito en el centro, mi ansiedad ha desaparecido y duermo mucho mejor. Es un oasis en medio de Madrid.",
    author: "María T.",
    role: "Alumna desde 2022",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "Las enseñanzas son increíblemente prácticas. He aprendido a mantener la calma en el trabajo y a disfrutar más de mi familia.",
    author: "Carlos R.",
    role: "Alumno desde 2023",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "Los retiros me han cambiado la vida. Es el lugar perfecto para desconectar y encontrar respuestas profundas.",
    author: "Elena S.",
    role: "Alumna desde 2021",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold text-teal-dark mb-16 text-center">Lo que dicen nuestros alumnos</h2>
      
      <div className="relative min-h-[400px] md:min-h-[250px]">
        {TESTIMONIALS.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`absolute inset-0 transition-opacity duration-500 flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-teal-light/30 shadow-lg">
              <img 
                src={testimonial.image} 
                alt={testimonial.author} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="font-montserrat font-medium text-xl md:text-2xl text-brand-dark leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-bold text-teal-dark text-lg uppercase tracking-wide">{testimonial.author}</div>
                <div className="text-brand-dark/60 font-medium">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-8 md:mt-12">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-teal-dark' : 'bg-teal-light/50 hover:bg-teal-medium'
            }`}
            aria-label={`Ver testimonio ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
