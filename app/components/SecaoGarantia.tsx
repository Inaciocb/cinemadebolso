import { ShieldCheck, Calendar } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoGarantia() {
  return (
    <section className="py-32 px-6 relative overflow-hidden isolate" style={{ backgroundColor: CORES.bgCard }}>
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(to bottom, ${CORES.bgDeep}, transparent)` }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/12 blur-[200px] rounded-full -z-10" />
            <div className="p-6 rounded-full bg-white/5 border border-white/10 mb-8 inline-block">
              <ShieldCheck size={64} style={{ color: CORES.accent }} />
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
              Garantia de <br/> <span style={{ color: CORES.accent }}>15 dias</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-zinc-300">
            <p className="font-bold text-white text-2xl md:text-3xl max-w-2xl mx-auto">
              Você pode entrar, conhecer a proposta do curso e ver se ele faz sentido para você agora.
            </p>

            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 space-y-6">
              <p>
                Se perceber que não é o que esperava, pode pedir o reembolso dentro do prazo de <span className="text-white font-bold">15 dias</span>, direto pela plataforma.
              </p>
              <div className="flex items-center justify-center gap-3 py-2 px-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 w-fit mx-auto">
                <Calendar size={18} style={{ color: CORES.accent }} />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest" style={{ color: CORES.accent }}>
                  O obrigatório são 7 dias, estou te dando 8 dias a mais
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 max-w-xl mx-auto">
              <p className="text-[10px] md:text-xs leading-relaxed opacity-40 uppercase tracking-widest text-center">
                *As aulas finais são liberadas após esse período para proteção contra mau uso do sistema de reembolsos, garantindo que você assista a maior parte do conteúdo antes de decidir.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}