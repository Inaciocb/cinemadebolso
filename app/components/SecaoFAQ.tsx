"use client";
import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Preciso ter um celular específico?",
      a: "Não. O curso foi pensado justamente para mostrar como extrair mais do celular que você já tem."
    },
    {
      q: "Serve para iniciantes?",
      a: "Sim. O conteúdo foi estruturado para quem está começando ou ainda sente que grava sem entender exatamente o que está fazendo."
    },
    {
      q: "O curso é muito técnico?",
      a: "Ele tem base técnica, mas a linguagem é simples e direta. A proposta é ensinar com clareza, não complicar."
    },
    {
      q: "Vou aprender edição também?",
      a: "Sim. Há um módulo bônus de edição para complementar o processo."
    },
    {
      q: "As aulas são ao vivo?",
      a: "São gravadas, mas com abordagem prática."
    },
    {
      q: "Em quanto tempo vou ver diferença?",
      a: "Isso depende da sua prática, mas a ideia do curso é que você comece a enxergar e corrigir erros já nas primeiras aulas."
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden isolate" style={{ backgroundColor: CORES.bgDeep }}>
      <div className="max-w-3xl mx-auto relative z-10">
        
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
            Dúvidas <span style={{ color: CORES.accent }}>Frequentes</span>
          </h2>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-30">
            FAQ — Cinema de Bolso
          </p>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="group border-b border-white/10 transition-colors duration-200"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left transition-all"
              >
                <span className="text-lg md:text-xl font-bold uppercase tracking-tight text-white/90 pr-6">
                  {faq.q}
                </span>
                <div className="relative flex items-center justify-center shrink-0">
                  <Plus 
                    size={24} 
                    className={`transition-transform duration-200 ${activeIndex === idx ? "rotate-45" : "rotate-0"}`}
                    style={{ color: activeIndex === idx ? CORES.accent : "white" }}
                  />
                </div>
              </button>

              <div 
                className={`grid transition-all duration-200 ease-out ${activeIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="pb-8 text-zinc-400 text-lg md:text-xl font-normal leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé com link para suporte no WhatsApp */}
        <div className="mt-12 group">
          <a 
            href="https://wa.me/5555999540754" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-300"
          >
            <MessageCircle size={18} style={{ color: CORES.accent }} />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">
              Ainda tem alguma dúvida? <span className="underline decoration-yellow-500/50 underline-offset-4">Fale com o suporte no WhatsApp</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}