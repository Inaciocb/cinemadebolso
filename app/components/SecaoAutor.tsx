import Image from "next/image";
import { History, Award, Clapperboard, Star } from "lucide-react";
import { CORES } from "../constantes";

export function SecaoAutor() {
  return (
    <section className="py-32 px-6 relative overflow-hidden isolate" style={{ backgroundColor: CORES.bgCard }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/foto1.jpeg" 
                alt="Bruno Camargo Buemo" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-black uppercase italic tracking-tighter text-white">Bruno Camargo Buemo</p>
                <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: CORES.accent }}>Fundador do Cinema de Bolso</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
                Sobre <span style={{ color: CORES.accent }}>quem vai</span> <br/> te ensinar
              </h2>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-zinc-300">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 mt-1">
                  <History size={24} style={{ color: CORES.accent }} />
                </div>
                <p>
                  Trabalho com audiovisual há mais de <span className="text-white font-bold">9 anos</span> e edito vídeos há mais de <span className="text-white font-bold">14 anos</span>.
                </p>
              </div>

              <p className="opacity-70 text-base md:text-lg">
                Ao longo desse tempo, trabalhei com vídeo de forma profissional em diferentes contextos do mercado (marketing, eventos, cinema, música, youtube), além de já ter produzido curtas-metragem e recebido prêmios em festivais internacionais.
              </p>

              <div className="relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 ">
                <p className="text-xl md:text-2xl font-light leading-snug">
                  Este curso nasceu de uma ideia simples: traduzir fundamentos reais do audiovisual para uma linguagem <span className="text-white font-bold">prática, rápida e acessível</span> para qualquer um gravar com o celular e registrar a vida!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {[
                  { icon: <Star size={16} />, text: "Sem complicar o que é claro" },
                  { icon: <Clapperboard size={16} />, text: "Sem firula" },
                  { icon: <Award size={16} />, text: "Sem mistério técnico" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 opacity-50">
                    <div style={{ color: CORES.accent }}>{item.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}