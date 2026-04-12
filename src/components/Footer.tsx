import React from 'react';
import { MapPin, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Logo & Tagline */}
          <div>
            <h3 className="font-montserrat text-2xl font-extrabold text-white mb-4 tracking-wide">
              MEDITA EN <span className="text-teal-light">MADRID</span>
            </h3>
            <p className="font-montserrat font-medium text-sm leading-relaxed mb-6">
              Centro de meditación budista Kadampa. Un espacio para encontrar paz interior y desarrollar una mente compasiva en la ciudad.
            </p>
          </div>

          {/* Col 2: Address */}
          <div>
            <h4 className="font-bold text-brand-yellow uppercase tracking-wider text-sm mb-4">Nuestras Sedes</h4>
            <ul className="space-y-4 font-montserrat font-medium text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-light flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Sede Malasaña</strong>
                  Calle de la Palma, 45<br />
                  28004 Madrid
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-light flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Sede Retiro</strong>
                  Avenida de Menéndez Pelayo, 11<br />
                  28009 Madrid
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-bold text-brand-yellow uppercase tracking-wider text-sm mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 font-montserrat font-medium text-sm">
              <li><a href="#clases" className="hover:text-teal-light transition-colors">Clases de Meditación</a></li>
              <li><a href="#retiros" className="hover:text-teal-light transition-colors">Retiros</a></li>
              <li><a href="#filosofia" className="hover:text-teal-light transition-colors">Filosofía Budista</a></li>
              <li><a href="#miembros" className="hover:text-brand-yellow transition-colors">Acceso Miembros</a></li>
              <li><a href="#contacto" className="hover:text-teal-light transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div>
            <h4 className="font-bold text-brand-yellow uppercase tracking-wider text-sm mb-4">Boletín</h4>
            <p className="font-montserrat font-medium text-sm mb-4">Recibe inspiración y noticias sobre próximos eventos.</p>
            <form className="flex mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-white/10 border border-white/20 text-white px-3 py-2 w-full rounded-l-sm focus:outline-none focus:border-teal-light font-montserrat text-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-teal-medium hover:bg-teal-dark text-white px-4 py-2 rounded-r-sm transition-colors"
                aria-label="Suscribirse"
              >
                <Mail size={18} />
              </button>
            </form>
            
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-medium transition-colors" aria-label="Instagram">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-medium transition-colors" aria-label="Facebook">
                <Facebook size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-medium transition-colors" aria-label="YouTube">
                <Youtube size={16} className="text-white" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-montserrat font-medium text-xs text-white/50">
          <p>© {new Date().getFullYear()} Medita en Madrid. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
