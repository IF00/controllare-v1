
import React, { useState } from 'react';

const faqData = [
  {
    category: 'Sinistros',
    question: 'O que fazer no momento exato de um acidente?',
    answer: 'A prioridade é a preservação da carga e a segurança do motorista. Acione imediatamente nosso plantão 24h. Nossa equipe orientará sobre a documentação fotográfica necessária e, se preciso, enviará um perito ao local para garantir que a "janela" de evidências não seja perdida antes da remoção do veículo.'
  },
  {
    category: 'Legislação',
    question: 'Qual a diferença crucial entre RCTR-C e RCF-DC?',
    answer: 'O RCTR-C é o seguro obrigatório contra acidentes (tombamento, colisão, incêndio). Já o RCF-DC é facultativo e cobre o desaparecimento da carga (roubo e desvio). Operar apenas com o obrigatório deixa a transportadora vulnerável a um dos maiores riscos do Brasil: o roubo de carga.'
  },
  {
    category: 'Gerenciamento de Risco',
    question: 'Como o PGR (Plano de Gerenciamento de Risco) afeta minha indenização?',
    answer: 'O PGR é um contrato de obrigações. Se as regras de rastreamento, paradas em postos homologados ou horários de rodagem não forem seguidas, a seguradora pode declinar a indenização por descumprimento de cláusula. Nossa gestão audita esses processos para garantir conformidade total.'
  },
  {
    category: 'Regulação',
    question: 'O que é a "Janela de Operação" que a Controllare tanto menciona?',
    answer: 'É o curto espaço de tempo entre o sinistro e o início da regulação. Decisões tomadas nesse período (como a forma de transbordo da carga) definem se haverá salvados aproveitáveis ou perda total. Atuar nessa janela reduz drasticamente o prejuízo final.'
  }
];

const FAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Base de Conhecimento</h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-none mb-10">
              Dúvidas <br/>
              <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Técnicas.</span>
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed max-w-md mb-12">
              Compilamos as orientações fundamentais baseadas em nossa experiência de campo para ajudar gestores de logística a evitarem falhas na regulação de sinistros.
            </p>
            
            <div className="bg-white/5 p-8 border border-white/10">
               <h4 className="text-xs font-black uppercase tracking-widest mb-4">Precisa de uma análise específica?</h4>
               <p className="text-xs text-slate-500 mb-8 leading-relaxed">Nossa equipe técnica realiza auditorias completas de PGR e apólices existentes.</p>
               <a href="#contact" className="text-[10px] font-black uppercase tracking-widest border-b border-white pb-1 hover:text-slate-400 hover:border-slate-400 transition-all">
                 Falar com consultor técnico
               </a>
            </div>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <div 
                key={idx} 
                className={`border-b border-white/10 transition-all duration-500 ${activeIdx === idx ? 'bg-white/5 p-8' : 'p-8 hover:bg-white/5'}`}
              >
                <button 
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-2">{item.category}</span>
                    <span className="text-lg font-bold uppercase tracking-tight group-hover:text-slate-300 transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${activeIdx === idx ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeIdx === idx && (
                  <div className="mt-6 text-slate-400 text-sm leading-relaxed font-medium animate-in slide-in-from-top-4 duration-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
