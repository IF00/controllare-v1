
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-black tracking-widest uppercase text-[10px] mb-4">Soluções Corporativas</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Gestão de <span className="text-slate-500">Riscos</span> & <br/>Seguros de Carga.
            </h3>
          </div>
          <p className="text-slate-500 text-sm max-w-xs font-medium">
            Abordagem técnica 360º para mitigar perdas e garantir a continuidade da sua operação logística.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Card Largo 1 */}
          <div className="md:col-span-4 bento-card p-10 flex flex-col justify-between min-h-[350px]">
            <div>
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20 text-blue-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-4">RCTR-C & RCF-DC</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Regulação completa de acidentes rodoviários, roubos e desvios de carga com foco em recuperação total de prejuízos.
              </p>
            </div>
            <a href="#contact" className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center">Saiba Mais <span className="ml-2">→</span></a>
          </div>

          {/* Card Alto */}
          <div className="md:col-span-2 bento-card p-10 flex flex-col justify-between bg-gradient-to-br from-blue-900/20 to-transparent">
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-4">Auditoria de PGR</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Análise crítica e implementação de planos de gerenciamento de risco de alta conformidade.
              </p>
            </div>
            <div className="pt-8 opacity-20 text-8xl font-black">PGR</div>
          </div>

          {/* Card Pequeno 1 */}
          <div className="md:col-span-2 bento-card p-10">
            <h4 className="text-lg font-black uppercase tracking-tight mb-4">Regulação 24h</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Pronta resposta técnica no local do evento para preservação de evidências.
            </p>
          </div>

          {/* Card Médio */}
          <div className="md:col-span-4 bento-card p-10 flex items-center gap-10">
             <div className="hidden sm:block w-32 h-32 bg-slate-800/50 rounded-full flex-shrink-0 border border-white/5"></div>
             <div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-4">Transporte Internacional</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Seguros para importação e exportação com assessoria aduaneira e técnica global.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
