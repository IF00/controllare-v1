
import React, { useState } from 'react';
import AboutModal from './AboutModal';

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-40 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-2xl blur-2xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
            <div className="relative aspect-[4/5] bg-slate-900 rounded-lg overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Lucas Mattos" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-transparent">
                <span className="text-blue-500 font-black text-xs uppercase tracking-widest mb-2 block">Diretor Técnico</span>
                <h4 className="text-3xl font-black uppercase tracking-tighter">Lucas Mattos</h4>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-blue-500 font-black tracking-widest uppercase text-[10px] mb-4">A Autoridade</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                Técnica apurada no <br/><span className="text-slate-500 underline decoration-blue-600 underline-offset-8">front operacional.</span>
              </h3>
              <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
                <p>
                  Com mais de uma década de experiência na regulação de sinistros para as maiores seguradoras do país, Lucas Mattos fundou a Controllare para preencher a lacuna técnica que existia entre o evento e a indenização.
                </p>
                <p>
                  Nossa filosofia é simples: a verdade do sinistro está na pista. Por isso, aliamos a rapidez da resposta imediata com o rigor técnico de comissários de avarias.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-12 border-y border-white/5 py-10">
               <div>
                  <span className="block text-4xl font-black text-white">12+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Anos no Ramo</span>
               </div>
               <div className="w-px h-12 bg-white/10 hidden md:block"></div>
               <div>
                  <span className="block text-4xl font-black text-white">15k+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Processos Regulados</span>
               </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black px-12 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all rounded-sm"
            >
              Conhecer Trajetória
            </button>
          </div>
        </div>
      </div>
      <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default About;
