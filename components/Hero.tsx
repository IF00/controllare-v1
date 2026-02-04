
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background radial para profundidade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 border border-white/10 bg-white/5 rounded-full animate-fade-in">
          <span className="text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase">
            Especialista em Regulação de Sinistros
          </span>
        </div>
        
        <h1 className="text-5xl md:text-[120px] font-black leading-[0.9] tracking-tighter mb-10 text-gradient uppercase">
          LOGÍSTICA sob<br />
          <span className="italic font-light opacity-50">Controle.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Proteção técnica estratégica para o transporte de cargas. Unindo perícia de campo à gestão de alta performance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all rounded-sm shadow-xl shadow-blue-900/20">
            Falar com Lucas Mattos
          </a>
          <a href="#services" className="w-full sm:w-auto border border-white/10 text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm">
            Nossas Soluções
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
